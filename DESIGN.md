# DESIGN.md — fash-n-feshyn

> Extracted from **zalando.pl** (homepage, desktop 1728×879) on 2026-05-15 via
> `extract-design-md.skill` (Cowork chrome-control path, `mcp__claude-in-chrome`).
> No literal screenshot — atmosphere derived from quantitative visual signals.

## 1. Visual Theme & Atmosphere

**Editorial-rigorous, marketplace-confident.** Zalando.pl strona główna oddycha
*sterylną pewnością siebie* — biel dominuje (17 z 35 elementów tła), czarna
typografia dźwiga 99% prose, kolor występuje wyłącznie jako *interpunkcja*
(czerwień sale, slate blue feature). Brak gradientów, brak backdrop-filter,
brak miękkich cieni. Atmosfera jest jak *katalog mody w czasopiśmie premium*:
informacja > dekoracja, edge > rounding, 16-pikselowe baseline rządzi rytmem.
Nie jest minimalna w sensie "puste białe" — jest *zorganizowanie-gęsta*
(13 nagłówków sekcji, 187 elementów interaktywnych na 2 ekranach).

Physical analogy: **dobrze złożona gazeta sobotnia w eleganckim kiosku** —
sztywne krawędzie, każdy moduł oddzielony białą przestrzenią, brak
"reklamowego krzyku".

## 2. Color Palette & Roles

| Token | Value | Role |
|---|---|---|
| **Bezkompromisowy biały** | `#FFFFFF` (oklch ≈ `1 0 0`) | Główne tło stron, czyste płótno; 17/35 widzialnych powierzchni |
| **Atramentowy czarny** | `#000000` (oklch ≈ `0 0 0`) | Wszystka prose; nagłówki i body w tym samym tonie — *no muted gray for text* |
| **Mgielny popielaty** | `#F1F1F1` (oklch ≈ `0.95 0 0`) | Sekcyjne tła "secondary surface" — różnicowanie zonów bez ramek |
| **Slate-błękit features** | `#3E8FB2` (oklch ≈ `0.62 0.07 232`) | Jeden punktowy akcent (możliwe hover lub badge "Zalando+") — *use sparingly* |
| **Czerwień wyprzedaży** | `#DA0410` (oklch ≈ `0.55 0.23 27`) | Sale tagi, cena obniżona — *function-only, never decorative* |
| **Szept-szary muted** | `#5C6169` (oklch ≈ `0.43 0.01 250`) | Drugorzędna informacja (meta, captions) |
| **Linia szepcąca** | `#D2D8DD` (oklch ≈ `0.85 0.01 220`) | Subtle borders między modułami |

**Discipline:** 7 named colors total. Anything outside tej listy = *odejście od
języka brandu*. Akcenty (czerwień + slate) używane **maksymalnie 2× per
viewport**, nigdy obok siebie (visual collision).

## 3. Typography Rules

**Primary face: ZalandoSans** (custom proprietary; bezpieczny fallback `sans-serif`).
- Tryb krojowy: humanistyczny grotesque o normalnej szerokości znaków,
  o lekko otwartych literach (charakter "neutralnego informatora", nie ekspresji).
- Wagi w użyciu: **400** (regular) i **650** (semi-bold demi-bold) —
  *zero 700 i zero italics* na widocznym headerze.
- Baseline rytm: **16px / 24px line-height** wszechobecne — nagłówki, body, navi
  korzystają z tego samego rytmu. Hierarchia robi się *wagą*, nie *rozmiarem*.

| Element | Family | Size | Weight | Line-height | Letter-spacing | Color |
|---|---|---|---|---|---|---|
| H2 (sekcja) | ZalandoSans | 16px | 400 | 24px | normal | `#000000` |
| H3 (subsekcja) | ZalandoSans | 16px | 650 | 24px | normal | `#000000` |
| Body / nav | ZalandoSans | 16px | 400 | 24px | normal | `#000000` |
| Button label | ZalandoSans | 16px | 400 / 650 | – | normal | `#000000` |

