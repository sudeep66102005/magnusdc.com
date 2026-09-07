import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { siteConfig } from "@/lib/constants/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms on which Clarus Magnus Health & Diagnostics provides this website, appointment requests, diagnostic services and reports.",
};

const LAST_UPDATED = "6 September 2026";

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The basis on which we provide this website and our diagnostic and clinical services."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-[#142F86]/82">
          <p className="text-sm text-[#142F86]/60">Last updated: {LAST_UPDATED}</p>

          <Clause title="About these terms">
            <p>
              These terms apply to your use of this website and to diagnostic and
              clinical services provided by {siteConfig.name} at{" "}
              {siteConfig.address.line2}, {siteConfig.address.city}. By using
              this site or requesting an appointment you accept them. They are
              read together with our{" "}
              <Link className="font-semibold underline" href="/privacy-policy">
                Privacy Policy
              </Link>
              .
            </p>
          </Clause>

          <Clause title="No medical advice">
            <p>
              The information on this website — including pages describing
              specialties, tests, imaging and health packages — is general
              information about the services we offer. It is not medical advice,
              a diagnosis, or a substitute for consulting a qualified clinician,
              and it should not be used to decide whether you need a particular
              test. Always seek the advice of your doctor about a medical
              condition or a symptom.
            </p>
            <p className="font-semibold text-[#142F86]">
              In an emergency, do not use this website or its forms. Call{" "}
              <a className="underline" href={siteConfig.phone.href}>
                {siteConfig.phone.display}
              </a>{" "}
              or go to your nearest emergency department.
            </p>
          </Clause>

          <Clause title="Appointment requests">
            <p>
              A request submitted through this website, by telephone or over
              WhatsApp is a request, not a confirmed booking. An appointment is
              confirmed only when our team confirms the slot with you. Slot
              availability, and the timing of imaging or laboratory work, can
              change according to clinical priority — an emergency case may take
              precedence over a scheduled slot, and we will tell you if that
              affects your appointment.
            </p>
            <p>
              Please arrive with a valid photo identity document, any referral
              letter, and any prior reports or images relevant to the test. If
              preparation is required — fasting before a blood test, for example
              — the instructions given to you at booking must be followed, or the
              test may need to be repeated.
            </p>
          </Clause>

          <Clause title="Reports and results">
            <p>
              Reporting timelines quoted on this site are indicative. Some tests
              are outsourced to reference laboratories, and some require
              additional review by a specialist, which can extend the timeline.
              Reports are released to you or to your referring clinician;
              diagnostic reports are intended to be interpreted by a qualified
              clinician alongside your history and examination, and should not be
              self-interpreted.
            </p>
          </Clause>

          <Clause title="Fees, payment and insurance">
            <p>
              Prices, package inclusions and offers shown on this site are
              indicative and may change without notice. The amount payable is the
              amount quoted to you at the centre at the time of the service.
              Where a test is added or repeated for clinical reasons, the
              additional charge will be explained to you. Insurance and
              third-party claims are subject to your insurer&rsquo;s approval; a
              rejected claim remains payable by you.
            </p>
          </Clause>

          <Clause title="Cancellation and rescheduling">
            <p>
              Please tell us as early as you can if you cannot attend, so the
              slot can be offered to another patient. Where an advance has been
              collected for a package or a scheduled scan, any refund is
              considered on a case-by-case basis and may be reduced by costs
              already incurred, such as consumables prepared for your test.
            </p>
          </Clause>

          <Clause title="Use of this website">
            <p>
              You may use this site for your own personal, non-commercial
              purposes. You must not attempt to disrupt it, gain unauthorised
              access to any system, scrape it systematically, or submit false
              details or another person&rsquo;s details without their authority.
            </p>
          </Clause>

          <Clause title="Intellectual property">
            <p>
              The name Clarus Magnus, our logo, and the text, layout and images
              on this site are owned by us or used under licence, and may not be
              copied or reused without our written permission.
            </p>
          </Clause>

          <Clause title="Third-party links">
            <p>
              Where we link to another site or service — a map, WhatsApp, or a
              payment provider — we do not control it and are not responsible for
              its content or its handling of your data.
            </p>
          </Clause>

          <Clause title="Availability and accuracy">
            <p>
              We work to keep this site accurate and available, but we do not
              warrant that it will be uninterrupted or error-free, or that every
              detail — a timing, a price, a doctor&rsquo;s availability — is
              current at the moment you read it. Please confirm anything you
              intend to rely on by contacting us.
            </p>
          </Clause>

          <Clause title="Liability">
            <p>
              Nothing in these terms limits any liability that cannot be limited
              under law, including for death or personal injury caused by
              negligence. Subject to that, we are not liable for indirect or
              consequential loss arising from your use of this website, or from
              reliance on general information published here rather than on
              clinical advice given to you.
            </p>
          </Clause>

          <Clause title="Governing law">
            <p>
              These terms are governed by the laws of India, and the courts at
              Bengaluru, Karnataka have exclusive jurisdiction over any dispute.
            </p>
          </Clause>

          <Clause title="Contact">
            <p>
              Questions about these terms, or a concern about a service you
              received:{" "}
              <a className="font-semibold underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{" "}
              or{" "}
              <a className="font-semibold underline" href={siteConfig.phone.href}>
                {siteConfig.phone.display}
              </a>
              .
            </p>
          </Clause>
        </div>
      </Section>
    </>
  );
}

function Clause({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-[#142F86]">{title}</h2>
      {children}
    </section>
  );
}
