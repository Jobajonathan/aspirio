import type { Metadata } from "next";
import Image from "next/image";
import { ADDRESS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aspirio Limited (RC 1274067) was registered on 13 July 2015 and is based in Abuja. Meet Founder & CEO Dorcas Folashade Aleyomi and the two divisions she built: Aspirio Properties and Aspirio Medicals.",
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

      {/* Founder */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-deep">
            The Woman Behind Aspirio
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Meet our Founder & CEO.
          </h2>

          <div className="mt-12 grid items-start gap-12 md:grid-cols-[280px_1fr]">
            <div className="mx-auto w-56 overflow-hidden rounded-sm shadow-lg md:mx-0 md:w-full">
              <Image
                src="/team/dorcas.jpg"
                alt="Dorcas Folashade Aleyomi, Founder and CEO of Aspirio Limited"
                width={560}
                height={880}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <h3 className="font-serif text-2xl">Dorcas Folashade Aleyomi</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gold-deep">
                Founder &amp; Chief Executive Officer
              </p>

              <p className="mt-6 text-sm leading-relaxed text-ink/75">
                Every bespoke brand starts as an idea that most people
                would talk themselves out of. Dorcas didn&rsquo;t. In
                2015, she set out to build a company on a standard that
                sounds obvious but is rare in practice: do exactly what
                you say you will do, for every client, every time. That
                standard became Aspirio Limited.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                What began as a single vision has grown, deal by deal and
                delivery by delivery, into two trusted divisions spanning
                real estate and medical equipment. It hasn&rsquo;t been
                built on shortcuts or borrowed hype, but on the slower,
                harder work of earning trust one client at a time, and
                keeping it.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                Today, Dorcas leads Aspirio Limited with the same
                conviction she started with: that a company is only as
                good as its word, and that the people who trust you with
                a home, or with the equipment their patients depend on,
                deserve nothing less than the truth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
