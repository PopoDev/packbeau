import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CodePreviewProps {
  code: string;
}

type TabType = 'code' | 'preview';

export function CodePreview({ code }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('preview');

  return (
    <div className="flex h-full flex-col bg-card rounded-lg border border-border overflow-hidden">
      <div className="flex items-center gap-1 border-b border-border px-4 py-2">
        <button
          onClick={() => setActiveTab('code')}
          className={cn(
            'px-4 py-1.5 text-sm rounded-md transition-colors',
            activeTab === 'code'
              ? 'bg-accent text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          Code
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={cn(
            'px-4 py-1.5 text-sm rounded-md transition-colors',
            activeTab === 'preview'
              ? 'bg-accent text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          Preview
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        {activeTab === 'code' ? (
          <pre className="p-4 text-sm text-muted-foreground font-mono leading-relaxed">
            <code>{code || 'No code generated yet...'}</code>
          </pre>
        ) : (
          <div className="h-full bg-background">
            {code ? (
              <iframe
                srcDoc={`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <script src="https://cdn.tailwindcss.com"></script>
                      <style>body { margin: 0; }</style>
                    </head>
                    <body>
                      <div id="root"></div>
                      <script type="module">
                        import React from 'https://esm.sh/react@18';
                        import ReactDOM from 'https://esm.sh/react-dom@18/client';
                        
                        const Portfolio = () => {
                          return React.createElement('div', { className: 'min-h-screen bg-white' },
                            React.createElement('header', { className: 'flex items-center justify-between px-8 py-6' },
                              React.createElement('h1', { className: 'text-2xl font-semibold text-gray-900' }, 'Sarah Chen'),
                              React.createElement('nav', { className: 'flex gap-8' },
                                React.createElement('a', { href: '#work', className: 'text-gray-600 hover:text-gray-900' }, 'Work'),
                                React.createElement('a', { href: '#about', className: 'text-gray-600 hover:text-gray-900' }, 'About'),
                                React.createElement('a', { href: '#contact', className: 'text-gray-600 hover:text-gray-900' }, 'Contact')
                              )
                            ),
                            React.createElement('main', { className: 'flex flex-col items-center justify-center px-8 py-24' },
                              React.createElement('div', { className: 'w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 mb-8 flex items-center justify-center text-white text-3xl font-bold' }, 'SC'),
                              React.createElement('h2', { className: 'text-5xl font-bold text-gray-900 mb-4' }, 'UI/UX Designer'),
                              React.createElement('p', { className: 'text-xl text-gray-600 text-center max-w-2xl mb-8' }, 
                                'I craft meaningful digital experiences that connect people with technology through thoughtful design and user-centered solutions.'
                              ),
                              React.createElement('button', { className: 'px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors' }, 'View My Work')
                            )
                          );
                        };
                        
                        ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Portfolio));
                      </script>
                    </body>
                  </html>
                `}
                className="h-full w-full border-0"
                title="Preview"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Preview will appear here after generation...
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
