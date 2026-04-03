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

import {
  Users, ClipboardCheck, PhoneCall, TrendingUp, Database,
  Eye, MonitorSmartphone, MousePointerClick, History, Zap, BarChart3
} from "lucide-react";
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

const benefits = [
  { icon: Users, title: "Give agents instant customer context", desc: "Surface relevant customer information from Microsoft Dynamics as soon as an interaction begins, helping agents understand who they are speaking with and why they are calling." },
  { icon: ClipboardCheck, title: "Reduce manual work", desc: "Automatically capture interaction details and streamline post-call updates, so agents spend less time on admin and more time helping customers." },
  { icon: PhoneCall, title: "Improve first-contact resolution", desc: "Equip agents with account history, previous interactions, and customer context in one place so they can resolve issues with fewer handoffs." },
  { icon: TrendingUp, title: "Support better sales conversations", desc: "Help sales and service teams act on the right information at the right time with easier access to contacts, opportunities, and account records during live interactions." },
  { icon: Database, title: "Keep CRM records more complete", desc: "Make it easier to log calls, associate activities with the right records, and maintain a stronger system of record inside Microsoft Dynamics." },
];

const features = [
  { icon: MonitorSmartphone, title: "Screen pop customer records", desc: "Match incoming interactions to CRM records and present relevant customer details to the agent when the conversation starts." },
  { icon: MousePointerClick, title: "Click-to-dial from Dynamics", desc: "Enable users to place calls more efficiently from within the CRM workflow, reducing friction and saving time." },
  { icon: ClipboardCheck, title: "Automatic activity capture", desc: "Log call activity and interaction details to help teams maintain visibility across sales and service activity." },
  { icon: History, title: "Unified customer history", desc: "Give agents a more complete view of previous conversations, notes, and account context to support smarter engagements." },
  { icon: Zap, title: "Faster agent workflows", desc: "Reduce toggling between systems and simplify everyday tasks with a more connected contact-center-to-CRM experience." },
  { icon: BarChart3, title: "Better operational visibility", desc: "Combine customer and interaction data to support stronger reporting, performance tracking, and service optimization." },
];

const audiences = [
  { title: "For customer service teams", desc: "Help agents resolve issues faster with immediate access to customer details, account history, and interaction context." },
  { title: "For sales teams", desc: "Create more efficient outbound and inbound workflows with better visibility into customer records and streamlined calling activity." },
  { title: "For operations leaders", desc: "Improve data quality, agent productivity, and reporting consistency with tighter alignment between your contact center and CRM." },
  { title: "For IT teams", desc: "Simplify the user experience while supporting a more connected architecture across customer engagement systems." },
];

