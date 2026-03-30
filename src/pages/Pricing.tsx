import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/pricing.css";

import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { useState } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

const ucPlans = [
  {
    name: "Metered",
    subtitle: "b-hive Seat",
    price: "$10",
    per: "/month/user",
    popular: false,
    features: [
      { text: "Call Forwarding", included: true },
      { text: "Find Me/Follow Me", included: true },
      { text: "Hot Desking", included: true },
      { text: "Web Portal", included: true },
      { text: "SMS $.01/Message", included: true },
      { text: "Domestic $.029/Min", included: true },
      { text: "Mobile App", included: true },
      { text: "Voicemail-to-Email", included: true },
    ],
  },
  {
    name: "Standard",
    subtitle: "b-hive Seat",
    price: "$18",
    per: "/month/user",
    popular: true,
    features: [
      { text: "Unlimited Calling", included: true },
      { text: "Local DID", included: true },
      { text: "No-Cost SMS", included: true },
      { text: "Communicator (Chat & Softphone)", included: true },
      { text: "Priority Email Support", included: true },
    ],
  },
  {
    name: "Pro",
    subtitle: "b-hive Seat",
    price: "$23",
    per: "/month/user",
    popular: false,
    features: [
      { text: "Virtual Fax", included: true },
      { text: "One Number", included: true },
      { text: "Global Extension", included: true },
      { text: "Call Recording", included: true },
      { text: "Communicator (Video + Screen Share)", included: true },
      { text: "Call Catch", included: true },
      { text: "Integrations", included: true },
    ],
  },
];

const ccPlans = [
  {
    name: "Essential",
    subtitle: "Agent Seat",
    price: "$35",
    per: "/month/agent",
    popular: false,
    features: [
      { text: "Omnichannel Routing", included: true },
      { text: "IVR Builder", included: true },
      { text: "Real-Time Dashboards", included: true },
      { text: "Call Recording", included: true },
      { text: "Basic Reporting", included: true },
    ],
  },
  {
    name: "Professional",
    subtitle: "Agent Seat",
    price: "$55",
    per: "/month/agent",
    popular: true,
    features: [
      { text: "Everything in Essential", included: true },
      { text: "Smart Scripting", included: true },
      { text: "Predictive Dialer", included: true },
      { text: "Quality Management", included: true },
      { text: "CRM Integrations", included: true },
      { text: "Post Call AI", included: true },
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Agent Seat",
    price: "Custom",
    per: "",
    popular: false,
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Voice Chatbots", included: true },
      { text: "AI Analyst", included: true },
      { text: "Custom Integrations", included: true },
      { text: "Dedicated Success Manager", included: true },
      { text: "SLA Guarantee", included: true },
    ],
  },
];



const aiPlans = [
  {
    name: "Starter",
    subtitle: "AI Agent",
    price: "$29",
    per: "/month/agent",
    popular: false,
    features: [
      { text: "Voice AI Agent", included: true },
      { text: "Basic Intent Recognition", included: true },
      { text: "Call Routing Automation", included: true },
      { text: "Standard Analytics", included: true },
    ],
  },
  {
    name: "Advanced",
    subtitle: "AI Agent",
    price: "$59",
    per: "/month/agent",
    popular: true,
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Natural Language Understanding", included: true },
      { text: "Sentiment Analysis", included: true },
      { text: "Multi-Language Support", included: true },
      { text: "CRM Integration", included: true },
      { text: "Post-Call AI Summaries", included: true },
    ],
  },
  {
    name: "Enterprise",
    subtitle: "AI Agent",
    price: "Custom",
    per: "",
    popular: false,
    features: [
      { text: "Everything in Advanced", included: true },
      { text: "Custom AI Models", included: true },
      { text: "Voice Cloning", included: true },
      { text: "Advanced Analytics & BI", included: true },
      { text: "Dedicated AI Engineer", included: true },
      { text: "SLA Guarantee", included: true },
    ],
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"uc" | "cc" | "ai">("uc");
  const plans = activeTab === "uc" ? ucPlans : activeTab === "cc" ? ccPlans : aiPlans;

  return (
    <div className="pricing-page">
      <Navbar />

      <section className="pricing-hero">
        <h1 className="pricing-title">
          Plans and <em className="pricing-title-italic">pricing</em>
        </h1>

        <div className="pricing-tabs">
          <button
            className={`pricing-tab ${activeTab === "uc" ? "pricing-tab-active" : ""}`}
            onClick={() => setActiveTab("uc")}
          >
            Unified Communications
          </button>
          <button
            className={`pricing-tab ${activeTab === "cc" ? "pricing-tab-active" : ""}`}
            onClick={() => setActiveTab("cc")}
          >
            Cloud Contact Center
          </button>
          <button
            className={`pricing-tab ${activeTab === "ai" ? "pricing-tab-active" : ""}`}
            onClick={() => setActiveTab("ai")}
          >
            AI Solutions
          </button>
        </div>
      </section>

      <section className="pricing-cards-section">
        <div className="pricing-cards-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
            >
              {plan.popular && <span className="pricing-popular-badge">Most Popular</span>}
              <h3 className="pricing-card-name">{plan.name}</h3>
              <p className="pricing-card-subtitle">{plan.subtitle}</p>

              <div className="pricing-card-price-row">
                <span className="pricing-card-price">{plan.price}</span>
                {plan.per && <span className="pricing-card-per">{plan.per}</span>}
              </div>

              <ul className="pricing-card-features">
                {plan.features.map((f) => (
                  <li key={f.text} className="pricing-card-feature">
                    <Check size={16} className="pricing-check" />
                    {f.text}
                  </li>
                ))}
              </ul>

              <a href="#" className="pricing-card-cta">Request a quote</a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
