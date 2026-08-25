import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aspirio Limited — reach out about Aspirio Properties or Aspirio Medicals via phone, email, or social media.",
  alternates: { canonical: "/contact" },
};

// TODO: replace placeholder email/address with Aspirio Limited's real details.
const EMAIL = "info@aspiriolimited.com";
const PHONE = "+234 703 875 2663";
const ADDRESS = "Lagos, Nigeria";

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-4xl italic sm:text-5xl">
            Let&rsquo;s talk business.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/70">
            Property or medical equipment — whatever brought you here, our
            team responds quickly and won&rsquo;t waste your time.
          </p>
        </div>
        <div className="gold-rule" />
      </section>

      {/* Info cards */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="border border-hairline bg-cream-deep p-7">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Call Us
            </p>
            <p className="mt-2 text-sm text-ink/65">
              Speak to our team directly.
            </p>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="mt-3 block font-serif text-lg hover:text-gold-deep"
            >
              {PHONE}
            </a>
          </div>

          <div className="border border-hairline bg-cream-deep p-7">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Email Us
            </p>
            <p className="mt-2 text-sm text-ink/65">
              We reply as soon as we can.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 block font-serif text-lg hover:text-gold-deep"
            >
              {EMAIL}
            </a>
          </div>

          <div className="border border-hairline bg-cream-deep p-7">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Visit Us
            </p>
            <p className="mt-2 text-sm text-ink/65">
              Come speak to us in person.
            </p>
            <p className="mt-3 font-serif text-lg">{ADDRESS}</p>
          </div>
        </div>
      </section>

      {/* Form + socials */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl">Send us a message</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Tell us a little about what you need and we&rsquo;ll get
                back to you shortly.
              </p>

              <form
                action={`mailto:${EMAIL}`}
                method="post"
                encType="text/plain"
                className="mt-8 space-y-5"
              >
                <div>
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-gold-deep">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full border border-hairline bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-gold-deep">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full border border-hairline bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-gold-deep">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full border border-hairline bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-ink px-6 py-3 text-sm font-semibold tracking-wide text-gold-light transition-opacity hover:opacity-90"
                >
                  Send message
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-serif text-2xl">Follow along</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                See our latest listings, equipment updates, and company news.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/aspiriolimited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-hairline bg-white/70 px-5 py-3 text-sm font-medium hover:border-gold hover:text-gold-deep"
                >
                  Instagram — @aspiriolimited
                </a>
                <a
                  href="https://web.facebook.com/shade.gold.940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-hairline bg-white/70 px-5 py-3 text-sm font-medium hover:border-gold hover:text-gold-deep"
                >
                  Facebook
                </a>
              </div>

              <div className="mt-10 border border-hairline bg-white/70 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
                  Registered Company
                </p>
                <p className="mt-2 text-sm text-ink/75">
                  Aspirio Limited &middot; RC 1274067 &middot; Registered 13
                  July 2015
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
