// Validates every advisory: the JSON Schema, plus the rules a schema cannot express.
//   npm run validate
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const schema = JSON.parse(readFileSync(path.join(root, "schema/advisory.schema.json"), "utf8"));
const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);

const dir = path.join(root, "advisories");
const errors = [];
const ids = new Map();
const files = readdirSync(dir).filter((f) => f.endsWith(".json")).sort();
for (const file of files) {
  const where = `advisories/${file}`;
  let advisory;
  try {
    advisory = JSON.parse(readFileSync(path.join(dir, file), "utf8"));
  } catch (err) {
    errors.push(`${where}: not valid JSON (${err.message})`);
    continue;
  }
  if (!validate(advisory)) {
    for (const e of validate.errors) errors.push(`${where}: ${e.instancePath || "/"} ${e.message}`);
    continue;
  }
  if (`${advisory.id}.json` !== file) errors.push(`${where}: file name must be "${advisory.id}.json"`);
  if (ids.has(advisory.id)) errors.push(`${where}: id "${advisory.id}" is also used by ${ids.get(advisory.id)}`);
  ids.set(advisory.id, where);
  if (advisory.firstObserved && advisory.firstObserved > advisory.effectiveDate && !advisory.evidence) {
    errors.push(`${where}: firstObserved (${advisory.firstObserved}) is after effectiveDate (${advisory.effectiveDate})`);
  }
  for (const url of advisory.sources) if (!url.startsWith("https://")) errors.push(`${where}: source must be https: ${url}`);
  if (advisory.status === "verified" && advisory.sources.length < 1) errors.push(`${where}: a verified advisory needs at least one source`);
}

if (errors.length) {
  console.error(`${errors.length} problem${errors.length === 1 ? "" : "s"}:\n${errors.map((e) => `  ${e}`).join("\n")}`);
  process.exit(1);
}
console.log(`${files.length} advisories valid`);
