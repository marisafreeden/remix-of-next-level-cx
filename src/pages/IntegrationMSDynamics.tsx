import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@/styles/integrations.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Users, ClipboardCheck, PhoneCall, TrendingUp, Database, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  { title: "Screen pop customer records", desc: "Match incoming interactions to CRM records and present relevant customer details to the agent when the conversation starts." },
  { title: "Click-to-dial from Dynamics", desc: "Enable users to place calls more efficiently from within the CRM workflow, reducing friction and saving time." },
  { title: "Automatic activity capture", desc: "Log call activity and interaction details to help teams maintain visibility across sales and service activity." },
  { title: "Unified customer history", desc: "Give agents a more complete view of previous conversations, notes, and account context to support smarter engagements." },
  { title: "Faster agent workflows", desc: "Reduce toggling between systems and simplify everyday tasks with a more connected contact-center-to-CRM experience." },
  { title: "Better operational visibility", desc: "Combine customer and interaction data to support stronger reporting, performance tracking, and service optimization." },
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
      <Navbar />

      {/* Hero */}
      <section className="intg-hero">
        <div className="intg-hero-bg" />
        <div className="intg-hero-inner">
          <p className="intg-hero-eyebrow">Integration</p>
          <h1 className="intg-hero-h1">Connect Microsoft Dynamics with GoContact</h1>
          <p className="intg-hero-sub">
            Bring your CRM and contact center together so agents can work faster, personalize every conversation, and keep customer records up to date without switching tabs.
          </p>
          <div className="intg-hero-ctas">
            <button className="btn-hero-a">Talk to an expert <span style={{ fontSize: '18px' }}>→</span></button>
            <button className="btn-hero-b">Request a demo</button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="intg-value">
        <div className="intg-value-inner">
          <p className="intg-section-eyebrow">Value Proposition</p>
          <h2 className="intg-section-title">One workspace for every customer conversation</h2>
          <p className="intg-section-desc">
            When agents have to bounce between systems, productivity drops and customers feel the delay. By integrating Microsoft Dynamics with GoContact, your team can access CRM data and interaction tools in a more connected workflow.
          </p>
          <p className="intg-section-desc" style={{ marginTop: 16 }}>
            That means faster identification, more informed conversations, and cleaner records after every call.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="intg-benefits">
        <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
          <p className="intg-section-eyebrow">Key Benefits</p>
          <h2 className="intg-section-title">Turn every interaction into context-rich service and sales</h2>
          <p className="intg-section-desc">
            With Microsoft Dynamics and GoContact working together, your teams get the customer data they need at the moment they need it—so they can resolve issues faster, improve productivity, and deliver better experiences across every channel.
          </p>
        </div>
        <div className="intg-benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="intg-benefit-card">
              <div className="intg-benefit-icon">
                <b.icon size={22} />
              </div>
              <h3 className="intg-benefit-title">{b.title}</h3>
              <p className="intg-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="intg-features">
        <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
          <p className="intg-section-eyebrow">Features</p>
          <h2 className="intg-section-title">What the integration can help you do</h2>
        </div>
        <div className="intg-features-grid">
          {features.map((f, i) => (
            <div key={i} className="intg-feature-card">
              <h3 className="intg-feature-title">{f.title}</h3>
              <p className="intg-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="intg-outcome">
        <div className="intg-outcome-inner">
          <div className="intg-outcome-text">
            <p className="intg-section-eyebrow">Why Teams Choose This</p>
            <h2 className="intg-section-title">Why teams integrate GoContact with Microsoft Dynamics</h2>
            <p className="intg-outcome-desc">
              Organizations looking to modernize customer engagement often struggle with disconnected tools, fragmented customer data, and time-consuming agent workflows. Integrating Microsoft Dynamics with GoContact helps bridge that gap by bringing communications and CRM context closer together.
            </p>
            <p className="intg-outcome-desc">
              The result is a more efficient agent experience, more consistent customer conversations, and a stronger foundation for both service and revenue teams.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      {/* Audience */}
      <section className="intg-audience">
        <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
          <p className="intg-section-eyebrow">Built For Your Team</p>
          <h2 className="intg-section-title">Who benefits from the integration</h2>
        </div>
        <div className="intg-audience-grid">
          {audiences.map((a, i) => (
            <div key={i} className="intg-audience-card">
              <h3 className="intg-audience-title">{a.title}</h3>
              <p className="intg-audience-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="intg-how">
        <div className="intg-how-inner">
          <p className="intg-section-eyebrow">How It Works</p>
          <h2 className="intg-section-title">Seamless connection between your tools</h2>
          <p className="intg-section-desc" style={{ marginTop: 24 }}>
            GoContact connects your contact center workflows with Microsoft Dynamics so agents can interact with customers while staying aligned with CRM data and processes. Incoming and outgoing interactions can be associated with the right customer records, helping your teams work more efficiently and maintain a more complete view of every relationship.
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="intg-trust">
        <div className="intg-trust-inner">
          <p className="intg-section-eyebrow">Built for Impact</p>
          <h2 className="intg-section-title">Built for smarter customer engagement</h2>
          <p className="intg-section-desc" style={{ marginTop: 24 }}>
            A CRM integration should do more than pass data back and forth. It should help your teams move faster, personalize service, and make every interaction more valuable. With Microsoft Dynamics and GoContact, organizations can create a more connected experience for agents, supervisors, and customers alike.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="intg-cta">
        <div className="intg-cta-inner">
          <h2 className="intg-cta-title">Make Microsoft Dynamics more actionable for every customer interaction</h2>
          <p className="intg-cta-desc">
            See how GoContact helps your teams connect communications and CRM data to improve service, sales, and operational efficiency.
          </p>
          <button className="btn-hero-a">Book a demo <span style={{ fontSize: '18px' }}>→</span></button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntegrationMSDynamics;
