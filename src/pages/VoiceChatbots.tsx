import "../App.css";
import "../styles/uc.css";
import "../styles/voice-chatbot.css";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTABlock from "../components/CTABlock";
import callFlowImg from "@/assets/call-flow-visualization.png";
import DeploymentChart from "@/components/DeploymentChart";
import {
  Bot, Brain, Zap, Clock, ShieldCheck, BarChart3,
  ArrowRight, TrendingUp, Headphones, MessageSquare, Settings2
} from "lucide-react";

const capabilityIcons = [Bot, Brain, MessageSquare, Headphones, Settings2, Clock, ShieldCheck, BarChart3];
const capabilityKeys = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];
const resultKeys = ["r1", "r2", "r3", "r4"];

const VoiceChatbots = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="uc-hero-section">
        <Navbar />
        <div className="uc-hero-inner">
          <div className="uc-hero-text">
            <h1 className="hero-h1" style={{ textAlign: "left", lineHeight: "1.05" }}>
              {t("voice_page.hero_title1")} <span className="going-next">{t("voice_page.hero_title2")}</span>
            </h1>
            <p className="uc-hero-subtitle">{t("voice_page.hero_subtitle")}</p>
            <button className="btn-hero-a">
              {t("common.request_demo")} <span style={{ fontSize: "18px" }}>→</span>
            </button>
          </div>
          <div className="uc-hero-image" style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: "-60px", borderRadius: "50%",
              background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(67,181,191,0.25) 0%, rgba(112,66,210,0.12) 40%, transparent 70%)",
              filter: "blur(50px)", zIndex: 0, pointerEvents: "none" as const,
            }} />
            <img src={callFlowImg} alt="GoEngage Voice AI" style={{ maxWidth: 520, width: "100%", position: "relative", zIndex: 1 }} />
          </div>
        </div>
      </section>

      <section className="vc-stats-banner">
        <div className="vc-stats-inner">
          {["stat1", "stat2", "stat3"].map((key) => (
            <div key={key} className="vc-stat-card">
              <div className="vc-stat-number">{t(`voice_page.${key}_number`)}</div>
              <div className="vc-stat-label">{t(`voice_page.${key}_label`)}</div>
              <div className="vc-stat-source">{t(`voice_page.${key}_source`)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="vc-split-section">
        <div className="vc-split-inner">
          <div className="vc-split-header">
            <p className="goai-eyebrow">{t("voice_page.challenge_eyebrow")}</p>
            <h2 className="goai-title" style={{ fontSize: 40 }}>
              {t("voice_page.challenge_title1")}
              <span className="goai-title-italic"> {t("voice_page.challenge_title2")}</span>
            </h2>
          </div>
          <div className="vc-split-grid">
            <div className="vc-split-card vc-split-card--problem">
              <p className="vc-split-card-eyebrow">{t("voice_page.problem_eyebrow")}</p>
              <h3 className="vc-split-card-title">{t("voice_page.problem_title")}</h3>
              <p className="vc-split-card-desc">{t("voice_page.problem_desc")}</p>
            </div>
            <div className="vc-split-card vc-split-card--solution">
              <p className="vc-split-card-eyebrow">{t("voice_page.solution_eyebrow")}</p>
              <h3 className="vc-split-card-title">{t("voice_page.solution_title")}</h3>
              <p className="vc-split-card-desc">{t("voice_page.solution_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="vc-payback-section">
        <div className="vc-payback-inner">
          <div className="vc-payback-visual">
            <DeploymentChart />
          </div>
          <div className="vc-payback-content">
            <div className="vc-payback-badge">
              <TrendingUp size={16} />
              {t("voice_page.payback_badge")}
            </div>
            <h2 className="vc-payback-title">{t("voice_page.payback_title")}</h2>
            <p className="vc-payback-desc">{t("voice_page.payback_desc")}</p>
          </div>
        </div>
      </section>

      <section className="vc-capabilities-section">
        <div className="vc-capabilities-inner">
          <div className="vc-capabilities-header">
            <p className="goai-eyebrow">{t("voice_page.capabilities_eyebrow")}</p>
            <h2 className="goai-title" style={{ fontSize: 40 }}>
              {t("voice_page.capabilities_title1")}
              <span className="goai-title-italic"> {t("voice_page.capabilities_title2")}</span>
            </h2>
          </div>
          <div className="vc-capabilities-grid">
            {capabilityKeys.map((key, i) => {
              const Icon = capabilityIcons[i];
              return (
                <div key={key} className="vc-capability-card">
                  <div className="vc-capability-icon"><Icon size={24} /></div>
                  <h3 className="vc-capability-title">{t(`voice_page.${key}_title`)}</h3>
                  <p className="vc-capability-desc">{t(`voice_page.${key}_desc`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="vc-results-section">
        <div className="vc-results-inner">
          <div className="vc-results-header">
            <p className="goai-eyebrow">{t("voice_page.results_eyebrow")}</p>
            <h2 className="goai-title" style={{ fontSize: 40 }}>
              {t("voice_page.results_title1")}
              <span className="goai-title-italic"> {t("voice_page.results_title2")}</span>
            </h2>
          </div>
          <table className="vc-results-table">
            <thead>
              <tr>
                <th>{t("voice_page.results_th_industry")}</th>
                <th>{t("voice_page.results_th_usecase")}</th>
                <th>{t("voice_page.results_th_outcome")}</th>
              </tr>
            </thead>
            <tbody>
              {resultKeys.map((key) => (
                <tr key={key}>
                  <td style={{ fontWeight: 600 }}>{t(`voice_page.${key}_industry`)}</td>
                  <td>{t(`voice_page.${key}_usecase`)}</td>
                  <td className="vc-results-outcome">{t(`voice_page.${key}_outcome`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="vc-urgency-section">
        <div className="vc-urgency-inner">
          <p className="vc-urgency-eyebrow">{t("voice_page.urgency_eyebrow")}</p>
          <h2 className="vc-urgency-title">{t("voice_page.urgency_title")}</h2>
          <p className="vc-urgency-desc">{t("voice_page.urgency_desc")}</p>
          <a href="#" className="vc-urgency-cta">
            {t("voice_page.urgency_cta")} <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <CTABlock />
      <Footer />
    </div>
  );
};

export default VoiceChatbots;