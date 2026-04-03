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

import ccFeatureCharts from "@/assets/cc-feature-charts.png";

import ccSmartScripting from "@/assets/cc-smart-scripting.png";
import ccOmnichannelDiagram from "@/assets/cc-omnichannel-diagram.png";
import personaAgentsImg from "@/assets/persona-agents.jpg";
import personaManagersImg from "@/assets/persona-managers.jpg";
import personaItImg from "@/assets/persona-it.jpg";
import soc2Badge from "@/assets/soc2-badge.png";
import hipaaBadge from "@/assets/hipaa-badge.jpg";
import gdprBadge from "@/assets/gdpr-badge.jpg";
import goaiBgLines from "@/assets/goai-bg-lines.svg";

import {
  MessageSquare, Bot, BarChart3, Users, ShieldCheck, Lock, BadgeCheck,
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
import GoAIDiagram from "@/components/GoAIDiagram";
import DialerPreview from "@/components/contact-center/DialerPreview";
import OmnichannelPreview from "@/components/contact-center/OmnichannelPreview";
import IVRPreview from "@/components/contact-center/IVRPreview";
import GoAIAccordionSection from "@/components/contact-center/GoAIAccordionSection";

const statKeys = ["s1", "s2", "s3"];
const smarterKeys = ["sm1", "sm2", "sm3", "sm4"];
const smarterImages = [ccOmnichannelDiagram, null, ccSmartScripting, ccFeatureCharts];
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


      {/* Stats */}
      <section className="cc-stats-section-v2 cc-stats-light" style={{ background: '#F9FAFB', borderBottom: 'none' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0' }}>
          <div style={{ flex: '0 0 320px', paddingRight: '40px' }}>
            <p className="promos-eyebrow" style={{ textAlign: 'left', marginBottom: '8px' }}>CUSTOMER VALUE</p>
            <p className="goai-desc" style={{ marginBottom: 0, marginTop: 0, textAlign: 'left', fontSize: '15px', lineHeight: '1.6' }}>
              Proven results from teams that switched to a smarter, AI-powered contact center.
            </p>
          </div>
          <div style={{ flex: 1, display: 'flex' }}>
            {statKeys.map((key, i) => (
              <div key={key} className="cc-stat-v2" style={{ flex: 1, borderLeft: '1px solid rgba(0,0,0,0.1)', padding: '32px 28px' }}>
                <span className="cc-stat-v2-number">{t(`cc_page.${key}_number`)}</span>
                <span className="cc-stat-v2-label">{t(`cc_page.${key}_label`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Smarter — UC promo style */}
      <section className="uc-features-section">
        <div className="cc-alt-features">
          {smarterKeys.map((key, i) => (
            <div key={key} className={`cc-alt-row ${i % 2 === 1 ? "cc-alt-row-reverse" : ""}`}>
              <div className="cc-alt-text">
                <p className="promos-eyebrow">{t(`cc_page.${key}_eyebrow`)}</p>
                <h3 className="cc-alt-heading">{t(`cc_page.${key}_title`)}</h3>
                <p className="cc-alt-desc">{t(`cc_page.${key}_desc`)}</p>
                <button className="cc-alt-cta">
                  {t(`cc_page.${key}_cta`)}
                </button>
              </div>
              <div className="cc-alt-image-side">
                {i !== 1 && <div className={`cc-alt-blur ${i === 3 ? "cc-alt-blur-purple" : ""}`} />}
                {i === 1 ? (
                  <DialerPreview />
                ) : i === 0 ? (
                  <OmnichannelPreview />
                ) : i === 3 ? (
                  <IVRPreview />
                ) : (
                  <img src={smarterImages[i]!} alt={t(`cc_page.${key}_title`)} className="cc-alt-img" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="uc-features-section cc-features-gray">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow">{t("cc_page.features_eyebrow")}</p>
          <h2 className="promos-title" style={{ background: 'linear-gradient(90.4deg, #43B5BF 2.76%, #27698F 41.13%, #C686F8 82.58%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            The features that move the <span className="promos-title-italic" style={{ display: "inline", WebkitTextFillColor: 'inherit' }}>needle.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '560px', margin: '12px auto 0' }}>
            Everything your team needs to deliver faster, smarter, and more personal customer experiences.
          </p>
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

      {/* GoAI Section */}
      <GoAIAccordionSection />

      {/* Personas */}
      <section className="uc-benefits-section" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '500px', height: '500px', background: 'rgba(63, 171, 186, 0.18)', filter: 'blur(120px)', borderRadius: '50%', top: '5%', left: '-8%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '450px', height: '450px', background: 'rgba(67, 181, 191, 0.16)', filter: 'blur(100px)', borderRadius: '50%', bottom: '0%', right: '-5%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '400px', height: '400px', background: 'rgba(63, 171, 186, 0.14)', filter: 'blur(110px)', borderRadius: '50%', top: '50%', left: '35%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '350px', height: '350px', background: 'rgba(60, 165, 180, 0.12)', filter: 'blur(90px)', borderRadius: '50%', top: '30%', right: '20%', pointerEvents: 'none' }} />
        <div className="uc-benefits-header" style={{ textAlign: "center", position: 'relative', zIndex: 1 }}>
          <p className="promos-eyebrow">BUILT FOR YOUR TEAM</p>
          <h2 className="promos-title">
            Different <span className="promos-title-italic" style={{ display: "inline" }}>superpowers</span> for every role.
          </h2>
          <p className="goai-desc" style={{ maxWidth: '560px', margin: '12px auto 0' }}>
            Tailored tools and workflows designed for agents, managers, and IT — so everyone works at their best.
          </p>
        </div>
        <div className="cc-persona-grid" style={{ position: 'relative', zIndex: 1 }}>
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

      {/* Security & Compliance */}
      <section className="cc-security-section" style={{ background: '#F9FAFB' }}>
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow">SECURITY & COMPLIANCE</p>
          <h2 className="promos-title" style={{ maxWidth: 600, margin: '0 auto' }}>Your data is <span className="promos-title-italic" style={{ display: "inline" }}>safe</span> here.</h2>
          <p className="goai-desc" style={{ maxWidth: '560px', margin: '12px auto 0' }}>
            Enterprise-grade certifications and compliance standards your organization can trust.
          </p>
        </div>
        <div className="cc-security-grid">
          <div className="cc-security-card">
            <div className="uc-benefit-icon cc-security-lucide"><ShieldCheck size={48} strokeWidth={1.5} /></div>
            <h3 className="uc-benefit-title">SOC 2 Type I</h3>
            <p className="uc-benefit-desc">Independently audited security controls for data protection, availability, and confidentiality.</p>
          </div>
          <div className="cc-security-card">
            <div className="uc-benefit-icon cc-security-lucide"><Lock size={48} strokeWidth={1.5} /></div>
            <h3 className="uc-benefit-title">GDPR Compliant</h3>
            <p className="uc-benefit-desc">Full compliance with European data protection regulations and privacy standards.</p>
          </div>
          <div className="cc-security-card">
            <div className="uc-benefit-icon cc-security-lucide"><BadgeCheck size={48} strokeWidth={1.5} /></div>
            <h3 className="uc-benefit-title">HIPAA Compliant</h3>
            <p className="uc-benefit-desc">Meets healthcare industry requirements for protecting sensitive patient information.</p>
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

export default ContactCenter;
