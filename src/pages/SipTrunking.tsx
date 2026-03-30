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
  Phone, DollarSign, TrendingUp, Mic, FileText, Settings,
  PhoneForwarded, BarChart3, Globe, Zap, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import ucHeroImg from "@/assets/uc-hero.png";

const benefits = [
  { icon: Phone, title: "Keep Your Hardware", desc: "No rip-and-replace. SIP trunking layers cloud power onto the phones you already own — zero disruption, instant upgrade." },
  { icon: DollarSign, title: "Save Up to 70%", desc: "Ditch expensive landlines. Unlimited SIP trunks slash your monthly phone bill while delivering better call quality." },
  { icon: TrendingUp, title: "Scale on Demand", desc: "Spin up new lines in seconds. Handle seasonal spikes and sudden call surges without calling your provider." },
];

const features = [
  {
    title: "Every feature. One connection.",
    desc: "SIP trunking gives your existing phone system the full power of the cloud — voicemail, caller ID, auto attendant, call recording, virtual fax, and local numbers in any ZIP code. When call volume spikes, bursting kicks in automatically so you never miss a customer.",
  },
  {
    title: "One portal. Total control.",
    desc: "Manage every location, every user, and every call flow from a single intuitive dashboard. Add extensions, configure menus, review real-time analytics, and let team members personalize their own settings — all without waiting on IT.",
  },
  {
    title: "Pay only for what you use.",
    desc: "SIP trunks replace your legacy provider with pricing that actually makes sense. Choose call-path pricing for lighter usage or unlimited trunks for high-volume teams. Bursting lets you expand capacity instantly during peak periods — and scale back down when things quiet down.",
  },
];

const featureGrid = [
  { icon: Mic, title: "Call Recording", desc: "Capture every conversation for training, compliance, and quality assurance." },
  { icon: FileText, title: "Virtual Fax", desc: "Send and receive faxes directly through email — no machine needed." },
  { icon: Settings, title: "Auto Attendant", desc: "Route callers with professional menus you build in minutes." },
  { icon: Phone, title: "Keep Your Phones", desc: "Plug your existing hardware into the cloud. No new equipment required." },
  { icon: DollarSign, title: "Flexible Pricing", desc: "Mix cloud seats, unlimited trunks, and call paths across every location." },
  { icon: Zap, title: "Call Bursting", desc: "Automatically expand capacity the moment traffic spikes hit." },
  { icon: Globe, title: "International DIDs", desc: "Give your global teams local presence with US-originating international numbers." },
  { icon: BarChart3, title: "Call Analytics", desc: "See exactly where calls come from, when they peak, and how they convert." },
];

const SipTrunking = () => {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="uc-hero-section">
        <div className="uc-hero-inner">
          <div className="uc-hero-text">
            <h1 className="hero-h1" style={{ textAlign: 'left', lineHeight: '1.05' }}>
              Same phones.<br />
              <span className="going-next">Smarter bill.</span>
            </h1>
            <p className="uc-hero-subtitle">
              Replace expensive landlines with cloud-powered SIP trunks. Keep your hardware, cut costs by up to 70%, and scale capacity on demand.
            </p>
            <button className="btn-hero-a">
              Schedule a Demo <span style={{ fontSize: '18px' }}>→</span>
            </button>
          </div>
          <div className="uc-hero-image">
            <img src={ucHeroImg} alt="SIP Trunking - cloud phone service" />
          </div>
        </div>
      </section>

      {/* Benefits - 3 cards */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">UPGRADE & SAVE</p>
          <h2 className="promos-title">
            Upgrade your phones<br />
            <span className="promos-title-italic">and save.</span>
          </h2>
          <p className="uc-hero-subtitle" style={{ marginTop: '16px', marginBottom: 0 }}>
            SIP trunks replace your phone lines with the internet service you already have.
          </p>
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

      {/* Features - Alternating Rows */}
      <section className="uc-features-section">
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

      {/* Feature Grid */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">FEATURES</p>
          <h2 className="promos-title">
            Bring your business phones<br />
            <span className="promos-title-italic">up to speed.</span>
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

export default SipTrunking;
