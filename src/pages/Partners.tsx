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
  Users, Shield, Headphones, Lightbulb, Rocket, Award,
  DollarSign, Target, BookOpen, Briefcase, TrendingUp, Gift,
  Calendar, Utensils, Trophy, Star, ChevronDown,
  UserCheck, Handshake, Wrench, Brain, Settings, Heart,
  Phone, GraduationCap, FileText, Mail as MailIcon, Send
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

const statItems = [
  { number: "200K+", label: "Customers" },
  { number: "3,000+", label: "Partners" },
  { number: "100%", label: "Partner-only distribution" },
];

const teamCards = [
  { icon: Handshake, role: "Partner Champion", title: "Channel Manager", desc: "Your go-to contact for deal strategy, onboarding, program updates, and day-to-day support." },
  { icon: Target, role: "Success Guide", title: "Partner Sales Manager", desc: "Your pre-sales ally who drives confident positioning, builds proposals, and helps you qualify every opportunity." },
  { icon: Wrench, role: "Solutions Expert", title: "Solutions Engineer", desc: "Your technical partner in demos and solution design — ready to get deep on architecture and integrations." },
  { icon: Brain, role: "CX Deal Support", title: "CX Strategist", desc: "On larger CCaaS deals, a CX Strategist joins your team to run discovery and accelerate time to close." },
  { icon: Settings, role: "Post-Sale", title: "Implementations Team", desc: "Once the deal is signed, a dedicated team takes the handoff — so your customer is live fast." },
  { icon: Heart, role: "Long-Term Success", title: "Customer Success Manager", desc: "Assigned post-launch to drive adoption, protect retention, and create upsell opportunities." },
];

const enablementCards = [
  { icon: Phone, title: "Call Scripts & Objection Handling", desc: "Proven talk tracks and objection responses built for mid-market UCaaS and CCaaS deals." },
  { icon: GraduationCap, title: "On-Demand & Live Training", desc: "The Learning Center covers GoContact CCaaS, b-hive UCaaS, and Bubble SMS with live sessions and eLearning paths." },
  { icon: FileText, title: "Partner Portal Access", desc: "Deal registration, co-branded assets, competitive battlecards, product collateral, and real-time pipeline tracking." },
  { icon: MailIcon, title: "Marketing Toolkits & Co-Sell Assets", desc: "Ready-to-use campaign materials, email templates, one-pagers, and co-branded content to generate pipeline." },
];

const growthCards = [
  { icon: DollarSign, title: "MDF for Events & Campaigns", desc: "Qualified partners receive Market Development Funds for co-marketed events, roundtable dinners, and local demand gen." },
  { icon: Target, title: "Lead Generation Support", desc: "Targeted lead lists, subscription platforms for prospecting, and joint business planning for consistent pipeline." },
  { icon: Utensils, title: "Exclusive Roundtable Dinners", desc: "Curated executive dinners that bring partners and their clients together for relationship-building." },
  { icon: Trophy, title: "Presidents Club", desc: "Top-performing partners earn an annual all-expenses-paid trip to a five-star destination." },
];

const commissionSteps = [
  { title: "Ongoing Recurring Commissions", desc: "Earn every month from every customer. Your commissions don't stop when the deal closes — they grow as accounts expand." },
  { title: "First-Deal Bonus", desc: "Close your first deal and earn a dedicated bonus on top of your standard commission — momentum out of the gate." },
  { title: "Tiered Rewards & SPIFFs", desc: "Bigger deals earn bigger bonuses. Product- and bundle-specific SPIFFs reward cross-selling CCaaS, UCaaS, and AI." },
  { title: "Joint Growth Planning", desc: "For committed partners, we build a co-success plan — setting shared goals, mapping pipeline, and aligning resources." },
];

const howItWorks = [
  { title: "Discovery Call", desc: "Your Channel Manager connects to understand your book of business and where the CX and UC opportunity is strongest." },
  { title: "Onboarding & Certification", desc: "Get portal access, complete self-certification through the Learning Center, and meet your full support team." },
  { title: "Register Your First Deal", desc: "For CC/CX opportunities, register in the portal. For UC, request a quote from your Channel Manager — quick and frictionless." },
  { title: "Close & Hand Off", desc: "We help you close. Then our implementation and success teams take over — so you're the hero." },
  { title: "Build Recurring Revenue", desc: "As your book grows, we grow with you. Joint business plans, MDF support, lead gen tools, and Presidents Club." },
];