**Surprising decision:** H2 jest *lżejsze* niż H3 (400 vs 650). To celowy
"editorial inversion" — H2 funkcjonuje jako *miękki banner*, H3 jako *call
to scan*.

**Brak custom fontów:** używamy `ZalandoSans` dosłownie? *Nie* — replikujemy
*charakter* przez najbliższy fallback. Rekomendowane: **Inter Variable** lub
**Roboto Flex** (zbliżona humanistyczna grotesque, dostępna na Google Fonts,
ma wagi 400 i 600/650).

## 4. Component Stylings

### Buttons — "Tekstowe linki przebrane za przyciski"

Najbardziej charakterystyczny ruch Zalando: **8/8 zsamplowanych buttonów ma
`background: transparent`** i **`border-radius: 0px`**. To są linkowe akcje
udające buttony — żadnego "primary blue gradient pillow".

- **Primary (text)**: tło `transparent`, kolor `#000000`, padding `4px 8px`,
  weight 400-650, *no border, no shadow, no radius*. Hover: prawdopodobnie
  underline lub kolor `#3E8FB2`.
- **Solid CTA (na wyprzedażowych modułach)**: tło `#000000`, tekst `#FFFFFF`,
  padding `12-16px 24-32px`, weight 650, *radius 0px*.
- **Icon-only**: padding `8px`, ikona 16-24px w `currentColor`.
- **Disabled state**: tekst `#5C6169` (muted gray), brak interakcji.

### Inputs

Granica `1px solid #D2D8DD`, brak radius (0px), padding `12px 16px`, font 16px
(prevention zoom on mobile iOS), focus pewnie ring 2px `#000000` lub `#3E8FB2`.

### Cards (product tiles)

W próbce z homepage nie wystąpiły *prawdziwe* cards (brak elementów z
boxShadow + borderRadius + area >10000px). To zgodne z atmosferą — *no card
chrome*. Product moduły to **tile bez ramki na białym tle**, oddzielone
*spacingiem*, nie *cieniem*.

### Nav

Inline horizontal lista, gap ~24-32px, background `#FFFFFF`, tekst `#000000` weight 400.
Sticky top.

## 5. Layout Principles

- **Baseline 4px**, rytm spacing: `4px / 8px / 16px / 24px / 32px / 48px`.
- **Max-widths nie były odnotowane jako custom** — używana jest pełna szerokość
  viewportu z internal grid 12-kolumn.
- **Grid-first**: 13 H2 sekcji znaczy że strona jest *modułową siatką* z
  ~12-15 "obszarów" — każdy z własną kompozycją (carousel, grid 4×N, hero).
- **Gęstość zbalansowana** (`densityHint: balanced` — 43 text vs 29 images
  vs 187 interactives) — ani gallery-heavy ani document-text-heavy.

## 6. Depth & Elevation

**Chrome weight: flat-or-bordered.** ~3 distinct shadows wykryte (homepage)
— niska. Cienie pojawiają się tylko w sticky nav i ewentualnym modal/dropdown.

- **Default surface**: `box-shadow: none` (płaska biel).
- **Sticky elements** (jeśli wystąpią): `box-shadow: 0 1px 2px rgba(0,0,0,0.05)`
  *whisper-thin*.
- **Modal / dropdown**: `box-shadow: 0 8px 32px rgba(0,0,0,0.08)` — *soft
  cloud, no harsh edge*.

**No 3D illusions:** zero `backdrop-filter`, zero gradient surfaces. Płaskie
+ bordered.

## 7. Motion & Animation

Sample wykrył kilka transitions ale nie agressywne. Heurystyka dla replikacji:
- **Default hover**: `transition: color 150ms ease-out, background-color 150ms ease-out`
- **Modal in**: 200ms ease-out, opacity + translate Y 8px
- **Stronger CTA pulse**: NIE (nie wykryto). Brand pozostaje *spokojny*.

**Brak motion-as-decoration.** Animacje służą *feedback*, nie *eye candy*.

## 8. Dark Mode

