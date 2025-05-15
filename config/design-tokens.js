import {
  darken,
  desaturate,
  generateColorVariants,
  getEnvValueFromFile,
} from "../utils/utils";

const getEnvVar = (key) => getEnvValueFromFile(`${__dirname}/../env`, key);

const baseColors = {
  background: "#282a36",
  text: "#f8f8f2",
  primary: "#a4ffff",
  secondary: "#69ff94",
  accent: "#e06c75",
};

const colors = {
  ...baseColors,
  ...generateColorVariants(baseColors),
};

const fonts = {
  fontFamily: getEnvVar("FONT_FAMILY"),
  fontFamilyMono: getEnvVar("FONT_FAMILY_MONO"),
};

const designTokens = {
  ...fonts,
  colors,
  apps: {
    niri: {
      colorScheme: getEnvVar("COLOR_SCHEME"),
      gtkTheme: getEnvVar("GTK_THEME"),
      iconTheme: getEnvVar("ICON_THEME"),
      cursorTheme: getEnvVar("CURSOR_THEME"),
      cursorSize: 24,
      layoutGaps: 16,
      layoutFocusRingWidth: 2,
      layoutFocusRingColorStart: colors.primary,
      layoutFocusRingColorEnd: colors.secondary,
      windowCornerRadius: 0,
    },
    ulauncher: {
      fontFamily: fonts.fontFamilyMono,
      borderRadius: 0,
      borderWidth: 2,
    },
    vivaldi: {
      background: colors.backgroundDarker,
      accent: colors.accent,
      highlight: darken(desaturate(colors.primary, 0.8), 0.4),
    },
    mako: {
      fontSize: 13,
      borderSize: 2,
      borderRadius: 0,
    },
    waybar: {
      fontSize: 13,
      laptopFontSize: 14,
    },
    kitty: {
      fontSize: 12,
      backgroundOpacity: 0.9,
    },
  },
};

export default designTokens;