const faqs = [
  { q: "Is Broadvoice really 100% partner-only?", a: "Yes. We don't sell direct. Every deal goes through a partner. Our entire organization is built to support the channel." },
  { q: "What products can I sell?", a: "You get the full portfolio: GoContact CCaaS, b-hive UCaaS, Bubble SMS, and AI-powered solutions — all from one vendor." },
  { q: "How do commissions work?", a: "You earn ongoing monthly recurring commissions plus first-deal bonuses and tiered SPIFFs. Commissions grow as your book of business expands." },
  { q: "How long does onboarding take?", a: "Most partners complete onboarding and certification within a few days and can register their first deal immediately." },
  { q: "Do I get dedicated support?", a: "Every partner gets a dedicated pod: Channel Manager, Partner Sales Manager, Solutions Engineer, and access to CX Strategists for larger deals." },
];

const PartnerFAQ = () => {
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

const PartnerForm = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ padding: "96px 48px", background: "#F9FAFB" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(67, 181, 191, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <Send size={28} style={{ color: "#43B5BF" }} />
          </div>
          <h2 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "32px", fontWeight: 500, letterSpacing: "-1px", color: "#0a0f18", marginBottom: "12px" }}>Thank you!</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#4a5568", lineHeight: 1.6 }}>
            We've received your information. A Channel Manager will be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "96px 48px", background: "#F9FAFB" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>BECOME A PARTNER</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Ready to <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>get started?</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '500px', margin: '12px auto 0' }}>
            Fill out the form and a Channel Manager will reach out to discuss how we can grow together.
          </p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", background: "#ffffff", border: "1px solid rgba(10, 15, 24, 0.06)", borderRadius: "20px", padding: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0a0f18" }}>First Name *</label>
            <input required value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", padding: "12px 16px", border: "1px solid rgba(10,15,24,0.12)", borderRadius: "10px", outline: "none", transition: "border-color 0.2s" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0a0f18" }}>Last Name *</label>
            <input required value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", padding: "12px 16px", border: "1px solid rgba(10,15,24,0.12)", borderRadius: "10px", outline: "none" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0a0f18" }}>Work Email *</label>
            <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", padding: "12px 16px", border: "1px solid rgba(10,15,24,0.12)", borderRadius: "10px", outline: "none" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0a0f18" }}>Company *</label>
            <input required value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", padding: "12px 16px", border: "1px solid rgba(10,15,24,0.12)", borderRadius: "10px", outline: "none" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0a0f18" }}>Phone</label>
            <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", padding: "12px 16px", border: "1px solid rgba(10,15,24,0.12)", borderRadius: "10px", outline: "none" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#0a0f18" }}>Message</label>
            <input value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", padding: "12px 16px", border: "1px solid rgba(10,15,24,0.12)", borderRadius: "10px", outline: "none" }} />
          </div>
          <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "center", marginTop: "8px" }}>
            <button type="submit" className="btn-hero-a" style={{ minWidth: "220px" }}>
              Become a Partner <span style={{ fontSize: "18px" }}>→</span>
            </button>
          </div>
        </form>
        <p style={{ textAlign: "center", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#4a5568", marginTop: "20px" }}>
          Questions? Talk to a Channel Manager → <a href="mailto:partners@broadvoice.com" style={{ color: "#43B5BF", fontWeight: 600, textDecoration: "none" }}>partners@broadvoice.com</a>
        </p>
      </div>
    </section>
  );
};

