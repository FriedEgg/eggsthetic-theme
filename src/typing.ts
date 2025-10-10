export type Colors = Record<string, string>;
export interface Theme {
    bright: ThemeColors;
    comment: string;
    normal: ThemeColors;
    primary: ThemePrimaryColors;
}

export interface ThemeColors {
    black: string;
    blue: string;
    cyan: string;
    green: string;
    magenta: string;
    red: string;
    white: string;
    yellow: string;
}

export interface ThemePrimaryColors {
    background: string;
    foreground: string;
}

export interface TokenColor {
    name: string;
    scope: string | string[];
    settings: {
        fontStyle?: string;
        foreground?: string;
    };
}

export type TokenColors = TokenColor[];
