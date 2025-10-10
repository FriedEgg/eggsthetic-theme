import { writeFile } from "fs";

import { colors, tokenColors } from "./theme";
import {
    ayuDark
} from "./themes/ayu";
import {
    bloodMoon
} from "./themes/blood_moon";
import {
    campbell
} from "./themes/campbell";
import {
    chicago95
} from "./themes/chicago95";
import {
    hyper
} from "./themes/hyper";
import {
    moonfly
} from "./themes/moonfly";
import {
    styrokai
} from "./themes/styrokai";
import {
    tomorrowNightBright
} from "./themes/tomorrow"
import { Theme } from "./typing";

async function makeTheme(
    name: string,
    theme: Theme,
): Promise<void> {
    const themeTemplate = {
        $schema: "vscode://schemas/color-theme",
        colors: colors(theme),
        comment: theme.comment,
        name: `Eggsthetic Theme ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
        semanticHighlighting: true,
        tokenColors: tokenColors(theme),
    }

    writeFile(
        `themes/eggsthetic-theme-${name}.json`,
        JSON.stringify(themeTemplate),
        (err) => {
            if (err) console.log("error", err);
        }
    );
}

makeTheme("ayuDark", ayuDark);
makeTheme("bloodMoon", bloodMoon);
makeTheme("campbell", campbell);
makeTheme("chicago95", chicago95);
makeTheme("hyper", hyper);
makeTheme("moonfly", moonfly);
makeTheme("styrokai", styrokai);
makeTheme("tomorrowNightBright", tomorrowNightBright);
