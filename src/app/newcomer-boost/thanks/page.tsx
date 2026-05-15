import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zarezerwowane ✓ — Newcomer Boost · fash-n-feshyn",
  description: "Twoja rezerwacja 100 PLN BOOST jest zapisana.",
};

export default function ThanksPage() {
  return (
    <main className="bg-white text-black">
      <section className="max-w-2xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-[#DA0410] mb-4">
          Status: zarezerwowane
        </p>
        <h1 className="text-[32px] md:text-[44px] font-normal leading-tight text-black mb-6">
          Zarezerwowane{" "}
          <span aria-hidden className="text-[#5C6169]">
            ✓
          </span>
        </h1>
        <p className="text-[16px] md:text-[18px] leading-7 text-black/85 mb-10 max-w-xl mx-auto">
          Skontaktujemy się gdy uruchomimy program{" "}
          <strong className="font-semibold">Newcomer Boost</strong> (pilot
          sierpień 2026). Pierwsze 100 osób na liście dostanie kod aktywacyjny
          mailem.
        </p>

        <div className="border-t border-[#D2D8DD] pt-10 text-left">
          <h2 className="text-[20px] font-semibold mb-4">Co dalej</h2>
          <ol className="space-y-3 text-[16px] leading-6 text-black">
            <li>
              <strong>1.</strong> Otrzymasz potwierdzenie mailem na adres,
              który podałeś.
            </li>
            <li>
              <strong>2.</strong> Gdy ruszymy w sierpniu — wyślemy kod do
              aktywacji 100 PLN budżetu w Twoim panelu sprzedawcy.
            </li>
            <li>
              <strong>3.</strong> Kod ważny 60 dni. Wystartuj Promoted
              Listings — koszt reklam idzie z budżetu, nie z karty.
            </li>
          </ol>
        </div>

        <div className="mt-12">
          <Link
            href="/newcomer-boost"
            className="text-[14px] text-[#5C6169] underline underline-offset-4 hover:text-black"
          >
            ← Wróć na stronę programu
          </Link>
        </div>
      </section>
    </main>
  );
}
