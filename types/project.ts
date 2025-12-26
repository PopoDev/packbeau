/**
 * Generated project structure
 * Represents AI-generated code in a modular format
 */
export interface GeneratedProject {
  /** Component name -> React TSX code */
  components: Record<string, string>;
  /** globals.css content with CSS variables */
  style: string;
  /** App.tsx main entry point */
  app: string;
}

/**
 * Design token extracted from CSS variables
 */
export interface DesignToken {
  name: string;
  value: string;
  cssVar: string;
}

/**
 * Color token with parsed oklch values
 */
export interface ColorToken extends DesignToken {
  type: 'color';
}

/**
 * Typography token
 */
export interface TypographyToken extends DesignToken {
  type: 'typography';
}

/**
 * Spacing/radius token
 */
export interface SpacingToken extends DesignToken {
  type: 'spacing';
}

export type Token = ColorToken | TypographyToken | SpacingToken;

