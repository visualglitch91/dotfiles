const { join } = require("path");

const apps = [
  "niri-config",
  "ulauncher",
  "swaybg",
  "swww",
  "waybar",
  "mako",
  "swayidle",
];

module.exports = {
  apps: apps.map((name) => ({
    name: `visualglitch-os--${name}`,
    script: "/usr/bin/npm",
    args: ["start"],
    cwd: join(__dirname, name),
  })),
};
