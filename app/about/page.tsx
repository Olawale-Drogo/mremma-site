"use client";

import { useState } from "react";
import Footer from "../components/Footer";

const profiles = [
  {
    name: "Mremma",
    skill: "Data Strategy",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mremma",
    skill: "Dashboard Design",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mremma",
    skill: "Digital Consulting",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) => (current - 1 + profiles.length) % profiles.length);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % profiles.length);
  };

  const getProfile = (offset: number) =>
    profiles[(activeIndex + offset + profiles.length) % profiles.length];

  return (
    <>
      <main className="min-h-[calc(100vh-81px)] overflow-hidden bg-[#f2f2f0] px-6 py-8 text-[#171717] sm:px-10 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-145px)] max-w-[1080px] flex-col items-center justify-between">
        <div className="flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-[#171717] shadow-sm">
          <a href="mailto:hello@mremma.com" aria-label="Send email" className="flex h-7 w-7 items-center justify-center rounded-lg text-sm transition-transform hover:scale-110">@</a>
          <a href="https://github.com" aria-label="Open GitHub" className="flex h-7 w-7 items-center justify-center rounded-lg text-sm transition-transform hover:scale-110">&lt;/&gt;</a>
          <a href="https://www.linkedin.com" aria-label="Open LinkedIn" className="flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold transition-transform hover:scale-110">in</a>
        </div>

        <section className="flex w-full flex-1 items-center justify-center py-12" aria-label="Skills carousel">
          <div className="relative flex h-[310px] w-full max-w-[760px] items-center justify-center sm:h-[360px]">
            <div
              className="absolute left-1/2 h-[230px] w-[150px] -translate-x-[calc(50%+205px)] overflow-hidden rounded-[24px] opacity-20 grayscale transition-all duration-500 sm:h-[280px] sm:w-[190px] sm:-translate-x-[calc(50%+270px)]"
              style={{ backgroundImage: `url(${getProfile(-1).image})`, backgroundPosition: "center", backgroundSize: "cover" }}
              aria-hidden="true"
            />
            <article
              className="relative z-10 h-[300px] w-[250px] overflow-hidden rounded-[25px] bg-[#aeb0af] shadow-[0_18px_45px_rgba(0,0,0,0.12)] sm:h-[350px] sm:w-[290px]"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.05) 42%, rgba(0,0,0,0.82) 100%), url(${getProfile(0).image})`, backgroundPosition: "center", backgroundSize: "cover" }}
            >
              <div className="absolute inset-x-0 top-0 p-4 sm:p-5"><h1 className="text-lg font-bold tracking-tight text-white sm:text-xl">{getProfile(0).name}</h1></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5"><p className="text-base font-semibold text-white sm:text-lg">{getProfile(0).skill}</p><span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white text-sm text-white">↗</span></div>
            </article>
            <div
              className="absolute left-1/2 h-[230px] w-[150px] translate-x-[calc(50%+55px)] overflow-hidden rounded-[24px] opacity-20 grayscale transition-all duration-500 sm:h-[280px] sm:w-[190px] sm:translate-x-[calc(50%+80px)]"
              style={{ backgroundImage: `url(${getProfile(1).image})`, backgroundPosition: "center", backgroundSize: "cover" }}
              aria-hidden="true"
            />
          </div>
        </section>

        <div className="flex items-center gap-6">
          <button type="button" onClick={previous} aria-label="Previous skill" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl text-[#c5c5c3] shadow-sm transition-colors hover:bg-[#171717] hover:text-white">←</button>
          <button type="button" onClick={next} aria-label="Next skill" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl text-[#171717] shadow-sm transition-colors hover:bg-[#171717] hover:text-white">→</button>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}