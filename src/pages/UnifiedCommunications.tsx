import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@/styles/contact-center.css";
import "@/styles/goai.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import ucHeroImg from "@/assets/uc-hero.png";

import {
  Phone, Video, MessageSquare, Users, Shield, Globe,
  Zap, MonitorSmartphone, ShieldCheck, Lock, BadgeCheck
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
const benefitIcons = [Phone, Video, MessageSquare, Users, Shield, Globe];
const benefitKeys = ["b1", "b2", "b3", "b4", "b5", "b6"];
const featureKeys = ["f1", "f2", "f3"];

const UnifiedCommunications = () => {
  const { t } = useTranslation();
  const { c, save } = useSiteCopy("uc");

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

      {/* Hero */}
      <ContactCenterHero
        title1={c("hero_title1", "uc_page.hero_title1")}
        title2={c("hero_title2", "uc_page.hero_title2")}
        subtitle={t("uc_page.hero_subtitle")}
        requestDemoLabel={t("common.request_demo")}
        onSave={save}
      />

      {/* Stats */}
      <section className="cc-stats-section-v2 cc-stats-light">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0' }}>
          <div style={{ flex: '0 0 320px', paddingRight: '40px' }}>
            <p className="promos-eyebrow" style={{ textAlign: 'left', marginBottom: '8px' }}>CUSTOMER VALUE</p>
            <p className="goai-desc" style={{ marginBottom: 0, marginTop: 0, textAlign: 'left', fontSize: '15px', lineHeight: '1.6' }}>
              Proven results from teams that unified their communications on one platform.
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex' }}>
            {statKeys.map((key) => (
              <div key={key} className="cc-stat-v2" style={{ flex: 1 }}>
                <span className="cc-stat-v2-number">{t(`uc_page.${key}_number`)}</span>
                <span className="cc-stat-v2-label">{t(`uc_page.${key}_label`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — alternating rows */}
      <section className="uc-features-section">
        <div className="cc-alt-features">
          {featureKeys.map((key, i) => (
            <div key={key} className={`cc-alt-row ${i % 2 === 1 ? "cc-alt-row-reverse" : ""}`}>
              <div className="cc-alt-text">
                <p className="promos-eyebrow">{t(`uc_page.${key}_eyebrow`)}</p>
                <h3 className="cc-alt-heading">{t(`uc_page.${key}_title`)}</h3>
                <p className="cc-alt-desc">{t(`uc_page.${key}_desc`)}</p>
                <button className="cc-alt-cta">
                  {t("common.learn_more")} <span>→</span>
                </button>
              </div>
              <div className="cc-alt-image-side">
                <div className={`cc-alt-blur ${i === 2 ? "cc-alt-blur-purple" : ""}`} />
                <img src={ucHeroImg} alt={t(`uc_page.${key}_title`)} className="cc-alt-img" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow">{t("uc_page.benefits_eyebrow")}</p>
          <h2 className="promos-title" style={{ background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            <EditableText value={c("benefits_title1", "uc_page.benefits_title1")} copyKey="benefits_title1" onSave={save} />{' '}
            <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>
              <EditableText value={c("benefits_title2", "uc_page.benefits_title2")} copyKey="benefits_title2" onSave={save} />
            </span>
          </h2>
        </div>
        <div className="uc-benefits-grid">
          {benefitKeys.map((key, i) => {
            const Icon = benefitIcons[i];
            return (
              <div key={key} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{t(`uc_page.${key}_title`)}</h3>
                <p className="uc-benefit-desc">{t(`uc_page.${key}_desc`)}</p>
              </div>
            );
          })}
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
