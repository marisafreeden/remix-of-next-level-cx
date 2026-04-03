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

import { Clock, Zap, Heart, Database, Users, TrendingUp, BarChart3 } from "lucide-react";
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

const benefits = [
  {
    icon: Clock,
    eyebrow: "FASTER RESOLUTION",
    title: "Help agents solve issues without slowing customers down.",
    desc: "When the right customer information is easier to access during an interaction, agents can move faster, reduce repetition, and focus on the conversation instead of the systems behind it.",
  },
  {
    icon: Zap,
    eyebrow: "LOWER AGENT EFFORT",
    title: "Cut the admin work that drags productivity down.",
    desc: "Manual updates and constant switching between tools add unnecessary effort to every interaction. A more connected workflow helps teams spend less time on busywork and more time helping customers.",
  },
  {
    icon: Heart,
    eyebrow: "BETTER CUSTOMER EXPERIENCES",
    title: "Make every conversation feel more informed.",
    desc: "Customers expect businesses to know who they are and why they are reaching out. Bringing CRM context closer to the interaction helps teams deliver more personalized, consistent experiences.",
  },
  {
    icon: Database,
    eyebrow: "STRONGER CRM DATA",
    title: "Keep records useful without adding more work.",
    desc: "Customer data is only valuable when teams can keep it current. A tighter connection between Microsoft Dynamics and GoContact helps reduce gaps, improve consistency, and support a more complete customer view.",
  },
];

const useCases = [
  {
    eyebrow: "FOR SERVICE TEAMS",
    title: "Resolve issues faster and with less back-and-forth.",
    desc: "Give agents the context they need to understand the customer faster and move toward resolution with fewer delays.",
  },
  {
    eyebrow: "FOR SALES TEAMS",
    title: "Turn every interaction into a more productive conversation.",
    desc: "Help teams engage with better timing, better context, and less friction between outreach and CRM workflows.",
  },
  {
    eyebrow: "FOR OPERATIONS LEADERS",
    title: "Improve efficiency without sacrificing experience.",
    desc: "Reduce workflow friction, support cleaner processes, and help teams deliver better outcomes at scale.",
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
            <span className="cc-hero-heading-line">Your CRM knows the customer.</span>
            <span className="cc-hero-heading-accent">Your contact center should too.</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: "680px", margin: "0 auto 40px" }}>
            When agents have to jump between systems, conversations slow down and customer frustration rises. Connecting Microsoft Dynamics with GoContact helps your team work from the same customer context so they can respond faster, personalize every interaction, and reduce manual effort.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Book a demo <span style={{ fontSize: "18px" }}>→</span></button>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>DISCONNECTED TOOLS</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Too many tabs.<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>Not enough context.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "12px auto 0" }}>
            Service and sales teams lose time when customer data lives in one place and conversations happen in another. That disconnect leads to longer handle times, repetitive questions, and inconsistent follow-up.
          </p>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "16px auto 0" }}>
            With Microsoft Dynamics and GoContact working together, teams can engage customers with better context and less friction.
          </p>
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

      {/* Why It Matters */}
      <section className="uc-benefits-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">CUSTOMER EXPECTATIONS</p>
            <h2 className="promos-title">
              Better conversations start<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>with better context.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "520px" }}>
              Customers should not have to repeat themselves every time they call. When agents have quicker access to relevant customer information, they can handle conversations with more confidence and continuity.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* Use Cases */}
      <section className="uc-features-section">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>USE CASES</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Built for the teams that<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>talk to your customers.</span>
          </h2>
        </div>
        <div className="intg-audience-grid" style={{ maxWidth: "1200px", margin: "48px auto 0", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {useCases.map((u, i) => (
            <div key={i} className="uc-benefit-card">
              <p className="promos-eyebrow" style={{ marginBottom: "8px" }}>{u.eyebrow}</p>
              <h3 className="uc-benefit-title">{u.title}</h3>
              <p className="uc-benefit-desc">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="uc-benefits-section">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>CONNECTED EXPERIENCE</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Bring customer data and customer<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>conversations together.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "20px auto 32px" }}>
            Microsoft Dynamics and GoContact help teams close the gap between CRM and contact center workflows so they can work smarter, respond faster, and deliver a better experience from the first interaction onward.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Talk to an expert <span style={{ fontSize: "18px" }}>→</span></button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationMSDynamics;
