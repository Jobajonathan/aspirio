import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aspirio Limited (RC 1274067) was registered on 13 July 2015. Learn about our leadership team and the two divisions we operate — Aspirio Properties and Aspirio Medicals.",
  alternates: { canonical: "/about" },
};

const leadership = [
  { name: "Emmanuel Oluwaseyi Sholatan", role: "Director" },
  { name: "Dorcas Folashade Aleyomi", role: "Director" },
  { name: "Samuel Olugbenga Sholatan", role: "Director" },
  { name: "Omotayo Joy Sholatan", role: "Secretary" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            About Us
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            Built on trust, since 2015.
          </h1>
        </div>
        <div className="gold-rule" />
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
        <h2 className="font-serif text-2xl">Our Story</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">
          Aspirio Limited is a Nigerian company, incorporated on 13 July
          2015 and registered under RC 1274067. From that foundation, we
          have grown into two focused divisions — Aspirio Properties and
          Aspirio Medicals — each built around the same principles of
          integrity, reliability, and attention to detail.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink/75">
          We believe a company&rsquo;s reputation is earned through
          consistency: delivering on promises, treating clients and
          partners with respect, and holding our own work to a high
          standard, whether that means a property transaction or the
          supply of medical equipment.
        </p>

        <div className="mt-10 grid gap-6 border border-hairline bg-cream-deep p-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Registration Number
            </p>
            <p className="mt-1 font-serif text-lg">RC 1274067</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Registration Date
            </p>
            <p className="mt-1 font-serif text-lg">13 July 2015</p>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
          <h2 className="font-serif text-2xl">Leadership</h2>
          <p className="mt-3 text-sm text-ink/70">
            Our directors and secretary guide Aspirio Limited&rsquo;s
            strategy and governance.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {leadership.map((person) => (
              <li
                key={person.name}
                className="flex items-center gap-4 border border-hairline bg-white/70 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink font-serif text-sm text-gold-light">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <p className="font-medium text-ink">{person.name}</p>
                  <p className="text-xs uppercase tracking-widest text-gold-deep">
                    {person.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
