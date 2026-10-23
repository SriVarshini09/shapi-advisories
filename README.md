# SHAPI advisories

An open database of **third-party API behavior changes**: the silent ones that break working code without a new version, and the announced ones with a deadline.

Each advisory says which endpoint changed, what changed, when it took (or takes) effect, **exactly what code it breaks**, how to migrate, and the evidence. [SHAPI](https://github.com/SriVarshini09/YC) uses this database to find affected call sites in a repository and to open verified fix pull requests. Anyone can use the data under [CC BY 4.0](LICENSE).

| Advisory | Provider | What changed | Effective |
|---|---|---|---|
| [quickbooks-minorversion-below-75-ignored](advisories/quickbooks-minorversion-below-75-ignored.json) | QuickBooks | Minor versions below 75 are silently answered as minor version 75 | 2025-08-01 |
| [github-workflow-dispatch-204-to-200](advisories/github-workflow-dispatch-204-to-200.json) | GitHub | workflow_dispatch returns 200 with a body instead of 204 | 2025-12-19 |
| [reddit-logged-out-json-403](advisories/reddit-logged-out-json-403.json) | Reddit | Logged-out .json endpoints return 403 | 2026-05-30 |
| [meta-graph-v20-sunset](advisories/meta-graph-v20-sunset.json) | Meta Graph | Graph API v20.0 removed; calls fall forward to the next version | 2026-09-24 |
| [hubspot-pipelines-v1-sunset](advisories/hubspot-pipelines-v1-sunset.json) | HubSpot | Pipelines API v1 retired on 2026-12-04 | 2026-12-04 |
| [meta-graph-v21-sunset](advisories/meta-graph-v21-sunset.json) | Meta Graph | Graph API v21.0 removed on 2027-01-21 | 2027-01-21 |
| [xero-accounting-transactions-scope-split](advisories/xero-accounting-transactions-scope-split.json) | Xero | Broad accounting.transactions scope replaced by granular scopes | 2027-09-13 |

## Format

One JSON file per advisory in [`advisories/`](advisories), named `<id>.json` and valid against [`schema/advisory.schema.json`](schema/advisory.schema.json). The fields that matter most:

- **`endpoint`**: provider, HTTP method and path pattern, for example `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`.
- **`changeClass`**: `status-code`, `field-rename`, `enum-added`, `required-field`, `version-sunset`, `scope-change` or `auth`.
- **`trigger`**: what a call site must do to be affected, for example "checks `status === 204`" or "sends `minorversion` below 75". A call site that only calls the endpoint is *exposed*; one that depends on what changed is *affected*.
- **`firstObserved`**, **`publishedNotice`**, **`effectiveDate`**: when it was seen in the wild, whether and where the provider announced it, and when it takes effect.
- **`migrationNote`**, **`recipeId`**: how to fix it, and the deterministic fix recipe SHAPI applies, if there is one.
- **`sources`**, **`status`**: `verified` means checked against a primary source or two independent ones. `unverified` means secondary reports only.
- **`evidence`** (optional): the before and after responses SHAPI's canaries observed.

## Use it

- **The SHAPI CLI** ships these advisories: `npx shapi-cli scan .`
- **The SHAPI GitHub App** syncs this repository and checks every installed repository when an advisory is added or changed.
- **Your own tooling:** download the JSON files from this repository, or one file at `https://raw.githubusercontent.com/SriVarshini09/shapi-advisories/main/advisories/<id>.json`.

## Contribute

Found an API change that broke your code? Open a pull request with a new advisory. See [CONTRIBUTING.md](CONTRIBUTING.md). Every pull request is validated against the schema.

```sh
npm ci
npm run validate
```

## License

The advisories and schema are licensed under [Creative Commons Attribution 4.0 International](LICENSE) (CC BY 4.0). Please credit "SHAPI advisories" with a link to this repository.
