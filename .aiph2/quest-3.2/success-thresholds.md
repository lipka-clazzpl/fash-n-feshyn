# Q3.2 Success/Failure Thresholds (HITL H32c — locked 2026-05-15, revised after H32d-iter pivot)

**Reguła "thresholds before test":** ten plik MUSI mieć mtime *wcześniejszy* niż pierwszy commit kodu pretotypu (`feat/q32-*`). Validator sprawdzi via `git log --reverse feat/q32-* | head` vs `stat .aiph2/quest-3.2/success-thresholds.md`.

## Context shift (2026-05-15 mid-build)

User feedback po pierwszej iteracji: pretotyp jest *dla zalogowanych newcomer sprzedawców* (in-app program), nie cold-traffic landing. Konsekwencja: zero potrzeby zbierania emaili (sellerzy już są w panelu). Conversion event = **klik "Aktywuj BOOST"**, nie form submission. Zmiana w *measurement layer*, hipoteza A2.1.3 i Outcome bez zmian.

## WHAT to count

- **Numerator:** unique pageviews `/newcomer-boost/thanks` (każde wejście = jeden CTA-click upstream).
- **Denominator:** unique pageviews `/newcomer-boost` (każdy seller który zobaczył ofertę).
- **Conversion (CTR):** `numerator / denominator`.

Mechanism: **Vercel Analytics built-in** — Free tier 2,500 events/m-c, automatycznie liczy pageviews wszystkich routes bez `@vercel/analytics` npm package (no new dep). Dashboard widoczny na vercel.com/przemek-lipkas-projects/fash-n-feshyn/analytics.

## SUCCESS threshold

**≥30 clicks / 100 unique visits** = **≥30% CTR**.

Justyfikacja: in-app banner CTR median to 5-15% (industry benchmarks dla "interesting promo banners"). Newcomer sprzedawcy są pre-qualified — wiedzą że chcą widoczności (Q2.2 Kamil K3: "500 zł, tysiąc — jeśli przyniesie zamówienia, tak"). 30%+ = **strong revealed preference**, A2.1.3 RCT wart budowy. Decyzja: build credit balance infra + onboarding flow.

## FAILURE threshold

**<10 clicks / 100 unique visits** = **<10% CTR**.

<10% CTR od *zalogowanych* sellerów którzy *już* wybrali platformę = newcomerzy *nie reagują* na "darmowy budżet". To albo:
1. Oferta nie jest atrakcyjna (100 PLN za mało? niekonkretne?)
2. Newcomerzy nie identyfikują się z "potrzebą reklam" (przeciwnie niż Q2.2)
3. Lokalizacja / copy nie trafia

Decyzja: kill credit-based path, pivot do innych S2.x lub do O1 (visibility-side bez płatności).

## Strefa "almost" (10-30%)

10-30% = ambiguous. Decyzja w tym oknie wymaga:
1. Wydłużenia sample do 200 unique visits (drugi tydzień)
2. Audit "Aktywuj" button — czy widoczny above-the-fold mobile?
3. Audit traffic source: czy *tylko* newcomers widzą? (filtr po `months_active` w panelu)
4. Re-test z mocniejszą ofertą: 100 PLN → 200 PLN (sprawdza price-elasticity)

Bez tej dodatkowej walidacji **nie startujemy real RCT** — minimal confidence że hipoteza A2.1.3 ma podstawę.

## Counting mechanism: Vercel Analytics pageviews

**Why not Formspree:** odpadło bo nie zbieramy emaili (user feedback "to dla zalogowanych"). Click-event-only mierzy desirability bez friction formularza.

**Why not @vercel/analytics package + custom event:** wymaga npm dep (`@vercel/analytics`). PC ASK FIRST: "Nowa zewnętrzna zależność". Zamiast — Vercel Analytics z pudełka liczy pageviews wszystkich routes; `/thanks` pageview *jest* proxy dla "click happened" (nikt nie wejdzie na `/thanks` bezpośrednio bez kliknięcia CTA na `/newcomer-boost`).

**Edge case:** ktoś może wpisać `/thanks` URL ręcznie i zafałszować numerator. Mitigation: w pierwszym tygodniu sprawdzić referer (Vercel Analytics ma to w event metadata). Jeśli >5% wejść na `/thanks` ma referer ≠ `/newcomer-boost`, dyskontować.

## Tradeoffs vs. alternatywy (zapisane w HITL H32c.1 iteracja 1)

- **Formspree + Vercel Analytics:** odrzucone (zalogowani sellerzy, email niepotrzebny). Plus: Formspree free tier 50/m-c limit byłby dotknięty przy >50 visits z claim'ami.
- **Plausible Analytics:** wymaga subskrypcji + DNS, overkill dla smoke.
- **API route + Vercel KV:** narusza PC NEVER "no backend". Plus: niepotrzebne complications.

## Bias acknowledged

- **In-app traffic bias:** zalogowani sellerzy widzą banner z poziomu panelu — sygnał *jest* z target audience (newcomers months ≤ 3), ale to *committed* userzy (już zainwestowali setup konta). Realny RCT będzie miał mix: committed + uncommitted newcomers.
- **CTR ≠ activation:** clicking "Aktywuj" w pretotypie *nie aktywuje* niczego — to placeholder dla wyboru do real RCT. Może być inflation w CTR z kuriozości ("co się stanie jak kliknę?").
- **Sample 100 unique visits nie daje statystyki konfederącej:** to *signal sufficiency*, nie *causal certainty*. Pretotyp celowo — go/no-go, nie p-value.

## Locked-in checkpoint

This file initial-version mtime = 2026-05-15 ~14:30 PL (przed `git checkout -b feat/q32-newcomer-boost-smoke`).
This revision mtime = 2026-05-15 ~16:30 PL (po user feedback "to dla zalogowanych").
Both before any production deploy of `/newcomer-boost`. Validator sprawdzi vs first commit timestamp w `feat/q32-newcomer-boost-smoke`.

## Co się tu uczę (revised after mid-build pivot)

- **Mechanizm liczenia ≠ design pretotypu.** Pierwsza wersja miała Formspree form bo "Smoke = email collect" było default assumption. User feedback "to dla zalogowanych" zmieniło *mechanizm* (click vs submission), nie *typ pretotypu* (nadal Smoke = desirability). Pretotyp design jest *agnostyczny* co do tego *jak* sygnał zostanie zarejestrowany — liczy się czy mierzymy *desire to convert*, nie *jakim narzędziem*.
- **Thresholds zmieniają się z mechanizmem.** Form submission rate 10% to *healthy signal*. Click rate 10% to *kill signal* (bo brak frictionu w klikaniu). Każda zmiana mechanizmu wymaga re-kalibracji threshold values.
- **Locked file mtime ratuje audit, ale revision musi zostać udokumentowana.** Update do thresholds.md *po* pierwszym buildzie jest *post-hoc rationalization risk*. Mitigation: revision sekcja explicite mówi *co* się zmieniło i *czemu* (user feedback) — bez tego cofamy się do "oh wystarczy 10%" syndrome.
- **"Reguła thresholds-before-code" jest interpretacją.** Strict: thresholds.md istniał *przed* pierwszym commitem kodu — ✓. Looser: thresholds zostały *finalized* po build-iteration — ⚠️ (rewriting after seeing build = subtle violation). Honest: documenting the revision *as a revision* (z osobną sekcją "Context shift") jest acceptable middle ground.
