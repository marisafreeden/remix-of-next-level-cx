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
  Phone, Zap, BarChart3, ShieldCheck, Users, Clock,
  Eye, PhoneOutgoing, PhoneCall, Voicemail, Database,
  ChevronDown, TrendingUp, Target
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
  { q: "What dialing modes are available?", a: "GoContact supports predictive, power, preview, and manual dialing modes — so you can match the approach to the campaign." },
  { q: "Can I run multiple campaigns at once?", a: "Yes. Launch, pause, and adjust multiple campaigns simultaneously with real-time visibility into performance." },
  { q: "How does compliance work?", a: "Time zone-aware dialing, DNC list management, and pacing controls are built into the platform. No additional systems needed." },
  { q: "Does the dialer integrate with our CRM?", a: "Yes. GoContact integrates with Microsoft Dynamics, Salesforce, and other CRMs so agent context is always available." },
  { q: "How does this improve agent productivity?", a: "By eliminating manual dialing and idle time, agents spend more of their day in live conversations — increasing talk time and campaign results." },
];

const DialerFAQ = () => {
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

const Dialer = () => {
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
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>DIALER</p>
          <h1 className="cc-hero-heading" style={{ fontSize: "56px", marginTop: "16px", marginBottom: "20px" }}>
            <span className="cc-hero-heading-line" style={{ paddingBottom: "2px" }}>Stop dialing.</span>
            <span className="cc-hero-heading-accent">Start connecting.</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: "640px", margin: "0 auto 40px" }}>
            GoContact's intelligent dialer helps your team reach more people, reduce manual work, and turn outbound into consistent, meaningful conversations.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Request a Demo <span style={{ fontSize: "18px" }}>→</span></button>
            <button className="btn-hero-b">See How It Works</button>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">THE PROBLEM</p>
            <h2 className="promos-title">
              Dialing shouldn't<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>be the work.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Your agents don't come to work to dial numbers. They're here to help customers. GoContact's dialer removes the busywork so your team stays focused on conversations.
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
              Dial, connect,<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>move on. Automatically.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Instead of dialing, waiting, and retrying, the system moves agents from one conversation to the next. Smoother workflows for agents, more consistent outreach for your company.
            </p>
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">FOR AGENTS</p>
            <h2 className="promos-title">
              Stay focused.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Stay in flow.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Agents move between calls with context already in place. No manual dialing. No switching screens. Just a steady flow of conversations.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* MANAGERS */}
      <section className="uc-benefits-section" style={{ background: "#ffffff" }}>
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PlaceholderImage />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">FOR MANAGERS</p>
            <h2 className="promos-title">
              Control campaign<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>performance in real time.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Launch campaigns, adjust pacing, and monitor results live. Visibility into connection rates, outcomes, and agent activity makes optimization easy.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">COMPLIANCE</p>
            <h2 className="promos-title">
              Built-in controls.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Not bolt-on.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Time zone-aware dialing, DNC management, and pacing controls keep your team aligned with regulations — without additional systems.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>DIALING MODES</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            The right mode for <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>every campaign.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid">
          {[
            { icon: Eye, title: "Power Preview", desc: "Preview contact details before calling." },
            { icon: Zap, title: "Power Dial", desc: "Reduce time between calls to improve campaign results." },
            { icon: Phone, title: "Manual Dial", desc: "Manually enter numbers when needed." },
            { icon: PhoneOutgoing, title: "Predictive Dialer", desc: "Automatically place calls based on agent availability." },
            { icon: Voicemail, title: "Voicemail Detection", desc: "Skip voicemails and focus on live conversations." },
            { icon: Database, title: "Data Management", desc: "Upload and manage contact lists ahead of time." },
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

      {/* OUTCOME */}
      <section className="uc-benefits-section" style={{ background: "#ffffff" }}>
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PlaceholderImage />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">THE RESULT</p>
            <h2 className="promos-title">
              More talk time.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Stronger outcomes.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              By removing manual work and idle time, agents spend more of their day in live conversations — driving productivity, engagement, and campaign results.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>WHY IT MATTERS</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Consistency you can <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>count on.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid">
          {[
            { icon: Target, title: "Connected CX Platform", desc: "Outbound integrates with omnichannel, CRM, and inbound workflows." },
            { icon: TrendingUp, title: "Better Workdays", desc: "Less dialing, less friction, more confidence and consistency for agents." },
            { icon: BarChart3, title: "Campaign Control", desc: "Upload lists, prioritize leads, adjust pacing, and monitor results — no spreadsheets." },
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

      {/* CTA */}
      <section className="cta-block-section">
        <div className="cta-block-inner" style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px' }}>
          <img src={ctaBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', zIndex: 0 }} />
          <img src={ctaOverlay} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="cta-block-title">Stop dialing manually.<br /><span className="cta-block-title-italic">Start connecting at scale.</span></h2>
            <p className="cta-block-subtitle">See how GoContact's dialer helps your team reach more customers with less effort.</p>
            <div className="cta-block-buttons">
              <a href="#" className="cta-block-primary">Get a Demo <span style={{ fontSize: "18px" }}>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <DialerFAQ />
      <Footer />
    </div>
  );
};

export default Dialer;
