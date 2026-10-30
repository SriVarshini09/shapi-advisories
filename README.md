# SHAPI advisories

An open database of **third-party API behavior changes**: the silent ones that break working code without a new version, and the announced ones with a deadline.

Each advisory says which endpoint changed, what changed, when it took (or takes) effect, **exactly what code it breaks**, how to migrate, and the evidence. [SHAPI](https://github.com/SriVarshini09/YC) uses this database to find affected call sites in a repository and to open verified fix pull requests. Anyone can use the data under [CC BY 4.0](LICENSE).

<!-- advisories:start -->
| Effective | Provider | What changed | Severity | Status |
|---|---|---|---|---|
| 2025-08-01 | QuickBooks | [Minor versions below 75 are silently answered as minor version 75](advisories/quickbooks-minorversion-below-75-ignored.json) | high | verified |
| 2025-11-01 | HubSpot | [Marketing Email API v1 sunset on 2025-11-01](advisories/hubspot-marketing-emails-v1-sunset.json) | critical | verified |
| 2025-11-03 | Meta | [oEmbed responses no longer return author and thumbnail fields](advisories/meta-graph-instagram-oembed-fields-removed.json) | high | verified |
| 2025-11-12 | Slack | [files.upload Web API method sunset on 2025-11-12](advisories/slack-files-upload-retired.json) | critical | verified |
| 2025-11-15 | Meta | [Page Insights impressions and page fans metrics removed on 2025-11-15](advisories/meta-graph-page-insights-impressions-fans-removed.json) | critical | verified |
| 2025-12-19 | GitHub | [workflow_dispatch returns 200 with a body instead of 204](advisories/github-workflow-dispatch-204-to-200.json) | critical | verified |
| 2026-01-27 | QuickBooks | [CompanyInfo no longer returns the NeoEnabled NameValue](advisories/quickbooks-companyinfo-neoenabled-removed.json) | low | verified |
| 2026-01-28 | HubSpot | [Marketing Email v3 stopped returning folderId on 2026-01-28](advisories/hubspot-marketing-emails-folderid-removed.json) | high | verified |
| 2026-02-24 | Shopify | [Shopify shipping options move to rateGroups; rateProvider and methodConditions are legacy](advisories/shopify-delivery-method-definition-rate-groups.json) | medium | unverified |
| 2026-03-18 | X | [X Activity API event types renamed from PascalCase to dot-separated lowercase](advisories/x-activity-api-pascalcase-event-types-removed.json) | high | verified |
| 2026-03-23 | Shopify | [Shopify removes pre_tax_price from REST order line items](advisories/shopify-rest-order-line-item-pre-tax-price-removed.json) | medium | unverified |
| 2026-03-25 | Stripe | [Stripe 2026-03-25.dahlia renames Checkout Session ui_mode values](advisories/stripe-checkout-session-ui-mode-values-renamed.json) | high | verified |
| 2026-04-01 | Shopify | [Shopify inventoryActivate keeps existing quantities instead of resetting them to zero, as of 2026-04](advisories/shopify-inventory-activate-preserves-quantities.json) | medium | unverified |
| 2026-04-01 | Shopify | [Shopify's REST inventory_levels/connect keeps existing quantities instead of resetting them, as of 2026-04](advisories/shopify-rest-inventory-connect-preserves-quantities.json) | medium | unverified |
| 2026-04-16 | X | [Following users removed from X API self-serve tiers](advisories/x-self-serve-follow-writes-removed.json) | critical | verified |
| 2026-04-16 | X | [Liking Posts removed from X API self-serve tiers](advisories/x-self-serve-like-writes-removed.json) | critical | verified |
| 2026-04-24 | Shopify | [Shopify fixes OrderTransaction.totalUnsettledSet for pending captures](advisories/shopify-order-transaction-total-unsettled-fixed.json) | low | unverified |
| 2026-04-30 | HubSpot | [Contact Lists API v1 retired on 2026-04-30; endpoints return 404](advisories/hubspot-contact-lists-v1-sunset.json) | critical | verified |
| 2026-04-30 | HubSpot | [v1 contact read endpoints stopped returning list memberships on 2026-04-30](advisories/hubspot-contacts-v1-list-memberships-removed.json) | high | verified |
| 2026-05-04 | Xero | [Finance API Accounting Activities endpoints decommissioned](advisories/xero-finance-accounting-activities-decommissioned.json) | critical | verified |
| 2026-05-30 | Reddit | [Logged-out .json endpoints return 403](advisories/reddit-logged-out-json-403.json) | high | unverified |
| 2026-06-01 | Gemini | [gemini-2.0-flash and gemini-2.0-flash-lite shut down on 2026-06-01](advisories/google-gemini-2-0-flash-shutdown.json) | critical | verified |
| 2026-06-01 | Gemini | [gemini-2.0-flash and gemini-2.0-flash-lite shut down on 2026-06-01 (model in the request body)](advisories/google-gemini-2-0-flash-shutdown-sdk.json) | critical | verified |
| 2026-06-15 | Meta | [Page Insights reach and 3-second video viewer metrics removed on 2026-06-15](advisories/meta-graph-page-insights-reach-video-views-removed.json) | critical | verified |
| 2026-06-30 | Xero | [Organisation Class enum gains ULTRA](advisories/xero-organisation-class-ultra-enum.json) | medium | verified |
| 2026-07-01 | Shopify | [Shopify customerPaymentMethodRemoteCreate requires a payment method identifier as of 2026-07](advisories/shopify-customer-payment-method-remote-create-identifier-required.json) | medium | unverified |
| 2026-07-01 | Shopify | [Shopify removes the inventorySetScheduledChanges mutation in API version 2026-07](advisories/shopify-inventory-set-scheduled-changes-removed.json) | high | unverified |
| 2026-08-01 | Twilio | [Twilio Voice Insights Call Summary drops attributes.conference_participant on 2026-08-01](advisories/twilio-voice-insights-conference-participant-removed.json) | medium | verified |
| 2026-08-10 | Twilio | [Twilio RCS unconfirmed-delivery error code changed from 30036 to 30046](advisories/twilio-rcs-undelivered-error-code-30046.json) | medium | verified |
| 2026-08-26 | OpenAI | [Assistants API removed on 2026-08-26](advisories/openai-assistants-api-shutdown.json) | critical | verified |
| 2026-08-26 | OpenAI | [Assistants API threads, messages and runs removed on 2026-08-26](advisories/openai-assistants-threads-api-shutdown.json) | critical | verified |
| 2026-09-10 | Xero | [AU Payroll pay item and earnings rate writes require IsQualifyingEarnings](advisories/xero-au-payroll-isqualifyingearnings-required.json) | critical | verified |
| 2026-09-10 | Xero | [AU Payroll pay item and earnings rate writes require IsQualifyingEarnings (v2 earningsRates)](advisories/xero-au-payroll-isqualifyingearnings-required-earningsrates.json) | critical | verified |
| 2026-09-24 | Meta | [Graph API v20.0 removed; calls fall forward to the next version](advisories/meta-graph-v20-sunset.json) | high | verified |
| 2026-09-30 | Stripe | [Stripe 2026-09-30.endive requires an object for billing_cycle_anchor on subscription updates](advisories/stripe-endive-billing-cycle-anchor-object.json) | medium | unverified |
| 2026-09-30 | Stripe | [Stripe 2026-09-30.endive removes payment_method_types from Checkout Session creation](advisories/stripe-endive-checkout-session-payment-method-types-removed.json) | high | unverified |
| 2026-09-30 | Stripe | [Stripe 2026-09-30.endive removes payment_method_types from Payment Intent create, update and confirm](advisories/stripe-endive-payment-intent-payment-method-types-removed.json) | high | unverified |
| 2026-09-30 | Stripe | [Stripe 2026-09-30.endive removes payment_method_types from Setup Intent create and update](advisories/stripe-endive-setup-intent-payment-method-types-removed.json) | high | unverified |
| 2026-09-30 | Twilio | [Twilio Conference list returns only in-progress conferences by default from 2026-09-30](advisories/twilio-conference-list-default-in-progress.json) | critical | verified |
| 2026-10-01 | Shopify | [Shopify carrierServiceCreate no longer adds the carrier service to the General shipping profile, as of 2026-10](advisories/shopify-carrier-service-not-added-to-default-profile.json) | medium | unverified |
| 2026-10-01 | Shopify | [Shopify removes priceRule from DraftOrderDiscountNotAppliedWarning in API version 2026-10](advisories/shopify-draft-order-warning-price-rule-removed.json) | high | unverified |
| 2026-10-01 | Shopify | [Shopify OrderDisplayFulfillmentStatus can return FULFILLMENT_NOT_REQUIRED as of 2026-10](advisories/shopify-order-display-fulfillment-status-not-required.json) | medium | unverified |
| 2026-10-01 | Shopify | [Shopify orderUpdate recalculates taxes when an unfulfilled order's shipping address changes, as of 2026-10](advisories/shopify-order-update-shipping-address-recalculates-taxes.json) | medium | unverified |
| 2026-10-01 | Shopify | [Shopify's REST carrier service creation no longer adds it to the General shipping profile, as of 2026-10](advisories/shopify-rest-carrier-service-not-added-to-default-profile.json) | medium | unverified |
| 2026-10-01 | Shopify | [Shopify's REST order update recalculates taxes when an unfulfilled order's shipping address changes, as of 2026-10](advisories/shopify-rest-order-update-shipping-address-recalculates-taxes.json) | medium | unverified |
| 2026-10-01 | Shopify | [Shopify segment query functions use MATCHES instead of = true as of API version 2026-10](advisories/shopify-segment-query-function-syntax.json) | medium | unverified |
| 2026-10-07 | Google | [Google Ads API v22 sunset on 2026-10-07](advisories/google-ads-api-v22-sunset.json) | critical | verified |
| 2026-10-08 | Xero | [Allocations between documents of different contacts are rejected](advisories/xero-allocations-contact-mismatch-rejected.json) | medium | verified |
| 2026-10-21 | Anthropic | [anthropic-version 2026-10-21 rejects temperature, top_p and top_k with 400](advisories/anthropic-api-version-2026-10-21-sampling-params-400.json) | high | verified |
| 2026-10-23 | OpenAI | [gpt-3.5-turbo, gpt-4, gpt-4-turbo, o1, o3-mini and o4-mini shut down on 2026-10-23](advisories/openai-legacy-gpt-o-series-shutdown-2026-10-23.json) | medium | verified |
| 2026-10-23 | OpenAI | [gpt-3.5-turbo, gpt-4, gpt-4-turbo, o1, o3-mini and o4-mini shut down on 2026-10-23 (Responses API)](advisories/openai-legacy-gpt-o-series-shutdown-2026-10-23-responses.json) | medium | verified |
| 2026-10-27 | Meta | [Commerce Order Management API removed on all versions on 2026-10-27](advisories/meta-graph-commerce-order-management-removed.json) | critical | verified |
| 2026-10-27 | Meta | [date_format query parameter returns an error from 2026-10-27](advisories/meta-graph-date-format-param-removed.json) | critical | verified |
| 2026-10-27 | Meta | [Delivery Estimate drops daily_outcomes_curve, budget_guardrail and estimate_dau](advisories/meta-graph-delivery-estimate-fields-removed.json) | critical | verified |
| 2026-10-27 | Meta | [Root GET /?ids= multi-object lookup returns an error from 2026-10-27](advisories/meta-graph-root-ids-lookup-removed.json) | critical | verified |
| 2026-11-02 | Shopify | [Shopify Global Catalog REST API stops serving traffic on 2026-11-02](advisories/shopify-global-catalog-rest-api-shutdown.json) | critical | verified |
| 2026-11-05 | Xero | [NZ Payroll employee tax requests without KiwiSaverStatus return 400 from 2026-11-05](advisories/xero-nz-payroll-employee-tax-kiwisaverstatus-required.json) | critical | verified |
| 2026-11-10 | Meta | [Marketing API v24.0 available until 2026-11-10](advisories/meta-graph-marketing-api-v24-sunset.json) | critical | verified |
| 2026-11-17 | Gemini | [Gemini 2.5 preview TTS models shut down on 2026-11-17](advisories/google-gemini-2-5-preview-tts-shutdown.json) | critical | verified |
| 2026-11-17 | Gemini | [Gemini 2.5 preview TTS models shut down on 2026-11-17 (model in the request body)](advisories/google-gemini-2-5-preview-tts-shutdown-sdk.json) | critical | verified |
| 2026-11-30 | Anthropic | [Claude Sonnet 4.5 retires on 2026-11-30](advisories/anthropic-claude-sonnet-4-5-retirement.json) | medium | verified |
| 2026-11-30 | OpenAI | [Evals API shuts down on 2026-11-30](advisories/openai-evals-api-shutdown.json) | critical | verified |
| 2026-12-01 | Salesforce | [SOAP login() requires the Use Any API Auth permission from 2026-12-01](advisories/salesforce-soap-login-use-any-api-auth-required.json) | critical | verified |
| 2026-12-04 | HubSpot | [Pipelines API v1 retired on 2026-12-04](advisories/hubspot-pipelines-v1-sunset.json) | high | verified |
| 2026-12-15 | Salesforce | [SOAP login() from a broad IP range needs a security token from 2026-12-15](advisories/salesforce-soap-login-broad-ip-range-token-required.json) | critical | verified |
| 2026-12-15 | Salesforce | [SOAP login() turned off in orgs with no use in six months, from 2026-12-15](advisories/salesforce-soap-login-disabled-when-unused.json) | critical | verified |
| 2027-01-01 | Google | [Custom Search JSON API discontinued on 2027-01-01](advisories/google-custom-search-json-api-shutdown.json) | critical | verified |
| 2027-01-01 | Shopify | [Shopify removes the automaticDiscounts query in API version 2027-01](advisories/shopify-automatic-discounts-query-removed.json) | high | unverified |
| 2027-01-01 | Shopify | [Shopify removes the metafieldInteger collection condition in API version 2027-01](advisories/shopify-collection-metafield-integer-condition-removed.json) | high | unverified |
| 2027-01-01 | Shopify | [Shopify removes the marketCurrencySettingsUpdate mutation in API version 2027-01](advisories/shopify-market-currency-settings-update-removed.json) | high | unverified |
| 2027-01-01 | Shopify | [Shopify deprecates the PRIVATE and PUBLIC_READ metaobject admin access values](advisories/shopify-metaobject-admin-access-private-public-read-removed.json) | low | unverified |
| 2027-01-01 | Shopify | [Shopify rejects non-expiring offline access tokens from public apps on 2027-01-01](advisories/shopify-non-expiring-offline-tokens-rejected.json) | critical | verified |
| 2027-01-01 | Shopify | [Shopify Tax managed mode rejects market and publishing writes that conflict with it](advisories/shopify-tax-managed-mode-write-validation.json) | medium | unverified |
| 2027-01-14 | OpenAI | [gpt-4o, gpt-4o-mini, gpt-4.1 and gpt-4.1-mini snapshots shut down on 2027-01-14](advisories/openai-gpt-4o-gpt-4-1-snapshots-shutdown-2027-01-14.json) | medium | verified |
| 2027-01-14 | OpenAI | [gpt-4o, gpt-4o-mini, gpt-4.1 and gpt-4.1-mini snapshots shut down on 2027-01-14 (Responses API)](advisories/openai-gpt-4o-gpt-4-1-snapshots-shutdown-2027-01-14-responses.json) | medium | verified |
| 2027-01-14 | Xero | [Invoice email daily limit returns 429 instead of 500 from 2027-01-14](advisories/xero-invoices-email-daily-limit-429.json) | medium | verified |
| 2027-01-16 | Shopify | [Shopify Admin API version 2026-01 becomes unsupported on 2027-01-16](advisories/shopify-admin-api-2026-01-unsupported.json) | critical | verified |
| 2027-01-21 | Meta | [Graph API v21.0 removed on 2027-01-21](advisories/meta-graph-v21-sunset.json) | high | verified |
| 2027-01-31 | Twilio | [Twilio Notify reaches end of life on 2027-01-31](advisories/twilio-notify-end-of-life.json) | critical | verified |
| 2027-02-01 | QuickBooks | [Refresh tokens hard-expire after five years, first ones in February 2027](advisories/quickbooks-refresh-token-five-year-hard-expiry.json) | high | verified |
| 2027-02-23 | Meta | [Marketing API v25.0 available until 2027-02-23](advisories/meta-graph-marketing-api-v25-sunset.json) | high | verified |
| 2027-02-26 | OpenAI | [/v1/audio/translations shuts down on 2027-02-26](advisories/openai-audio-translations-endpoint-shutdown.json) | high | verified |
| 2027-03-01 | Shopify | [Shopify script tags stop running on storefronts on 2027-03-01](advisories/shopify-script-tags-stop-running.json) | high | verified |
| 2027-03-15 | Gemini | [gemini-2.5-flash-image shuts down on 2027-03-15](advisories/google-gemini-2-5-flash-image-shutdown.json) | high | verified |
| 2027-03-15 | Gemini | [gemini-2.5-flash-image shuts down on 2027-03-15 (model in the request body)](advisories/google-gemini-2-5-flash-image-shutdown-sdk.json) | high | verified |
| 2027-04-16 | Shopify | [Shopify Admin API version 2026-04 becomes unsupported on 2027-04-16](advisories/shopify-admin-api-2026-04-unsupported.json) | high | verified |
| 2027-09-13 | Xero | [Broad accounting.transactions scope replaced by granular scopes](advisories/xero-accounting-transactions-scope-split.json) | medium | verified |
<!-- advisories:end -->

Researched advisories that SHAPI can't match precisely yet (for example a request-body parameter that only breaks on a new API version) are kept in [`advisories/pending/`](advisories/pending), with what each one needs.

## Format

One JSON file per advisory in [`advisories/`](advisories), named `<id>.json` and valid against [`schema/advisory.schema.json`](schema/advisory.schema.json). The fields that matter most:

- **`endpoint`**: provider, HTTP method and path pattern, for example `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`. In a path, `{param}` matches one segment, `*` matches within a segment, `**` matches any number of segments, and `{?}` matches only a value the code builds at runtime (such as a model an SDK passes as a parameter), never a literal.
- **`changeClass`**: `status-code`, `field-rename`, `enum-added`, `required-field`, `version-sunset`, `scope-change` or `auth`.
- **`trigger`**: what a call site must do to be affected, for example "checks `status === 204`", "sends `minorversion` below 75" or "sends `model: \"o1-mini\"` in the request body" (`body: [{ "field": "model", "values": [...] }]`; without `values`, sending the field at all is enough). An `enums` condition can list `values` too, to fire only when the code compares the field with one of them (numbers are written as strings, such as `"30046"`). A call site that only calls the endpoint is *exposed*; one that depends on what changed is *affected*.
- **`firstObserved`**, **`publishedNotice`**, **`effectiveDate`**: when it was seen in the wild, whether and where the provider announced it, and when it takes effect.
- **`migrationNote`**, **`recipeId`**: how to fix it, and the deterministic fix recipe SHAPI applies, if there is one.
- **`fix`** (with `recipeId: "apply-fix"`): the exact change, as data. `path` (from and to, for example `/v21.0/` to `/v26.0/`), `query` and `header` change what the code sends; `fields` and `enums` list renamed response fields and enum values. SHAPI applies it and proves it with a generated contract test.
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
npm run table   # refreshes the table above
```

## License

The advisories and schema are licensed under [Creative Commons Attribution 4.0 International](LICENSE) (CC BY 4.0). Please credit "SHAPI advisories" with a link to this repository.
