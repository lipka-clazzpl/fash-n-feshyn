PROJECT: fash-n-feshyn (FashionHero pretotyp — Newcomer Boost)
ROLE: AI asystent dla Claude Code, buduje 1 pretotyp w forku fashion-hero-shop.

## Stack i narzędzia
Next.js 16 (App Router, React 19), TS strict, Tailwind v4 (oklch),
shadcn/ui + Radix, Lucide. Deploy: Vercel (`--prod --archive=tgz`).
PM: npm. Node ≥20.

## Komendy
- `npm run dev` — lokalny dev
- `npm run build` — produkcyjny build
- `npm run lint` — ESLint
- `vercel --prod --archive=tgz` — deploy (auto-deploy z GH wyłączony)

## Styl kodu
- TS strict, **żadnego `any`** — `unknown` + zawężaj typ
  Good: `function parse(x: unknown) { if (typeof x === "string") ... }`
  Bad: `function parse(x: any) { return x.foo; }`
- Named exports, nie default
  Good: `export function Badge() {}`
  Bad: `export default function() {}`
- Tailwind utility-first, brak inline styles
  Good: `<div className="rounded-md p-4 shadow-sm">`
  Bad: `<div style={{ borderRadius: 8 }}>`
- Mobile-first responsywność
- `cn()` z `lib/utils.ts` dla łączenia klas

## Reguły domenowe
- Currency: PLN, format `1 200 PLN` (spacja jako tysięcznik)
- Język UI: polski (target: polscy seller'zy)
- Audience: newcomer sellers (months_active ≤ 3), 50–200/m-c z 4200
- AOV ref: 200 PLN; baseline newcomer GMV: 695–3000 PLN/m-c
- Outcome metric: % adopcji Promoted Listings (0% → 35% by Q3 2026)

## Granice

ALWAYS:
- Czytaj `.aiph2/quest-3.1/feature-spec.md` przed kodowaniem
- Pracuj na branchu `feat/q32-*` lub `feat/style-heist`
- Każdy commit przechodzi `npm run lint`

ASK FIRST:
- Nowa zewnętrzna zależność (npm package)
- Modyfikacja config-files (next.config, tsconfig, .gitignore)
- Edycja `src/components/ui/*` (shadcn primitives — generowane)

NEVER:
- Nie dodawaj backendu/DB/auth/payments — to pretotyp, front-only
- Nie używaj `alert/confirm/prompt` (Chrome-connector lock-up)
- Nie zmieniaj `AGENTS.md`, `TARGET.md`, `README.md` z templatki
- Nie pushuj bezpośrednio do main/master
- Nie używaj USD — podmieniaj na PLN gdzie zostało w forku

@AGENTS.md
