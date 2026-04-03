import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@/styles/contact-center.css";
import "@/styles/integrations.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Check, Zap, Database, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PlaceholderImage = () => (
  <div className="intg-placeholder">
    <div className="intg-placeholder-inner">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="intg-placeholder-sq" />
      ))}
    </div>
  </div>
);

const steps = [
  "Agent logs in from inside Dynamics",
  "Selects queue or campaign",
  "Handles inbound and outbound calls from the panel",
  "Wraps the call and captures the outcome",
  "Notes and interaction details save to the contact record automatically",
  "Recordings stay in the contact center platform",
];

const included = [
  "Embedded call panel inside Microsoft Dynamics",
  "Inbound and outbound call handling",
  "Queue and campaign selection",
  "Automatic call outcome capture",
  "Interaction details saved to the contact record",
  "SAML authentication",
  "Role-based access controls",
  "Compliance-ready audit trails",
];

const IntegrationMSDynamics = () => {
  return (
    <div className="intg-page">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="cc-icon-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(185 49% 51%)" />
            <stop offset="100%" stopColor="hsl(261 61% 54%)" />
          </linearGradient>
        </defs>
      </svg>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="intg-hero">
        <div className="intg-hero-bg" />
        <div className="intg-hero-inner">
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>MICROSOFT DYNAMICS INTEGRATION</p>
          <h1 className="cc-hero-heading" style={{ fontSize: "56px", marginTop: "16px", marginBottom: "20px" }}>
            <span className="cc-hero-heading-line">Your agents are in Dynamics.</span>
            <span className="cc-hero-heading-accent">Now your calls are too.</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: "640px", margin: "0 auto 40px" }}>
            GoContact embeds directly inside Microsoft Dynamics — so calls, outcomes, and customer records live in one place. No switching. No duplicate logging. No lost context.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Request a Demo <span style={{ fontSize: "18px" }}>→</span></button>
            <button className="btn-hero-b">Watch It in Action</button>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">THE COST OF TWO SYSTEMS</p>
            <h2 className="promos-title">
              Every tab switch is<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>a small failure.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              When calling lives outside the CRM, agents bridge the gap manually. That gap has a price.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
              {[
                "Searching for records mid-call",
                "Copying data between tools",
                "Logging outcomes after every conversation",
                "More time on admin, less on the customer",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ color: "#E53E3E", fontSize: "13px", flexShrink: 0, fontWeight: 600 }}>✕</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#4a5568", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#0a0f18", marginTop: "20px" }}>
              GoContact closes the gap — by bringing calls inside Dynamics.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="uc-benefits-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PlaceholderImage />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">ONE WORKSPACE</p>
            <h2 className="promos-title">
              The call panel your agents<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>actually want to use.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              GoContact installs as a native panel inside Dynamics. Agents pick their queue, handle calls, and never leave the CRM.
            </p>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px", marginTop: "8px" }}>
              When a call ends, outcomes and notes write directly to the contact record. No cleanup. Nothing to remember.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VALUE ─── */}
      <section className="uc-features-section">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>WHY IT MATTERS</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Friction is quiet.<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>Until you measure it.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "620px", margin: "12px auto 0" }}>
            Every extra step — the lookup, the copy-paste, the post-call log — adds seconds per call and hours per week. Embedded calling means cleaner records, shorter handle times, and reporting you can trust.
          </p>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="uc-benefits-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">SIMPLE. EMBEDDED. AUTOMATIC.</p>
            <h2 className="promos-title">
              Six steps.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Then it just works.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "8px" }}>
              {steps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 700,
                    color: "#fff", background: "linear-gradient(135deg, #43B5BF, #7042D2)",
                    width: "26px", height: "26px", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>{i + 1}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.5, color: "#1a202c" }}>{step}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#0a0f18", marginTop: "20px" }}>
              One workflow. Every call. Every time.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* ─── FEATURES + BENEFITS side-by-side ─── */}
      <section className="uc-features-section">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>BUILT IN</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Everything needed.<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>Nothing extra.</span>
          </h2>
        </div>
        <div style={{ maxWidth: "720px", margin: "40px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 48px" }}>
          {included.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <Check size={17} strokeWidth={2.5} style={{ color: "#43B5BF", marginTop: "3px", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.55, color: "#1a202c" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BENEFITS CARDS ─── */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-grid" style={{ maxWidth: "1200px" }}>
          {[
            { icon: Zap, title: "Less switching", desc: "Agents stay in Dynamics. No extra tools, no lost context, no reorienting mid-conversation." },
            { icon: Database, title: "Cleaner records", desc: "Outcomes captured in-flow, not chased down after. Your CRM data reflects reality." },
            { icon: BarChart3, title: "Consistent at scale", desc: "One workspace means one process. Easier to manage, easier to coach, easier to report on." },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{b.title}</h3>
                <p className="uc-benefit-desc">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── DEPLOYMENT ─── */}
      <section className="uc-features-section">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>READY IN DAYS</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Installed from the App Store.<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>Running by end of week.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "620px", margin: "16px auto 0" }}>
            No custom integration work. No professional services. GoContact plugs into the Dynamics environment your team already uses — and your IT team already manages.
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="uc-benefits-section">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Your team lives in Dynamics.<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>Your calls should too.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "600px", margin: "16px auto 32px" }}>
            See GoContact in action — a 20-minute demo, configured for your environment.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Schedule a Demo <span style={{ fontSize: "18px" }}>→</span></button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationMSDynamics;
