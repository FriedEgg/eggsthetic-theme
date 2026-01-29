import { colord as c, extend } from "colord"
import a11yPlugin from "colord/plugins/a11y";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin, a11yPlugin]);

import { Theme, TokenColor, TokenColors } from "./typing"

export function colors(
    theme: Theme,
): Record<string, string> {
    // Ensure critical UI elements meet WCAG AAA contrast ratios
    const badgeColors = ensureContrast(theme.normal.blue, theme.primary.foreground, 7);
    const buttonColors = ensureContrast(theme.primary.foreground, theme.normal.blue, 7);
    const listFocusColors = ensureContrast(theme.bright.black, theme.bright.white, 4.5);
    const listHoverColors = ensureContrast(theme.bright.black, theme.bright.white, 4.5);
    const listHighlightColors = ensureContrast(theme.normal.blue, theme.primary.background, 7);
    const lineNumberColors = ensureContrast(theme.bright.white, theme.primary.background, 3);
    const indentGuideActive = ensureContrast(theme.normal.white, theme.primary.background, 3);
    const indentGuideInactive = ensureContrast(theme.bright.white, theme.primary.background, 3);
    const dropdownBorderContrast = ensureContrast(
        c(theme.primary.background).lighten(0.2).toHex(),
        theme.primary.background,
        3
    );
    
    return {
        "activityBar.background": theme.primary.background,
        "activityBar.foreground": theme.primary.foreground,
        "activityBarBadge.background": theme.primary.background,
        "activityBarBadge.foreground": theme.primary.foreground,

		"badge.background": badgeColors.background,
		"badge.foreground": badgeColors.foreground,

		"button.background": buttonColors.background,
		"button.foreground": buttonColors.foreground,
		"button.hoverBackground": c(buttonColors.background).alpha(0.75).toHex(),

        "debugExceptionWidget.background": theme.normal.yellow,
        "debugExceptionWidget.border": c(theme.normal.yellow).darken(0.2).toHex(),

        "debugToolBar.background": theme.primary.foreground,

        "descriptionForeground": theme.primary.foreground,

        "dropdown.background": theme.primary.background,
        "dropdown.border": dropdownBorderContrast.foreground,
        "dropdown.foreground": theme.primary.foreground,
        "dropdown.listBackground": theme.primary.background,

        "editor.background": theme.primary.background,
        "editor.findMatchBackground": c(theme.normal.yellow).alpha(0.75).toHex(),
        "editor.findMatchBorder": c(theme.normal.yellow).darken(0.2).toHex(),
        "editor.findMatchHighlightBackground": c(theme.normal.blue).alpha(0.6).toHex(),
        "editor.foreground": theme.primary.foreground,
        "editor.hoverHighlightBackground": c(theme.normal.white).alpha(0.6).toHex(),
        "editor.lineHighlightBackground": theme.normal.black,
        "editor.lineHighlightBorder": theme.normal.black,
        "editor.rangeHighlightBackground": c(theme.normal.magenta).alpha(0.6).toHex(),
        "editor.selectionBackground": c(theme.normal.blue).alpha(0.6).toHex(),
        "editor.selectionHighlightBackground": c(theme.normal.blue).alpha(0.6).toHex(),
        "editor.wordHighlightBackground": c(theme.normal.cyan).alpha(0.75).toHex(),
        "editor.wordHighlightStrongBackground": c(theme.bright.cyan).alpha(0.7).toHex(),
        "editorBracketMatch.background": c(theme.normal.blue).alpha(0.6).toHex(),
        "editorBracketMatch.border": c(theme.normal.blue).darken(0.2).toHex(),
        "editorCodeLens.foreground": theme.primary.foreground,
        "editorCursor.foreground": theme.primary.foreground,
        "editorError.foreground": theme.bright.red,
        "editorGroupHeader.noTabsBackground": theme.primary.background,
        "editorGroupHeader.tabsBackground": theme.primary.background,
        "editorGutter.addedBackground": theme.normal.green,
        "editorGutter.deletedBackground": theme.normal.red,
        "editorGutter.modifiedBackground": c(theme.normal.blue).alpha(0.6).toHex(),
        "editorHoverWidget.background": theme.primary.background,
        "editorHoverWidget.border": c(theme.normal.black).lighten(0.2).toHex(),
        "editorIndentGuide.activeBackground1": indentGuideActive.foreground,
        "editorIndentGuide.background1": indentGuideInactive.foreground,
        "editorLineNumber.foreground": lineNumberColors.foreground,
        "editorRuler.foreground": lineNumberColors.foreground,
        "editorWhitespace.foreground": theme.bright.yellow,
        "editorWidget.background": theme.primary.background,
        "editorWidget.border": c(theme.primary.background).lighten(0.2).toHex(),

        "errorForeground": theme.bright.red,

        "focusBorder": c(theme.primary.background).lighten(0.2).toHex(),

        "foreground": theme.primary.foreground,

        "gitDecoration.addedResourceForeground": theme.normal.green,
        "gitDecoration.conflictingResourceForeground": theme.normal.yellow,
        "gitDecoration.deletedResourceForeground": theme.normal.red,
        "gitDecoration.ignoredResourceForeground": c(theme.normal.red).mix(theme.normal.yellow, 0.5).toHex(),
        "gitDecoration.modifiedResourceForeground": theme.normal.yellow,
        "gitDecoration.submoduleResourceForeground": theme.normal.magenta,
        "gitDecoration.untrackedResourceForeground": theme.normal.cyan,

        "input.background": theme.primary.background,
        "input.border": theme.primary.foreground,

        "list.activeSelectionBackground": theme.bright.black,
        "list.activeSelectionForeground": theme.primary.foreground,
        "list.dropBackground": c(theme.primary.background).lighten(0.25).alpha(0.6).toHex(),
        "list.errorForeground": theme.bright.red,
        "list.focusBackground": listFocusColors.background,
        "list.focusForeground": listFocusColors.foreground,
        "list.highlightForeground": listHighlightColors.foreground,
        "list.hoverBackground": listHoverColors.background,
        "list.hoverForeground": listHoverColors.foreground,
        "list.inactiveFocusBackground": theme.normal.white,
        "list.inactiveSelectionBackground": c(theme.primary.background).lighten(0.25).toHex(),
        "list.inactiveSelectionForeground": theme.primary.foreground,
        "list.invalidItemForeground": theme.primary.foreground,
        "list.warningForeground": theme.bright.yellow,

        "ports.iconRunningProcessForeground": theme.normal.blue,

        "progressBar.background": theme.normal.white,

        "sideBar.background": theme.primary.background,
        "sideBar.foreground": theme.primary.foreground,
        "sideBarTitle.foreground": theme.primary.foreground,

        "statusBar.background": theme.primary.background,
        "statusBar.debuggingBackground": theme.normal.red,
        "statusBar.foreground": theme.primary.foreground,
        "statusBar.noFolderBackground": theme.primary.background,

        "tab.activeBackground": theme.primary.background,
        "tab.activeBorder": theme.bright.black,
        "tab.activeForeground": theme.primary.foreground,
        "tab.border": theme.primary.background,
        "tab.inactiveBackground": theme.primary.background,
        "tab.inactiveForeground": theme.primary.foreground,

        "terminal.ansiBlack": theme.primary.background,
        "terminal.ansiBlue": theme.normal.blue,
        "terminal.ansiBrightBlack": theme.bright.black,
        "terminal.ansiBrightBlue": theme.bright.blue,
        "terminal.ansiBrightCyan": theme.bright.cyan,
        "terminal.ansiBrightGreen": theme.bright.green,
		"terminal.ansiBrightMagenta": theme.bright.magenta,
		"terminal.ansiBrightRed": theme.bright.red,
		"terminal.ansiBrightWhite": theme.bright.white,
  		"terminal.ansiBrightYellow": theme.bright.yellow,
		"terminal.ansiCyan": theme.normal.cyan,
		"terminal.ansiGreen": theme.normal.green,
		"terminal.ansiMagenta": theme.normal.magenta,
		"terminal.ansiRed": theme.normal.red,
		"terminal.ansiWhite": theme.normal.white,
		"terminal.ansiYellow": theme.normal.yellow,
		"terminal.background": theme.primary.background,
		"terminal.foreground": theme.primary.foreground,

		"titleBar.activeBackground": theme.primary.background,
		"titleBar.activeForeground": theme.primary.foreground,
		"titleBar.border": theme.primary.background,
		"titleBar.inactiveBackground": theme.bright.black,
		"titleBar.inactiveForeground": theme.primary.foreground
    }
}

