import Image from "next/image";
import Link from "next/link";
import AccentPanel from "@/components/AccentPanel";
import { WHATSAPP_URL } from "@/lib/contact";

const trustPoints = [
  { label: "RC 1274067", sub: "CAC Registered" },
  { label: "Est. 2015", sub: "A Decade of Trust" },
  { label: "2 Divisions", sub: "Real Estate & Medicals" },
  { label: "Abuja", sub: "Nigerian Owned" },
];

const whyAspirio = [
  {
    title: "Integrity First",
    body: "We have turned down deals that did not feel right, because a signature is worth less than a reputation. Every conversation with us can be taken at face value.",
  },
  {
    title: "Two Fields, One Standard",
    body: "A property sale and a hospital equipment order look nothing alike on paper. But behind both is the same question: can this company be trusted to get it right. We built two divisions around answering yes.",
  },
  {
    title: "Dedicated Support",
    body: "You will not be passed between departments or left waiting on a ticket number. The person who takes your first call is often the same person who sees things through.",
  },
  {
    title: "Built to Last",
    body: "We have been doing this since 2015, long enough to learn that a quick sale is not worth much if the client never comes back. So we do not chase it.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="inline-block border border-gold/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
              RC 1274067 &middot; Trusted Since 2015
            </p>
            <h1 className="mt-5 font-serif text-3xl leading-[1.15] italic sm:text-4xl md:text-5xl">
              A home to build your life in.{" "}
              <span className="gold-text not-italic">
                Equipment to help save one.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/75 sm:text-base">
              Behind every property we sell is a family finding their
              footing. Behind every piece of equipment we supply is a
              hospital ready to do more for its patients. That is the
              business we are really in.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-opacity hover:opacity-90"
              >
                Speak to Us on WhatsApp
              </a>
              <Link
                href="/about"
                className="rounded-sm border border-gold/50 px-6 py-3 text-sm font-medium tracking-wide text-gold-light transition-colors hover:bg-gold/10"
              >
                Read Our Story
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo.jpg"
              alt="Aspirio Limited"
              width={280}
              height={280}
              className="w-44 rounded-full object-cover shadow-[0_0_80px_-10px_rgba(184,145,47,0.4)] sm:w-56 md:w-64"
              priority
            />
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-gold/15 bg-ink/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-6 sm:px-10 md:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.label}>
                <p className="font-serif text-xl text-gold-light sm:text-2xl">
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

      {/* Divisions */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-deep">
          What We Do
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl sm:text-4xl">
          Two moments in life where getting it wrong costs the most.
        </h2>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="font-serif text-5xl text-gold/30">01</span>
            <h3 className="mt-2 font-serif text-3xl">Aspirio Properties</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              A home is never just a building. It is where a marriage
              begins, where children learn to walk, where a life takes
              root. When you come to us for real estate in Abuja, we do
              not just hand you a listing. We help you picture the years
              you will spend there, and make sure the numbers, the
              paperwork, and the promises all hold up long after you move
              in.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Verified real estate sales & acquisitions",
                "Residential and commercial letting",
                "End to end development & project management",
                "Straight talking investment advisory",
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
          <div className="order-first md:order-last">
            <AccentPanel icon="house" caption="Aspirio Properties" />
          </div>
        </div>

        <div className="my-20 gold-rule" />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <AccentPanel icon="cross" caption="Aspirio Medicals" />
          </div>
          <div>
            <span className="font-serif text-5xl text-gold/30">02</span>
            <h3 className="mt-2 font-serif text-3xl">Aspirio Medicals</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Behind every functioning hospital ward is equipment that did
              not fail when it mattered most. A diagnostic reading that
              was accurate. A delivery that arrived before the surgery,
              not after. That is the standard Aspirio Medicals works to,
              because somewhere on the other end of every order is a
              patient trusting a stranger&rsquo;s judgment with their
              life.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Diagnostic & clinical equipment supply",
                "Sourcing for hospitals, clinics & practitioners",
                "Dependable delivery, nationwide",
                "Post sale support that doesn't disappear",
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

          <div className="mt-14 divide-y divide-hairline border-t border-hairline">
            {whyAspirio.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-3 py-8 sm:grid-cols-[80px_1fr_2fr] sm:items-baseline sm:gap-8"
              >
                <span className="font-serif text-lg text-gold-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink/70">
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
            Your next chapter starts with one conversation.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-cream/70">
            Real estate or medical equipment, tell us what you need and we
            will take it from there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-opacity hover:opacity-90"
            >
              Speak to Us on WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-sm border border-gold/50 px-8 py-3.5 text-sm font-medium tracking-wide text-gold-light transition-colors hover:bg-gold/10"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
