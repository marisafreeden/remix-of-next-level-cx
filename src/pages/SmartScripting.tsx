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
  FileText, Zap, BarChart3, Users, RefreshCw, Settings,
  ChevronDown, TrendingUp, ShieldCheck, ArrowRightLeft
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
  { q: "What is smart scripting?", a: "Smart scripting provides agents with dynamic, step-by-step guidance during live conversations — adapting in real time based on customer responses and data." },
  { q: "Do agents have to follow scripts word-for-word?", a: "No. Scripts guide the conversation flow and ensure key steps are followed, but agents stay flexible and natural in how they communicate." },
  { q: "Can scripts be customized per campaign or channel?", a: "Yes. Scripts can be built and adapted for any campaign, channel, or use case using the drag-and-drop builder." },
  { q: "How does this help new agents?", a: "New agents ramp faster because they have step-by-step guidance from day one — reducing training time and improving consistency." },
  { q: "Does smart scripting work across channels?", a: "Yes. Scripts support both inbound and outbound conversations across voice and digital channels." },
];

const ScriptingFAQ = () => {
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

const SmartScripting = () => {
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
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>SMART SCRIPTING</p>
          <h1 className="cc-hero-heading" style={{ fontSize: "56px", marginTop: "16px", marginBottom: "20px" }}>
            <span className="cc-hero-heading-line" style={{ paddingBottom: "2px" }}>Confident conversations</span>
            <span className="cc-hero-heading-accent">start here.</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: "640px", margin: "0 auto 40px" }}>
            Give agents step-by-step guidance that keeps conversations clear, consistent, and confident — so every interaction leads to better outcomes.
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
            <p className="promos-eyebrow">THE CHALLENGE</p>
            <h2 className="promos-title">
              Strong agents still<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>need the right support.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Without real-time guidance, even experienced agents slow down — checking notes, second-guessing steps, or navigating disconnected tools. The right scripts change that.
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
              Build. Guide.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Improve.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Smart scripting is a system for better conversations:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
              {[
                "Build scripts with an intuitive drag-and-drop builder",
                "Guide agents in real time with dynamic, step-by-step support",
                "Improve performance by standardizing best practices",
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

      {/* FOR AGENTS */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">FOR AGENTS</p>
            <h2 className="promos-title">
              Work with confidence.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Every call.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Scripts guide each step of the conversation so agents always know what to do next — staying focused and fully present.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* FOR MANAGERS */}
      <section className="uc-benefits-section" style={{ background: "#ffffff" }}>
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PlaceholderImage />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">FOR MANAGERS</p>
            <h2 className="promos-title">
              Drive consistent<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>performance.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Standardize how conversations are handled across your team. Every agent follows the same proven approach — improving quality and reducing variability.
            </p>
          </div>
        </div>
      </section>

      {/* FOR IT */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">FOR IT TEAMS</p>
            <h2 className="promos-title">
              Flexible and<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>easy to manage.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Configure once, then adapt anytime. Build and update scripts based on real-time performance needs — across any channel.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>CAPABILITIES</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Everything your scripts <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>need to deliver.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid">
          {[
            { icon: FileText, title: "Smart Builder", desc: "Create and update scripts without technical support." },
            { icon: RefreshCw, title: "Dynamic Scripting", desc: "Adapt scripts in real time using customer data." },
            { icon: Users, title: "Real-Time Training", desc: "Guide agents while they work, not after." },
            { icon: ArrowRightLeft, title: "Two-Way Scripts", desc: "Support both inbound and outbound conversations." },
            { icon: Settings, title: "Smart Processes", desc: "Automate steps like routing and follow-up actions." },
            { icon: BarChart3, title: "Real-Time Reports", desc: "Track script performance for ongoing improvements." },
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

      {/* RESULTS */}
      <section className="uc-benefits-section" style={{ background: "#ffffff" }}>
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PlaceholderImage />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">THE RESULT</p>
            <h2 className="promos-title">
              Better conversations.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Better results.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              When agents are supported in the moment, performance improves: shorter handle times, more consistent interactions, and higher customer satisfaction — without adding complexity.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>WHY IT MATTERS</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Consistency that <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>scales.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid">
          {[
            { icon: TrendingUp, title: "Consistent Conversations", desc: "Deliver the same high-quality experience across every agent and channel." },
            { icon: ShieldCheck, title: "Fewer Errors", desc: "Ensure the right questions are asked, data is captured, and steps are followed." },
            { icon: Zap, title: "Faster Ramp-Up", desc: "New agents perform with confidence from day one with built-in guidance." },
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
            <h2 className="cta-block-title">Give your agents the guidance<br /><span className="cta-block-title-italic">they need to perform.</span></h2>
            <p className="cta-block-subtitle">See how smart scripting keeps conversations clear, consistent, and confident.</p>
            <div className="cta-block-buttons">
              <a href="#" className="cta-block-primary">Get a Demo <span style={{ fontSize: "18px" }}>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <ScriptingFAQ />
      <Footer />
    </div>
  );
};

export default SmartScripting;
