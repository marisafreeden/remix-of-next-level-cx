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
const platformPillKeys = ["hw1", "hw2", "hw3", "hw4"];
const smarterKeys = ["sm1", "sm2", "sm3", "sm4"];
const smarterIcons = [BarChart3, Globe, FileText];
const featureKeys = ["f2", "f4", "f6", "f8", "f11", "f12"];
const featureIcons = [Zap, Bot, BarChart3, Users, MessageSquare, MonitorSmartphone];
const personaKeys = ["agents", "managers", "it"];
const personaImages = [personaAgentsImg, personaManagersImg, personaItImg];

const ContactCenter = () => {
  const { t } = useTranslation();
  const { c, save } = useSiteCopy("cc_page");

  return (
    <div className="cc-page-wrap" style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero + Platform Combined */}
      <section className="cc-platform-section cc-hero-platform-combined">
        <div className="cc-hero-blur-extra1" />
        <div className="cc-hero-blur-extra2" />
        <div className="cc-hero-blur-extra3" />
        <div className="cc-hero-content">
          <h1 className="hero-h1 cc-hero-title">
            <EditableText value={c("hero_title1", "cc_page.hero_title1")} copyKey="hero_title1" onSave={save} /><br />
            <span className="going-next">
              <EditableText value={c("hero_title2", "cc_page.hero_title2")} copyKey="hero_title2" onSave={save} />
            </span>
          </h1>
          <p className="hero-sub cc-hero-desc">{t("cc_page.hero_subtitle_combined")}</p>
          <div className="hero-ctas">
            <button className="btn-hero-a">
              {t("common.request_demo")} <span style={{ fontSize: "18px" }}>→</span>
            </button>
          </div>
        </div>

        <div className="cc-platform-inner">
          <div className="cc-glass-widgets">
            {/* Widget 1: Dashboard / Total Calls */}
            <div className="cc-glass-card cc-glass-tall" style={{ gridRow: "1 / 3" }}>
              <div className="cc-glass-card-header">
                <Phone size={14} strokeWidth={1.5} />
                <span>Total Calls</span>
                <span className="cc-glass-badge">Live</span>
              </div>
              <div className="cc-glass-big-number">1,847</div>
              <div className="cc-glass-sub-label">Today's volume</div>
              <div className="cc-glass-mini-stats">
                <div className="cc-glass-mini-stat">
                  <span className="cc-glass-mini-val cc-glass-green">1,643</span>
                  <span className="cc-glass-mini-label">Answered</span>
                </div>
                <div className="cc-glass-mini-stat">
                  <span className="cc-glass-mini-val cc-glass-red">128</span>
                  <span className="cc-glass-mini-label">Abandoned</span>
                </div>
                <div className="cc-glass-mini-stat">
                  <span className="cc-glass-mini-val">76</span>
                  <span className="cc-glass-mini-label">In Queue</span>
                </div>
              </div>
              <div className="cc-glass-bar-chart">
                <div className="cc-glass-bar" style={{ height: "60%" }} />
                <div className="cc-glass-bar" style={{ height: "80%" }} />
                <div className="cc-glass-bar" style={{ height: "45%" }} />
                <div className="cc-glass-bar" style={{ height: "90%" }} />
                <div className="cc-glass-bar" style={{ height: "70%" }} />
                <div className="cc-glass-bar" style={{ height: "55%" }} />
                <div className="cc-glass-bar" style={{ height: "85%" }} />
              </div>
            </div>

            {/* Widget 2: CSAT Score */}
            <div className="cc-glass-card">
              <div className="cc-glass-card-header">
                <BarChart3 size={14} strokeWidth={1.5} />
                <span>CSAT Score</span>
              </div>
              <div className="cc-glass-csat-ring">
                <svg viewBox="0 0 80 80" className="cc-glass-ring-svg">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="url(#csatGrad)" strokeWidth="6" strokeDasharray="171 214" strokeLinecap="round" transform="rotate(-90 40 40)" />
                  <defs><linearGradient id="csatGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#43B5BF" /><stop offset="100%" stopColor="#7042D2" /></linearGradient></defs>
                </svg>
                <div className="cc-glass-ring-text">4.3<span>/5</span></div>
              </div>
            </div>

            {/* Widget 2b: Calls Per Month */}
            <div className="cc-glass-card">
              <div className="cc-glass-card-header">
                <Phone size={14} strokeWidth={1.5} />
                <span>Calls (Monthly)</span>
              </div>
              <div className="cc-glass-queue-table">
                <div className="cc-glass-queue-header">
                  <span>Month</span><span>Received</span><span>Answered</span>
                </div>
                <div className="cc-glass-queue-row"><span>May</span><span>2,029</span><span className="cc-glass-green">893</span></div>
                <div className="cc-glass-queue-row"><span>Apr</span><span>1,903</span><span>877</span></div>
                <div className="cc-glass-queue-row"><span>Dec</span><span>1,803</span><span>631</span></div>
              </div>
            </div>
            <div className="cc-glass-card">
              <div className="cc-glass-card-header">
                <Users size={14} strokeWidth={1.5} />
                <span>Agent Status</span>
              </div>
              <div className="cc-glass-presence-list">
                <div className="cc-glass-presence-row">
                  <span className="cc-glass-dot cc-dot-green" />
                  <span>Available</span>
                  <span className="cc-glass-presence-count">24</span>
                </div>
                <div className="cc-glass-presence-row">
                  <span className="cc-glass-dot cc-dot-yellow" />
                  <span>On Call</span>
                  <span className="cc-glass-presence-count">18</span>
                </div>
                <div className="cc-glass-presence-row">
                  <span className="cc-glass-dot cc-dot-red" />
                  <span>Away</span>
                  <span className="cc-glass-presence-count">6</span>
                </div>
                <div className="cc-glass-presence-row">
                  <span className="cc-glass-dot cc-dot-gray" />
                  <span>Offline</span>
                  <span className="cc-glass-presence-count">3</span>
                </div>
              </div>
            </div>

            {/* Widget 4: Queue Status */}
            <div className="cc-glass-card cc-glass-wide" style={{ gridColumn: "2 / 4" }}>
              <div className="cc-glass-card-header">
                <Headphones size={14} strokeWidth={1.5} />
                <span>Queue Status</span>
                <span className="cc-glass-badge">All Queues</span>
              </div>
              <div className="cc-glass-queue-table">
                <div className="cc-glass-queue-header">
                  <span>Queue</span><span>Agents</span><span>Waiting</span><span>Avg Wait</span>
                </div>
                <div className="cc-glass-queue-row">
                  <span>Billing</span><span>12</span><span className="cc-glass-red">8</span><span>2:34</span>
                </div>
                <div className="cc-glass-queue-row">
                  <span>Support</span><span>8</span><span>3</span><span>1:12</span>
                </div>
                <div className="cc-glass-queue-row">
                  <span>Sales</span><span>6</span><span className="cc-glass-green">1</span><span>0:45</span>
                </div>
              </div>
            </div>

            {/* Widget 5: Dialer */}
            <div className="cc-glass-card">
              <div className="cc-glass-card-header">
                <Phone size={14} strokeWidth={1.5} />
                <span>Active Call</span>
                <span className="cc-glass-badge" style={{ background: "rgba(74, 222, 128, 0.2)", color: "#4ade80" }}>Talking</span>
              </div>
              <div className="cc-glass-dialer">
                <div className="cc-glass-dialer-timer">01:32</div>
                <div className="cc-glass-dialer-info">
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Name</span><span>Susan Smith</span></div>
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Phone</span><span>975 234 567</span></div>
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Type</span><span>Predictive</span></div>
                </div>
                <div className="cc-glass-dialer-modes">
                  <span className="cc-glass-dialer-mode">Manual</span>
                  <span className="cc-glass-dialer-mode">Power</span>
                  <span className="cc-glass-dialer-mode cc-glass-dialer-mode-active">Predictive</span>
                </div>
              </div>
            </div>
          </div>
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
            <div className="cc-security-icon"><ShieldCheck size={32} strokeWidth={1.5} /></div>
            <h3>SOC 2 Type I</h3>
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

      <div className="cc-section-divider" />

      {/* Personas */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow">{t("cc_page.persona_eyebrow")}</p>
          <h2 className="promos-title">
            Built for <span className="promos-title-italic">Everyone</span>
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
