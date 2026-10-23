# Pending advisories

These advisories are researched and follow the same rules as the ones in `advisories/`, but SHAPI doesn't match them yet. Each one depends on something the scanner can't see today, so matching it now would flag calls that aren't affected:

| Advisory | Needs |
|---|---|
| `openai-legacy-gpt-o-series-shutdown-2026-10-23`, `openai-gpt-4o-gpt-4-1-snapshots-shutdown-2027-01-14`, `anthropic-claude-sonnet-4-5-retirement` | The `model` value in the request body. Only calls to the retired models are hit, not every call to the endpoint. |
| `stripe-checkout-session-payment-method-types-removed`, `stripe-payment-intents-payment-method-types-removed` | Request-body parameters. Only requests that send `payment_method_types` on the new API version are hit. |
| `quickbooks-query-orderby-id-not-sortable` | The value of the `query` parameter: only `ORDERBY Id` statements are hit. |
| `hubspot-helpdesk-thread-comments-blocked`, `hubspot-customer-agent-lead-status-read-only` | Request-body values: only comments on help-desk threads, and only writes to `hs_customer_agent_lead_status`, are hit. |
| `salesforce-standard-volume-platform-events-retired` | Whether a platform event is standard-volume. The same path publishes high-volume events, which keep working. |
| `quickbooks-builder-tier-coreplus-calls-blocked` | Plan and usage information. It's a monthly quota for one app tier, not a change in how the API answers. |

They move to `advisories/` once SHAPI can tell affected calls apart. `npm run validate` checks this folder too, and ids must be unique across both folders.
