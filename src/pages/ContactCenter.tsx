import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@/styles/contact-center.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import ccFeatureCharts from "@/assets/cc-feature-charts.png";
import personaAgentsImg from "@/assets/persona-agents.jpg";
import personaManagersImg from "@/assets/persona-managers.jpg";
import personaItImg from "@/assets/persona-it.jpg";
import soc2Badge from "@/assets/soc2-badge.png";
import hipaaBadge from "@/assets/hipaa-badge.jpg";
import gdprBadge from "@/assets/gdpr-badge.jpg";

import {
  MessageSquare, Bot, BarChart3, Users,
  Zap, MonitorSmartphone
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSiteCopy } from "@/hooks/useSiteCopy";
import EditableText from "@/components/EditableText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactCenterHero from "@/components/contact-center/ContactCenterHero";

const statKeys = ["s1", "s2", "s3"];
const smarterKeys = ["sm1", "sm2", "sm3", "sm4"];
const featureKeys = ["f2", "f4", "f6", "f8", "f11", "f12"];
const featureIcons = [Zap, Bot, BarChart3, Users, MessageSquare, MonitorSmartphone];
const personaKeys = ["agents", "managers", "it"];
const personaImages = [personaAgentsImg, personaManagersImg, personaItImg];

const ContactCenter = () => {
  const { t } = useTranslation();
  const { c, save } = useSiteCopy("cc_page");

  return (
    <div className="cc-page-wrap" style={{ background: "#ffffff", minHeight: "100vh" }}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="cc-icon-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(185 49% 51%)" />
            <stop offset="100%" stopColor="hsl(261 61% 54%)" />
          </linearGradient>
        </defs>
      </svg>
      <Navbar />

      <ContactCenterHero
        title1={c("hero_title1", "cc_page.hero_title1")}
        title2={c("hero_title2", "cc_page.hero_title2")}
        subtitle={t("cc_page.hero_subtitle_combined")}
        requestDemoLabel={t("common.request_demo")}
        onSave={save}
      />

      <section className="logo-strip">
        <p className="logo-strip-label">{t("logos.label")}</p>
        <div className="logo-strip-logos">
          <span className="logo-strip-item">Pfizer</span>
          <span className="logo-strip-item">UPS</span>
          <span className="logo-strip-item">L'Oréal</span>
          <span className="logo-strip-item">Hertz</span>
          <span className="logo-strip-item">Toyota</span>
          <span className="logo-strip-item">Deloitte</span>
        </div>
      </section>

      {/* What Makes It Smarter — UC promo style */}
      <section className="uc-features-section">
        <div className="cc-alt-features">
          {smarterKeys.map((key, i) => (
            <div key={key} className={`cc-alt-row ${i % 2 === 1 ? "cc-alt-row-reverse" : ""}`}>
              <div className="cc-alt-text">
                <h3 className="cc-alt-heading">{t(`cc_page.${key}_title`)}</h3>
                <p className="cc-alt-desc">{t(`cc_page.${key}_desc`)}</p>
                <button className="cc-alt-cta">
                  {t("common.learn_more")} <span>›</span>
                </button>
              </div>
              <div className="cc-alt-image-side">
                <div className="cc-alt-blur" />
                <img src={ccFeatureCharts} alt={t(`cc_page.${key}_title`)} className="cc-alt-img" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="cc-section-divider" />

      {/* Feature Grid */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow">{t("cc_page.features_eyebrow")}</p>
          <h2 className="promos-title">
            <EditableText value={c("features_title1", "cc_page.features_title1")} copyKey="features_title1" onSave={save} /><br />
            <span className="promos-title-italic">
              <EditableText value={c("features_title2", "cc_page.features_title2")} copyKey="features_title2" onSave={save} />
            </span>
          </h2>
        </div>
        <div className="uc-benefits-grid">
          {featureKeys.map((key, i) => {
            const Icon = featureIcons[i];
            return (
              <div key={key} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{t(`cc_page.${key}_title`)}</h3>
                <p className="uc-benefit-desc">{t(`cc_page.${key}_desc`)}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="cc-stats-section-v2 cc-stats-dark">
        <div className="cc-stats-dark-header">
          <h2 className="cc-stats-dark-title">Value Starts on <span className="promos-title-italic" style={{ display: "inline" }}>Day One</span></h2>
        </div>
        <div className="cc-stats-grid-v2">
          {statKeys.map((key) => (
            <div key={key} className="cc-stat-v2">
              <span className="cc-stat-v2-number">{t(`cc_page.${key}_number`)}</span>
              <span className="cc-stat-v2-label">{t(`cc_page.${key}_label`)}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="cc-section-divider" />

      {/* Security & Compliance */}
      <section className="cc-security-section">
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow">SECURITY & COMPLIANCE</p>
          <h2 className="promos-title">Enterprise-Grade <span className="promos-title-italic">Security</span></h2>
          <p className="cc-security-subtitle">Your data is protected by industry-leading standards and certifications.</p>
        </div>
        <div className="cc-security-grid">
          <div className="cc-security-card">
            <div className="cc-security-icon"><img src={soc2Badge} alt="SOC 2 Type I" className="cc-security-badge-img" /></div>
            <h3>SOC 2 Type I</h3>
            <p>Independently audited security controls for data protection, availability, and confidentiality.</p>
          </div>
          <div className="cc-security-card">
            <div className="cc-security-icon"><img src={gdprBadge} alt="GDPR Compliant" className="cc-security-badge-img" /></div>
            <h3>GDPR Compliant</h3>
            <p>Full compliance with European data protection regulations and privacy standards.</p>
          </div>
          <div className="cc-security-card">
            <div className="cc-security-icon"><img src={hipaaBadge} alt="HIPAA Compliant" className="cc-security-badge-img" /></div>
            <h3>HIPAA Compliant</h3>
            <p>Meets healthcare industry requirements for protecting sensitive patient information.</p>
          </div>
        </div>
      </section>

      <div className="cc-section-divider" />

      {/* Personas */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow">{t("cc_page.persona_eyebrow")}</p>
          <h2 className="promos-title" style={{ whiteSpace: "nowrap" }}>
            Built for <span className="promos-title-italic" style={{ display: "inline" }}>Everyone</span>
          </h2>
        </div>
        <div className="cc-persona-grid">
          {personaKeys.map((key, i) => (
            <div key={key} className="cc-persona-card">
              <div className="cc-persona-img-wrap">
                <img src={personaImages[i]} alt={t(`cc_page.${key}_title`)} loading="lazy" width={800} height={512} className="cc-persona-img" />
              </div>
              <div className="cc-persona-text">
                <h3 className="uc-benefit-title">{t(`cc_page.${key}_title`)}</h3>
                <p className="uc-benefit-desc">{t(`cc_page.${key}_desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      {/* Stats */}
      <section className="cc-stats-section-v2">
        <div className="cc-stats-grid-v2">
          {statKeys.map((key) => (
            <div key={key} className="cc-stat-v2">
              <span className="cc-stat-v2-number">{t(`cc_page.${key}_number`)}</span>
              <span className="cc-stat-v2-label">{t(`cc_page.${key}_label`)}</span>
            </div>
          ))}
        </div>
      </section>

      <FAQSection />

      <CTABlock />
      <Footer />
    </div>
  );
};

export default ContactCenter;
