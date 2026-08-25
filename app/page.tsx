import Image from "next/image";
import Link from "next/link";

const trustPoints = [
  { label: "RC 1274067", sub: "CAC-Registered" },
  { label: "Est. 2015", sub: "A Decade of Trust" },
  { label: "2 Divisions", sub: "Properties & Medicals" },
  { label: "Nigerian-Owned", sub: "Built for Nigeria" },
];

const whyAspirio = [
  {
    title: "Integrity First",
    body: "Every deal, every delivery, every conversation — handled honestly, with nothing hidden and nothing overpromised.",
  },
  {
    title: "Two Fields, One Standard",
    body: "Property and medical equipment are worlds apart, but we hold both divisions to the same standard of care and follow-through.",
  },
  {
    title: "Dedicated Support",
    body: "A real team you can reach — before, during, and after every transaction. No call centres, no runaround.",
  },
  {
    title: "Built to Last",
    body: "Registered since 2015 and still growing — a company that plans for the long term, not the quick sale.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:py-32">
          <div>
            <p className="inline-block border border-gold/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
              RC 1274067 &middot; Trusted Since 2015
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] italic sm:text-5xl md:text-6xl">
              Property. <span className="gold-text not-italic">Medical Equipment.</span>{" "}
              One name you can trust.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75">
              Aspirio Limited puts serious real estate expertise and reliable
              medical equipment supply under one roof. Whatever you&rsquo;re
              looking to buy, let, build, or equip — we make it happen,
              properly.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services#properties"
                className="rounded-sm bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-opacity hover:opacity-90"
              >
                Explore Aspirio Properties
              </Link>
              <Link
                href="/services#medicals"
                className="rounded-sm border border-gold/50 px-6 py-3 text-sm font-medium tracking-wide text-gold-light transition-colors hover:bg-gold/10"
              >
                Explore Aspirio Medicals
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo.png"
              alt="Aspirio Limited"
              width={340}
              height={340}
              className="w-60 object-contain sm:w-80"
              priority
            />
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-gold/15 bg-ink/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:px-10 md:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.label}>
                <p className="font-serif text-2xl text-gold-light sm:text-3xl">
                  {point.label}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-cream/55">
                  {point.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="gold-rule" />
      </section>

      {/* Divisions — alternating feature blocks */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-deep">
          What We Do
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Two divisions. One relentless standard.
        </h2>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Division One
            </span>
            <h3 className="mt-2 font-serif text-3xl">Aspirio Properties</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Buying, letting, or developing property in Nigeria shouldn&rsquo;t
              feel like a gamble. We bring structure, honesty, and real
              market knowledge to every transaction — so you close with
              confidence, not crossed fingers.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Verified property sales & acquisitions",
                "Residential and commercial letting",
                "End-to-end development & project management",
                "Straight-talking investment advisory",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services#properties"
              className="mt-7 inline-block text-sm font-semibold text-gold-deep hover:underline"
            >
              See what we can do for you &rarr;
            </Link>
          </div>
          <div className="order-first border border-hairline bg-cream-deep p-10 md:order-last">
            <p className="font-serif text-xl italic text-ink/85">
              &ldquo;A property deal is only as good as the people behind
              it.&rdquo;
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-gold-deep">
              The Aspirio Properties approach
            </p>
          </div>
        </div>

        <div className="my-20 gold-rule" />

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="border border-hairline bg-cream-deep p-10">
            <p className="font-serif text-xl italic text-ink/85">
              &ldquo;Healthcare providers deserve equipment suppliers who
              show up on time, every time.&rdquo;
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-gold-deep">
              The Aspirio Medicals promise
            </p>
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Division Two
            </span>
            <h3 className="mt-2 font-serif text-3xl">Aspirio Medicals</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Hospitals and clinics can&rsquo;t afford delays or dud
              equipment. Aspirio Medicals sources and supplies quality
              medical equipment with the reliability healthcare providers
              actually need — genuine products, delivered on schedule.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Diagnostic & clinical equipment supply",
                "Sourcing for hospitals, clinics & practitioners",
                "Dependable delivery, nationwide",
                "Post-sale support that doesn't disappear",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services#medicals"
              className="mt-7 inline-block text-sm font-semibold text-gold-deep hover:underline"
            >
              See what we can do for you &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Aspirio */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-deep">
            Why Aspirio
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl sm:text-4xl">
            The difference is in how we work.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {whyAspirio.map((item) => (
              <div key={item.title} className="border border-hairline bg-white/70 p-7">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-10">
          <h2 className="font-serif text-3xl italic sm:text-4xl">
            Ready to work with a name you can trust?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-cream/70">
            Tell us what you need — property or medical equipment — and
            we&rsquo;ll take it from there.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-opacity hover:opacity-90"
          >
            Get in touch today
          </Link>
        </div>
      </section>
    </>
  );
}
