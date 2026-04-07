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
import omniFragmented from "@/assets/omni-fragmented-channels.jpg";
import omniUnified from "@/assets/omni-unified-workspace.jpg";
import omniSingle from "@/assets/omni-single-workspace.jpg";
import omniManager from "@/assets/omni-manager-analytics.jpg";
import omniAdmin from "@/assets/omni-it-admin.jpg";
import omniFlow from "@/assets/omni-conversation-flow.jpg";
import ctaOverlay from "@/assets/cta-overlay.png";
import {
  MessageSquare, Headphones, Mail, Smartphone, Monitor,
  History, LayoutGrid, BarChart3, ArrowRightLeft, Users,
  Eye, ChevronDown, Zap, TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";

const faqs = [
  { q: "What channels does the omnichannel platform support?", a: "GoContact supports voice, chat, email, and SMS in a single unified workspace. Agents manage all interactions from one interface without switching tools." },
  { q: "How does omnichannel differ from multichannel?", a: "Multichannel means offering multiple channels separately. Omnichannel connects them — so conversation history, context, and customer records carry across every channel seamlessly." },
  { q: "Do agents need training on each channel separately?", a: "No. The unified workspace means agents handle all channels from the same interface with the same workflows, reducing training time and complexity." },
  { q: "Can customers switch channels mid-conversation?", a: "Yes. A customer can start in chat, follow up via email, and call in — and the agent will have full context from every prior interaction without the customer repeating themselves." },
  { q: "How does this improve first contact resolution?", a: "When agents see the full conversation history across channels, they spend less time asking questions and more time resolving issues, leading to higher FCR and shorter handle times." },
];

const OmnichannelFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="faq-section">
      <h2 className="faq-title">
        Frequently asked<br />
        <span className="faq-title-italic">questions</span>
      </h2>
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

const Omnichannel = () => {
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
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>OMNICHANNEL CONTACT CENTER</p>
          <h1 className="cc-hero-heading" style={{ fontSize: "56px", marginTop: "16px", marginBottom: "20px" }}>
            <span className="cc-hero-heading-line" style={{ paddingBottom: "2px" }}>Customers don't think in channels.</span>
            <span className="cc-hero-heading-accent">You shouldn't either.</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: "640px", margin: "0 auto 40px" }}>
            GoContact keeps conversations connected across voice, chat, email, and SMS, so agents can focus on the customer, not the tool.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Request a Demo <span style={{ fontSize: "18px" }}>→</span></button>
            <button className="btn-hero-b">See How It Works</button>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM: One Conversation ─── */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">ONE CONVERSATION. EVERY CHANNEL.</p>
            <h2 className="promos-title">
              Customers want help.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Not another tool.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Most contact centers manage voice, chat, email, and texting in separate systems. Agents lose context, customers repeat themselves, and issues take longer to resolve.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#0a0f18", marginTop: "20px" }}>
              GoContact brings those interactions together so your team can see the whole picture.
            </p>
          </div>
          <img src={omniFragmented} alt="Fragmented contact center channels" loading="lazy" width={1024} height={768} style={{ borderRadius: "16px", maxWidth: "480px", width: "100%" }} />
        </div>
      </section>

      {/* ─── SOLUTION: All Channels Working Together ─── */}
      <section className="uc-benefits-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <img src={omniUnified} alt="Unified omnichannel workspace" loading="lazy" width={1024} height={768} style={{ borderRadius: "16px", maxWidth: "480px", width: "100%" }} />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">UNIFIED PLATFORM</p>
            <h2 className="promos-title">
              All your channels.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Finally working together.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              Voice and digital interactions flow into one workflow. Agents answer with clarity and customers get resolutions without repeating themselves.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ONE WORKSPACE ─── */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">ONE WORKSPACE</p>
            <h2 className="promos-title">
              Six screens per call.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Zero with GoContact.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              The average agent jumps between six screens on every interaction. With GoContact, they have one place to get customer history and context — so they can respond faster.
            </p>
            <div style={{ display: "flex", gap: "32px", marginTop: "24px" }}>
              {[
                { label: "Higher FCR", icon: TrendingUp },
                { label: "Higher CSAT", icon: Users },
                { label: "Higher Productivity", icon: Zap },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Icon size={18} strokeWidth={1.5} style={{ color: "#43B5BF" }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: "#1a202c" }}>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <img src={omniSingle} alt="Single agent workspace" loading="lazy" width={1024} height={768} style={{ borderRadius: "16px", maxWidth: "480px", width: "100%" }} />
        </div>
      </section>

      {/* ─── PERSONA: Managers ─── */}
      <section className="uc-benefits-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <img src={omniManager} alt="Manager analytics dashboard" loading="lazy" width={1024} height={768} style={{ borderRadius: "16px", maxWidth: "480px", width: "100%" }} />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">FOR MANAGERS</p>
            <h2 className="promos-title">
              Visibility across<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>every channel.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              When performance data is spread across separate systems, it's impossible to see what's actually happening. GoContact gives you one place to see response times, workloads, and performance trends.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PERSONA: IT ─── */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">FOR IT TEAMS</p>
            <h2 className="promos-title">
              Channel control<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>without complexity.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              GoContact centralizes channels, routing, and administration in one place — so teams can manage operations without added systems or overhead.
            </p>
          </div>
          <img src={omniAdmin} alt="IT admin channel management" loading="lazy" width={1024} height={768} style={{ borderRadius: "16px", maxWidth: "480px", width: "100%" }} />
        </div>
      </section>

      {/* ─── FEATURE GRID ─── */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>BUILT FOR EVERY CHANNEL</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            A workspace built for <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>real conversations.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '560px', margin: '12px auto 0' }}>
            Everything your team needs to manage conversations across channels without losing context.
          </p>
        </div>
        <div className="uc-benefits-grid">
          {[
            { icon: Monitor, title: "Unified Workspace", desc: "Agents manage conversations across channels in one consistent interface." },
            { icon: History, title: "Customer History", desc: "Every interaction is captured in the customer record across channels for faster resolutions." },
            { icon: MessageSquare, title: "Digital Channels", desc: "Chat, email, and SMS alongside voice — all in one platform." },
            { icon: LayoutGrid, title: "Queue Management", desc: "Intelligently prioritize and distribute interactions for faster response times." },
            { icon: BarChart3, title: "Channel Analytics", desc: "Measure performance and response times across every channel." },
            { icon: ArrowRightLeft, title: "Conversation Continuity", desc: "Customers can switch channels without restarting the conversation." },
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

      {/* ─── OPERATIONAL SHIFT ─── */}
      <section className="uc-benefits-section" style={{ background: "#ffffff" }}>
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <img src={omniFlow} alt="Conversation flowing across channels" loading="lazy" width={1024} height={768} style={{ borderRadius: "16px", maxWidth: "480px", width: "100%" }} />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">WHERE CONVERSATIONS CONNECT</p>
            <h2 className="promos-title">
              Channels change.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>Context shouldn't.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              They'll start in chat, follow up with a text, and call in if it gets complicated. The omnichannel platform keeps conversations connected so agents always have context.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS OUTCOMES ─── */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>THE RESULT</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Faster answers. <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>Better experiences.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '560px', margin: '12px auto 0' }}>
            With full visibility across channels, agents skip the guesswork and solve issues faster.
          </p>
        </div>
        <div className="uc-benefits-grid">
          {[
            { icon: Zap, title: "Faster response times", desc: "Across every channel, every interaction." },
            { icon: Eye, title: "No more guessing", desc: "Agents see full conversation history — improving FCR and reducing handle time." },
            { icon: Users, title: "Consistent experiences", desc: "Customers get the same quality regardless of channel." },
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

      {/* ─── PROOF / STAT ─── */}
      <section className="uc-benefits-section" style={{ background: "linear-gradient(135deg, #43B5BF 0%, #27698F 40%, #7042D2 100%)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "64px", alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "96px", fontWeight: 700, color: "#fff", lineHeight: 1 }}>+300%</div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.85)", marginTop: "12px" }}>Increase in Customer Satisfaction</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.9)", lineHeight: 1.7 }}>
              Future Healthcare improved customer satisfaction after connecting conversations across channels with GoContact's omnichannel platform. This gave them:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
              {[
                "Full visibility into customer conversations across channels",
                "Real-time operational insight for managers",
                "Faster issue resolution with context",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ color: "#fff", fontSize: "13px", flexShrink: 0, fontWeight: 600 }}>✓</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="cta-block-section">
        <div className="cta-block-inner" style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px' }}>
          <img src={ctaBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', zIndex: 0 }} />
          <img src={ctaOverlay} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="cta-block-title">
              See how omnichannel<br />
              <span className="cta-block-title-italic">transforms your contact center.</span>
            </h2>
            <p className="cta-block-subtitle">Connect every channel, give agents full context, and deliver better customer experiences from day one.</p>
            <div className="cta-block-buttons">
              <a href="#" className="cta-block-primary">Get a Demo <span style={{ fontSize: "18px" }}>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <OmnichannelFAQ />

      <Footer />
    </div>
  );
};

export default Omnichannel;
