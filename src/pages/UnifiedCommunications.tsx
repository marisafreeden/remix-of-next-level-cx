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
  { icon: Phone, title: "Business Phone", desc: "Enterprise-grade VoIP with HD call quality, call routing, auto-attendant and voicemail-to-email." },
  { icon: Video, title: "Video Conferencing", desc: "Crystal-clear HD video meetings with screen sharing, recording, and virtual backgrounds." },
  { icon: MessageSquare, title: "Team Messaging", desc: "Real-time chat with channels, file sharing, and threaded conversations to keep teams aligned." },
  { icon: Users, title: "Collaboration", desc: "Presence indicators, shared contacts, and unified directory so your team stays connected." },
  { icon: Shield, title: "Enterprise Security", desc: "End-to-end encryption, SSO, compliance certifications, and role-based access controls." },
  { icon: Globe, title: "Work From Anywhere", desc: "Desktop, mobile, and web apps let your team communicate seamlessly from any device, any location." },
];

const features = [
  {
    title: "One number. Every channel.",
    desc: "Unify voice, video, SMS, and chat under a single business number. Customers reach you on one line — your team responds from any device.",
    points: ["Single business identity", "Seamless channel switching", "Consistent caller experience"],
  },
  {
    title: "Built for hybrid teams.",
    desc: "Whether your team is in the office, at home, or on the road, b-hive keeps everyone connected with the same powerful tools.",
    points: ["Desktop & mobile apps", "Hot desking support", "Real-time presence & status"],
  },
  {
    title: "Admin without the headache.",
    desc: "Manage your entire phone system from an intuitive web portal. Add users, configure call flows, and view analytics in minutes — not hours.",
    points: ["Self-service admin portal", "Real-time call analytics", "Drag-and-drop call routing"],
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
              Call and collaborate from anywhere with a single cloud PBX communication solution that unifies business phones, video conferencing, texting and collaboration under a single phone number.
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
                <ul className="uc-feature-points">
                  {f.points.map((p) => (
                    <li key={p} className="uc-feature-point">
                      <span className="uc-feature-check">✓</span> {p}
                    </li>
                  ))}
                </ul>
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
