import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/pricing.css";

import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
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

const ucMatrix = [
  { category: "Calling", features: [
    { name: "Domestic Calling", values: ["Metered", "Unlimited", "Unlimited"] },
    { name: "International Calling", values: ["Add-on", "Add-on", "Add-on"] },
    { name: "Call Forwarding", values: [true, true, true] },
    { name: "Find Me/Follow Me", values: [true, true, true] },
    { name: "Call Recording", values: [false, false, true] },
    { name: "Call Catch", values: [false, false, true] },
  ]},
  { category: "Messaging", features: [
    { name: "SMS", values: ["$.01/msg", "Included", "Included"] },
    { name: "Team Chat", values: [false, true, true] },
    { name: "Virtual Fax", values: [false, false, true] },
  ]},
  { category: "Collaboration", features: [
    { name: "Video Conferencing", values: [false, false, true] },
    { name: "Screen Share", values: [false, false, true] },
    { name: "Communicator App", values: [false, true, true] },
    { name: "Mobile App", values: [true, false, false] },
  ]},
  { category: "Management", features: [
    { name: "Web Portal", values: [true, true, true] },
    { name: "Hot Desking", values: [true, true, true] },
    { name: "Local DID", values: [false, true, true] },
    { name: "Voicemail-to-Email", values: [true, true, true] },
    { name: "Integrations", values: [false, false, true] },
    { name: "Priority Support", values: [false, true, true] },
    { name: "Hardware", values: [true, true, true] },
  ]},
];

const ccMatrix = [
  { category: "Routing & Channels", features: [
    { name: "Omnichannel Routing", values: [true, true, true] },
    { name: "IVR Builder", values: [true, true, true] },
    { name: "Skills-Based Routing", values: [false, true, true] },
    { name: "Callback Queue", values: [false, true, true] },
  ]},
  { category: "Outbound", features: [
    { name: "Preview Dialer", values: [true, true, true] },
    { name: "Predictive Dialer", values: [false, true, true] },
    { name: "Campaign Management", values: [false, true, true] },
  ]},
  { category: "AI & Automation", features: [
    { name: "Smart Scripting", values: [false, true, true] },
    { name: "Post Call AI", values: [false, true, true] },
    { name: "Voice Chatbots", values: [false, false, true] },
    { name: "AI Analyst", values: [false, false, true] },
  ]},
  { category: "Analytics & Quality", features: [
    { name: "Real-Time Dashboards", values: [true, true, true] },
    { name: "Basic Reporting", values: [true, true, true] },
    { name: "Advanced Analytics", values: [false, true, true] },
    { name: "Quality Management", values: [false, true, true] },
    { name: "Call Recording", values: [true, true, true] },
  ]},
  { category: "Integrations & Support", features: [
    { name: "CRM Integrations", values: [false, true, true] },
    { name: "Custom Integrations", values: [false, false, true] },
    { name: "Dedicated Success Manager", values: [false, false, true] },
    { name: "SLA Guarantee", values: [false, false, true] },
  ]},
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"uc" | "cc">("uc");
  const plans = activeTab === "uc" ? ucPlans : ccPlans;

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
                    {f.included ? (
                      <Check size={16} className="pricing-check" />
                    ) : (
                      <Minus size={16} className="pricing-dash" />
                    )}
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
