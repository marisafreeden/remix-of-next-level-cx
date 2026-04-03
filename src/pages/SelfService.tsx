import { useState } from "react";
import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@/styles/contact-center.css";
import "@/styles/integrations.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import ctaBg from "@/assets/cta-bg.png";
import ctaOverlay from "@/assets/cta-overlay.png";

import {
  Phone, Zap, BarChart3, Bot, Users, Mic,
  ChevronDown, TrendingUp, Settings, ArrowRightLeft,
  Keyboard
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

const faqs = [
  { q: "What's the difference between IVR and IVA?", a: "IVR uses keypad inputs for structured, menu-based self-service. IVA uses conversational AI so customers can speak naturally. Both route, resolve, and escalate — just differently." },
  { q: "Can customers switch to a live agent?", a: "Yes. Both IVR and IVA support seamless escalation to a live agent with full context carried over, so customers never have to repeat themselves." },
  { q: "What kind of requests can self-service handle?", a: "Common use cases include account lookups, balance checks, appointment scheduling, payment processing, and routing to the right department." },
  { q: "How accurate is the IVA?", a: "IVA achieves an 80% success rate on automated interactions, helping reduce call times while keeping conversations natural." },
  { q: "Does this integrate with our existing systems?", a: "Yes. Self-service connects to your CRM, databases, and backend systems to pull real-time data and trigger actions during the interaction." },
];

const SelfServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently asked<br /><span className="faq-title-italic">questions</span></h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? "faq-item-open" : ""}`}>
            <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <span>{faq.q}</span>
              <ChevronDown size={18} className={`faq-chevron ${openIndex === i ? "faq-chevron-open" : ""}`} />
            </button>
            <div className={`faq-answer-wrap ${openIndex === i ? "faq-answer-open" : ""}`}>
              <p className="faq-answer">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SelfService = () => {
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

      {/* HERO */}
      <section className="intg-hero">
        <div className="intg-hero-bg" />
        <div className="intg-hero-inner">
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>SELF-SERVICE</p>
          <h1 className="cc-hero-heading" style={{ fontSize: "56px", marginTop: "16px", marginBottom: "20px" }}>
            <span className="cc-hero-heading-line" style={{ paddingBottom: "2px" }}>Self-service that</span>
            <span className="cc-hero-heading-accent">just works.</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: "640px", margin: "0 auto 40px" }}>
            Resolve what it can, route where it should, and keep conversations moving — delivering faster, more efficient customer experiences.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Book a Demo <span style={{ fontSize: "18px" }}>→</span></button>
            <button className="btn-hero-b">See Omnichannel</button>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">THE PROBLEM</p>
            <h2 className="promos-title">
              Customers don't<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>want to wait.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Over 60% of customers try to solve issues before calling. But when self-service falls short, they end up stuck in menus, repeating themselves, or waiting for an agent.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#0a0f18", marginTop: "20px" }}>
              Better self-service, backed by AI, changes that.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="uc-benefits-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PlaceholderImage />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">HOW IT WORKS</p>
            <h2 className="promos-title">
              Route. Resolve.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Move forward.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Self-service works best when it's simple, flexible, and responsive:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
              {[
                "Route customers to the right place quickly",
                "Resolve common requests automatically",
                "Move forward with context when agents step in",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ color: "#43B5BF", fontSize: "13px", flexShrink: 0, fontWeight: 600 }}>✓</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#4a5568", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IVR */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">ADVANCED IVR</p>
            <h2 className="promos-title">
              Simple, structured<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>self-service.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Keypad-based navigation for clear, predefined paths. Customers reach the right department fast, trigger actions based on selections, and exit to an agent when needed.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#4a5568", marginTop: "12px" }}>
              Fast, reliable, and built for high-volume repeatable requests.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* IVA */}
      <section className="uc-benefits-section" style={{ background: "#ffffff" }}>
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PlaceholderImage />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">INTELLIGENT VOICE ASSISTANTS</p>
            <h2 className="promos-title">
              Conversational<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>self-service.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              IVA lets customers speak naturally to complete tasks — no menus to navigate. Automate responses, complete tasks without agents, and identify why customers are calling.
            </p>
            <div style={{ display: "flex", gap: "24px", marginTop: "20px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "32px", fontWeight: 700, background: 'linear-gradient(135deg, #43B5BF, #7042D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>80%</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#64748b" }}>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>CAPABILITIES</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Built for smarter <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>self-service.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid">
          {[
            { icon: Keyboard, title: "Input Options", desc: "Support dial pad and voice-based self-service." },
            { icon: Mic, title: "Conversational Automation", desc: "Enable natural interactions through voice." },
            { icon: Settings, title: "Workflow Integration", desc: "Connect self-service to your systems and data." },
            { icon: Phone, title: "Live Agent Fallback", desc: "Escalate to a human when needed — with full context." },
            { icon: Bot, title: "Smart Processes", desc: "Automate steps like routing and follow-up actions." },
            { icon: BarChart3, title: "Analytics & Insights", desc: "Understand what customers need and why they're calling." },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{f.title}</h3>
                <p className="uc-benefit-desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="uc-benefits-section" style={{ background: "linear-gradient(135deg, #43B5BF 0%, #27698F 40%, #7042D2 100%)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.7)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "16px" }}>PROVEN RESULTS</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              {[
                { stat: "~42%", label: "Reduction in IVR navigation time" },
                { stat: "~10pt", label: "Increase in NPS" },
                { stat: "~97%", label: "Accuracy in call routing" },
                { stat: "~80%", label: "Reduction in internal transfers" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "36px", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{s.stat}</div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7 }}>
              Self-service creates efficient interactions before an agent even picks up the call — reducing call volumes, improving first contact resolution, and boosting satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONAL SHIFT */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">SCALE SMARTER</p>
            <h2 className="promos-title">
              Handle more without<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>adding more.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Scale your contact center without scaling your headcount. Automate repetitive requests, reduce agent dependency, and improve efficiency across every interaction.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-block-section">
        <div className="cta-block-inner" style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px' }}>
          <img src={ctaBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', zIndex: 0 }} />
          <img src={ctaOverlay} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="cta-block-title">Let customers help themselves.<br /><span className="cta-block-title-italic">Let agents focus on what matters.</span></h2>
            <p className="cta-block-subtitle">See how IVR and IVA work together to deliver faster, smarter self-service.</p>
            <div className="cta-block-buttons">
              <a href="#" className="cta-block-primary">Get a Demo <span style={{ fontSize: "18px" }}>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <SelfServiceFAQ />
      <Footer />
    </div>
  );
};

export default SelfService;
