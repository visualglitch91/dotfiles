import fs from "node:fs";
import { execSync } from "node:child_process";
import Mustache from "mustache";
import config from "../../config/niri/config";
//@ts-ignore
import designTokens from "../../.design-tokens.json";

Mustache.escape = (f: any) => f;
let displayCount = -1;

function getDisplayCount() {
  try {
    const res = execSync("niri msg --json outputs").toString();
    return Object.values(JSON.parse(res)).length;
  } catch (error) {
    console.error("Error getting display count:", error);
    return 0;
  }
}

async function generateNiriConfig() {
  fs.writeFileSync(
    "../../config/niri/config.kdl",
    Mustache.render(
      fs.readFileSync("./config.mustache.kdl", "utf-8"),
      config({ externalDisplayConnected: displayCount > 1, designTokens })
    ),
    "utf-8"
  );
}

(async () => {
  displayCount = await getDisplayCount();

  setInterval(() => {
    const nextDisplayCount = getDisplayCount();

    if (displayCount !== nextDisplayCount) {
      displayCount = nextDisplayCount;
      generateNiriConfig();
    }
  }, 5000);

  generateNiriConfig();
})();
