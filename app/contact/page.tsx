import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aspirio Limited — reach out about Aspirio Properties or Aspirio Medicals via email, phone, or social media.",
  alternates: { canonical: "/contact" },
};

// TODO: replace placeholder email/phone/address with Aspirio Limited's real details.
const EMAIL = "info@aspiriolimited.com";
const PHONE = "+234 000 000 0000";
const ADDRESS = "Lagos, Nigeria";

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
            We&rsquo;d love to hear from you.
          </h1>
        </div>
        <div className="gold-rule" />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl">Get in touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Whether your inquiry relates to Aspirio Properties or Aspirio
              Medicals, our team is ready to assist.
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-gold-deep">
                  Email
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${EMAIL}`} className="text-sm hover:underline">
                    {EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-gold-deep">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-sm hover:underline">
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-gold-deep">
                  Location
                </dt>
                <dd className="mt-1 text-sm">{ADDRESS}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-gold-deep">
                  Follow
                </dt>
                <dd className="mt-2 flex gap-4 text-sm">
                  <a
                    href="https://www.instagram.com/aspiriolimited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-hairline px-4 py-2 hover:border-gold hover:text-gold-deep"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://web.facebook.com/shade.gold.940"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-hairline px-4 py-2 hover:border-gold hover:text-gold-deep"
                  >
                    Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form
            action={`mailto:${EMAIL}`}
            method="post"
            encType="text/plain"
            className="border border-hairline bg-cream-deep p-8"
          >
            <h2 className="font-serif text-2xl">Send a message</h2>
            <div className="mt-6 space-y-5">
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
                className="w-full bg-ink px-6 py-3 text-sm font-medium tracking-wide text-gold-light transition-opacity hover:opacity-90"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
