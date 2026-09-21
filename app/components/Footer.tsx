const footerLinks = [
  "Home",
  "About",
  "Courses",
  "Certifications",
  "Interview Prep",
  "Free Resources",
  "Contact",
];

const socialStyles = [
  "bg-[#e63c3c]",
  "bg-[#0a66c2]",
  "bg-[#ff2a2a]",
  "bg-[#c13584]",
  "bg-[#7a3ff2]",
];

const socialLinks = [
  { label: "X", href: "#" },
  { label: "in", href: "#" },
  { label: "yt", href: "#" },
  { label: "ig", href: "#" },
  { label: "gh", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-[#f3f4f6] px-6 py-10 text-[#171717] md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1080px] gap-10 md:grid-cols-3 md:items-start md:justify-items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold uppercase tracking-tight text-[#171717] sm:text-xl">MREMMA</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#4b5563] sm:text-sm">
            Connect with me to elevate your digital presence and creative work.
          </p>
          <p className="mt-3 text-base text-[#4b5563] sm:text-sm">
            Email: {" "}
            <a
              href="mailto:hello@mremma.com"
              className="font-medium underline decoration-[#6b7280] underline-offset-4"
            >
              hello@mremma.com
            </a>
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold uppercase tracking-wide text-[#171717] sm:text-3xl">EXPLORE</h3>
          <ul className="mt-6 space-y-3 text-base text-[#374151] sm:text-sm">
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-opacity hover:opacity-80">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold uppercase tracking-wide text-[#171717] sm:text-3xl">CONNECT</h3>
          <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
            {socialLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className={`flex h-9 w-9 items-center justify-center rounded-md text-xs font-bold text-white shadow-sm sm:h-10 sm:w-10 sm:text-sm ${socialStyles[index]}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-[#4b5563] sm:text-sm">
            © 2024 by Mremma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
