// Rewrites the advisory table in README.md (between the table markers) from advisories/*.json.
//   npm run table
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const NAMES = {
  anthropic: "Anthropic", github: "GitHub", google: "Google", "google-gemini": "Gemini", hubspot: "HubSpot",
  "meta-graph": "Meta", openai: "OpenAI", quickbooks: "QuickBooks", reddit: "Reddit", salesforce: "Salesforce",
  shopify: "Shopify", slack: "Slack", stripe: "Stripe", twilio: "Twilio", x: "X", xero: "Xero",
};

const dir = path.join(root, "advisories");
const advisories = readdirSync(dir)
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(path.join(dir, f), "utf8")))
  .sort((a, b) => a.effectiveDate.localeCompare(b.effectiveDate) || a.id.localeCompare(b.id));

const cell = (s) => s.replace(/\|/g, "\\|");
const rows = advisories.map(
  (a) => `| ${a.effectiveDate} | ${NAMES[a.provider] ?? a.provider} | [${cell(a.title)}](advisories/${a.id}.json) | ${a.severity} | ${a.status} |`,
);
const table = ["| Effective | Provider | What changed | Severity | Status |", "|---|---|---|---|---|", ...rows].join("\n");

const START = "<!-- advisories:start -->";
const END = "<!-- advisories:end -->";
const file = path.join(root, "README.md");
const readme = readFileSync(file, "utf8");
const from = readme.indexOf(START);
const to = readme.indexOf(END);
if (from < 0 || to < from) throw new Error(`README.md needs ${START} and ${END} around the table`);
writeFileSync(file, `${readme.slice(0, from + START.length)}\n${table}\n${readme.slice(to)}`);
console.log(`table: ${advisories.length} advisories`);
