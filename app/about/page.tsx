import type { Metadata } from "next";
import Image from "next/image";
import { ADDRESS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aspirio Limited (RC 1274067) was registered on 13 July 2015 and is based in Abuja, operating across two divisions: Aspirio Properties and Aspirio Medicals.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            About Us
          </p>
          <h1 className="mt-4 font-serif text-4xl italic sm:text-5xl">
            Built on trust, since 2015.
          </h1>
        </div>
        <div className="gold-rule" />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
        <h2 className="font-serif text-2xl">Our Story</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">
          Aspirio Limited was incorporated on 13 July 2015 under RC 1274067,
          built on a simple idea: people deserve to work with companies
          that do exactly what they say. From that foundation, we grew
          into two focused divisions, Aspirio Properties and Aspirio
          Medicals, each solving a different problem, but held to the same
          standard of integrity, reliability, and attention to detail.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">
          A real estate decision and a hospital equipment order have
          little in common on the surface. But both demand the same thing
          from the company on the other side of the table: honesty about
          what you&rsquo;re getting, and follow through once the deal is
          done. That&rsquo;s the standard we hold ourselves to, every
          time.
        </p>

        <div className="mt-12 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Registration Number
            </p>
            <p className="mt-2 font-serif text-xl">RC 1274067</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Registration Date
            </p>
            <p className="mt-2 font-serif text-xl">13 July 2015</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Head Office
            </p>
            <p className="mt-2 break-words font-serif text-xl">{ADDRESS}</p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10">
          <h2 className="font-serif text-2xl">Leadership</h2>

          <div className="mt-10 grid items-start gap-10 sm:grid-cols-[160px_1fr]">
            <div className="mx-auto w-32 overflow-hidden rounded-sm sm:mx-0 sm:w-full">
              <Image
                src="/team/ceo.jpg"
                alt="Dorcas Folashade Aleyomi, Founder and Chief Executive Officer of Aspirio Limited"
                width={400}
                height={460}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <h3 className="font-serif text-xl">Dorcas Folashade Aleyomi</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gold-deep">
                Founder &amp; Chief Executive Officer
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ink/75">
                Dorcas Folashade Aleyomi founded Aspirio Limited in 2015
                and has led the company from a single venture into two
                operating divisions spanning real estate and medical
                equipment supply. Under her leadership, Aspirio has built
                its reputation on a standard that is simple to state and
                harder to keep: do exactly what you said you would do,
                for every client, every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
