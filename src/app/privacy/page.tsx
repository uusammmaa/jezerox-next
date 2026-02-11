import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "JezeroX Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Section>
          <div className="mx-auto max-w-3xl">
            <h1 className="font-(family-name:--font-space-grotesk) text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-text-muted">
              Last updated: February 11, 2026
            </p>

            <div className="prose prose-invert mt-10 max-w-none">
              <div className="prose-headings:font-[family-name:var(--font-space-grotesk)] prose-headings:text-text-primary prose-p:text-text-secondary prose-strong:text-text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-li:text-text-secondary">
                <section className="space-y-6">
                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Introduction
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      JezeroX (&quot;we,&quot; &quot;our,&quot; or
                      &quot;us&quot;) is committed to protecting your privacy.
                      This Privacy Policy explains how we collect, use,
                      disclose, and safeguard your information when you visit
                      our website or use our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Information We Collect
                    </h2>
                    <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-xl font-semibold text-text-primary">
                      Information You Provide
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      We collect information that you voluntarily provide to us
                      when you:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
                      <li>Contact us through our contact form</li>
                      <li>Request a consultation or project quote</li>
                      <li>Subscribe to our newsletter or updates</li>
                      <li>Apply for a job or career opportunity</li>
                      <li>Communicate with us via email or other channels</li>
                    </ul>
                    <p className="mt-4 text-text-secondary">
                      This information may include your name, email address,
                      phone number, company name, project details, and any other
                      information you choose to provide.
                    </p>

                    <h3 className="mt-6 font-(family-name:--font-space-grotesk) text-xl font-semibold text-text-primary">
                      Automatically Collected Information
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      When you visit our website, we automatically collect
                      certain information about your device and browsing
                      behavior, including:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      How We Use Your Information
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      We use the information we collect to:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
                      <li>
                        Provide, operate, and maintain our website and services
                      </li>
                      <li>Respond to your inquiries and requests</li>
                      <li>Send you project updates and communications</li>
                      <li>Process job applications and recruitment</li>
                      <li>Improve our website and user experience</li>
                      <li>Analyze usage patterns and trends</li>
                      <li>Prevent fraud and ensure security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Information Sharing and Disclosure
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      We do not sell, trade, or rent your personal information
                      to third parties. We may share your information only in
                      the following circumstances:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
                      <li>
                        <strong>Service Providers:</strong> We may share
                        information with trusted third-party service providers
                        who assist us in operating our website and conducting
                        our business, subject to confidentiality agreements.
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> We may disclose
                        information if required by law or in response to valid
                        legal requests.
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In the event of a
                        merger, acquisition, or sale of assets, your information
                        may be transferred as part of that transaction.
                      </li>
                      <li>
                        <strong>With Your Consent:</strong> We may share your
                        information with your explicit consent.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Cookies and Tracking Technologies
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      We use cookies and similar tracking technologies to
                      enhance your browsing experience, analyze website traffic,
                      and understand user preferences. You can control cookie
                      preferences through your browser settings. However,
                      disabling cookies may limit some functionality of our
                      website.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Data Security
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      We implement appropriate technical and organizational
                      measures to protect your personal information against
                      unauthorized access, alteration, disclosure, or
                      destruction. However, no method of transmission over the
                      internet or electronic storage is 100% secure, and we
                      cannot guarantee absolute security.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Your Rights
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      Depending on your location, you may have certain rights
                      regarding your personal information, including:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
                      <li>The right to access your personal information</li>
                      <li>The right to correct inaccurate information</li>
                      <li>The right to request deletion of your information</li>
                      <li>
                        The right to object to processing of your information
                      </li>
                      <li>The right to data portability</li>
                      <li>The right to withdraw consent</li>
                    </ul>
                    <p className="mt-4 text-text-secondary">
                      To exercise these rights, please contact us at{" "}
                      <a
                        href="mailto:info@jezerox.com"
                        className="text-accent hover:underline"
                      >
                        info@jezerox.com
                      </a>
                      {"."}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Children&apos;s Privacy
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      Our website and services are not directed to individuals
                      under the age of 18. We do not knowingly collect personal
                      information from children. If you believe we have
                      collected information from a child, please contact us
                      immediately.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      International Data Transfers
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      Your information may be transferred to and processed in
                      countries other than your country of residence. We ensure
                      that appropriate safeguards are in place to protect your
                      information in accordance with this Privacy Policy.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Changes to This Privacy Policy
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      We may update this Privacy Policy from time to time. We
                      will notify you of any material changes by posting the new
                      Privacy Policy on this page and updating the &quot;Last
                      updated&quot; date. We encourage you to review this
                      Privacy Policy periodically.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                      Contact Us
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      If you have any questions or concerns about this Privacy
                      Policy or our data practices, please contact us at:
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
