import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@/styles/contact-center.css";
import "@/styles/integrations.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { useState } from "react";
import { Clock, Zap, Heart, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABlock from "@/components/CTABlock";

const PlaceholderImage = () => (
  <div className="intg-placeholder">
    <div className="intg-placeholder-inner">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="intg-placeholder-sq" />
      ))}
    </div>
  </div>
);

const benefitBlocks = [
  {
    icon: Clock,
    eyebrow: "FASTER RESOLUTION",
    title: "Help agents get to the answer sooner.",
    desc: "When customer context is easier to access during an interaction, agents can spend less time searching and more time solving. That means shorter delays, more confident conversations, and a better path to resolution.",
  },
  {
    icon: Zap,
    eyebrow: "LESS MANUAL WORK",
    title: "Reduce the effort behind every interaction.",
    desc: "Disconnected tools create extra admin work before, during, and after each conversation. A more connected workflow helps teams cut down on repetitive tasks and stay focused on the customer.",
  },
  {
    icon: Heart,
    eyebrow: "BETTER CUSTOMER EXPERIENCES",
    title: "Make each conversation feel informed and consistent.",
    desc: "Customers expect teams to know who they are and why they are reaching out. Bringing CRM context into the flow of the interaction helps create smoother, more personalized experiences across service and sales.",
  },
];

const audiences = [
  {
    eyebrow: "SERVICE TEAMS",
    title: "Improve response times without adding complexity.",
    desc: "Help agents handle customer needs more efficiently with quicker access to the context behind the conversation.",
  },
  {
    eyebrow: "SALES TEAMS",
    title: "Support more productive customer conversations.",
    desc: "Give teams a clearer view of the customer so they can spend less time navigating systems and more time building momentum.",
  },
  {
    eyebrow: "OPERATIONS LEADERS",
    title: "Improve efficiency across teams and workflows.",
    desc: "Reduce process friction, support better consistency, and create a stronger foundation for customer engagement at scale.",
  },
];

const faqs = [
  {
    q: "How does a Microsoft Dynamics integration improve the customer experience?",
    a: "It helps teams work with better customer context during live interactions, which can reduce repetition, improve response quality, and create a more seamless experience.",
  },
  {
    q: "Why connect a CRM to a contact center platform?",
    a: "Because customer conversations are more effective when agents can work from the same data that sales and service teams already rely on. A connected experience helps reduce friction for both employees and customers.",
  },
  {
    q: "Who benefits from this integration?",
    a: "Service teams, sales teams, and operations leaders all benefit from a more connected workflow, better visibility, and less manual effort across everyday customer interactions.",
  },
  {
    q: "What business problems does this solve?",
    a: "It helps address slow response times, disconnected customer records, inconsistent experiences, and the operational drag caused by switching between multiple systems.",
  },
];

const IntegrationMSDynamics = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="intg-page">
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
      <section className="intg-hero">
        <div className="intg-hero-bg" />
        <div className="intg-hero-inner">
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>MICROSOFT DYNAMICS INTEGRATION</p>
          <h1 className="cc-hero-heading" style={{ fontSize: "56px", marginTop: "16px", marginBottom: "20px" }}>
            <span className="cc-hero-heading-line">Close the gap between customer data</span>
            <span className="cc-hero-heading-accent">and customer conversations.</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: "680px", margin: "0 auto 40px" }}>
            When agents work across disconnected systems, every interaction takes more effort. Connecting Microsoft Dynamics with GoContact helps service and sales teams respond with better context, less manual work, and a smoother customer experience from the start.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Book a demo <span style={{ fontSize: "18px" }}>→</span></button>
          </div>
        </div>
      </section>

      {/* Intro — Disconnected Workflows */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>DISCONNECTED WORKFLOWS</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            When systems do not work together,<br />
            <span className="promos-title-italic" style={{ display: "inline" }}>customers feel it.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "12px auto 0" }}>
            Agents lose time switching tabs, searching for information, and piecing together customer history while the conversation is already underway. That slows resolution, creates repeat questions, and makes it harder to deliver the kind of experience customers expect.
          </p>
          <p className="goai-desc" style={{ maxWidth: "700px", margin: "16px auto 0" }}>
            GoContact helps bring Microsoft Dynamics closer to the interaction so teams can work with more clarity and less friction.
          </p>
        </div>
      </section>

      {/* Three Benefit Blocks */}
      <section className="uc-features-section">
        <div className="uc-benefits-grid" style={{ maxWidth: "1200px" }}>
          {benefitBlocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <p className="promos-eyebrow" style={{ marginBottom: "8px" }}>{b.eyebrow}</p>
                <h3 className="uc-benefit-title">{b.title}</h3>
                <p className="uc-benefit-desc">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Helps — Connected Context */}
      <section className="uc-benefits-section">
        <div className="intg-outcome-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">CONNECTED CONTEXT</p>
            <h2 className="promos-title">
              Give teams the information they need<br />
              <span className="promos-title-italic" style={{ display: "inline" }}>when it matters most.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: "520px" }}>
              GoContact helps bridge the gap between Microsoft Dynamics and the contact center so agents can work with better visibility into the customer relationship. Instead of chasing information across systems, teams can move conversations forward with more confidence and continuity.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* Who It's For */}
      <section className="uc-features-section">
        <div className="uc-features-header" style={{ textAlign: "center" }}>
          <p className="promos-eyebrow" style={{ textAlign: "center" }}>WHO IT'S FOR</p>
          <h2 className="promos-title" style={{ textAlign: "center" }}>
            Different <span className="promos-title-italic" style={{ display: "inline" }}>superpowers</span> for every role.
          </h2>
        </div>
        <div className="intg-audience-grid" style={{ maxWidth: "1200px", margin: "48px auto 0" }}>
          {audiences.map((a, i) => (
            <div key={i} className="uc-benefit-card">
              <p className="promos-eyebrow" style={{ marginBottom: "8px" }}>{a.eyebrow}</p>
              <h3 className="uc-benefit-title">{a.title}</h3>
              <p className="uc-benefit-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <p className="promos-eyebrow" style={{ textAlign: "center" }}>COMMON QUESTIONS</p>
        <h2 className="faq-title">
          Frequently asked<br />
          <span className="faq-title-italic">questions</span>
        </h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? "faq-item-open" : ""}`}>
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{faq.q}</span>
                <ChevronDown size={18} className={`faq-chevron ${openFaq === i ? "faq-chevron-open" : ""}`} />
              </button>
              <div className={`faq-answer-wrap ${openFaq === i ? "faq-answer-open" : ""}`}>
                <p className="faq-answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABlock />
      <Footer />
    </div>
  );
};

export default IntegrationMSDynamics;
