# Side Quest Style Heist — questlog submission

## Tryb upload: MANUAL (per H31e precedent — manual upload preferred)

## Submission text (paste-ready)

```
Side Quest 3.1 — Style Heist ✅ (Path 2: Claude Code + Chrome MCP)

Reference URL: https://www.zalando.pl/ (homepage, desktop)
DESIGN.md: https://github.com/lipka-clazzpl/fash-n-feshyn/blob/feat/style-heist/DESIGN.md
Branch: feat/style-heist (commit 49cb1f2)
PR: https://github.com/lipka-clazzpl/fash-n-feshyn/pull/new/feat/style-heist
Preview: https://fash-n-feshyn-ebanbsrp0-przemek-lipkas-projects.vercel.app (gated by Vercel SSO, see notes)
Before (templatka prod): https://fash-n-feshyn.vercel.app

EXTRACTED TOKENS (z `extract-design-md.skill` Cowork chrome-control path):
- Paleta 7 kolorów: biały/czarny/2 szare + 3 akcenty (slate-błękit / sale-czerwień #DA0410 / muted-meta)
- Typography: ZalandoSans, 16px baseline, weight 400 vs 650 (editorial inversion: H3 > H2 w wadze)
- Border-radius: 0px wszędzie (sharp corners)
- Shadows: flat-or-bordered, zero gradientów/backdrop-filter
- Buttons: transparent bg + 0 radius (text-links wearing button hats)

APPLIED TO: `src/components/product-card.tsx` (single section per side-quest "1-2 sekcje" rule):
✓ Nazwa produktu: 16px / weight 400 (był 12px uppercase microcopy)
✓ Cena: 16px / weight 650 (editorial-inversion hierarchy)
✓ Currency: zl → PLN (PC compliance)
✓ Color swatch: rounded-full → square (Zalando 0px-radius)
✓ Wishlist button: rounded-full → 0
✓ Quick view: "QUICK VIEW" → "Podgląd"
✓ Sale indicator: dodany w #DA0410 (-X% kalkulowane z originalPrice)
✓ Meta: "Sold by" → "Sprzedaje"

VERIFICATION:
- npm run build: clean (120+ static product pages prerendered)
- npm run lint: 0 errors w product-card.tsx (fork ma 6 pre-existing
  w wishlist-provider.tsx — nie introduced by this PR)
- Live verify: BLOCKED by Vercel SSO preview-protection.
  Workaround: dashboard → Settings → Deployment Protection → off,
  lub merge feat/style-heist → main (prod URL otwarta).

Co się tu nauczyłem (1 zdanie): "design system as constraints, not goals" —
Zalando ma 7 kolorów i 2 wagi czcionek; nie chodziło o "skopiowanie wszystkiego",
tylko o wybranie *jednej sekcji* (ProductCard) i konsekwentne zastosowanie
constraintów. Tradeoff: literal token-copying (np. ZalandoSans) vs adaptacja
przez fallback (Inter Variable / Roboto Flex) — to nie czystość brandu, to
*language brandu*.

Notes/HITL trail: .aiph2/side-quest-style-heist/notes.md +
.aiph2/side-quest-style-heist/hitl-log.md.
```

## Co zrobić ręcznie

1. Otwórz https://questlog.aiproductheroes.pl/
2. Znajdź drawer Side Quest 3.1 Style Heist
3. Wklej powyższe submission text
4. Załącz: PR feat/style-heist URL + DESIGN.md raw URL + before/after PNGs (jeśli zrobisz)
5. Submit; powiedz mi submission URL + timestamp do uzupełnienia tu

## Pola do uzupełnienia po submitcie

- **Submission URL:** TBD
- **Timestamp:** TBD
- **XP awarded:** TBD (zwykle +100 dla SQ)

## Załączniki rekomendowane

- DESIGN.md raw: https://github.com/lipka-clazzpl/fash-n-feshyn/blob/feat/style-heist/DESIGN.md
- ProductCard diff: https://github.com/lipka-clazzpl/fash-n-feshyn/blob/feat/style-heist/src/components/product-card.tsx
- before.png / after.png — jeśli zrobisz manual CMD+SHIFT+5 i wkleisz do `.aiph2/side-quest-style-heist/`