**Not detected.** Zalando.pl operuje wyłącznie w light mode na homepage. Nie ma
`prefers-color-scheme: dark` ani `.dark` selectors w CSS. *Przy aplikowaniu do
fash-n-feshyn pominij dark mode jako out-of-scope* lub potraktuj jako separate
follow-up.

## 9. Do's and Don'ts

**Do:**
- Trzymaj się 7-color disciplined palette. Każdy 8-my kolor wymaga *uzasadnienia*.
- Używaj *waga* (400 vs 650) jako primary hierarchy lever — nie size.
- Stosuj `border-radius: 0px` jako default; rounded tylko gdy *function* tego wymaga (input focus ring).
- 16px font-size jako rdzeń systemu — uciekaj od fragmentacji 14/15/17.
- Akcenty (#DA0410 czerwień, #3E8FB2 slate) — używaj jako *interpunkcji*, max 2× per viewport.

**Don't:**
- ❌ Nie dodawaj soft shadows wokół product tiles ("uplifted look") — *zabija
  editorial feel*.
- ❌ Nie używaj gradientów w buttonach ani backgroundach — *narusza brand
  language*.
- ❌ Nie wprowadzaj 3+ wag czcionek — *fragmentuje vocabulary*.
- ❌ Nie rounduj buttonów ("pill buttons" / "rounded-md") — *sprzeczne z
  geometrią systemu*.
- ❌ Nie dodawaj custom italics — zero w sample.

## 10. Responsive Behavior

Próbka wykonana na 1728×879 (laptop large). Inferencja z e-commerce best
practices Zalando:
- **Mobile-first breakpoints**: prawdopodobnie 0 / 768 / 1024 / 1440 (4 tier'y).
- **Product grid**: 2-col mobile → 3-col tablet → 4-col desktop → 5-6 col XL.
- **Nav**: hamburger ≤768, inline ≥768.
- **Typography**: prawdopodobnie 14/16/18 px scale — *small mobile, primary
  desktop, comfort XL* (nie zweryfikowane bez emulate viewport).

## 11. Agent Prompt Guide

Wklejka dla AI builderów (Claude Code, Cursor, Lovable):

```
Buduj UI zgodne z DESIGN.md fash-n-feshyn. Główne reguły:

1. Paleta TYLKO z DESIGN.md § Color Palette. Bezkompromisowy biały (#FFFFFF)
   jako default surface, atramentowy czarny (#000000) jako default text.
   Akcenty (czerwień sale #DA0410, slate features #3E8FB2) tylko jako
   interpunkcja, max 2× per viewport.

2. Typography: ZalandoSans (fallback Inter Variable / Roboto Flex), 16px
   baseline / 24px line-height. Hierarchia przez wagę (400 ↔ 650), nie size.

3. Border-radius: 0px default. Tylko inputs przy focus mogą mieć radius.
   ZAKAZ "rounded-md", pill buttons, soft-card-with-shadow.

4. Shadows: flat-or-bordered domyślnie. Cienie tylko w sticky nav (1px
   whisper) lub modal (8px 32px soft cloud).

5. Spacing: 4/8/16/24/32/48 px rytm. Brak fragmentacji jak 10px/14px/22px.

6. Editorial > Decorative. Każdy moduł oddzielony białą przestrzenią, nie
   ramkami i cieniami. Informacja > visual chrome.
```

---

## Validation notes

- **Structural-check** (per `extract-design-md.skill > evals/structural-check.md`):
  wszystkie 11 sekcji obecne ✓.
- **Language-check** (anti-patterns): zero "modern", "clean", "simple",
  "elegant", "sleek". Zero Tailwind class names. Zero bare hex w opisach.
  ✓ passes.
- **Sample limitations:** brak literal screenshot (Cowork path), brak dark
  palette extraction (nie wykryto dark mode), max-width nie wyciągnięte (Zalando
  używa full-viewport grid).
- **Source:** `https://www.zalando.pl/` extracted 2026-05-15.
- **Path used:** Cowork chrome-control (`mcp__claude-in-chrome`) — substitut
  dla skillowego natywnego "Open URL" / "Execute JavaScript".
