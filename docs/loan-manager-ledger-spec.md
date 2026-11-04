# Loan Manager — Ledger Foundation (Draft)

## Principles
- Private authenticated app at `/loans` in the existing React/Vite/Vercel site.
- No financial data or credentials committed to this public repository.
- PostgreSQL/Supabase with row-level security (RLS), authenticated owner only.
- Append-only immutable commands/events. Current balances are **derived** by replaying ordered events, not edited directly.
- Event fields: id (UUID), effective_date (DATE), recorded_at (timestamp), sequence (monotonic integer), actor_id, type, payload, optional reason, reverses_event_id.
- Use exact decimal money arithmetic (integer cents for principal/payments, high precision for accrued interest); explicit rounding at posting boundaries.
- Event order: effective_date, then sequence; backdated events cause replay of all later state. Show impact preview before committing.
- Corrections are reversal + replacement events, never destructive deletion. Idempotency keys prevent duplicate submissions.
- Validate commands transactionally against the replayed state; reject negative principal, excess card payments, duplicate event ids, or unauthorized edits.
- Database transactions serialize concurrent changes, with optimistic revision checks to prevent stale writes.

## Initial loan portions (2026-11 start)
| Debt | Principal cents | Standard APR | Card APR | Initially card financed |
| --- | ---: | ---: | ---: | ---: |
| Banco Popular | 800000 | 6% | — | 0 |
| Quinceañera | 400000 | 6% | 18% | 0 |
| Surgery | 418300 | 6% | — | 0 |
| Victoria's Secret | 19400 | 6% | 28.74% | 19400 |
| Phone | 50000 | 6% | 28.74% | 0 |
| Flight Louisville | 56800 | 6% | 18% | 56800 |
| Flight New York | 90000 | 6% | 28.74% | 90000 |
| Miscellaneous | 10000 | 6% | 28.74% | 10000 |

Starting family principal = $18,445. Starting card-financed principal = $1,762.
These represent initial states, not live card account balances.

## Commands
- `CARD_PAYMENT`: date, debt_id, amount. Reduces only card-financed exposure for that debt, converting the same portion to standard APR; does **not** reduce family principal. Reject amount exceeding exposure. Multiple payments compose.
- `SET_FINANCING_EXPOSURE`: dated reconciliation command with explanation and before/after preview; use for correcting card attribution, not an untracked direct APR overwrite.
- `FAMILY_PAYMENT`: date, amount, mode=general|targeted, optional debt_id, note/source. Reduces family receivable by applying payment to interest first, then principal, following allocation rules.
- `REVERSE_EVENT`: reason and event id, plus replacement if needed. Replay downstream events and reject invalid consequences.
- `CHANGE_STANDARD_APR` / `CHANGE_CARD_APR`: effective-dated changes with an explicit audit record. Only if permitted by the loan agreement.

## Interest and allocations
- Daily simple interest = each outstanding debt principal portion × its applicable annual APR × elapsed days / 365 (Actual/365 Fixed, provisional until user approves convention).
- Interest accrued before an event is settled to that event's date; rate changes are effective on the event date, not retroactive.
- Each debt can contain standard-APR and card-APR principal exposure; card exposure must never exceed its outstanding family principal.
- General payments target eligible standard-rate portions, priority Banco Popular first, then configurable ordering. Interest-first within chosen eligible debt/portion. No automatic allocation to high-rate-only portions. Unallocated remainder is surfaced for explicit user decision, not silently discarded.
- Targeted payments allocate only to selected debt, interest-first, then principal. Define split between standard/card principal when both exist before production use (default proposal: standard-rate portion first).
- Family payments may reduce a debt below its card exposure; reconcile exposure down to remaining family principal without falsely claiming the user paid the physical credit card.
- Separate **card financing exposure attributed to the family loan** from actual issuer card balance and actual statement interest; APR pass-through is an agreed loan accounting convention, not proof of actual issuer charges.
- The mother's two $150 payment streams are independent recorded payment events, not automatically assumed received.

## Required acceptance tests
1. Initial total = $18,445 and financed exposure = $1,762.
2. $500 New York card payment => $500 standard, $400 card rate, total family principal unchanged.
3. Subsequent $400 card payment => all New York remaining family principal standard rate.
4. Further card payment => rejected.
5. General $150 family payment starts with Banco Popular, interest then principal.
6. Targeted family payment affects only selected debt.
7. Reversing/backdating an event replays later events deterministically; invalid resulting sequence is rejected.
8. Month crossing, leap year, same-day event order, cents rounding, overpayments, and duplicate submissions.
9. RLS denies all anonymous access and cross-account access.
10. Responsive baseline at phone, tablet, desktop widths.

## Delivery order
1. Pure, deterministic ledger calculation engine and unit tests.
2. Supabase schema, migrations, RLS policies, and transactional command API.
3. Minimal authenticated UI: dashboard, command entry, event history, per-debt ledger.
4. CSV export/backup, corrections and reconciliation.
5. Responsive refinements and visual design.

## Open policy choices before financial production use
- Day-count convention and whether interest is simple/noncompounding.
- Allocation order after Banco Popular.
- How targeted payments split between standard/card portions.
- How to treat a payment exceeding accrued interest and eligible standard-rate principal.
- Agreement and legality of interest terms.
