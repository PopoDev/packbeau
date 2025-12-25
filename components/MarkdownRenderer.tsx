'use client';

import { memo, useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Configure marked with custom renderer using the extension API
marked.use({
  breaks: true,      // GitHub-style line breaks
  gfm: true,         // GitHub Flavored Markdown
  async: false,      // Synchronous parsing for streaming
  renderer: {
    // Disable code blocks - return plain text instead
    code(token) {
      return `<p>${token.text}</p>`;
    },

    // Disable inline code - return plain text
    codespan(token) {
      return token.text;
    },

    // Style links with Tailwind classes
    link(token) {
      const titleAttr = token.title ? ` title="${token.title}"` : '';
      return `<a href="${token.href}"${titleAttr} class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">${token.text}</a>`;
    },

    // Style lists with proper spacing
    list(token) {
      const tag = token.ordered ? 'ol' : 'ul';
      const listClass = token.ordered
        ? 'list-decimal list-inside space-y-1 my-2'
        : 'list-disc list-inside space-y-1 my-2';
      // Render list items
      const body = token.items.map(item => this.listitem!(item)).join('');
      return `<${tag} class="${listClass}">${body}</${tag}>`;
    },

    // Style list items
    listitem(token) {
      let text = '';
      if (token.tokens) {
        text = this.parser!.parseInline(token.tokens);
      } else {
        text = token.text;
      }
      return `<li class="ml-2">${text}</li>`;
    },

    // Style paragraphs with proper spacing
    paragraph(token) {
      return `<p class="mb-2 last:mb-0">${this.parser!.parseInline(token.tokens)}</p>`;
    },

    // Style bold text
    strong(token) {
      return `<strong class="font-semibold">${this.parser!.parseInline(token.tokens)}</strong>`;
    },

    // Style italic text
    em(token) {
      return `<em class="italic">${this.parser!.parseInline(token.tokens)}</em>`;
    },

    // Handle line breaks
    br() {
      return '<br />';
    },

    // Style headings (minimal styling for chat context)
    heading(token) {
      const sizeClass = token.depth <= 2 ? 'text-base font-semibold' : 'text-sm font-medium';
      return `<p class="${sizeClass} mb-2">${this.parser!.parseInline(token.tokens)}</p>`;
    },
  },
});

// Parse markdown content safely
function parseMarkdown(content: string): string {
  if (!content) return '';

  try {
    // Parse with custom renderer
    const parsed = marked.parse(content) as string;

    // Sanitize to prevent XSS
    const sanitized = DOMPurify.sanitize(parsed, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'span'],
      ALLOWED_ATTR: ['href', 'title', 'class', 'target', 'rel'],
    });

    return sanitized;
  } catch {
    // Fallback to plain text if parsing fails
    return content;
  }
}

function MarkdownRendererComponent({ content, className = '' }: MarkdownRendererProps) {
  // Memoize the parsed content to avoid re-parsing on every render
  const htmlContent = useMemo(() => parseMarkdown(content), [content]);

  return (
    <div
      className={`markdown-content ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}

// Memoize the entire component to prevent unnecessary re-renders
export const MarkdownRenderer = memo(MarkdownRendererComponent);
