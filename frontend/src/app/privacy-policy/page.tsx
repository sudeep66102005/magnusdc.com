import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { siteConfig } from "@/lib/constants/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Clarus Magnus Health & Diagnostics collects, uses, stores and safeguards personal and health information, and the rights available to you.",
};

/* Update whenever the policy text changes — visitors and auditors both rely on
   this date to know which version they read. */
const LAST_UPDATED = "6 September 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="What we collect, why we collect it, how long we keep it, and the choices you have."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-[#142F86]/82">
          <p className="text-sm text-[#142F86]/60">Last updated: {LAST_UPDATED}</p>

          <Clause title="Who this policy covers">
            <p>
              This policy applies to {siteConfig.name} (&ldquo;Clarus Magnus&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;), operating at{" "}
              {siteConfig.address.line2}, {siteConfig.address.city},{" "}
              {siteConfig.address.state} {siteConfig.address.zip}, and to this
              website. It covers information you give us through this site, by
              telephone or WhatsApp, and information generated when you receive
              diagnostic or clinical services from us.
            </p>
          </Clause>

          <Clause title="Information we collect">
            <p>Through this website we collect only what a request needs:</p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>
                <strong>Contact and appointment forms:</strong> your name,
                telephone number, email address, and the department, test,
                preferred date and time you select, plus any notes you choose to
                add.
              </li>
              <li>
                <strong>Corporate enquiry form:</strong> your name, organisation,
                role, work email, telephone number and the requirement you
                describe.
              </li>
              <li>
                <strong>Clinical information:</strong> collected at the centre
                during registration, consultation, imaging and laboratory
                testing — including your medical history, referral details,
                images and results.
              </li>
            </ul>
            <p>
              Details you type into a website form are transmitted to our care
              team so they can respond. Please do not use these forms to send
              detailed medical history, reports or images; bring those to your
              appointment or share them with the clinical team directly.
            </p>
          </Clause>

          <Clause title="Why we use it">
            <ul className="ml-5 list-disc space-y-1.5">
              <li>To contact you about an appointment, test or enquiry you raised.</li>
              <li>To deliver diagnostic and clinical care, and to prepare and release reports.</li>
              <li>To maintain the medical and billing records we are required to keep.</li>
              <li>To respond to a grievance, and to meet legal or regulatory obligations.</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use the
              details submitted through these forms for advertising, and we do
              not share them with advertising networks.
            </p>
          </Clause>

          <Clause title="Who we share it with">
            <p>
              Access is limited to those who need it: our clinicians, radiologists,
              laboratory and front-office staff. Beyond that we share information
              only with
            </p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>
                a referring doctor or hospital involved in your care, and a
                reference laboratory where a test must be outsourced;
              </li>
              <li>
                your insurer or TPA, where you ask us to process a claim;
              </li>
              <li>
                service providers who operate our systems — for example website
                hosting and communication tools — under confidentiality
                obligations and only to the extent needed to run those systems;
              </li>
              <li>
                a public authority or court, where disclosure is required by law.
              </li>
            </ul>
          </Clause>

          <Clause title="How long we keep it">
            <p>
              Enquiry and appointment details are retained only as long as needed
              to deal with the request and to keep a record of it. Medical
              records, images and reports are retained for the periods required
              of a diagnostic and clinical establishment under applicable Indian
              law and professional regulation, after which they are securely
              destroyed.
            </p>
          </Clause>

          <Clause title="How we protect it">
            <p>
              This website is served over HTTPS. Access to clinical systems is
              restricted to authorised staff, records are kept on controlled
              systems, and staff are bound by confidentiality obligations. No
              method of transmission or storage is completely secure, so we
              cannot guarantee absolute security — if you believe your
              information has been compromised, contact us using the details
              below and we will investigate.
            </p>
          </Clause>

          <Clause title="Cookies and analytics">
            <p>
              This site is a static website. It does not set advertising cookies
              and does not build a profile of you. Your browser may store
              technical data needed to display pages, and our hosting provider
              may keep standard server logs, which can include IP addresses, for
              security and reliability purposes. Embedded content — such as a
              Google Map or a WhatsApp link — is provided by those companies and
              is governed by their own privacy policies once you interact with it.
            </p>
          </Clause>

          <Clause title="Your rights">
            <p>
              Subject to applicable law, including India&rsquo;s Digital Personal
              Data Protection Act, 2023, you may ask us to:
            </p>
            <ul className="ml-5 list-disc space-y-1.5">
              <li>confirm what personal data of yours we hold, and obtain a summary of it;</li>
              <li>correct or complete data that is inaccurate or out of date;</li>
              <li>erase data we no longer have a lawful reason to keep;</li>
              <li>withdraw a consent you previously gave;</li>
              <li>nominate another person to exercise these rights on your behalf.</li>
            </ul>
            <p>
              Requests can be made using the contact details below. We may need
              to verify your identity first. Some data cannot be erased on
              request where we are legally required to retain it — a medical
              record being the clearest example.
            </p>
          </Clause>

          <Clause title="Children">
            <p>
              We provide paediatric services, and information about a child is
              given to us by a parent or guardian, who exercises these rights on
              the child&rsquo;s behalf. This website is not directed at children
              independently.
            </p>
          </Clause>

          <Clause title="Contact and grievances">
            <p>
              For any question about this policy, to exercise a right, or to
              raise a grievance about how your information has been handled:
            </p>
            <ul className="ml-5 list-none space-y-1.5">
              <li>
                Email:{" "}
                <a className="font-semibold underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                Telephone:{" "}
                <a className="font-semibold underline" href={siteConfig.phone.href}>
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                Post: {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </li>
            </ul>
            <p>
              We aim to acknowledge every request within a reasonable period and
              to resolve it promptly. If you are not satisfied with our response,
              you may escalate the matter to the Data Protection Board of India.
            </p>
          </Clause>

          <Clause title="Changes to this policy">
            <p>
              We may update this policy as our services or legal obligations
              change. The revised version takes effect when published on this
              page, and the &ldquo;last updated&rdquo; date above will change.
              See also our{" "}
              <Link className="font-semibold underline" href="/terms-and-conditions">
                Terms &amp; Conditions
              </Link>
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
