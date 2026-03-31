import "../App.css";
import "../styles/uc.css";
import "../styles/voice-chatbot.css";
import "@fontsource/instrument-sans/400.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/instrument-sans/600.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import CTABlock from "../components/CTABlock";
import callFlowImg from "@/assets/call-flow-visualization.png";
import ucHeroImg from "@/assets/uc-hero.png";
import {
  Bot, PhoneOff, Brain, Zap, Clock, ShieldCheck, BarChart3,
  ArrowRight, TrendingUp, Headphones, MessageSquare, Settings2
} from "lucide-react";

const capabilities = [
  { icon: Bot, title: "Resolves Calls Autonomously", desc: "Handles routine, high-volume inbound requests 24/7 — scheduling, account inquiries, claims status — automatically." },
  { icon: Brain, title: "Grounded AI — Zero Hallucinations", desc: "Every response is anchored to your approved knowledge sources. Accurate, auditable, and always on-brand." },
  { icon: MessageSquare, title: "Natural Conversation", desc: "Real-time, human-like dialogue that understands intent, handles interruptions, and resolves in a single interaction." },
  { icon: Headphones, title: "Full-Context Handoffs", desc: "When a call needs a human, it transfers with a complete summary. Agents skip re-explanation and go straight to solving." },
  { icon: Settings2, title: "Native to GoContact", desc: "No integration overhead. Faster deployment, unified reporting, and one platform for your entire contact center." },
  { icon: Clock, title: "24/7 Coverage", desc: "Instant AI coverage at a fraction of night-shift labor costs. Never miss a call, never leave a customer waiting." },
  { icon: ShieldCheck, title: "Simple, Transparent Pricing", desc: "Billed per voice minute — not per token. No hidden fees, no usage math. Predictable costs that scale with you." },
  { icon: BarChart3, title: "Unified Reporting", desc: "AI and agent interactions in one dashboard. Track containment rates, resolution quality, and cost savings in real time." },
];

const results = [
  { industry: "Healthcare", useCase: "Appointment scheduling & Rx refills", outcome: "34% fewer missed appointments" },
  { industry: "Financial Services", useCase: "Loan status & account inquiries", outcome: "11 hrs/week returned per banker" },
  { industry: "Insurance", useCase: "First notice of loss & claims status", outcome: "95% of routine claims auto-processed" },
  { industry: "All Verticals", useCase: "FAQ containment & after-hours coverage", outcome: "$11 saved per AI-handled call" },
];

