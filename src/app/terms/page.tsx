import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "JezeroX Terms of Service. Read our terms and conditions for using our website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Section>
          <div className="mx-auto max-w-3xl">
            <h1 className="font-(family-name:--font-space-grotesk) text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-text-muted">
              Last updated: February 11, 2026
            </p>

            <div className="prose prose-invert mt-10 max-w-none">
              <div className="prose-headings:font-[family-name:var(--font-space-grotesk)] prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-li:text-text-secondary">
                <section className="space-y-6">
                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Agreement to Terms
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      By accessing or using the JezeroX website and services
                      (&quot;Services&quot;), you agree to be bound by these Terms of
                      Service (&quot;Terms&quot;). If you do not agree to these Terms,
                      please do not use our Services.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Description of Services
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      JezeroX provides software development, product engineering,
                      design, and consulting services. We reserve the right to
                      modify, suspend, or discontinue any aspect of our Services
                      at any time without prior notice.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Use of Services
                    </h2>
                    <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-xl font-semibold text-text-primary">
                      Permitted Use
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      You may use our Services only for lawful purposes and in
                      accordance with these Terms. You agree not to:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
                      <li>
                        Violate any applicable laws or regulations
                      </li>
                      <li>
                        Infringe upon the rights of others, including
                        intellectual property rights
                      </li>
                      <li>
                        Transmit any harmful, offensive, or unlawful content
                      </li>
                      <li>
                        Attempt to gain unauthorized access to our systems or
                        networks
                      </li>
                      <li>
                        Interfere with or disrupt the operation of our Services
                      </li>
                      <li>
                        Use automated systems to access our Services without
                        permission
                      </li>
                    </ul>

                    <h3 className="mt-6 font-(family-name:--font-space-grotesk) text-xl font-semibold text-text-primary">
                      Account Responsibility
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      If you create an account or provide information to us, you
                      are responsible for maintaining the confidentiality of
                      your account credentials and for all activities that occur
                      under your account.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Intellectual Property
                    </h2>
                    <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-xl font-semibold text-text-primary">
                      Our Content
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      All content on our website, including text, graphics,
                      logos, images, and software, is the property of JezeroX
                      or its licensors and is protected by copyright, trademark,
                      and other intellectual property laws.
                    </p>

                    <h3 className="mt-6 font-(family-name:--font-space-grotesk) text-xl font-semibold text-text-primary">
                      Your Content
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      When you submit content to us (such as project briefs,
                      feedback, or communications), you retain ownership of
                      your intellectual property. However, by submitting content,
                      you grant us a non-exclusive, worldwide, royalty-free
                      license to use, reproduce, and display your content for
                      the purpose of providing our Services.
                    </p>

                    <h3 className="mt-6 font-(family-name:--font-space-grotesk) text-xl font-semibold text-text-primary">
                      Work Product
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      Ownership of work product created under a service
                      agreement will be specified in the applicable project
                      contract or statement of work. Unless otherwise agreed,
                      upon full payment, clients typically receive ownership of
                      custom-developed work product.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Service Agreements
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      Specific projects and services are governed by separate
                      written agreements, statements of work, or service
                      contracts (&quot;Service Agreements&quot;). In the event of a
                      conflict between these Terms and a Service Agreement, the
                      Service Agreement will prevail.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Payment Terms
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      Payment terms, including fees, invoicing, and payment
                      schedules, will be specified in your Service Agreement.
                      Unless otherwise stated, payments are due within the time
                      frame specified in the invoice.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Confidentiality
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      We respect the confidentiality of information shared with
                      us in the course of providing Services. We will maintain
                      confidentiality as specified in applicable Service
                      Agreements and in accordance with industry standards.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Disclaimers
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      Our Services are provided &quot;as is&quot; and &quot;as available&quot;
                      without warranties of any kind, either express or implied.
                      We do not guarantee that our Services will be
                      uninterrupted, error-free, or completely secure.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Limitation of Liability
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      To the maximum extent permitted by law, JezeroX shall not
                      be liable for any indirect, incidental, special,
                      consequential, or punitive damages, or any loss of
                      profits or revenues, whether incurred directly or
                      indirectly, or any loss of data, use, goodwill, or other
                      intangible losses resulting from your use of our Services.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Indemnification
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      You agree to indemnify and hold harmless JezeroX, its
                      officers, directors, employees, and agents from any claims,
                      damages, losses, liabilities, and expenses (including
                      legal fees) arising out of your use of our Services or
                      violation of these Terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Termination
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      We may terminate or suspend your access to our Services
                      immediately, without prior notice, for any reason,
                      including if you breach these Terms. Upon termination,
                      your right to use the Services will cease immediately.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Governing Law
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      These Terms shall be governed by and construed in
                      accordance with applicable laws, without regard to its
                      conflict of law provisions. Any disputes arising from
                      these Terms or our Services shall be resolved through
                      appropriate legal channels.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Changes to Terms
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      We reserve the right to modify these Terms at any time.
                      We will notify you of any material changes by posting the
                      updated Terms on this page and updating the &quot;Last updated&quot;
                      date. Your continued use of our Services after changes
                      become effective constitutes acceptance of the modified
                      Terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Severability
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      If any provision of these Terms is found to be invalid or
                      unenforceable, the remaining provisions will continue to
                      be valid and enforceable to the fullest extent permitted
                      by law.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Contact Information
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      If you have any questions about these Terms, please
                      contact us at:
                    </p>
                    <div className="mt-4 rounded-lg border border-border bg-bg-surface-2 p-6">
                      <p className="text-text-secondary">
                        <strong className="text-text-primary">JezeroX</strong>
                        <br />
                        Email:{" "}
                        <a
                          href="mailto:info@jezerox.com"
                          className="text-accent hover:underline"
                        >
                          info@jezerox.com
                        </a>
                        <br />
                        Website:{" "}
                        <a
                          href="/contact"
                          className="text-accent hover:underline"
                        >
                          Contact Us
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
