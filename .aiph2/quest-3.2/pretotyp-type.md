# Q3.2 — Pretotyp type (HITL H32a)

## Decyzja (2026-05-15): **Smoke test**

Landing page z CTA "Claim 100 PLN BOOST" → email/click collect.

## Mapping ryzyko → typ (z W3D1 transcript)

| Pretotyp type | Mierzy | Adekwatność dla A2.1.3 |
|---|---|---|
| **Smoke** | desirability (czy chcą) | ✅ **PICK** — A2.1.3 zakłada że newcomerzy *chcą* credit; jeśli nie reagują na ofertę, cały test moot |
| Interactive Mock | usability (czy zrozumieją flow) | wartościowy *po* Smoke, jeśli Smoke pozytywny |
| WoZ | value delivery (czy mechanizm działa ręcznie) | premature na pre-build stadium; wymaga prawdziwych newcomerów |

## Justyfikacja (1 zdanie)

Pretotyp Smoke jest *jedyną* sensowną cięciem A2.1.3 na pre-build stadium: testuje *czy w ogóle warto budować* infrastruktrurę credit'u — jeśli ≥10% wizyt z target audience nie klika "Claim", *real RCT* z 200 sellerami jest stratą czasu (selection effect: tylko *zainteresowani* by się zapisali, i to ich już znamy).
