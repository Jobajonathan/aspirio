import type { Metadata } from "next";
import { EMAIL, PHONE, PHONE_HREF, ADDRESS, WHATSAPP_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aspirio Limited in Abuja, via WhatsApp, phone, email, or social media, about Aspirio Properties or Aspirio Medicals.",
  alternates: { canonical: "/contact" },
};

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
            Property or medical equipment, whatever brought you here, our
            team responds quickly and won&rsquo;t waste your time.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-opacity hover:opacity-90"
          >
            Speak to Us on WhatsApp
          </a>
        </div>
        <div className="gold-rule" />
      </section>

      {/* Contact details, editorial row layout */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 border-t border-hairline pt-10 sm:grid-cols-3">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Call Us
            </p>
            <a
              href={`tel:${PHONE_HREF}`}
              className="mt-2 block break-words font-serif text-xl hover:text-gold-deep sm:text-2xl"
            >
              {PHONE}
            </a>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Email Us
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block break-words font-serif text-lg hover:text-gold-deep sm:text-xl"
            >
              {EMAIL}
            </a>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
              Visit Us
            </p>
            <p className="mt-2 break-words font-serif text-xl sm:text-2xl">{ADDRESS}</p>
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
                    className="mt-2 w-full border-b border-hairline bg-transparent px-1 py-2.5 text-sm outline-none focus:border-gold"
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
                    className="mt-2 w-full border-b border-hairline bg-transparent px-1 py-2.5 text-sm outline-none focus:border-gold"
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
                    className="mt-2 w-full border-b border-hairline bg-transparent px-1 py-2.5 text-sm outline-none focus:border-gold"
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
              <div className="mt-6 space-y-4 border-t border-hairline pt-6">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-serif text-lg hover:text-gold-deep"
                >
                  Instagram (@aspiriolimited)
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-serif text-lg hover:text-gold-deep"
                >
                  Facebook
                </a>
              </div>

              <div className="mt-10 border-t border-hairline pt-6">
                <p className="text-xs font-medium uppercase tracking-widest text-gold-deep">
                  Registered Company
                </p>
                <p className="mt-2 text-sm text-ink/75">
                  Aspirio Limited, RC 1274067, registered 13 July 2015.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
