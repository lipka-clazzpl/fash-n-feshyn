# Q3.2 Success/Failure Thresholds (HITL H32c — locked 2026-05-15)

**Reguła "thresholds before test":** ten plik MUSI mieć mtime *wcześniejszy* niż pierwszy commit na `feat/q32-*` branchu. Validator sprawdzi via `git log --reverse feat/q32-*` vs `stat .aiph2/quest-3.2/success-thresholds.md`.

## WHAT to count

**Numerator:** unikalne unique visits do `/thanks` page po form submit ("Claim 100 PLN BOOST" → name + email → POST do Formspree → redirect `/thanks`).
**Denominator:** unikalne unique visits do `/` (homepage landing pretotypu).

Conversion rate = `unique /thanks pageviews / unique / pageviews`.

## SUCCESS threshold

**≥10 claims / 100 unique visits** = **10% conversion rate**.

Konsumencki landing zazwyczaj konwertuje 1-3%. 10% = **wyraźny pozytywny sygnał** — newcomer audience reaguje na ofertę 100 PLN credit, A2.1.3 RCT wart budowy. Jeśli osiągniemy w *first 7 days* → decyzja "build infra credit balance + onboarding flow".

## FAILURE threshold

**<3 claims / 100 unique visits** = **<3% conversion rate**.

<3% = poziom *organic noise* (większość konsumenckich landings) → newcomerzy nie reagują na ofertę → A2.1.3 RCT moot (nie ma kogo testować). Decyzja "kill credit-based path, pivot do innych S2.x lub O1 (visibility-side)".

## Strefa "almost" (3-10%)

3-10% = ambiguous. Decyzja w tym oknie wymaga:
1. Wydłużenia sample size do 200 visits (drugie 7 dni)
2. Re-analiza wording CTA (może "100 PLN" jest słabe vs "FREE")
3. Audit traffic source: czy to *newcomer-like* audience czy random visitors?

Nie startujemy *budowania* w "almost" — czekamy na konkretny sygnał.

## Counting mechanism: Formspree + Vercel Analytics `/thanks`

**Formspree:** free tier 50 submissions/m-c. Form posts `name`, `email`, `motivation` (textarea optional) do `https://formspree.io/f/<form-id>` z `redirect` param na `/thanks`. Emails dostępne w Formspree dashboard (export CSV).

**Vercel Analytics (`@vercel/analytics`):** counts pageviews. Free tier 2,500 events/m-c. Liczy `/thanks` i `/` unique visits. Per Vercel dashboard "Pages" view.

## Tradeoffs vs. alternatywy (zapisane w HITL H32c.1)

- **Plausible Analytics + click event:** lepsza precyzja (event tracking) ale wymaga subscription (€9/m po trial) + DNS setup. Pomijamy dla pretotypu.
- **mailto:** zero infra ale wymaga klienta mailowego u userów + brak email-capture w dashboard. Pomijamy.
- **API route + Vercel KV:** narusza PC NEVER "no backend/DB". Pomijamy.

## Bias acknowledged

- **Selection bias:** ludzie którzy zajrzą na landing są *zainteresowani* zanim cokolwiek zobaczą — to nie reprezentatywna próba newcomer sellers. Threshold 10% zakłada że mamy *traffic neutralny* (np. social ads bez "credit" w copy), nie *organic z "free money" keywordów*.
- **Sample size 100 nie daje statystyki konfederącej:** to *signal sufficiency*, nie *causal certainty*. To pretotyp celowo — celem jest *go/no-go*, nie *p-value*.
- **Formspree dashboard sees PII:** name + email landują u third-party. Acceptable dla pretotypu (zero rzeczywistych transakcji), ale: dodać 1-zdaniowy disclaimer w landing "wysyłamy do skrzynki pocztowej; usuń kiedy chcesz".

## Locked-in checkpoint

This file mtime = `2026-05-15 ~14:30 PL` (BSD `stat -f %m` will record).
First commit on `feat/q32-*` branch MUST be after this.

## Co się tu uczę

- **Thresholds before test:** decyzja "10% vs 5%" przed buildem ≠ ta sama decyzja po buildzie. Po buildzie *każdy wynik* wygląda jak "może wystarczy" (sunk cost). Locked threshold = self-binding.
- **Mechanism tradeoff = pretotyp cost vs measurement quality:** Formspree to gray middle (free 50/m-c, ale third-party PII). Plausible to high-quality measurement w cenie subscription. Mailto: to zero-cost ale zero-signal. Pretotyp trzeba walidować na *najsłabszym mierzalnym signal'u* który da decyzję — *strong signal nie jest wymagany*.
- **Failure threshold mocniejszy niż success:** "kill if <3" jest *aktywnym sygnałem* — przeciwieństwo "fail to confirm". Bez kill-threshold pretotyp przechodzi w "no decision" pułapkę i scheduler buduje "for completeness".
