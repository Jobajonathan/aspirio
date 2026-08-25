import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Aspirio Limited's two divisions: Aspirio Properties for property sales, letting and development, and Aspirio Medicals for quality medical equipment supply.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Our Services
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            Two divisions, tailored to serve.
          </h1>
        </div>
        <div className="gold-rule" />
      </section>

      <section id="properties" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Division One
            </span>
            <h2 className="mt-2 font-serif text-3xl">Aspirio Properties</h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-ink/75">
              Aspirio Properties handles the full spectrum of real estate
              needs — from finding the right property to bringing new
              developments to life.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Property sales and acquisitions",
                "Residential and commercial letting",
                "Property development and project management",
                "Advisory on property investment",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="gold-rule" />
      </div>

      <section id="medicals" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Division Two
            </span>
            <h2 className="mt-2 font-serif text-3xl">Aspirio Medicals</h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-ink/75">
              Aspirio Medicals supplies quality medical equipment to
              hospitals, clinics, and healthcare professionals, with a focus
              on reliability and prompt delivery.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Supply of diagnostic and clinical equipment",
                "Sourcing for hospitals and clinics",
                "Reliable delivery and after-sales support",
                "Equipment consultation for healthcare facilities",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-10">
          <h2 className="font-serif text-2xl sm:text-3xl">
            Ready to work with us?
          </h2>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-sm bg-ink px-7 py-3 text-sm font-medium tracking-wide text-gold-light transition-opacity hover:opacity-90"
          >
            Contact Aspirio Limited
          </Link>
        </div>
      </section>
    </>
  );
}
