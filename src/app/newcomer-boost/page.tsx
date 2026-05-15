import type { Metadata } from "next";
import { ClaimForm } from "./_components/claim-form";

export const metadata: Metadata = {
  title: "100 PLN do reklam — Newcomer Boost · fash-n-feshyn",
  description:
    "Bezpłatny budżet na promowanie listingów dla nowych sprzedawców (months 1-3). 60 dni na wykorzystanie. Zarezerwuj zanim ruszymy.",
};

export default function NewcomerBoostPage() {
  return (
    <main className="bg-white text-black">
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-[#5C6169] mb-4">
          Dla nowych sprzedawców · pilot sierpień 2026
        </p>
        <h1 className="text-[32px] md:text-[44px] font-normal leading-tight text-black mb-6">
          100 PLN do reklam.
          <br />
          <span className="font-semibold">Twój pierwszy miesiąc na fashion-marketplace.</span>
        </h1>
        <p className="text-[16px] md:text-[18px] leading-7 text-black/85 mb-10 max-w-2xl">
          Pierwsze 30 dni jako sprzedawca są najtrudniejsze — Twoje produkty
          &quot;siedzą&quot; w katalogu i nikt ich nie znajduje. Daj nam wiedzieć, że
          jesteś zainteresowany — gdy uruchomimy program{" "}
          <strong className="font-semibold">Newcomer Boost</strong>, dostaniesz
          100 PLN budżetu na <span className="whitespace-nowrap">Promoted Listings</span>,
          ważne przez 60 dni od aktywacji konta.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-[#D2D8DD] p-5">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-[#5C6169] mb-2">
              Co dostajesz
            </p>
            <p className="text-[16px] leading-6 text-black">
              100 PLN do wydania na Promoted Listings — bez zaliczki, bez karty.
            </p>
          </div>
          <div className="border border-[#D2D8DD] p-5">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-[#5C6169] mb-2">
              Kto się kwalifikuje
            </p>
            <p className="text-[16px] leading-6 text-black">
              Nowi sprzedawcy z aktywnym kontem ≤ 3 miesiące i ≥ 5 listingami.
            </p>
          </div>
          <div className="border border-[#D2D8DD] p-5">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-[#5C6169] mb-2">
              Kiedy startujemy
            </p>
            <p className="text-[16px] leading-6 text-black">
              Pilot rusza w sierpniu 2026. Zarezerwowane miejsca pierwszeństwa.
            </p>
          </div>
        </div>

        <div className="border-t border-[#D2D8DD] pt-10">
          <h2 className="text-[20px] font-semibold mb-2">Zarezerwuj 100 PLN BOOST</h2>
          <p className="text-[14px] text-[#5C6169] mb-6">
            Wypełnij — odezwiemy się gdy ruszamy. Bez spamu, bez subskrypcji.
          </p>
          <ClaimForm />
          <p className="text-[12px] text-[#5C6169] mt-4">
            Twoje dane lądują w Formspree (third-party). Możesz w każdej chwili
            poprosić o usunięcie — odpisując na maila potwierdzającego.
          </p>
        </div>
      </section>
    </main>
  );
}
