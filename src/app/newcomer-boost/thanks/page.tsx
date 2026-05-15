import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aktywowane ✓ — Newcomer Boost · panel sprzedawcy",
  description: "Twój BOOST został aktywowany.",
};

export default function ThanksPage() {
  return (
    <main className="bg-cream-light text-charcoal">
      <div className="border-b border-cream-dark bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray">
            Panel sprzedawcy · Nadchodzące programy · BOOST
          </p>
        </div>
      </div>

      <section className="px-4 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray mb-5">
            Status · Zapisany na listę
          </p>
          <h1 className="text-[36px] md:text-[44px] font-normal text-charcoal mb-5 leading-[1.05]">
            Zapisane na listę ✓
          </h1>
          <p className="text-[16px] md:text-[18px] leading-7 text-charcoal/85 mb-12 max-w-xl mx-auto">
            Wpisaliśmy Cię na listę oczekujących programu{" "}
            <span className="font-medium text-charcoal">Newcomer Boost</span>.
            Damy znać gdy ruszamy (sierpień 2026 ±2 tyg.) — pierwsze 100 osób
            dostanie kod aktywacyjny.
          </p>

          <div className="bg-white border border-cream-dark rounded-lg p-6 md:p-8 text-left max-w-xl mx-auto mb-10">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray mb-4">
              Co dalej
            </h2>
            <ol className="space-y-4 text-[15px] leading-6 text-charcoal">
              <li className="flex gap-3">
                <span className="font-medium text-charcoal/60 shrink-0">01</span>
                <span>
                  Czekamy aż uruchomimy program (sierpień 2026, plus-minus
                  2 tygodnie).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-charcoal/60 shrink-0">02</span>
                <span>
                  Damy znać w panelu i mailem — z kodem aktywacyjnym 100 PLN.
                  Pierwsze 100 osób na liście.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-charcoal/60 shrink-0">03</span>
                <span>
                  Po aktywacji kod ważny 60 dni. Wystartujesz Promoted
                  Listings — koszt reklam z budżetu, nie z karty.
                </span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/newcomer-boost" className="btn-cta-outline inline-flex !text-[13px]">
              ← Wróć do programu
            </Link>
            <Link href="/" className="btn-cta inline-flex !text-[13px]">
              Panel sprzedawcy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
