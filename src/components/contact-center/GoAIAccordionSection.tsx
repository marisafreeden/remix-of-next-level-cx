import { useState } from "react";
import { Headphones, BrainCircuit, TrendingUp, ChevronDown } from "lucide-react";
import GoAIDashboardPreview from "./GoAIDashboardPreview";

const items = [
  {
    key: "engage",
    title: "Engage",
    icon: Headphones,
    desc: "Virtual agents handle routine inquiries instantly — so your human agents spend their time on conversations that need a human.",
  },
  {
    key: "assist",
    title: "Assist",
    icon: BrainCircuit,
    desc: "Real-time coaching, smart suggestions, and automated after-call work. Every agent performs like your best one.",
  },
  {
    key: "insights",
    title: "Insights",
    icon: TrendingUp,
    desc: "Sentiment, trends, and performance insights surface automatically — so you're optimizing operations, not just reporting on them.",
  },
];

const GoAIAccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="cc-goai-section">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="cc-goai-icon-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#43B5BF" />
            <stop offset="100%" stopColor="#7042D2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="cc-goai-inner">
        <div className="cc-goai-split">
          <div className="cc-goai-left">
            <div className="cc-goai-header" style={{ textAlign: 'left', marginBottom: '32px' }}>
              <h2 className="promos-title">
                Real AI. No<br /><span className="promos-title-italic" style={{ display: "inline" }}>specialist</span> required.
              </h2>
              <p className="cc-goai-acc-desc" style={{ paddingLeft: 0, marginTop: '12px' }}>
                Built-in AI that works out of the box — no data scientists, no complex setup. Just smarter conversations from day one.
              </p>
            </div>
          <div className="cc-goai-accordion">
            {items.map((item, i) => {
              const Icon = item.icon;
              const isOpen = openIndex === i;
              return (
                <button
                  key={item.key}
                  className={`cc-goai-acc-item ${isOpen ? "cc-goai-acc-open" : ""}`}
                  onClick={() => setOpenIndex(i)}
                >
                  <div className="cc-goai-acc-header">
                    <div className="cc-goai-acc-icon"><Icon size={22} strokeWidth={1.5} /></div>
                    <span className="cc-goai-acc-title">{item.title}</span>
                    <ChevronDown size={18} className={`cc-goai-acc-chevron ${isOpen ? "cc-goai-acc-chevron-open" : ""}`} />
                  </div>
                  <div className={`cc-goai-acc-body ${isOpen ? "cc-goai-acc-body-open" : ""}`}>
                    <p className="cc-goai-acc-desc">{item.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
          </div>
          <div className="cc-goai-image-side">
            <div className="cc-goai-img-wrap">
              <img src={ccGoaiDashboard} alt="AI-powered contact center dashboard" loading="lazy" width={896} height={672} className="cc-goai-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoAIAccordionSection;
