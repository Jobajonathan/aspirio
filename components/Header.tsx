import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contact";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Aspirio Limited"
            width={44}
            height={44}
            className="h-10 w-10 rounded-full object-cover"
            priority
          />
          <span className="font-serif text-lg tracking-wide">
            Aspirio <span className="gold-text font-semibold">Limited</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden gap-9 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-cream/80 transition-colors hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm border border-gold/60 px-5 py-2 text-sm font-medium tracking-wide text-gold-light transition-colors hover:bg-gold hover:text-ink sm:inline-block"
        >
          Speak to Us
        </a>

        <MobileNav />
      </div>
      <div className="gold-rule" />
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative sm:hidden">
      <summary className="list-none cursor-pointer select-none rounded-sm border border-gold/50 px-3 py-1.5 text-sm text-gold-light">
        Menu
      </summary>
      <nav
        aria-label="Primary"
        className="absolute right-0 top-11 flex w-44 flex-col gap-1 border border-gold/30 bg-ink py-2 shadow-lg"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 text-sm text-cream/85 hover:text-gold-light"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 border-t border-gold/20 px-4 py-2 text-sm text-gold-light"
        >
          Speak to Us
        </a>
      </nav>
    </details>
  );
}
