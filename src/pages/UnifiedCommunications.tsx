import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Phone, Video, MessageSquare, Users, Shield, Globe, Headphones, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import ucHeroImg from "@/assets/uc-hero.png";

const benefits = [
  { icon: Phone, title: "Business Phone", desc: "Crystal-clear HD voice that travels with your team. Smart call routing, auto-attendant, and voicemail-to-email keep every conversation moving — even when you can't pick up." },
  { icon: Video, title: "Video Conferencing", desc: "Face-to-face meetings without the commute. HD video with screen sharing, recording, and virtual backgrounds turns any space into a boardroom." },
  { icon: MessageSquare, title: "Team Messaging", desc: "Conversations that drive decisions, not clutter. Channels, threads, and instant file sharing keep your team aligned and moving fast." },
  { icon: Users, title: "Collaboration", desc: "Know who's available before you reach out. Shared contacts, presence indicators, and a unified directory eliminate the guesswork of working together." },
  { icon: Shield, title: "Enterprise Security", desc: "Your conversations are your business — literally. End-to-end encryption, SSO, compliance certifications, and granular access controls protect every interaction." },
  { icon: Globe, title: "Work From Anywhere", desc: "Office, home, airport, coffee shop — it doesn't matter. Desktop, mobile, and web apps deliver the same powerful experience on every device, everywhere." },
];

const features = [
  {
    title: "One number. Every channel.",
    desc: "Stop juggling separate tools for voice, video, SMS, and chat. b-hive unifies every channel under a single business number — so customers always know how to reach you, and your team can respond from any device without missing a beat.",
  },
  {
    title: "Built for hybrid teams.",
    desc: "Your workforce isn't tied to a desk anymore — your phone system shouldn't be either. b-hive delivers the same powerful experience whether your team is in headquarters, working from home, or closing deals on the road. Real-time presence and hot desking mean no one ever falls out of the loop.",
  },
  {
    title: "Admin without the headache.",
    desc: "Forget waiting on IT tickets or vendor support calls. b-hive's intuitive web portal puts you in control — add users, build call flows with drag-and-drop, and track performance with real-time analytics. What used to take hours now takes minutes.",
  },
];

const UnifiedCommunications = () => {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="uc-hero-section">
        <div className="uc-hero-inner">
          <div className="uc-hero-text">
            <h1 className="hero-h1" style={{ textAlign: 'left', lineHeight: '1.05' }}>
              Your team in<br />
              <span className="going-next">one app.</span>
            </h1>
            <p className="uc-hero-subtitle">
              One cloud platform for calls, video, messaging, and collaboration — all under a single number. Your team stays connected everywhere. Your customers never notice the difference.
            </p>
            <button className="btn-hero-a">
              Request a Demo <span style={{fontSize: '18px'}}>→</span>
            </button>
          </div>
          <div className="uc-hero-image">
            <img src={ucHeroImg} alt="Unified Communications - video calling and phone" />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">EVERYTHING YOU NEED</p>
          <h2 className="promos-title">
            One platform,<br />
            <span className="promos-title-italic">every channel.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid">
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

      {/* Features - Alternating Rows */}
      <section className="uc-features-section">
        <div className="uc-features-header">
          <p className="promos-eyebrow">WHY b-hive</p>
          <h2 className="promos-title">
            Powerful features,<br />
            <span className="promos-title-italic">simple experience.</span>
          </h2>
        </div>
        <div className="promos-stack">
          {features.map((f, i) => (
            <div key={f.title} className={`promo-row ${i % 2 === 1 ? "promo-row-reverse" : ""}`}>
              <div className="promo-row-text">
                <h3 className="promo-row-title">{f.title}</h3>
                <p className="promo-row-desc">{f.desc}</p>
                <button className="promo-row-cta">
                  Learn more <span style={{ fontSize: '14px' }}>→</span>
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

      <TestimonialsSection />
      <FAQSection />
      <CTABlock />
      <Footer />
    </div>
  );
};

export default UnifiedCommunications;
