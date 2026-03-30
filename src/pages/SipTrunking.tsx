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
  PhoneForwarding, BarChart3, Globe, Zap, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import ucHeroImg from "@/assets/uc-hero.png";

const benefits = [
  { icon: Phone, title: "Keep Your Phones", desc: "Modernize your existing phone hardware with basic cloud features of SIP trunking." },
  { icon: DollarSign, title: "Save Big", desc: "Unlimited SIP trunks can save you up to 70% monthly compared to legacy phone providers." },
  { icon: TrendingUp, title: "Scale Instantly", desc: "Automatically add capacity to handle large bursts in traffic or seasonal changes." },
];

const features = [
  {
    title: "Your business phones. Now more connected.",
    desc: "The features you expect and more, with the ability to scale instantly.",
    points: [
      "Business phone essentials like voicemail, caller ID, auto attendant, call recording and virtual fax",
      "Virtual phone numbers with local ZIP codes",
      "Call bursting to automatically support sudden increases in call volume",
      "Mix and match with other cloud-based seat types",
    ],
  },
  {
    title: "Painless portal management.",
    desc: "Control your phone services across multiple locations and teams from a single dashboard.",
    points: [
      "Manage call menus, add & manage users, extensions, call recordings and virtual fax",
      "Oversee multiple locations together in the same portal",
      "Users can edit their individual phone preferences",
      "Review inbound call analytics to gain insight into communications",
    ],
  },
  {
    title: "Cut your phone bill and scale when you need to.",
    desc: "SIP trunks eliminate your traditional phone provider and provide a flexible, scalable setup so you only pay for what you need — and only when you need it.",
    points: [
      "Call path pricing for businesses with limited phone traffic",
      "Call bursting for instant capacity expansion during busy times",
      "Flexible pricing that adapts to your needs",
    ],
  },
];

const featureGrid = [
  { icon: Mic, title: "Call Recording", desc: "Add call recording for training and record-keeping." },
  { icon: FileText, title: "Virtual Fax", desc: "Send and receive faxes through email." },
  { icon: Settings, title: "Auto Attendant", desc: "Manage your company call menus from the admin panel." },
  { icon: Phone, title: "Keep Your Phones", desc: "Use your existing devices and hardware." },
  { icon: DollarSign, title: "Flexible Price", desc: "Mix and match cloud seats and unlimited SIP trunks across locations." },
  { icon: Zap, title: "Bursting", desc: "Our virtual connections enable you to quickly scale up or down." },
  { icon: Globe, title: "International DIDs", desc: "For the global business, international DIDs originating in the US." },
  { icon: BarChart3, title: "Call Analytics", desc: "Track inbound calls breakdown, origin and demographics." },
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
              Scale your operations.<br />
              <span className="going-next">Cut your phone bill.</span>
            </h1>
            <p className="uc-hero-subtitle">
              Keep your existing hardware and ditch your landlines for more flexible and affordable cloud-based business phone service.
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
