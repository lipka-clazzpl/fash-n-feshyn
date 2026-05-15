# Q3.1 HITL log

Stub — populated as H31a..H31e gates fire.

## H31b — Project Config wariant: A (Strict)

- **Decyzja (2026-05-15):** wariant A Strict.
- **Alternatywy:** B Permissive (więcej ASK FIRST, mniej NEVER) lub Merge.
- **Tradeoff:** A → mniej tarcia po starcie (AI nie pyta o oczywistości), ale ostrzejsze guardraily; B → wolniejsze, bo AI częściej dopytuje, ale lepsze gdy chcesz mieć kontrolę w real-time.
- **Co się tu uczę:** Strict warto wybrać gdy *jest się dobrze obudzony przed klawiaturą i wolisz "odpalam i idę po kawę"*; Permissive gdy zaczynasz dzień i chcesz po małym kroku ludzkiej decyzji. Sama mechanika spec-checker rubric: Boundaries to twardy criterion — 2+ explicit "never/don't" rośnie z 1/2 → 2/2; strict variant ma 5 NEVER, permissive ma 2 → strict jest "z definicji" Bounded mocniej. Sam fakt że tak prosty test rubryczny *różnicuje* warianty jest jednym z punktów dydaktycznych spec-checker.
- **Output:** `project-config.md` (verbatim wariant A) + propagacja do `fash-n-feshyn/CLAUDE.md` (overwrite poprzedniej single-line `@AGENTS.md` — wariant A i tak kończy się `@AGENTS.md` więc reguły stacku są zachowane).

## H31a — Chosen Assumption Test confirmed = A2.1.3

- **Decyzja (2026-05-15):** "Use A2.1.3 verbatim for Q3.1 spec, scope down later for Q3.2" (zapisane też w `setup/hitl-log.md § H0g`).
- **Alternatywy które były na stole:** "Revise to thinner pretotyp-friendly test" (np. A2.1.1 redemption rate, A1.1.1 BOOST badge usability) lub "Define new test".
- **Co się tu uczę:** spec dla AI builda i scope pretotypu to *dwa różne dokumenty* — można utrzymać pełną wizję w specu i wyciąć cienki test w pretotypie. Próba zlepienia ich w jeden dokument zwykle psuje oba.
