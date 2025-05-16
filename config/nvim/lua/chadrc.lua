-- This file needs to have same structure as nvconfig.lua
-- https://github.com/NvChad/ui/blob/v3.0/lua/nvconfig.lua
-- Please read that file to know all available options :(

---@type ChadrcConfig
local M = {}

M.base46 = {
  theme = "catppuccin",
  transparency = true,
  changed_themes = {
    catppuccin = {
      
      base_30 = {
        grey = "#B3B2C0",
        grey_fg = "#BEBED0",
        grey_fg2 = "#CACAD6",
        light_grey = "#E6E6F0",
        line = "#B0AFBF",
        one_bg2 = "#505050",
      },
      base_16 = {
        base03 = "#D6D6E0",
        base04 = "#E0E0EB",
      },
    },
  },
  -- hl_override = {
  -- 	Comment = { italic = true },
  -- 	["@comment"] = { italic = true },
  -- },
}

-- M.nvdash = { load_on_startup = true }
-- M.ui = {
--       tabufline = {
--          lazyload = false
--      }
--}

return M