const Partners = () => {
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
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>CHANNEL PARTNER PROGRAM</p>
          <h1 className="cc-hero-heading" style={{ fontSize: "56px", marginTop: "16px", marginBottom: "20px" }}>
            <span className="cc-hero-heading-line" style={{ paddingBottom: "2px" }}>Win more. Earn more.</span>
            <span className="cc-hero-heading-accent">We're built for the channel.</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: "640px", margin: "0 auto 40px" }}>
            Broadvoice is 100% partner-only. Every resource, every tool, and every team member exists to help you close deals and grow recurring revenue — not compete with you.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Become a Partner <span style={{ fontSize: "18px" }}>→</span></button>
            <button className="btn-hero-b">Talk to a Channel Manager</button>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="cc-stats-section-v2 cc-stats-light">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0' }}>
          <div style={{ flex: '0 0 320px', paddingRight: '40px' }}>
            <p className="promos-eyebrow" style={{ textAlign: 'left', marginBottom: '8px' }}>BY THE NUMBERS</p>
            <p className="goai-desc" style={{ marginBottom: 0, marginTop: 0, textAlign: 'left', fontSize: '15px', lineHeight: '1.6' }}>
              UC + CC + AI in one portfolio — built exclusively for the channel.
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex' }}>
            {statItems.map((s, i) => (
              <div key={i} className="cc-stat-v2" style={{ flex: 1 }}>
                <span className="cc-stat-v2-number">{s.number}</span>
                <span className="cc-stat-v2-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BROADVOICE ─── */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">WHY BROADVOICE</p>
            <h2 className="promos-title">
              The CX opportunity is huge.<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>We make it simple to capture.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              The contact center market is projected to reach $16.43B by 2030. Mid-market businesses are modernizing fast — and they're looking to trusted partners to guide them.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* ─── MARKET STATS ─── */}
      <section className="uc-benefits-section" style={{ background: "linear-gradient(135deg, #43B5BF 0%, #27698F 40%, #7042D2 100%)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px", textAlign: "center" }}>
          {[
            { number: "$16.43B", label: "Projected global CCaaS market by 2030" },
            { number: "2×", label: "Faster revenue growth for CX-focused companies" },
            { number: "<60 days", label: "Average time to go live for your clients" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "56px", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{s.number}</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.85)", marginTop: "12px" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── YOUR TEAM ─── */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>YOUR TEAM</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            You never walk into a deal <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>alone.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '600px', margin: '12px auto 0' }}>
            Every partner gets a dedicated pod of specialists aligned to your region and your clients' needs.
          </p>
        </div>
        <div className="uc-benefits-grid">
          {teamCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#338FAD", marginBottom: "6px" }}>{card.role}</p>
                <h3 className="uc-benefit-title">{card.title}</h3>
                <p className="uc-benefit-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── ENABLEMENT ─── */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <PlaceholderImage />
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">ENABLEMENT</p>
            <h2 className="promos-title">
              Everything you need to sell<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>with confidence.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "480px" }}>
              From the first pitch to the renewal conversation, we arm you with the tools, training, and resources to compete and win.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ENABLEMENT CARDS ─── */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {enablementCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{card.title}</h3>
                <p className="uc-benefit-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── GROWTH PROGRAMS ─── */}
      <section className="uc-features-section">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>GROWTH PROGRAMS</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            We invest in partners who <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>invest with us.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '560px', margin: '12px auto 0' }}>
            We don't just pay commissions — we build partnerships that help you grow your entire practice.
          </p>
        </div>
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {growthCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{card.title}</h3>
                <p className="uc-benefit-desc">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── COMMISSIONS ─── */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>COMMISSIONS</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Industry-leading compensation, <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>structured to scale.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '600px', margin: '12px auto 0' }}>
            Multiple ways to earn and rewards that compound as your book of business grows.
          </p>
        </div>
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {commissionSteps.map((step, i) => (
            <div key={i} className="uc-benefit-card">
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "28px", fontWeight: 600, background: 'linear-gradient(105.96deg, #43B5BF 0%, #1D5B94 65.07%, #7042D2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: "12px" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="uc-benefit-title">{step.title}</h3>
              <p className="uc-benefit-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="uc-features-section">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>HOW IT WORKS</p>
          <h2 className="promos-title" style={{ textAlign: "center", background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Simple to start. <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>Built for the long term.</span>
          </h2>
        </div>
        <div style={{ maxWidth: "800px", margin: "48px auto 0", display: "flex", flexDirection: "column", gap: "0" }}>
          {howItWorks.map((step, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: "24px", padding: "32px 0", borderBottom: i < howItWorks.length - 1 ? "1px solid rgba(10,15,24,0.06)" : "none" }}>
              <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "32px", fontWeight: 600, background: 'linear-gradient(105.96deg, #43B5BF 0%, #1D5B94 65.07%, #7042D2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500, fontSize: "20px", letterSpacing: "-0.3px", color: "#0a0f18", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: 1.65, color: "#4a5568" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-block-section">
        <div className="cta-block-inner" style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px' }}>
          <img src={ctaBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', zIndex: 0 }} />
          <img src={ctaOverlay} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 className="cta-block-title">
              Your first win is<br />
              <span className="cta-block-title-italic">closer than you think.</span>
            </h2>
            <p className="cta-block-subtitle">Join 3,000+ partners already selling Broadvoice and GoContact. We're partner-only — when you succeed, we succeed.</p>
            <div className="cta-block-buttons">
              <a href="#" className="cta-block-primary">Become a Partner <span style={{ fontSize: "18px" }}>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <PartnerFAQ />

      {/* ─── FORM ─── */}
      <PartnerForm />

      <Footer />
    </div>
  );
};

export default Partners;
