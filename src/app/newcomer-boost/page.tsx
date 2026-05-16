import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "100 PLN do reklam — Newcomer Boost · panel sprzedawcy",
  description:
    "Bezpłatny budżet na promowanie ofert dla początkujących sprzedawców (pierwsze 3 miesiące). 60 dni na wykorzystanie.",
};

export default function NewcomerBoostPage() {
  return (
    <main className="bg-cream-light text-charcoal">
      {/* Breadcrumb — implies seller panel context */}
      <div className="border-b border-cream-dark bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray">
            Panel sprzedawcy · Nadchodzące programy
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray mb-5">
            Nowy program dla początkujących sprzedawców · Czerwiec 2026
          </p>
          <h1 className="text-[36px] md:text-[48px] font-normal text-charcoal mb-6 leading-[1.05]">
            Twój pierwszy miesiąc.<br />100 PLN na reklamy.
          </h1>
          <p className="text-[16px] md:text-[18px] leading-7 text-charcoal/85 mb-10 max-w-2xl mx-auto">
            Pierwsze 30 dni dla sprzedawcy są najtrudniejsze — Twoich ofert
            nikt nie znajduje. Uruchamiamy program{" "}
            <strong className="font-medium text-charcoal">Newcomer Boost</strong>{" "}
            w czerwcu 2026:{" "}
            <strong className="font-medium text-charcoal">100 PLN budżetu</strong>{" "}
            na promowane oferty dla pierwszych 100 zgłoszeń. Zapisz się —
            damy Ci znać gdy ruszymy.
          </p>

          {/* Primary CTA — click-to-activate */}
          <Link
            href="/newcomer-boost/thanks"
            prefetch={false}
            className="btn-cta inline-flex !text-[13px] !px-10 !py-3.5"
          >
            Zapisz się na BOOST
          </Link>
          <p className="text-[12px] text-warm-gray mt-4">
            Jedno kliknięcie · Zero zobowiązań · Zapisz się na listę
          </p>
        </div>
      </section>

      {/* 3-up stats — Allbirds-templatka section pattern */}
      <section className="bg-cream border-t border-b border-cream-dark px-4 md:px-8 lg:px-12 py-12 md:py-14">
        <div className="max-w-5xl mx-auto">
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray mb-2">
                Budżet
              </dt>
              <dd className="text-[36px] font-normal text-charcoal mb-1 leading-none">
                100 PLN
              </dd>
              <p className="text-[13px] leading-5 text-warm-gray mt-2">
                na promowane oferty — bez karty
              </p>
            </div>
            <div className="md:border-l md:border-r md:border-cream-dark md:px-8">
              <dt className="text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray mb-2">
                Wymagania
              </dt>
              <dd className="text-[36px] font-normal text-charcoal mb-1 leading-none">
                do 3 mies.
              </dd>
              <p className="text-[13px] leading-5 text-warm-gray mt-2">
                aktywne konto i 5 ofert
              </p>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray mb-2">
                Ważność
              </dt>
              <dd className="text-[36px] font-normal text-charcoal mb-1 leading-none">
                60 dni
              </dd>
              <p className="text-[13px] leading-5 text-warm-gray mt-2">
                od momentu aktywacji
              </p>
            </div>
          </dl>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[24px] md:text-[28px] font-normal text-charcoal text-center mb-10">
            Jak to działa
          </h2>
          <ol className="space-y-6 max-w-xl mx-auto">
            <li className="flex gap-5">
              <span className="text-[14px] font-medium text-charcoal/60 mt-0.5 shrink-0 w-6">
                01
              </span>
              <div>
                <p className="text-[15px] font-medium text-charcoal mb-1">
                  Klikasz &quot;Zapisz się&quot;
                </p>
                <p className="text-[14px] leading-6 text-warm-gray">
                  Trafiasz na listę oczekujących. Pierwsze 100 zgłoszeń
                  dostaje kod aktywacyjny gdy ruszymy w czerwcu 2026.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="text-[14px] font-medium text-charcoal/60 mt-0.5 shrink-0 w-6">
                02
              </span>
              <div>
                <p className="text-[15px] font-medium text-charcoal mb-1">
                  Wystarczy, że Twoje konto ma do 3 miesięcy i 5 aktywnych ofert
                </p>
                <p className="text-[14px] leading-6 text-warm-gray">
                  Sprawdzamy automatycznie z panelu. Brak dodatkowych
                  formularzy.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="text-[14px] font-medium text-charcoal/60 mt-0.5 shrink-0 w-6">
                03
              </span>
              <div>
                <p className="text-[15px] font-medium text-charcoal mb-1">
                  Gdy ruszymy — uruchomisz promowane oferty z budżetem BOOST
                </p>
                <p className="text-[14px] leading-6 text-warm-gray">
                  Wyniki śledzisz w panelu reklam — koszt wyświetlenia
                  zależy od kategorii i konkurencji.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA repeat — bottom of page */}
      <section className="bg-charcoal text-white px-4 md:px-8 lg:px-12 py-12 md:py-14">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.6px] text-white/60 mb-4">
            Jedno kliknięcie · Lista oczekujących
          </p>
          <h2 className="text-[24px] md:text-[28px] font-normal mb-6">
            Wpisz się — daj nam znać, że tego chcesz.
          </h2>
          <Link
            href="/newcomer-boost/thanks"
            prefetch={false}
            className="btn-cta-outline !text-[13px] !px-10 !py-3.5 inline-flex !bg-white !text-charcoal !border-white hover:!bg-cream-light"
          >
            Zapisz się na BOOST
          </Link>
        </div>
      </section>
    </main>
  );
}