const VoiceChatbots = () => {
  return (
    <div>
      {/* Hero */}
      <section className="uc-hero-section">
        <Navbar />
        <div className="uc-hero-inner">
          <div className="uc-hero-text">
            <h1 className="hero-h1" style={{ textAlign: "left", lineHeight: "1.05" }}>
              GoEngage <span className="going-next">Voice</span>
            </h1>
            <p className="uc-hero-subtitle">
              Your IVR routes calls. GoEngage resolves them. AI-powered voice that handles the calls your agents shouldn't have to take.
            </p>
            <button className="btn-hero-a">
              Request a Demo <span style={{ fontSize: "18px" }}>→</span>
            </button>
          </div>
          <div className="uc-hero-image">
            <img src={callFlowImg} alt="GoEngage Voice AI call flow" style={{ maxWidth: 520, width: "100%" }} />
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="vc-stats-banner">
        <div className="vc-stats-inner">
          <div className="vc-stat-card">
            <div className="vc-stat-number">52%</div>
            <div className="vc-stat-label">Average annual agent attrition. You spend nearly as much replacing your team as running it.</div>
            <div className="vc-stat-source">— Deloitte</div>
          </div>
          <div className="vc-stat-card">
            <div className="vc-stat-number">$11</div>
            <div className="vc-stat-label">Saved per AI-resolved call vs. a live agent interaction, averaging $8–$12 per call.</div>
            <div className="vc-stat-source">— PwC</div>
          </div>
          <div className="vc-stat-card">
            <div className="vc-stat-number">91%</div>
            <div className="vc-stat-label">Of CX leaders are under pressure to deploy AI immediately or risk falling behind.</div>
            <div className="vc-stat-source">— Gartner</div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Split */}
      <section className="vc-split-section">
        <div className="vc-split-inner">
          <div className="vc-split-header">
            <p className="goai-eyebrow">THE CHALLENGE</p>
            <h2 className="goai-title" style={{ fontSize: 40 }}>
              Headcount alone
              <span className="goai-title-italic"> can't fix this.</span>
            </h2>
          </div>
          <div className="vc-split-grid">
            <div className="vc-split-card vc-split-card--problem">
              <p className="vc-split-card-eyebrow">The Problem</p>
              <h3 className="vc-split-card-title">A cycle that keeps scaling costs</h3>
              <p className="vc-split-card-desc">
                Agent attrition drains budgets before productivity returns. Legacy IVRs route calls without resolving them. Every live interaction costs money that scales linearly with volume. You're paying more to deliver the same — or worse — experience.
              </p>
            </div>
            <div className="vc-split-card vc-split-card--solution">
              <p className="vc-split-card-eyebrow">The Solution</p>
              <h3 className="vc-split-card-title">AI that resolves, not just routes</h3>
              <p className="vc-split-card-desc">
                GoEngage Voice is an AI-powered inbound voice assistant built natively into GoContact — not bolted on. It handles the calls your agents shouldn't have to take, and makes every escalation smarter with full-context handoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payback Section */}
      <section className="vc-payback-section">
        <div className="vc-payback-inner">
          <div className="vc-payback-visual">
            <img src={ucHeroImg} alt="GoEngage Voice ROI" loading="lazy" />
          </div>
          <div className="vc-payback-content">
            <div className="vc-payback-badge">
              <TrendingUp size={16} />
              Estimated Payback: &lt;2 Months
            </div>
            <h2 className="vc-payback-title">
              70% AI containment on a 50-seat contact center.
            </h2>
            <p className="vc-payback-desc">
              At $8–$12 per live call, the math is simple. GoEngage Voice pays for itself in under two months by deflecting routine inbound volume — giving your agents back the time to handle what actually requires a human.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="vc-capabilities-section">
        <div className="vc-capabilities-inner">
          <div className="vc-capabilities-header">
            <p className="goai-eyebrow">WHAT GOENGAGE VOICE DOES</p>
            <h2 className="goai-title" style={{ fontSize: 40 }}>
              Built to resolve,
              <span className="goai-title-italic"> not just respond.</span>
            </h2>
          </div>
          <div className="vc-capabilities-grid">
            {capabilities.map((cap) => (
              <div key={cap.title} className="vc-capability-card">
                <div className="vc-capability-icon">
                  <cap.icon size={24} />
                </div>
                <h3 className="vc-capability-title">{cap.title}</h3>
                <p className="vc-capability-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Table */}
      <section className="vc-results-section">
        <div className="vc-results-inner">
          <div className="vc-results-header">
            <p className="goai-eyebrow">PROVEN RESULTS</p>
            <h2 className="goai-title" style={{ fontSize: 40 }}>
              Results across
              <span className="goai-title-italic"> industries.</span>
            </h2>
          </div>
          <table className="vc-results-table">
            <thead>
              <tr>
                <th>Industry</th>
                <th>Top Use Case</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r.industry}>
                  <td style={{ fontWeight: 600 }}>{r.industry}</td>
                  <td>{r.useCase}</td>
                  <td className="vc-results-outcome">{r.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Now - Urgency */}
      <section className="vc-urgency-section">
        <div className="vc-urgency-inner">
          <p className="vc-urgency-eyebrow">WHY NOW</p>
          <h2 className="vc-urgency-title">
            77% of organizations are already investing in voice AI. The window to lead is closing.
          </h2>
          <p className="vc-urgency-desc">
            Gartner projects 40% of enterprise applications will embed AI agents by end of 2026. Companies that move now are deflecting calls, cutting costs, and pulling ahead. Those that wait aren't standing still — they're falling behind.
          </p>
          <a href="#" className="vc-urgency-cta">
            Get Started with GoEngage <ArrowRight size={16} />
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
