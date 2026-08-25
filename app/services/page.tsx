import type { Metadata } from "next";
import Link from "next/link";
import AccentPanel from "@/components/AccentPanel";
import { WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Aspirio Limited's two divisions: Aspirio Properties for property sales, letting and development, and Aspirio Medicals for quality medical equipment supply across Nigeria.",
  alternates: { canonical: "/services" },
};

const propertyServices = [
  {
    title: "Property Sales & Acquisitions",
    body: "From first search to signed contract, we handle the process end to end: verified listings, honest advice, no surprises at the finish line.",
  },
  {
    title: "Residential & Commercial Letting",
    body: "Landlords get reliable tenants and steady returns. Tenants get properties that are exactly as advertised. We manage the relationship both ways.",
  },
  {
    title: "Property Development & Project Management",
    body: "From concept to completion, we oversee developments with the discipline of a team that answers for every stage: timeline, budget, and build quality.",
  },
  {
    title: "Investment Advisory",
    body: "Straight talking guidance on where and how to put your money into Nigerian real estate, backed by real market knowledge rather than sales pressure.",
  },
];

const medicalServices = [
  {
    title: "Diagnostic & Clinical Equipment Supply",
    body: "Genuine, quality checked equipment for hospitals, clinics, laboratories, and private practices, sourced with your patients' outcomes in mind.",
  },
  {
    title: "Sourcing for Healthcare Facilities",
    body: "Tell us what your facility needs and we'll find it, from routine consumables to specialised diagnostic machinery.",
  },
  {
    title: "Nationwide, Dependable Delivery",
    body: "Equipment that arrives when we say it will. No vague timelines, no chasing us for updates.",
  },
  {
    title: "Post Sale Support",
    body: "Our relationship doesn't end at delivery. We stay reachable for installation guidance, servicing referrals, and reorders.",
  },
];

function ServiceList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="mt-10 divide-y divide-hairline border-t border-hairline">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="grid gap-3 py-8 sm:grid-cols-[80px_1fr_2fr] sm:items-baseline sm:gap-8"
        >
          <span className="font-serif text-lg text-gold-deep">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-serif text-xl">{item.title}</h3>
          <p className="text-sm leading-relaxed text-ink/70">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Our Services
          </p>
          <h1 className="mt-4 font-serif text-4xl italic sm:text-5xl">
            Two divisions, built to deliver.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/70">
            Whether you&rsquo;re searching for the right property or the
            right equipment for your facility, Aspirio Limited brings the
            same discipline, honesty, and follow through to both.
          </p>
        </div>
        <div className="gold-rule" />
      </section>

      <section id="properties" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Division One
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Aspirio Properties
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
              Real estate handled with structure and honesty, because a
              property decision is too big to leave to chance.
            </p>
          </div>
          <AccentPanel icon="house" caption="Aspirio Properties" />
        </div>

        <ServiceList items={propertyServices} />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-sm bg-ink px-7 py-3 text-sm font-semibold tracking-wide text-gold-light transition-opacity hover:opacity-90"
        >
          Talk to us about a property
        </a>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="gold-rule" />
      </div>

      <section id="medicals" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Division Two
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
              Aspirio Medicals
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
              Quality medical equipment, supplied reliably, because
              healthcare providers can&rsquo;t afford to wait.
            </p>
          </div>
          <AccentPanel icon="cross" caption="Aspirio Medicals" />
        </div>

        <ServiceList items={medicalServices} />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-sm bg-ink px-7 py-3 text-sm font-semibold tracking-wide text-gold-light transition-opacity hover:opacity-90"
        >
          Talk to us about equipment
        </a>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-10">
          <h2 className="font-serif text-3xl italic sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-cream/70">
            Reach out today and let&rsquo;s discuss exactly what you need.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-opacity hover:opacity-90"
          >
            Contact Aspirio Limited
          </Link>
        </div>
      </section>
    </>
  );
}
