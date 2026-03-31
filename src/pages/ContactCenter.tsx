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
import gocontactDashboard from "@/assets/gocontact-dashboard.png";
import personaAgentsImg from "@/assets/persona-agents.jpg";
import personaManagersImg from "@/assets/persona-managers.jpg";
import personaItImg from "@/assets/persona-it.jpg";

import {
  Headphones, MessageSquare, Phone, Bot, BarChart3, Globe,
  FileText, Settings, Users, Shield, Zap, MonitorSmartphone,
  ShieldCheck, Lock, BadgeCheck
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useSiteCopy } from "@/hooks/useSiteCopy";
import EditableText from "@/components/EditableText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import TestimonialsSection from "@/components/TestimonialsSection";

const statKeys = ["s1", "s2", "s3"];
const howItWorksKeys = ["hw1", "hw2", "hw3", "hw4"];
const howItWorksIcons = [Headphones, Bot, Phone, Settings];
const platformPillKeys = ["hw1", "hw2", "hw3", "hw4"];
const smarterKeys = ["sm1", "sm2", "sm3"];
const smarterIcons = [BarChart3, Globe, FileText];
const featureKeys = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12"];
const featureIcons = [Headphones, Zap, Shield, Bot, Settings, BarChart3, Globe, Users, Phone, FileText, MessageSquare, MonitorSmartphone];
const personaKeys = ["agents", "managers", "it"];
const personaIcons = [Users, MonitorSmartphone, Settings];
const personaImages = [personaAgentsImg, personaManagersImg, personaItImg];
const faqKeys = ["fq1", "fq2", "fq3", "fq4", "fq5"];

const ContactCenter = () => {
  const { t } = useTranslation();
  const { c, save } = useSiteCopy("cc_page");

  return (
    <div className="cc-page-wrap" style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero + Platform Combined */}
      <section className="cc-platform-section cc-hero-platform-combined">
        <div className="uc-hero-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div className="uc-hero-text" style={{ alignItems: "center", textAlign: "center" }}>
            <h1 className="hero-h1" style={{ textAlign: "center", lineHeight: "1.05" }}>
              <EditableText value={c("hero_title1", "cc_page.hero_title1")} copyKey="hero_title1" onSave={save} /><br />
              <span className="going-next">
                <EditableText value={c("hero_title2", "cc_page.hero_title2")} copyKey="hero_title2" onSave={save} />
              </span>
            </h1>
            <p className="uc-hero-subtitle">{t("cc_page.hero_subtitle_combined")}</p>
            <button className="btn-hero-a btn-hero-a-light">
              {t("common.request_demo")} <span style={{ fontSize: "18px" }}>→</span>
            </button>
          </div>
        </div>

        <div className="cc-platform-inner">
          <div className="cc-platform-pills">
            {platformPillKeys.map((key) => (
              <span key={key} className="cc-platform-pill">{t(`cc_page.${key}_title`)}</span>
            ))}
          </div>
          <div className="cc-platform-image-wrap">
            <img src={gocontactDashboard} alt="GoContact Dashboard" className="cc-platform-image" />
          </div>
          <div className="cc-platform-copy">
            <p>{t("cc_page.platform_desc1")}</p>
            <p>{t("cc_page.platform_desc2")}</p>
          </div>
          <div className="cc-stats-grid-horizontal">
            {statKeys.map((key) => (
              <div key={key} className="cc-stat-card">
                <span className="cc-stat-number">{t(`cc_page.${key}_number`)}</span>
                <span className="cc-stat-label">{t(`cc_page.${key}_label`)}</span>
                <span className="cc-stat-source">{t(`cc_page.${key}_source`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* What Makes It Smarter */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">{t("cc_page.smarter_eyebrow")}</p>
          <h2 className="promos-title">
            <EditableText value={c("smarter_title", "cc_page.smarter_title")} copyKey="smarter_title" onSave={save} />
          </h2>
        </div>
        <div className="cc-smarter-promos">
          {smarterKeys.map((key, i) => {
            const SmarterIcon = smarterIcons[i];
            return (
            <div key={key} className={`cc-smarter-row ${i % 2 === 1 ? "cc-smarter-row-reverse" : ""}`}>
              <div className="cc-smarter-text">
                <div className="uc-benefit-icon"><SmarterIcon size={24} strokeWidth={1.5} /></div>
                <h3 className="cc-smarter-heading">{t(`cc_page.${key}_title`)}</h3>
                <p className="cc-smarter-desc">{t(`cc_page.${key}_desc`)}</p>
              </div>
              <div className="cc-smarter-image">
                <img src={`https://placehold.co/600x400/F3F4F6/9CA3AF?text=Feature+${i + 1}`} alt={t(`cc_page.${key}_title`)} />
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="uc-features-section">
        <div className="uc-features-header">
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

      {/* Personas */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">{t("cc_page.persona_eyebrow")}</p>
          <h2 className="promos-title" style={{ whiteSpace: "nowrap" }}>
            Built for <span className="promos-title-italic">Everyone</span>
          </h2>
        </div>
        <div className="cc-persona-grid">
          {personaKeys.map((key, i) => {
            return (
              <div key={key} className="cc-persona-card">
                <div className="cc-persona-img-wrap">
                  <img src={personaImages[i]} alt={t(`cc_page.${key}_title`)} loading="lazy" width={800} height={512} className="cc-persona-img" />
                </div>
                <div className="cc-persona-text">
                  <h3 className="uc-benefit-title">{t(`cc_page.${key}_title`)}</h3>
                  <p className="uc-benefit-desc">{t(`cc_page.${key}_desc`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="cc-security-section">
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow">SECURITY & COMPLIANCE</p>
          <h2 className="promos-title">Enterprise-Grade <span className="promos-title-italic">Security</span></h2>
          <p className="cc-security-subtitle">Your data is protected by industry-leading standards and certifications.</p>
        </div>
        <div className="cc-security-grid">
          <div className="cc-security-card">
            <div className="cc-security-icon"><ShieldCheck size={32} strokeWidth={1.5} /></div>
            <h3>SOC 2 Type II</h3>
            <p>Independently audited security controls for data protection, availability, and confidentiality.</p>
          </div>
          <div className="cc-security-card">
            <div className="cc-security-icon"><Lock size={32} strokeWidth={1.5} /></div>
            <h3>GDPR Compliant</h3>
            <p>Full compliance with European data protection regulations and privacy standards.</p>
          </div>
          <div className="cc-security-card">
            <div className="cc-security-icon"><BadgeCheck size={32} strokeWidth={1.5} /></div>
            <h3>HIPAA Compliant</h3>
            <p>Meets healthcare industry requirements for protecting sensitive patient information.</p>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />

      <CTABlock />
      <Footer />
    </div>
  );
};

// Small FAQ item with local state
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CCFaqItem = ({ qKey }: { qKey: string }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "faq-item-open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{t(`cc_page.${qKey}_q`)}</span>
        <ChevronDown size={18} className={`faq-chevron ${open ? "faq-chevron-open" : ""}`} />
      </button>
      <div className={`faq-answer-wrap ${open ? "faq-answer-open" : ""}`}>
        <p className="faq-answer">{t(`cc_page.${qKey}_a`)}</p>
      </div>
    </div>
  );
};

export default ContactCenter;
