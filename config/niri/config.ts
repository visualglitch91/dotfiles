export default function config({
  externalDisplayConnected,
  designTokens,
}: {
  externalDisplayConnected: boolean;
  designTokens: any;
}) {
  return {
    external_display_connected: externalDisplayConnected,
    color_scheme: designTokens.apps.niri.colorScheme,
    gtk_theme: designTokens.apps.niri.gtkTheme,

    icon_theme: designTokens.apps.niri.iconTheme,
    keyboard_layout: "us(alt-intl),br",
    cursor_theme: designTokens.apps.niri.cursorTheme,
    cursor_size: designTokens.apps.niri.cursorSize,
    layout_gaps: designTokens.apps.niri.layoutGaps,
    layout_focus_ring_width: designTokens.apps.niri.layoutFocusRingWidth,
    layout_focus_ring_color_start:
      designTokens.apps.niri.layoutFocusRingColorStart,
    layout_focus_ring_color_end: designTokens.apps.niri.layoutFocusRingColorEnd,
    window_corner_radius: designTokens.apps.niri.windowCornerRadius,
    environment: [],
    startup: [
      "xwayland-satellite",
      "~/.visualglitch91/scripts/customizations",
      "~/.visualglitch91/config/startup",
    ],
    output_scale: [
      ["Virtual-1", 1.8],
      ["LG Electronics LG ULTRAFINE 406AZXC9Y186", 1.5],
    ],
    binds: [
      ["Mod+E", 'spawn "nautilus"'],
      ["Mod+D", 'spawn "ulauncher-toggle"'],
      ["Mod+period", 'spawn "flatpak" "run" "com.tomjwatson.Emote"'],
      ["Mod+T", 'spawn "ghostty"'],
      ["Mod+B", 'spawn "~/.visualglitch91/scripts/open-default-browser"'],
      ["Mod+Alt+Backspace", "screenshot"],
      ["Mod+Shift+Backspace", "screenshot-screen"],
      ["Alt+Tab", 'spawn "~/.visualglitch91/scripts/window-switcher"'],
      ["Mod+C", 'spawn "~/.visualglitch91/scripts/type" "ç"'],
      ["Mod+Shift+C", 'spawn "~/.visualglitch91/scripts/type" "Ç"'],
      ["Mod+L", 'switch-layout "next"'],
      [
        "XF86AudioRaiseVolume",
        'spawn "wpctl" "set-volume" "@DEFAULT_AUDIO_SINK@" "0.1+"',
      ],
      [
        "XF86AudioLowerVolume",
        'spawn "wpctl" "set-volume" "@DEFAULT_AUDIO_SINK@" "0.1-"',
      ],
      [
        "XF86AudioMute",
        'spawn "wpctl" "set-mute" "@DEFAULT_AUDIO_SINK@" "toggle"',
      ],
      [
        "XF86AudioMicMute",
        'spawn "wpctl" "set-mute" "@DEFAULT_AUDIO_SOURCE@" "toggle"',
      ],
      ["Mod+F11", 'spawn "brightnessctl" "set" "5%-"'],
      ["Mod+F12", 'spawn "brightnessctl" "set" "+5%"'],
      ["Mod+Shift+W", "close-window"],
      ["Mod+Left", "focus-column-left"],
      ["Mod+Down", "focus-window-down"],
      ["Mod+Up", "focus-window-up"],
      ["Mod+Right", "focus-column-right"],
      ["Mod+Alt+Left", "move-column-left"],
      ["Mod+Alt+Down", "move-window-down"],
      ["Mod+Alt+Up", "move-window-up"],
      ["Mod+Alt+Right", "move-column-right"],
      ["Mod+K", "focus-workspace-up"],
      ["Mod+M", "focus-workspace-down"],
      ["Mod+Ctrl+Page_Up", "focus-workspace-up"],
      ["Mod+Ctrl+Page_Down", "focus-workspace-down"],
      ["Mod+Alt+K", "move-window-to-workspace-up"],
      ["Mod+Alt+M", "move-window-to-workspace-down"],
      ["Mod+Ctrl+Alt+Page_Up", "move-window-to-workspace-up"],
      ["Mod+Ctrl+Alt+Page_Down", "move-window-to-workspace-down"],
      ["Ctrl+Alt+Shift+P", "toggle-overview"],
      ["Mod+Q", "consume-or-expel-window-left"],
      ["Mod+Shift+Q", "consume-or-expel-window-right"],
      ["Mod+F", "maximize-column"],
      ["Mod+Alt+F", "expand-column-to-available-width"],
      ["Mod+Shift+F", "fullscreen-window"],
      ["Mod+V", "center-column"],
      ["Mod+R", "switch-preset-column-width"],
      ["Mod+Minus", 'set-column-width "-5%"'],
      ["Mod+Equal", 'set-column-width "+5%"'],
      ["Mod+O", 'set-window-width "-5%"'],
      ["Mod+P", 'set-window-width "+5%"'],
      ["Mod+9", 'set-window-height "-5%"'],
      ["Mod+0", 'set-window-height "+5%"'],
      ["Mod+Alt+O", 'set-window-height "-5%"'],
      ["Mod+Alt+P", 'set-window-height "+5%"'],
      ["Mod+Alt+0", 'set-window-height "100%"'],
      ["Mod+Alt+9", 'set-window-height "100%"'],
    ],
    window_rules: [
      `
        match app-id="kitty"
        match app-id="com.mitchellh.ghostty"
        default-column-width { proportion 0.5; }
    `,
      `
        match app-id="code"
        match app-id="vivaldi-snapshot"
        default-column-width { proportion 0.9; }
    `,
      `
        match app-id="vivaldi-snapshot" title=r#"Developer Tools - Vivaldi -*"#
        default-column-width { proportion 0.4; }
    `,
      `
        match app-id=r#"^vivaldi-gomuks\.[^_]+__-Default$"#
        default-column-width { proportion 0.40; }
    `,
      `
        match app-id=r#"^vivaldi-app\.slack\.com__client_.*-Default$"#
        default-column-width { proportion 0.60; }
    `,
      `
        match app-id="page.codeberg.libre_menu_editor.LibreMenuEditor"
        max-width 800
    `,
      `
        match app-id="balenaEtcher"
        open-floating false
    `,
      `
        match title="Picture in picture" app-id=""
        open-floating true
        opacity 1.0
        default-column-width { fixed 480; }
        default-window-height { fixed 270; }
    `,
      `
      match app-id="code" is-focused=true
      opacity 0.975
    `,
    ],
  };
}
