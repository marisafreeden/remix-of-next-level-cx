import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Phone, Video, MessageSquare, Users, Shield, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSiteCopy } from "@/hooks/useSiteCopy";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import ucHeroImg from "@/assets/uc-hero.png";

const benefitIcons = [Phone, Video, MessageSquare, Users, Shield, Globe];
const benefitKeys = ["b1", "b2", "b3", "b4", "b5", "b6"];
const featureKeys = ["f1", "f2", "f3"];

const UnifiedCommunications = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      <section className="uc-hero-section">
        <div className="uc-hero-inner">
          <div className="uc-hero-text">
            <h1 className="hero-h1" style={{ textAlign: 'left', lineHeight: '1.05' }}>
              {c("hero_title1", "uc_page.hero_title1")}<br />
              <span className="going-next">{c("hero_title2", "uc_page.hero_title2")}</span>
            </h1>
            <p className="uc-hero-subtitle">{t("uc_page.hero_subtitle")}</p>
            <button className="btn-hero-a">
              {t("common.request_demo")} <span style={{fontSize: '18px'}}>→</span>
            </button>
          </div>
          <div className="uc-hero-image">
            <img src={ucHeroImg} alt="Unified Communications" />
          </div>
        </div>
      </section>

      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">{t("uc_page.benefits_eyebrow")}</p>
          <h2 className="promos-title">
            {t("uc_page.benefits_title1")}<br />
            <span className="promos-title-italic">{t("uc_page.benefits_title2")}</span>
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

      <section className="uc-features-section">
        <div className="uc-features-header">
          <p className="promos-eyebrow">{t("uc_page.features_eyebrow")}</p>
          <h2 className="promos-title">
            {t("uc_page.features_title1")}<br />
            <span className="promos-title-italic">{t("uc_page.features_title2")}</span>
          </h2>
        </div>
        <div className="promos-stack">
          {featureKeys.map((key, i) => (
            <div key={key} className={`promo-row ${i % 2 === 1 ? "promo-row-reverse" : ""}`}>
              <div className="promo-row-text">
                <h3 className="promo-row-title">{t(`uc_page.${key}_title`)}</h3>
                <p className="promo-row-desc">{t(`uc_page.${key}_desc`)}</p>
                <button className="promo-row-cta">
                  {t("common.learn_more")} <span style={{ fontSize: '14px' }}>→</span>
                </button>
              </div>
              <div className="promo-row-image-wrap">
                <div className="uc-feature-placeholder">
                  <img src={ucHeroImg} alt={t(`uc_page.${key}_title`)} className="promo-row-image" />
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