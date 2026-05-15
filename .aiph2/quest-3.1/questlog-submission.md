# Q3.1 Spec Forge — questlog submission

## Tryb upload: MANUAL (per HITL H31e, 2026-05-15)

User wkleja do questlog ręcznie. Poniżej paste-ready text.

## Submission text (paste-ready)

```
Quest 3.1 — Spec Forge ✅ (spec-checker 10/10 both)

Repo: https://github.com/lipka-clazzpl/fash-n-feshyn (fork strzalex/fashion-hero-shop)
PR z deliverables: https://github.com/lipka-clazzpl/fash-n-feshyn/pull/1
Stack: Next.js 16 + React 19 + Tailwind v4 + shadcn/ui

Chosen Assumption Test (z Q2.4 OST): A2.1.3 — Mini-RCT propensity-matched dla S2.1 Free 100 PLN Promoted Listings credit at activation. Revenue-side, p<0.10 gate.

PROJECT CONFIG (291 słów, wariant Strict, 5 NEVER + 3 ASK FIRST):
.aiph2/quest-3.1/project-config.md
Propagated do CLAUDE.md w forku (zastępuje single-line @AGENTS.md).

FEATURE SPEC (~188 prose words, 4 ACs):
.aiph2/quest-3.1/feature-spec.md
ACs: badge ≤1s, ad-spend deduct + warning, events.json schema z arm tagging,
deterministic hash(seller_id)%2 split.

SPEC-CHECKER ITERATION TRAIL (run 1 → run 2):
.aiph2/quest-3.1/spec-checker-runs.md

Run 1: PC 8/10 (Examples 0/2 — brak good/bad), FS 9/10 (Budget 1/2 — 211w wc).
Fix 1: dodane good/bad dla 3 rules w PC.Fix 2: trim w FS do 188 prose words.
Run 2: PC 10/10, FS 10/10 — READY.

Co się tu nauczyłem (1 zdanie): rubric spec-checker (5 kryteriów × 0/1/2) jest
*cheap* — można w 30 sek policzyć dla dowolnego specu i wiedzieć gdzie się
sypie; najczęstsze 0 to Examples, najczęstsze 1 to Budget (przez wc -w
overcount na backtick tokenach).

HITL gates: H0a-H0g, H31a-H31e (przykrycie w
.aiph2/setup/hitl-log.md + .aiph2/quest-3.1/hitl-log.md).

Plan: learn-agent/specs/w3-quests-walkthrough.md (parent repo).
```

## Co zrobić ręcznie (cheatsheet dla user'a)

1. Otwórz https://questlog.aiproductheroes.pl/
2. Znajdź drawer dla Quest 3.1 Spec Forge (w sekcji W3D1 Prototype)
3. Wklej powyższy submission text w pole submission
4. Załącz linki: PR URL + repo URL + Vercel prod URL (https://fash-n-feshyn.vercel.app)
5. Kliknij Submit
6. Skopiuj submission URL + timestamp i powiedz mi tutaj — zapiszę do tego pliku

## Pola do uzupełnienia po submitcie

- **Submission URL:** TBD
- **Timestamp:** TBD
- **XP awarded:** TBD (powinno być +150 wg drawera Q3.1)
- **Screenshot:** opcjonalnie, jeśli chcesz mieć dla cards/learning artifacts

## Załączniki (do wzmianki w submission, jeśli pole pozwala)

- `https://fash-n-feshyn.vercel.app` — live deploy (zawiera fork-templatka, nie pretotyp jeszcze; ten przyjdzie w Q3.2)
- `https://github.com/lipka-clazzpl/fash-n-feshyn/pull/1` — PR z PC + FS + spec-checker trail
- `https://github.com/lipka-clazzpl/fash-n-feshyn/blob/feat/aiph2-setup/.aiph2/quest-3.1/project-config.md` — raw PC
- `https://github.com/lipka-clazzpl/fash-n-feshyn/blob/feat/aiph2-setup/.aiph2/quest-3.1/feature-spec.md` — raw FS
- `https://github.com/lipka-clazzpl/fash-n-feshyn/blob/feat/aiph2-setup/.aiph2/quest-3.1/spec-checker-runs.md` — iteration journey
