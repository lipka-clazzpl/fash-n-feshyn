"use client";

import { useState } from "react";

// Formspree form ID — replace with real ID from formspree.io dashboard.
// Free tier: 50 submissions/m-c.
// To activate: process.env.NEXT_PUBLIC_FORMSPREE_ID or hardcode here.
const FORMSPREE_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "PLACEHOLDER_FORMSPREE_ID";

const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://fash-n-feshyn.vercel.app";

export function ClaimForm() {
  const [pending, setPending] = useState(false);

  return (
    <form
      action={`https://formspree.io/f/${FORMSPREE_ID}`}
      method="POST"
      onSubmit={() => setPending(true)}
      className="flex flex-col gap-4"
    >
      <label className="flex flex-col gap-1">
        <span className="text-[14px] font-medium text-black">Imię</span>
        <input
          name="name"
          required
          autoComplete="given-name"
          className="border border-[#D2D8DD] px-3 py-2.5 text-[16px] text-black focus:outline-none focus:border-black"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-[14px] font-medium text-black">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="border border-[#D2D8DD] px-3 py-2.5 text-[16px] text-black focus:outline-none focus:border-black"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-[14px] font-medium text-black">
          Dlaczego cię to interesuje?{" "}
          <span className="text-[#5C6169] font-normal">(opcjonalne)</span>
        </span>
        <textarea
          name="motivation"
          rows={3}
          maxLength={200}
          placeholder="Np. sprzedaję od miesiąca, mało zamówień, chcę przetestować płatne pozycjonowanie."
          className="border border-[#D2D8DD] px-3 py-2.5 text-[16px] text-black focus:outline-none focus:border-black resize-none"
        />
      </label>

      <input type="hidden" name="_subject" value="Newcomer Boost: nowa rezerwacja" />
      <input
        type="hidden"
        name="_next"
        value={`${SITE_ORIGIN}/newcomer-boost/thanks`}
      />

      <button
        type="submit"
        disabled={pending}
        className="w-full md:w-auto md:self-start bg-black text-white px-8 py-3.5 text-[16px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/85 transition-colors"
      >
        {pending ? "Wysyłam…" : "Zarezerwuj 100 PLN BOOST"}
      </button>
    </form>
  );
}
