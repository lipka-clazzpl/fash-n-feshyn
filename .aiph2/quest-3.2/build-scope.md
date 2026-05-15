# Q3.2 Build Scope (HITL H32b — locked 2026-05-15)

## Scope: dedykowana ścieżka `/newcomer-boost`

**Branch:** `feat/q32-newcomer-boost-smoke` (z `feat/style-heist`, kumulatywnie — niesie zmiany SQ: PLN + Polish copy + Zalando-inspired ProductCard).

**Routes:**
- `app/newcomer-boost/page.tsx` — landing pretotypu z hero copy + 1 CTA "Claim 100 PLN BOOST"
- `app/newcomer-boost/thanks/page.tsx` — "✓ Dzięki" potwierdzenie po form submit

**Form:** client-side React form (`name`, `email`, optional `motivation`), POSTuje do Formspree (free tier 50 submissions/m-c), `_next` redirect na `/newcomer-boost/thanks`.

**Analytics:** Vercel Analytics built-in dashboard liczy pageviews `/newcomer-boost/` i `/newcomer-boost/thanks/` automatycznie (bez `@vercel/analytics` package — pretotyp scope nie wymaga custom events, tylko pageview ratio). Zero new npm deps.

**Copy language:** polski (per PC). Target audience: newcomer seller FashionHero (months_active ≤ 3), Kamil-style ("500 zł, tysiąc — jeśli przyniesie zamówienia, tak"). Tonem przyciągniemy też *general fashion-marketplace-sellers* — Smoke test celowo nie filtruje po `months_active` (filtr post-hoc na czas form review).

**Templatka homepage zostaje nietknięta** — wszystko inne forku (browse, PDP, cart) nadal pokazuje fashion-clone language z PLN/Polish (zinheritowane z `feat/style-heist`).

## Out-of-scope (Czego NIE budujemy w pretotypie)

- Real credit balance state (panel sellera) — to *Q3.1 spec target*, nie pretotyp
- Auth / seller registration flow — Smoke nie wymaga
- Backend API / Vercel KV — PC NEVER
- Email confirmation / drip campaign — manual post-form review na Formspree dashboardzie
- Demo dashboard preview after thanks — H32b rejected jako "wider scope"
- Multi-arm onboarding (treatment vs control) — to *real RCT*, nie pretotyp

## Form fields (3 max)

1. **Imię** (text, required) — żeby było po ludzku
2. **Email** (email, required) — żeby skontaktować się jeśli pretotyp przejdzie do real RCT
3. **Dlaczego cię to interesuje?** (textarea, optional, 100 chars max) — qualitative signal o motywacji

**No phone, no company name, no role:** wprowadzenie 4-5 pól zabije konwersję na pretotypie (formspree dashboard pokazuje *kto ma najwyższą intencję*, nie *kto wypełnił dokładnie*).

## CTA copy (locked)

- **Page H1:** "100 PLN do reklam — Twój pierwszy miesiąc na fashion-marketplace"
- **Sub:** "Dla nowych sprzedawców (months 1-3). Bezpłatny budżet na promowanie listingów. 60 dni na wykorzystanie."
- **CTA button:** "Zarezerwuj 100 PLN BOOST"
- **Thanks page H1:** "Zarezerwowane ✓"
- **Thanks page body:** "Skontaktujemy się gdy uruchomimy program (sierpień 2026). [optional: 1-2 zdania pokazujące co user widzi w sellerskim panelu — bez fake-demo, czysty tekst]."

## Form mechanics (no backend)

```tsx
<form action="https://formspree.io/f/<FORM_ID>" method="POST">
  <input name="name" required />
  <input name="email" type="email" required />
  <textarea name="motivation" maxLength={100} />
  <input type="hidden" name="_next" value="https://fash-n-feshyn.vercel.app/newcomer-boost/thanks" />
  <input type="hidden" name="_subject" value="Newcomer Boost claim" />
  <button type="submit">Zarezerwuj 100 PLN BOOST</button>
</form>
```

`<FORM_ID>` placeholder — user musi:
1. Stworzyć konto na formspree.io (free)
2. Utworzyć nowy "Form" → skopiować endpoint ID
3. Wkleić do `.env.local` jako `NEXT_PUBLIC_FORMSPREE_ID=xyz` i podstawić w form action

Alternatywnie, jeśli user chce hardcoded — wkleić ID bezpośrednio w `app/newcomer-boost/page.tsx`.

## Files to create

- `app/newcomer-boost/page.tsx` — landing (~80 LOC)
- `app/newcomer-boost/thanks/page.tsx` — thanks (~30 LOC)
- *Optional:* `app/newcomer-boost/_components/claim-form.tsx` (extracted client component)

**Estimated LOC:** ≤150 total. No new deps. Zero risk to existing routes.

## Validation acceptance

- `npm run build` clean
- `/newcomer-boost` renders form with required fields
- `/newcomer-boost/thanks` renders confirmation
- Form action URL contains formspree ID (placeholder or real)
- No new npm deps in `package.json`
- Vercel preview deploys clean (build w/o env vars)