export function tokenColors(
    theme: Theme,
): TokenColors {
    const italic: TokenColor = {
        "name": "Italic",
        "scope": [
            "emphasis",
            "storage",
            "comment",
            "entity.other.attribute-name",
            "markup.italic",
            "keyword.control",
            "variable.language",
        ],
        "settings": {
            "fontStyle": "italic"
        }
    }

    const bold: TokenColor = {
        "name": "Bold",
        "scope": [
            "strong",
            "markup.bold",
            "markup.heading",
        ],
        "settings": {
            "fontStyle": "bold"
        }
    }

    const underline: TokenColor = {
        "name": "Underline",
        "scope": [
            "markup.underline",
        ],
        "settings": {
            "fontStyle": "underline"
        }
    }

    const black: TokenColor = {
        "name": "Black",
        "scope": [],
        "settings": {
            "foreground": theme.normal.black,
        }

    }

    const red: TokenColor = {
        "name": "Red",
        "scope": [
        ],
        "settings": {
            "foreground": theme.normal.red
        }
    }

    const green: TokenColor = {
        "name": "Green",
        "scope": [
            "entity.name.class",
            "entity.other.inherited-class",
            "entity.name.function",
            "entity.other.attribute-name"
        ],
        "settings": {
            "foreground": theme.normal.green
        }
    }

    const yellow: TokenColor = {
        "name": "Yellow",
        "scope": [
            "string",
        ],
        "settings": {
            "foreground": theme.normal.yellow
        }
    }

    const blue: TokenColor = {
        "name": "Blue",
        "scope": [
            "storage.type",
            "support.function",
            "support.type",
            "support.class",
        ],
        "settings": {
            "foreground": theme.normal.blue
        }
    }

    const magenta: TokenColor = {
        "name": "Magenta",
        "scope": [
            "keyword",
            "storage",
            "entity.name.tag",
        ],
        "settings": {
            "foreground": theme.normal.magenta
        }
    }

    const cyan: TokenColor = {
        "name": "Cyan",
        "scope": [
            "support.constant",
        ],
        "settings": {
            "foreground": theme.normal.cyan
        }
    }

    const white: TokenColor = {
        "name": "White",
        "scope": [
            "keyword.operator.class",
            "constant.other",
            "source.php.embedded.line",
        ],
        "settings": {
            "foreground": theme.normal.white
        }
    }

    const brightBlack: TokenColor = {
        "name": "Bright Black",
        "scope": [
            "comment",
        ],
        "settings": {
            "foreground": theme.bright.black
        }
    }

    const brightRed: TokenColor = {
        "name": "Bright Red",
        "scope": [
            "invalid",
        ],
        "settings": {
            "foreground": theme.bright.red
        }
    }

    const brightGreen: TokenColor = {
        "name": "Bright Green",
        "scope": [],
        "settings": {
            "foreground": theme.bright.green
        }
    }

    const brightYellow: TokenColor = {
        "name": "Bright Yellow",
        "scope": [
            "variable.parameter"
        ],
        "settings": {
            "foreground": theme.bright.yellow
        }
    }

    const brightBlue: TokenColor = {
        "name": "Bright Blue",
        "scope": [
        ],
        "settings": {
            "foreground": theme.bright.blue
        }
    }

    const brightMagenta: TokenColor = {
        "name": "Bright Magenta",
        "scope": [
            "constant.numeric",
            "constant.language",
            "constant.character",
            "constant.other",
        ],
        "settings": {
            "foreground": theme.bright.magenta
        }
    }

    const brightCyan: TokenColor = {
        "name": "Bright Cyan",
        "scope": [],
        "settings": {
            "foreground": theme.bright.cyan
        }
    }

    const brightWhite: TokenColor = {
        "name": "Bright White",
        "scope": [],
        "settings": {
            "foreground": theme.bright.white
        }
    }

    return [
        italic,
        bold,
        underline,
        black,
        red,
        green,
        yellow,
        blue,
        magenta,
        cyan,
        white,
        brightBlack,
        brightRed,
        brightGreen,
        brightYellow,
        brightBlue,
        brightMagenta,
        brightCyan,
        brightWhite
    ]
}

