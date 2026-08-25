import type { Metadata } from "next";
import Link from "next/link";
import AccentPanel from "@/components/AccentPanel";
import { WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Aspirio Limited's two divisions: Aspirio Properties for real estate sales, letting and development, and Aspirio Medicals for quality medical equipment supply across Nigeria.",
  alternates: { canonical: "/services" },
};

const propertyServices = [
  {
    title: "Real Estate Sales & Acquisitions",
    body: "From the first search to the signed contract, we walk the whole road with you: verified listings, honest advice, no surprises waiting at the finish line.",
  },
  {
    title: "Residential & Commercial Letting",
    body: "Landlords get tenants they can rely on and returns that hold steady. Tenants get a home that matches what was promised. We look after the relationship on both sides.",
  },
  {
    title: "Property Development & Project Management",
    body: "A development lives or dies on the details. We oversee ours from concept to completion, answering for the timeline, the budget, and the build quality at every stage.",
  },
  {
    title: "Investment Advisory",
    body: "Real market knowledge, not sales pressure. Straight talking guidance on where and how to put your money into real estate that will still be worth something in ten years.",
  },
];

const medicalServices = [
  {
    title: "Diagnostic & Clinical Equipment Supply",
    body: "Every reading, every result, has a patient waiting on the other end of it. We supply genuine, quality checked equipment to hospitals, clinics, laboratories, and private practices with that in mind.",
  },
  {
    title: "Sourcing for Healthcare Facilities",
    body: "Tell us what your facility is missing, from routine consumables to specialised diagnostic machinery, and we will find it.",
  },
  {
    title: "Nationwide, Dependable Delivery",
    body: "A hospital cannot pause care while it waits on a vague delivery window. Our equipment arrives when we say it will, full stop.",
  },
  {
    title: "Post Sale Support",
    body: "Our relationship does not end when the equipment ships. We stay reachable for installation guidance, servicing referrals, and reorders.",
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
            Two decisions people cannot afford to get wrong.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/70">
            A home shapes a family for years. A piece of medical equipment
            can shape whether a patient makes it through the night.
            Aspirio Limited brings the same discipline, honesty, and
            follow through to both.
          </p>
        </div>
        <div className="gold-rule" />
      </section>

      <section id="properties" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Aspirio Properties
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/65">
              Real estate handled with structure and honesty, because a
              home is too big a decision to leave to chance.
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
            <h2 className="font-serif text-3xl sm:text-4xl">
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
