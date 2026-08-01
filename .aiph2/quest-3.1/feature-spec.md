# Feature: Newcomer Boost — 100 PLN credit (S2.1)

OPPORTUNITY: Newcomer (months_active ≤ 3) z ograniczonym budżetem na ads — nie wyda 1000 PLN zanim wie czy FH "się opłaca". (Q2.4 O2)
OUTCOME: 0% → 35% adopcji Promoted Listings wśród newcomers do Q3 2026.

## Co budujemy
Panel sellera z 100 PLN ad-credit przyznawanym auto przy `months_active=1`. Działa tylko na Promoted Listings, wygasa 60 dni. Onboarding 2-armowy dla RCT A2.1.3: treatment=credit, control=placeholder.

## User flow
1. Rejestracja + ≥5 listingów aktywnych.
2. Badge "100 PLN BOOST · 60 dni" + 1-zdaniowe wyjaśnienie.
3. Włącza Promoted Listings → ad spend z balance.
4. Po 60 dniach credit przepada; banner-link do top-listingów.

## Kryteria akceptacji
- [ ] Badge "100 PLN BOOST" ≤1s po loginie (months_active=1)
- [ ] Ad spend < balance → deduct; > balance → warning przed "Uruchom kampanię"
- [ ] Event (claim/spend/expiry) w events.json: `{seller_id, arm, ts, event_type, amount_pln}`
- [ ] Split: `hash(seller_id) % 2` (no runtime random)

## Czego NIE budujemy
- Real-time ad auction (boost = stała premia w rankingu)
- Credit refundable / przelewalny
- Email/SMS onboarding

## Przykłady
seller `acc_NEW_42`, months_active=1, 7 listingów, arm=treatment.
→ `{"credit_pln":100,"expires_at":"2026-07-14","arm":"treatment"}`; ad spend 24 PLN → balance 76 PLN.
