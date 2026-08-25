import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:px-10 md:grid-cols-2 md:py-32">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
              RC 1274067 &middot; Est. 2015
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              A standard of{" "}
              <span className="gold-text">excellence</span>, across two
              disciplines.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75">
              Aspirio Limited brings together property expertise and medical
              equipment supply under one trusted name — Aspirio Properties
              and Aspirio Medicals.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-sm bg-gold px-6 py-3 text-sm font-medium tracking-wide text-ink transition-opacity hover:opacity-90"
              >
                Explore our services
              </Link>
              <Link
                href="/contact"
                className="rounded-sm border border-gold/50 px-6 py-3 text-sm tracking-wide text-gold-light transition-colors hover:bg-gold/10"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo.png"
              alt="Aspirio Limited"
              width={320}
              height={320}
              className="w-56 object-contain sm:w-72"
              priority
            />
          </div>
        </div>
        <div className="gold-rule" />
      </section>

      {/* Divisions */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-deep">
          What we do
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Two divisions, one commitment.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border border-hairline bg-white/60 p-8">
            <span className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Division One
            </span>
            <h3 className="mt-2 font-serif text-2xl">Aspirio Properties</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Property sales, letting, and development handled with
              precision and integrity — helping clients find and build
              spaces that last.
            </p>
            <Link
              href="/services#properties"
              className="mt-6 inline-block text-sm font-medium text-gold-deep hover:underline"
            >
              Learn more &rarr;
            </Link>
          </div>

          <div className="border border-hairline bg-white/60 p-8">
            <span className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Division Two
            </span>
            <h3 className="mt-2 font-serif text-2xl">Aspirio Medicals</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Supply of quality medical equipment to healthcare providers,
              sourced and delivered with reliability at every step.
            </p>
            <Link
              href="/services#medicals"
              className="mt-6 inline-block text-sm font-medium text-gold-deep hover:underline"
            >
              Learn more &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-10">
          <h2 className="font-serif text-2xl sm:text-3xl">
            Let&rsquo;s discuss how Aspirio can serve you.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink/70">
            Whether it&rsquo;s property or medical equipment, our team is
            ready to help.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-sm bg-ink px-7 py-3 text-sm font-medium tracking-wide text-gold-light transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
