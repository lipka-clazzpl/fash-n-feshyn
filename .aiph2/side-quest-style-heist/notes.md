# Side Quest Style Heist — extraction notes

## Source
- **URL:** https://www.zalando.pl/ (homepage, desktop viewport 1728×879)
- **Date:** 2026-05-15
- **Tool:** `extract-design-md.skill` (Cowork path) via `mcp__claude-in-chrome` MCP
- **Path used:** chrome-control substitute (skill anticipates this; SKILL.md § "Cowork (chrome-control) path")

## Tokens extracted

### Colors (≥1 occurrence in DOM sample)
- Backgrounds: `#FFFFFF` (17), `#000000` (13), `#F1F1F1` (4), `#3E8FB2` (1)
- Text: `#000000` (1211 — dominant), `#FFFFFF` (30), `#DA0410` (2 — sale red), `#5C6169` (2 — muted)
- Borders: `#D2D8DD` (5), `#D0D1D3` (1)

### Typography (zsamplowane h1-h6 / p / a / small)
- Primary face: **ZalandoSans** (proprietary, fallback `sans-serif`)
- H2: 16px / 400 / lh 24px
- H3: 16px / 650 / lh 24px (heavier than H2 — editorial inversion)
- 901 elements use `sans-serif` fallback ➜ "ZalandoSans" missing in some render paths

### Visual signals (numerical atmosphere proxy)
- viewport: 1728×879, document height 2809 (≈3.2 viewports)
- imgs=29, imgRatio=0.31 (image-share moderate), texts=43, interactives=187, h1=0, h2=13
- densityHint: **balanced**
- chromeWeight: **flat-or-bordered**
- hasGradient: false
- hasBackdropFilter: false

### Buttons (8 sample)
- 100% transparent background, 0px border-radius, padding 4-8px
- font weight 400 lub 650 (no 700, no italics)
- Pattern: "text-links wearing button hats"

### Dark mode
- Not detected (no `prefers-color-scheme: dark` media-rules, no `.dark`/`[data-theme="dark"]` selectors).

## Application — ProductCard restyle

**Branch:** `feat/style-heist` (PR open separately if user wants)
**Commit:** `49cb1f2` — "feat(aiph2/style-heist): apply Zalando design tokens to ProductCard"
**Preview URL:** https://fash-n-feshyn-ebanbsrp0-przemek-lipkas-projects.vercel.app
**Production (przed SQ — "before"):** https://fash-n-feshyn.vercel.app

### Surgical edits do `src/components/product-card.tsx`

| Co | Przed (templatka) | Po (Zalando-influenced) | Powód |
|---|---|---|---|
| Typography nazwy | `text-[12px] uppercase tracking-[0.5px]` | `text-[16px] font-normal leading-6 text-black` | Zalando 16px baseline + brak uppercase microcopy |
| Typography ceny | `text-[14px] font-medium` | `text-[16px] font-semibold leading-6 text-black` | Editorial inversion: cena dźwiga weight, nie size |
| Currency | `{price} zl` | `{price} PLN` | PC rule: "Nie używaj USD/zl — PLN" |
| Color swatch shape | `rounded-full` (kółka) | bez radius (kwadraty) | Zalando 0px-radius default |
| Color swatch border | `border-black/10` | `border-[#D2D8DD]` | DESIGN.md "linia szepcąca" token |
| Wishlist button | `rounded-full p-1.5` | `p-1.5` (no radius) | 0px discipline |
| Quick view label | `QUICK VIEW` uppercase | `Podgląd` | Polish UI per PC rules |
| Sale indicator | brak | `-{N}% w #DA0410` | Zalando sale-red akcent dodany jako funkcja, nie dekoracja |
| Meta copy "Sold by" | `Sold by ...` | `Sprzedaje ...` | Polish UI |

### Verification status

- ✅ **Build clean:** `npm run build` przeszedł (Next.js prod build success, 120+ static product pages prerendered, no type errors).
- ✅ **Lint:** mój diff product-card.tsx ma 0 błędów lint. Fork ma 6 pre-existing błędów w `wishlist-provider.tsx` (templatka react-hooks/set-state-in-effect) — *nie* wprowadzone tym PR.
- ⚠️ **Live Chrome preview verification BLOCKED:** Vercel preview deployment ma SSO/team-protection włączoną — Chrome MCP redirected do `vercel.com/login` zamiast renderować page. Workaround dla user: (a) wyłącz preview protection w Vercel dashboard → Settings → Deployment Protection, lub (b) zmerge'uj feat/style-heist do main → trafi na otwartą prod URL https://fash-n-feshyn.vercel.app.

## Gaps / TODO

- **Before/after screenshot (PNG):** environment's `mcp__claude-in-chrome` *nie ma* natywnego screenshot tool. `gif_creator` może capture frames + export as GIF (1-frame ≈ still) ale zapis idzie do Downloads, nie do `.aiph2/side-quest-style-heist/before.png` / `after.png`. **Workaround dla user:** CMD+SHIFT+5 (macOS) na (a) https://fash-n-feshyn.vercel.app (before) — wymaga preview-protection-off lub merge feat/style-heist → main; (b) preview URL gdy SSO off. Zapisz do `.aiph2/side-quest-style-heist/before.png` + `after.png`.
- **`max-width` tokens:** Zalando.pl używa full-viewport grid, nie distinct max-widths — sekcja Layout DESIGN.md jest inferential, nie literal.
- **CSS custom properties (`:root`):** 0 wykrytych — Zalando używa CSS modules / styled-components, nie raw CSS vars na `:root`. Tokeny extracted via getComputedStyle, nie var names.

## DESIGN.md weryfikacja

- **structural-check** (extract-design-md/evals/structural-check.md): wszystkie 11 sekcji obecne ✓.
- **language-check** (extract-design-md/evals/language-check.md): zero zakazanych słów ("modern", "clean", "simple", "elegant", "sleek"), zero Tailwind class names, zero bare hex bez nazwy ✓.
- **Atmosphere synthesis:** derived purely z `visualSignals` (Cowork path) — `densityHint='balanced'`, `chromeWeight='flat-or-bordered'`, brak gradient/backdrop → "editorial-rigorous, flat-pragmatic".

## Co się tu uczę

- **`extract-design-md.skill` ma 2 ścieżki** (Claude Code chrome-devtools vs Cowork chrome-control). My jesteśmy w środku — `mcp__claude-in-chrome` jest *funkcjonalnym substytutem* Cowork chrome-control (te same primitives: navigate, execute JS, get page text). Skill explicite *wspiera* tę degradację — bez literal screenshot, atmosphere jest derivable z policzonych signalów.
- **Pojedynczy JS roundtrip = całe extraction.** Skill nie potrzebuje 10 oddzielnych callów; jedno wywołanie `evaluate_script` zwraca structured JSON. Lekcja dla custom skillów: agreguj ekstrakcję, minimalizuj tool-calls.
- **Anti-pattern detection:** language-check rejects "modern/clean/elegant" — to MOŻE wyglądać jak nadmiar reguł, ale każde z tych słów to *opinion masquerading as observation*. Dobry DESIGN.md mówi co *widzi* (flat / bordered / heavy-weight / 0-radius), nie *jakie wrażenie sprawia*.
