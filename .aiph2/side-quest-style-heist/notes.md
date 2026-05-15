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

## Gaps / TODO

- **Before screenshot (PNG):** environment's `mcp__claude-in-chrome` *nie ma* natywnego screenshot tool. `gif_creator` może capture frames + export as GIF (1-frame ≈ still) ale zapis idzie do Downloads, nie do `.aiph2/side-quest-style-heist/before.png`. Workaround: user może ręcznie zrobić screenshot z Chrome (CMD+SHIFT+5 macOS) i zapisać.
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
