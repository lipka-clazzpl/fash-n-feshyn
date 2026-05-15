# Side Quest Style Heist HITL log

## HSQa — Path 2: Claude Code + Chrome MCP

- **Decyzja (2026-05-15):** Path 2 (Claude Code + Chrome MCP).
- **Alternatywy:** Skip SQ entirely lub Path 2 simpler (manual copy).
- **Co się tu uczę:** Path 2 jest jedynym Claude-Code-native path; Paths 1 i 3 zakładają zewnętrzne narzędzia (Lovable / Claude Design) — automatycznie skip. To nie "wybór z 3", to "akceptacja jedynej dostępnej drogi" z transparent rationale.

## HSQb — Reference URL: zalando.pl

- **Decyzja (2026-05-15):** zalando.pl (homepage).
- **Alternatywy:** asos.com, answear.com, własny URL.
- **Co się tu uczę:** Zalando = polski fashion e-commerce z czystym design system (7 kolorów, 2 wagi czcionek, 0px radius), pasuje do FashionHero kontekstu. Wybór reference URL wpływa na *charakter* zaaplikowanego designu — answear.com dałby "premium feel", asos.com "global modern", zalando.pl "editorial-rigorous".

## HSQc — Tokens approved

- **Decyzja (2026-05-15):** "Tokeny ok, applyuj do 1 sekcji forku".
- **Stan widziany:** 7-color palette, 16px ZalandoSans, weight 400/650 inversion, 0px radius default, flat-or-bordered.
- **Co się tu uczę:** Tokens passu jeśli (a) są *konkretne* (#FFFFFF, nie "white"), (b) są *role-tagged* (sale tag, meta gray), (c) anti-patterns flagowane (np. "QUICK VIEW po angielsku" → "Podgląd"). DESIGN.md to nie listing kolorów, to *language guide*.

## HSQd — Section pick: ProductCard

- **Decyzja:** ProductCard (zamiast hero / nav / footer).
- **Powód:** ProductCard jest najbardziej *widoczny* (występuje w ProductCarousel na home, ProductGrid na collections, każdej PDP) i ma najwięcej tokens do zastosowania (typography + colors + radius + spacing).
- **Co się tu uczę:** "pick the highest-leverage section" — jeden komponent który pojawia się w 5 miejscach > 5 osobnych komponentów które pojawiają się w 1 miejscu.

## HSQe — Upload mode: MANUAL + paste-ready text

- **Decyzja (2026-05-15):** "Skip live-verify + screenshoty, jedź do upload (Recommended)".
- **Alternatywy:** Wyłącz Vercel preview-protection + zrób screenshoty + verify; lub cofnij całe SQ-apply.
- **Tradeoff:** strict-AC compliance (przepisany before/after.png) vs *trust the diff* (build clean + lint clean + token-by-token notes.md).
- **Co się tu uczę:** AC w planie ("before.png + after.png saved") to *aspirational ideal* — gdy environment-limitation blokuje literally screenshot, najlepsza ścieżka to *jawnie zadokumentować gap* w notes.md i kontynuować z innymi formami evidence (diff, build success, tokens table). To różnica między *checklist compliance* (zero-tolerance) a *spirit compliance* (zero-handwaving). Drugie wygrywa w learning context.
