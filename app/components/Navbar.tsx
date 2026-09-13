"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/consulting", label: "Consulting" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${
        isScrolled
          ? "border-white/20 bg-black/70"
          : "border-gray-200 bg-white/80"
      }`}
    >
      <div className="relative mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
        <Link
          href="/"
          className={`absolute left-6 top-1/2 -translate-y-1/2 font-semibold transition-colors md:mr-10 md:static md:translate-y-0 ${
            isScrolled ? "text-white" : "text-ink"
          }`}
        >
          <img src="logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>
        <div
          className={`hidden items-center gap-8 text-sm transition-colors md:flex ${
            isScrolled ? "text-white" : "text-ink"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex w-24 justify-center transition-colors hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center md:hidden ${
            isScrolled ? "text-white" : "text-ink"
          }`}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-1/2 transform bg-black/60 px-8 py-24 text-white shadow-2xl backdrop-blur-md transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center text-2xl"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="flex flex-col gap-6 text-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="transition-colors hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
        />
      )}
    </nav>
  );
}