# Contributing an advisory

Thank you. An advisory is only useful if it is right, so each one is reviewed before it is merged.

## What makes a good advisory

- **A real behavior change** in a third-party API: a status code, field, enum, header, required parameter, version, scope or auth rule that changed, or will change on a stated date.
- **A precise trigger.** Say what a call site must *do* to be affected, for example "compares the response status to 204", not just "calls this endpoint". Code that calls the endpoint without depending on the change is reported as *exposed*, not *affected*.
- **Evidence.** Mark the advisory `verified` only with a primary source (the provider's changelog, docs or a support reply) or two independent reports. Otherwise use `unverified`; it is still useful and still reviewed.
- **A migration note** a developer can act on in one read.

## How

1. Copy an existing file in `advisories/` that is closest to your change, and rename it `<id>.json`. The id is lowercase words joined by hyphens, starting with the provider, for example `stripe-charges-currency-required`.
2. Fill every required field (see `schema/advisory.schema.json`). Dates are `YYYY-MM-DD`; `sources` are `https://` links.
3. Run `npm ci && npm run validate`.
4. Open a pull request and fill in the template: where you saw the change, and a short code example that breaks.

## Review

A maintainer checks the sources, the endpoint pattern and the trigger against a real call site. Advisories with a deadline in the next 90 days are reviewed first. By contributing, you agree to license your contribution under CC BY 4.0, the license of this repository.

## Reporting a problem with an advisory

Open an issue with the advisory id and what is wrong: a wrong date, too broad a trigger, a broken source. Fixes to existing advisories are as welcome as new ones.
