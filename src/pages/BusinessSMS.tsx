import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import {
  MessageSquare, Clock, Route, Users, Send, Tag,
  Upload, Code, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import ucHeroImg from "@/assets/uc-hero.png";
import integrationsImg from "@/assets/integrations-logos.png";

const benefits = [
  { icon: Clock, title: "Schedule & Automate", desc: "Set it and forget it. Schedule outbound texts to groups or individuals and let automation handle the follow-up." },
  { icon: Route, title: "Smart Inbound Routing", desc: "Route incoming texts to the right agent or team automatically — just like you do with calls." },
  { icon: MessageSquare, title: "Works with b-hive", desc: "Text from your existing b-hive business number. One bill, one platform, zero friction." },
];

const features = [
  {
    title: "Personalized attention at scale.",
    desc: "Engage customers with 1:1 conversations or reach thousands with targeted text campaigns. Organize contacts with tags, route inbound messages like calls, and use templates to respond faster — all from your business number.",
  },
  {
    title: "Custom audiences. Smarter outreach.",
    desc: "Group contacts into segments for precise outbound messaging. Bulk upload from your CRM via CSV, sync contacts through our open API, and assign agent teams to specific customer groups so the right person always responds.",
  },
  {
    title: "Do more with less.",
    desc: "Schedule bulk texts as one-offs or automated series. Set keyword triggers that route messages to the right agents instantly. Whether it's appointment reminders, promotional campaigns, or follow-ups — text gets it done faster than any other channel.",
  },
];

const useCases = [
  { title: "Retail", desc: "Send order updates, deliver promotions, and gather real-time customer feedback — all via text." },
  { title: "Healthcare", desc: "Manage patients, send appointment reminders, and deliver HIPAA-compliant follow-ups synced with your systems." },
  { title: "Hospitality", desc: "Communicate with guests during their stay — checkout reminders, event alerts, and personalized offers." },
];

const featureGrid = [
  { icon: Send, title: "Textcast", desc: "Reach more people with bulk texts to targeted contact lists." },
  { icon: Clock, title: "Timetext", desc: "Schedule texts at specific times and automate responses based on triggers." },
  { icon: Route, title: "Inbound Routing", desc: "Automatically route incoming texts to the right person on your team." },
  { icon: Tag, title: "Keywords", desc: "Use keyword triggers for promotions and intelligent agent routing." },
  { icon: Users, title: "Live Agent Chat", desc: "Agents respond to customers in real time via text — personal and immediate." },
  { icon: MessageSquare, title: "Contact Segmentation", desc: "Organize contacts into groups with tags for precision targeting." },
  { icon: Upload, title: "Bulk Contacts", desc: "Import or export contacts in bulk for seamless cross-platform use." },
  { icon: Code, title: "Open API", desc: "Integrate with your CRM and build smart workflows with our developer-friendly API." },
];

const BusinessSMS = () => {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="uc-hero-section">
        <div className="uc-hero-inner">
          <div className="uc-hero-text">
            <h1 className="hero-h1" style={{ textAlign: 'left', lineHeight: '1.05' }}>
              Better engagement<br />
              <span className="going-next">starts with a text.</span>
            </h1>
            <p className="uc-hero-subtitle">
              Reach customers where they actually respond — their phones. Send 1:1 messages or launch campaigns, all from your business number.
            </p>
            <button className="btn-hero-a">
              Schedule a Demo <span style={{ fontSize: '18px' }}>→</span>
            </button>
          </div>
          <div className="uc-hero-image">
            <img src={ucHeroImg} alt="Business SMS - text messaging platform" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">WHY BUSINESS SMS</p>
          <h2 className="promos-title">
            Give your customers<br />
            <span className="promos-title-italic">your attention. Or get theirs.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {benefits.map((b) => (
            <div key={b.title} className="uc-benefit-card">
              <div className="uc-benefit-icon">
                <b.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="uc-benefit-title">{b.title}</h3>
              <p className="uc-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Big Feature Image */}
      <section className="uc-features-section" style={{ paddingBottom: 0 }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="uc-benefits-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="promos-eyebrow" style={{ textAlign: 'center' }}>THE PLATFORM</p>
            <h2 className="promos-title" style={{ textAlign: 'center' }}>
              Provide richer experiences.<br />
              <span className="promos-title-italic">Create happier customers.</span>
            </h2>
          </div>
          <div className="uc-big-feature-image">
            <img src={ucHeroImg} alt="Business SMS platform overview" />
          </div>
        </div>
      </section>

      {/* Features - Alternating Rows */}
      <section className="uc-features-section">
        <div className="promos-stack">
          {features.map((f, i) => (
            <div key={f.title} className={`promo-row ${i % 2 === 1 ? "promo-row-reverse" : ""}`}>
              <div className="promo-row-text">
                <h3 className="promo-row-title">{f.title}</h3>
                <p className="promo-row-desc" style={{ maxWidth: '520px' }}>{f.desc}</p>
                <button className="promo-row-cta">
                  Learn more <ChevronRight size={16} />
                </button>
              </div>
              <div className="promo-row-image-wrap">
                <div className="uc-feature-placeholder">
                  <img src={ucHeroImg} alt={f.title} className="promo-row-image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">USE CASES</p>
          <h2 className="promos-title">
            Next time,<br />
            <span className="promos-title-italic">just send a text.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {useCases.map((u) => (
            <div key={u.title} className="uc-benefit-card">
              <h3 className="uc-benefit-title">{u.title}</h3>
              <p className="uc-benefit-desc">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="uc-features-section">
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="uc-benefits-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="promos-eyebrow" style={{ textAlign: 'center' }}>INTEGRATIONS</p>
            <h2 className="promos-title" style={{ textAlign: 'center' }}>
              Sync your contacts automatically<br />
              <span className="promos-title-italic">with our open API.</span>
            </h2>
            <p className="uc-hero-subtitle" style={{ textAlign: 'center', margin: '16px auto 0', maxWidth: '640px' }}>
              Connect with your existing CRM to keep contacts in sync across every app. Or integrate our text capabilities directly into your own platform.
            </p>
          </div>
          <div className="uc-integrations-image">
            <img src={integrationsImg} alt="Integration partners - Zendesk, HubSpot, Zoho, WordPress, Salesforce, Slack, LinkedIn, Mailchimp" />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">CAPABILITIES</p>
          <h2 className="promos-title">
            Powerful texting tools<br />
            <span className="promos-title-italic">for your business.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {featureGrid.map((f) => (
            <div key={f.title} className="uc-benefit-card">
              <div className="uc-benefit-icon">
                <f.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="uc-benefit-title">{f.title}</h3>
              <p className="uc-benefit-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <CTABlock />
      <Footer />
    </div>
  );
};

export default BusinessSMS;