/**
 * Ensures two colors meet a minimum contrast ratio by adjusting both toward a middle ground.
 * Preserves hue while modifying lightness to achieve WCAG compliance.
 * 
 * @param foreground - The foreground color (text)
 * @param background - The background color
 * @param minRatio - Minimum contrast ratio (7:1 for AAA normal text, 4.5:1 for AA or large text, 3:1 for UI components)
 * @returns Object with adjusted background and foreground colors as hex strings
 */
function ensureContrast(
    foreground: string,
    background: string,
    minRatio: number = 7
): { background: string; foreground: string } {
    let fg = c(foreground);
    let bg = c(background);
    
    // Check current contrast
    let currentRatio = fg.contrast(bg);
    
    if (currentRatio >= minRatio) {
        // Already meets requirement
        return { background, foreground };
    }
    
    const bgLightness = bg.toHsl().l;
    
    let adjustedBg = bg;
    let adjustedFg = fg;
    
    for (let i = 0; i < 50; i++) {
        currentRatio = adjustedFg.contrast(adjustedBg);
        
        if (currentRatio >= minRatio) {
            break;
        }
        
        if (bgLightness < 20) {
            adjustedFg = c(adjustedFg).lighten(0.05);
            if (bgLightness > 0) {
                adjustedBg = c(adjustedBg).lighten(0.01);
            }
        } else if (bgLightness > 50) {
            adjustedFg = c(adjustedFg).darken(0.05);
            adjustedBg = c(adjustedBg).lighten(0.01);
        } else {
            adjustedFg = c(adjustedFg).lighten(0.03);
            adjustedBg = c(adjustedBg).darken(0.02);
        }
    }
    
    return {
        background: adjustedBg.toHex(),
        foreground: adjustedFg.toHex()
    };
}
