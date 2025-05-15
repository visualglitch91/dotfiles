import fs from "fs";
import Color from "color";

export function getEnvValueFromFile(file, key) {
  const content = fs.readFileSync(file, "utf8");
  const regex = new RegExp(`^\\s*${key}\\s*=\\s*(.*)$`, "m");
  const match = content.match(regex);
  if (!match) throw new Error(`Key not found: ${key}`);
  let value = match[1].trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  }
  return value;
}

export function generateColorVariants(baseColors) {
  const variants = {};

  for (const [name, hex] of Object.entries(baseColors)) {
    const base = Color(hex);
    variants[`${name}Lighter`] = base.lighten(0.3).hex();
    variants[`${name}Light`] = base.lighten(0.15).hex();
    variants[`${name}Dark`] = base.darken(0.15).hex();
    variants[`${name}Darker`] = base.darken(0.3).hex();
  }

  return variants;
}

export function lighten(color, amount) {
  return Color(color).lighten(amount).hex();
}

export function darken(color, amount) {
  return Color(color).darken(amount).hex();
}

export function saturate(color, amount) {
  return Color(color).saturate(amount).hex();
}

export function desaturate(color, amount) {
  return Color(color).desaturate(amount).hex();
}

export function fade(color, amount) {
  return Color(color).fade(amount).hex();
}

export function lessVarsToCSS(less) {
  const lines = [":root {"];
  const originalLines = less.trim().split("\n");

  for (const line of originalLines) {
    const [key, value] = line.replace(";", "").split(": ");
    const cssVar = key.replace(/^@/, "--visualglitch91_").replace(/_/g, "-");
    lines.push(`  ${cssVar}: ${value};`);
  }

  lines.push("}");

  return lines.join("\n");
}