const IntegrationMSDynamics = () => {
  return (
    <div className="intg-page">
      {/* SVG gradient for icons — same as CC page */}
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
          <p className="promos-eyebrow" style={{ textAlign: 'center' }}>INTEGRATION</p>
          <h1 className="cc-hero-heading" style={{ fontSize: '56px', marginTop: '16px', marginBottom: '20px' }}>
            <span className="cc-hero-heading-line">Connect Microsoft Dynamics</span>
            <span className="cc-hero-heading-accent">with GoContact</span>
          </h1>
          <p className="cc-hero-desc" style={{ maxWidth: '640px', margin: '0 auto 40px' }}>
            Bring your CRM and contact center together so agents can work faster, personalize every conversation, and keep customer records up to date without switching tabs.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Talk to an expert <span style={{ fontSize: '18px' }}>→</span></button>
            <button className="btn-hero-b">Request a demo</button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: 'center' }}>
          <p className="promos-eyebrow" style={{ textAlign: 'center' }}>VALUE PROPOSITION</p>
          <h2 className="promos-title" style={{ textAlign: 'center' }}>
            One workspace for every<br />
            <span className="promos-title-italic" style={{ display: 'inline' }}>customer conversation.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '700px', margin: '12px auto 0' }}>
            When agents have to bounce between systems, productivity drops and customers feel the delay. By integrating Microsoft Dynamics with GoContact, your team can access CRM data and interaction tools in a more connected workflow.
          </p>
          <p className="goai-desc" style={{ maxWidth: '700px', margin: '16px auto 0' }}>
            That means faster identification, more informed conversations, and cleaner records after every call.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="uc-features-section">
        <div className="uc-features-header" style={{ textAlign: 'center' }}>
          <p className="promos-eyebrow" style={{ textAlign: 'center' }}>KEY BENEFITS</p>
          <h2 className="promos-title" style={{ textAlign: 'center' }}>
            Turn every interaction into<br />
            <span className="promos-title-italic" style={{ display: 'inline' }}>context-rich service and sales.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '620px', margin: '12px auto 0' }}>
            With Microsoft Dynamics and GoContact working together, your teams get the customer data they need at the moment they need it.
          </p>
        </div>
        <div className="uc-benefits-grid" style={{ maxWidth: '1200px' }}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{b.title}</h3>
                <p className="uc-benefit-desc">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Section */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: 'center' }}>
          <p className="promos-eyebrow" style={{ textAlign: 'center' }}>FEATURES</p>
          <h2 className="promos-title" style={{ textAlign: 'center' }}>
            What the integration can<br />
            <span className="promos-title-italic" style={{ display: 'inline' }}>help you do.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid" style={{ maxWidth: '1200px' }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="uc-benefit-card">
                <div className="uc-benefit-icon"><Icon size={24} strokeWidth={1.5} /></div>
                <h3 className="uc-benefit-title">{f.title}</h3>
                <p className="uc-benefit-desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Outcome */}
      <section className="uc-features-section">
        <div className="intg-outcome-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="intg-outcome-text">
            <p className="promos-eyebrow">WHY TEAMS CHOOSE THIS</p>
            <h2 className="promos-title">
              Why teams integrate GoContact<br />
              <span className="promos-title-italic" style={{ display: 'inline' }}>with Microsoft Dynamics.</span>
            </h2>
            <p className="uc-benefit-desc" style={{ maxWidth: '520px' }}>
              Organizations looking to modernize customer engagement often struggle with disconnected tools, fragmented customer data, and time-consuming agent workflows. Integrating Microsoft Dynamics with GoContact helps bridge that gap by bringing communications and CRM context closer together.
            </p>
            <p className="uc-benefit-desc" style={{ maxWidth: '520px', marginTop: '12px' }}>
              The result is a more efficient agent experience, more consistent customer conversations, and a stronger foundation for both service and revenue teams.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* Audience */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header" style={{ textAlign: 'center' }}>
          <p className="promos-eyebrow" style={{ textAlign: 'center' }}>BUILT FOR YOUR TEAM</p>
          <h2 className="promos-title" style={{ textAlign: 'center' }}>
            Different <span className="promos-title-italic" style={{ display: 'inline' }}>superpowers</span> for every role.
          </h2>
        </div>
        <div className="intg-audience-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {audiences.map((a, i) => (
            <div key={i} className="uc-benefit-card">
              <h3 className="uc-benefit-title">{a.title}</h3>
              <p className="uc-benefit-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="uc-features-section">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="promos-eyebrow" style={{ textAlign: 'center' }}>HOW IT WORKS</p>
          <h2 className="promos-title" style={{ textAlign: 'center' }}>
            Seamless connection<br />
            <span className="promos-title-italic" style={{ display: 'inline' }}>between your tools.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '700px', margin: '20px auto 0' }}>
            GoContact connects your contact center workflows with Microsoft Dynamics so agents can interact with customers while staying aligned with CRM data and processes. Incoming and outgoing interactions can be associated with the right customer records, helping your teams work more efficiently and maintain a more complete view of every relationship.
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="uc-benefits-section">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="promos-eyebrow" style={{ textAlign: 'center' }}>BUILT FOR IMPACT</p>
          <h2 className="promos-title" style={{ textAlign: 'center' }}>
            Built for smarter<br />
            <span className="promos-title-italic" style={{ display: 'inline' }}>customer engagement.</span>
          </h2>
          <p className="goai-desc" style={{ maxWidth: '700px', margin: '20px auto 0' }}>
            A CRM integration should do more than pass data back and forth. It should help your teams move faster, personalize service, and make every interaction more valuable. With Microsoft Dynamics and GoContact, organizations can create a more connected experience for agents, supervisors, and customers alike.
          </p>
        </div>
      </section>

      <CTABlock />
      <Footer />
    </div>
  );
};

export default IntegrationMSDynamics;
