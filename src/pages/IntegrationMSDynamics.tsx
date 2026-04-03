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

import {
  Check, Zap, Database, BarChart3, Phone, LogIn, ListChecks, FileText, Mic, Shield, UserCheck, ClipboardList
} from "lucide-react";
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

const painPoints = [
  "Agents search for records while the customer is already on the line.",
  "They copy and paste details between systems.",
  "They log outcomes after the call wraps up.",
  "They spend more time on admin and less time on the conversation.",
];

const howItWorksSteps = [
  "Agents log in directly from the CRM.",
  "They select their queue or campaign.",
  "Inbound and outbound calls are handled from the panel.",
  "At the end of the conversation, the call outcome is captured.",
  "Interaction details and notes are recorded in the contact record.",
  "Recordings remain in the contact center platform.",
];

const included = [
  "Embedded call panel inside Microsoft Dynamics",
  "Inbound and outbound call handling",
  "Queue and campaign selection",
  "Call outcome capture",
  "Interaction details saved to the contact record",
  "SAML authentication",
  "Role-based access controls",
  "Compliance-ready audit trails",
];

const benefits = [
  {
    icon: Zap,
    eyebrow: "BETTER AGENT WORKFLOWS",
    title: "Less switching, less admin, more focus.",
    desc: "Agents should not have to split their attention between the CRM and the contact center. By bringing calling into Dynamics, GoContact helps teams spend less time managing systems and more time handling conversations efficiently.",
  },
  {
    icon: Database,
    eyebrow: "CLEANER CUSTOMER HISTORY",
    title: "Keep interaction records aligned without extra effort.",
    desc: "When outcomes and notes are captured as part of the workflow, teams can maintain a more complete and trackable customer record without relying on manual follow-up.",
  },
  {
    icon: BarChart3,
    eyebrow: "MORE CONSISTENT OPERATIONS",
    title: "Make the process easier to manage at scale.",
    desc: "A single workspace helps create more consistent agent workflows, better recordkeeping, and clearer operational visibility across teams using Dynamics every day.",
  },
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

      {/* Hero */}
      <section className="intg-hero">
        <div className="intg-hero-bg" />
        <div className="intg-hero-inner">
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>MICROSOFT DYNAMICS INTEGRATION</p>
          <h1 className="cc-hero-heading" style={{ fontSize: "56px", marginTop: "16px", marginBottom: "20px" }}>
            <span className="cc-hero-heading-line">Run customer conversations</span>
            <span className="cc-hero-heading-accent">inside Dynamics.</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: "700px", margin: "0 auto 40px" }}>
            Most teams use Microsoft Dynamics as their source of truth, but calls still happen somewhere else. That gap creates extra work for agents and inconsistency for customers. GoContact brings calling into Dynamics so teams can stay in one workspace, reduce manual effort, and keep every interaction connected to the customer record.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Request a Demo <span style={{ fontSize: "18px" }}>→</span></button>
            <button className="btn-hero-b">See It Working</button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>DISCONNECTED WORKFLOWS</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Stop making agents work<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>in two systems.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "12px auto 0" }}>
            When calls happen outside the CRM, agents lose time switching tabs, searching for records, copying information, and cleaning up data after the conversation ends. That friction adds up fast.
          </p>
          <div style={{ maxWidth: "560px", margin: "28px auto 0", textAlign: "left", display: "flex", flexDirection: "column", gap: "12px" }}>
            {painPoints.map((point, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "#E53E3E", fontSize: "14px", marginTop: "3px", flexShrink: 0 }}>✕</span>
                <span className="goai-desc" style={{ margin: 0 }}>{point}</span>
              </div>
            ))}
          </div>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "28px auto 0" }}>
            GoContact helps remove that disconnect by bringing call handling directly into Microsoft Dynamics.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">ONE WORKSPACE</p>
            <h2 className="promos-title">
              Keep calls and customer records<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>in the same place.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "520px" }}>
              GoContact installs inside Microsoft Dynamics as an embedded panel, so agents can handle conversations without leaving the CRM. They log in from Dynamics, select their queue or campaign, and manage inbound and outbound calls from the same workspace where customer data already lives.
            </p>
            <p className="uc-benefit-desc" style={{ maxWidth: "520px", marginTop: "12px" }}>
              When the call ends, outcomes and notes are saved to the contact record automatically, helping teams maintain a cleaner, more consistent interaction history without the extra cleanup later.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
              {["No extra tabs.", "No duplicate logging.", "No disconnected workflows."].map((line, i) => (
                <span key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#0a0f18" }}>{line}</span>
              ))}
            </div>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* Value Section */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>WHY IT MATTERS</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Reduce friction for agents and<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>make reporting easier.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "12px auto 0" }}>
            When calls and CRM activity live in separate systems, every interaction creates more work. Handle times increase, post-call tasks pile up, and reporting becomes harder to trust.
          </p>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "16px auto 0" }}>
            With GoContact embedded in Dynamics, agents stay focused in one place and interaction history stays more consistent. That means less effort during the conversation, less manual work after it, and better visibility across the customer journey.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PlaceholderImage />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">EMBEDDED EXPERIENCE</p>
            <h2 className="promos-title">
              A simpler way to handle calls<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>inside Dynamics.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "520px" }}>
              GoContact appears as a panel inside Microsoft Dynamics, giving agents access to calling without forcing them into a separate tool.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
              {howItWorksSteps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#338FAD", marginTop: "2px", flexShrink: 0 }}>{i + 1}.</span>
                  <span className="uc-benefit-desc" style={{ margin: 0 }}>{step}</span>
                </div>
              ))}
            </div>
            <p className="uc-benefit-desc" style={{ maxWidth: "520px", marginTop: "16px" }}>
              The result is a more connected workflow that helps teams move faster while keeping customer history aligned.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>BUILT IN</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Everything teams need to work<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>from one system.</span>
          </h2>
        </div>
        <div style={{ maxWidth: "720px", margin: "40px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 48px" }}>
          {included.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <Check size={18} strokeWidth={2.5} style={{ color: "#43B5BF", marginTop: "2px", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.6, color: "#1a202c" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="uc-features-section">
        <div className="uc-benefits-grid" style={{ maxWidth: "1200px" }}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <p className="promos-eyebrow" style={{ marginBottom: "8px" }}>{b.eyebrow}</p>
                <h3 className="uc-benefit-title">{b.title}</h3>
                <p className="uc-benefit-desc">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deployment / Trust */}
      <section className="uc-benefits-section">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>READY TO DEPLOY</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Built to fit the way your<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>teams already work.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "20px auto 0" }}>
            GoContact is installed through the Microsoft Dynamics App Store and supported directly by Broadvoice, making it easier to bring calling into the CRM environment your teams already use.
          </p>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="uc-features-section">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>SEE IT IN ACTION</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            If your team lives in Dynamics,<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>your conversations should too.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "20px auto 32px" }}>
            See how GoContact helps agents handle inbound and outbound calls inside Microsoft Dynamics while keeping outcomes, notes, and customer records connected.
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
