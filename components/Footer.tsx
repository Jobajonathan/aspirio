import Link from "next/link";
import { ADDRESS, INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_URL, PHONE } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/70">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-cream">
            Aspirio <span className="gold-text font-semibold">Limited</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            A Nigerian company operating across property and medical
            equipment. RC 1274067, registered 13 July 2015.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{ADDRESS}</p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-gold-light">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gold-light">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold-light">About</Link></li>
            <li><Link href="/services" className="hover:text-gold-light">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gold-light">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-gold-light">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-light"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-gold-light">
                {PHONE}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-light"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-light"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>© {year} Aspirio Limited. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://theryters.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light/80 hover:text-gold-light"
            >
The Ryters
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
