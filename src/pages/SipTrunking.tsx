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
  BarChart3, Globe, Zap, ChevronRight
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSiteCopy } from "@/hooks/useSiteCopy";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import ucHeroImg from "@/assets/uc-hero.png";

const benefitIcons = [Phone, DollarSign, TrendingUp];
const benefitKeys = ["b1", "b2", "b3"];
const featureKeys = ["f1", "f2", "f3"];
const gridIcons = [Mic, FileText, Settings, Phone, DollarSign, Zap, Globe, BarChart3];
const gridKeys = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"];

const SipTrunking = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      <section className="uc-hero-section">
        <div className="uc-hero-inner">
          <div className="uc-hero-text">
            <h1 className="hero-h1" style={{ textAlign: 'left', lineHeight: '1.05' }}>
              {t("sip_page.hero_title1")}<br />
              <span className="going-next">{t("sip_page.hero_title2")}</span>
            </h1>
            <p className="uc-hero-subtitle">{t("sip_page.hero_subtitle")}</p>
            <button className="btn-hero-a">
              {t("common.schedule_demo")} <span style={{ fontSize: '18px' }}>→</span>
            </button>
          </div>
          <div className="uc-hero-image">
            <img src={ucHeroImg} alt="SIP Trunking" />
          </div>
        </div>
      </section>

      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">{t("sip_page.benefits_eyebrow")}</p>
          <h2 className="promos-title">
            {t("sip_page.benefits_title1")}<br />
            <span className="promos-title-italic">{t("sip_page.benefits_title2")}</span>
          </h2>
          <p className="uc-hero-subtitle" style={{ marginTop: '16px', marginBottom: 0 }}>
            {t("sip_page.benefits_subtitle")}
          </p>
        </div>
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {benefitKeys.map((key, i) => {
            const Icon = benefitIcons[i];
            return (
              <div key={key} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{t(`sip_page.${key}_title`)}</h3>
                <p className="uc-benefit-desc">{t(`sip_page.${key}_desc`)}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="uc-features-section">
        <div className="promos-stack">
          {featureKeys.map((key, i) => (
            <div key={key} className={`promo-row ${i % 2 === 1 ? "promo-row-reverse" : ""}`}>
              <div className="promo-row-text">
                <h3 className="promo-row-title">{t(`sip_page.${key}_title`)}</h3>
                <p className="promo-row-desc" style={{ maxWidth: '520px' }}>{t(`sip_page.${key}_desc`)}</p>
                <button className="promo-row-cta">
                  {t("common.learn_more")} <ChevronRight size={16} />
                </button>
              </div>
              <div className="promo-row-image-wrap">
                <div className="uc-feature-placeholder">
                  <img src={ucHeroImg} alt={t(`sip_page.${key}_title`)} className="promo-row-image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">{t("sip_page.grid_eyebrow")}</p>
          <h2 className="promos-title">
            {t("sip_page.grid_title1")}<br />
            <span className="promos-title-italic">{t("sip_page.grid_title2")}</span>
          </h2>
        </div>
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {gridKeys.map((key, i) => {
            const Icon = gridIcons[i];
            return (
              <div key={key} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{t(`sip_page.${key}_title`)}</h3>
                <p className="uc-benefit-desc">{t(`sip_page.${key}_desc`)}</p>
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

export default SipTrunking;