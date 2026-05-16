# Q3.2 HITL log

## H32a — Pretotyp type: Smoke

- **Decyzja (2026-05-15):** Smoke test (landing → CTA → /thanks counter).
- **Alternatywy:** Interactive Mock (klikalny seller panel z fake balance), WoZ (manual processing each click).
- **Tradeoff:** Smoke = najtańsze "czy w ogóle warto budować"; Mock testuje *usability* (premature przed desirability); WoZ wymaga real newcomerów (premature pre-build).
- **Co się tu uczę:** W stage'u "pre-build" zawsze zaczynamy od najtańszego sygnału. A2.1.3 jest *causation* test = potrzebuje real infra, ale Smoke z proxy `CTA click` daje pierwszy go/no-go *bez budowania niczego*.

## H32c — Thresholds + mechanizm: Vercel Analytics CTR, ≥30%/100 success, <10%/100 fail

- **Decyzja iteracja 1 (Formspree + 10% form-submission rate):** scrapped po user feedback "to dla zalogowanych".
- **Decyzja iteracja 2 (Vercel Analytics + 30% CTR):** in-app context (zalogowani newcomerzy znają już platformę) → friction lower → threshold higher.
- **Co się tu uczę:** Mechanism wpływa na threshold *kalibrację*. 10% form-submission to healthy, 10% click-rate to kill-signal (no friction = expect higher CTR).

## H32b — Build scope: /newcomer-boost dedicated route

- **Decyzja (2026-05-15):** Dedykowana ścieżka `/newcomer-boost` (nie override `/`).
- **Tradeoff:** Override `/` = max ekspozycja ale łamie templatka demo; dedicated = scoped + shareable link.
- **Co się tu uczę:** "Cienka sekcja" w pretotypie = preferuj *additive* (nowy route) nad *destructive* (override istniejący route). Łatwiej cofnąć.

## H32d — Vercel verify: 5 iteracji copy

- **Iter 1:** "Wall of text" feedback → restructured hero do 2-col + 3-up stats + "Jak to działa" + dark CTA repeat.
- **Iter 2:** "To dla zalogowanych" → strip Formspree, single CTA click.
- **Iter 3:** "Tej funkcjonalności nie ma jeszcze" → "Aktywuj" → "Złóż wniosek", thanks: "Wniosek przyjęty" (no fake activation claim).
- **Iter 4:** "Look and feel całej platformy" → strip white/black Zalando, restore cream-charcoal.
- **Iter 5:** "Newcomer odejdzie za 3 miesiące" → drop "Sierpień" future-promise, urgency: "aktywacja w 24-48h" + immediate-review framing.
- **Iter 6 (2026-05-16):** "Wizard-of-Oz creep" → revert do honest Smoke framing (baseline 9035a60) + tighten launch-window do "czerwiec 2026" (decyzja B z planu `specs/newcomer-boost-restore-smoke-honesty.md` — rozwiązuje iter-5 churn concern bez kłamania o dostarczeniu) + fix metadata /thanks ("Aktywowane" → "Zapisane na listę") + drop unsourced "200-400 wyświetleń" stat + Polish copy pass (anglicyzmy out: `newcomer`→`początkujący`, `Promoted Listings`→`promowane oferty`, `listingów`→`ofert`; voice consistency: `ruszamy`/`damy Ci znać` → `ruszymy`/`daj nam znać` w bottom CTA per user feedback "ruszymy w czerwcu nie ruszamy" + "Daj nam znać, że tego chcesz" — sygnał intent zamiast pasywnego oczekiwania; symbole→tekst: `≤ 3 mies.`→`do 3 mies.`, `+ 5 listingów`→`i 5 ofert`, `±2 tyg.`→`plus-minus 2 tygodnie`). Hero H1 order zostawiony ("Twój pierwszy miesiąc" before "100 PLN" — user feedback: czulsze). CTR prawdopodobnie spadnie vs iter 5 — *pożądane* (uczciwy desirability signal).
- **Co się tu uczę:** Smoke pretotyp copy ma 3 osie pułapek: (1) honesty (nie kłam o value delivery), (2) urgency (match user pain timeline), (3) brand consistency (look&feel platformy). Każda iteracja user feedback'u testowała inną oś. **Iter 5 lesson (poprawione w 6):** real concern (3-mies. churn) trzeba rozwiązać przez tightening wait-window (12 tyg → 4 tyg) lub scarcity ("pierwsze 100 zgłoszeń"), NIE przez fake SLA dostarczenia. Honesty axis bije urgency axis gdy wchodzą w konflikt — inflated CTR = false positive na go/no-go decision z A2.1.3. **Side-lesson revert:** "revert do baseline" nie znaczy bezmyślne cofnięcie — 9035a60 miał własne bugi (math symbols, anglicyzmy, voice "ja"/"my" mix). Fix-the-original-too tam gdzie original był pre-mature.

## H32e — Circle Arena: MANUAL paste + ja wybieram feedback

- **Decyzja (2026-05-15):** Manual paste + user wybiera + pisze feedback samodzielnie.
- **Alternatywy:** Auto-post via `using-circle-courses` skill (browser MCP, Circle SPA risk); pomoc draftować feedback z scan'em ostatnich 3-5 prototypów innych.
- **Co się tu uczę:** Wczesna konwencja "manual paste" (H31e Q3.1) propaguje się — user-driven posting daje mu *kontrolę* + browser-automation ryzyko nie jest godne dla 3-4 posty/quest. Manual paste jest *boring* ale skalowalny.

## H32f — Q3.2 questlog upload: MANUAL paste

- **Decyzja:** MANUAL paste (per H31e precedent).
- **Output:** `questlog-submission.md` z paste-ready text + lista załączników.
