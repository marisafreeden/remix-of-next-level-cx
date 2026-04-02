import { Brain, Database, Workflow, Shield, BarChart3, Layers, type LucideIcon } from "lucide-react";

const leftCards = [
  { icon: Brain, title: "Conversation Intelligence", desc: "Natural language understanding & reasoning that follows context, not scripts" },
  { icon: Workflow, title: "Action & Orchestration", desc: "Executes workflows & system updates securely, without manual steps" },
  { icon: BarChart3, title: "Measurement & Monetization", desc: "Usage tracking and operational visibility, so you can see what's working" },
];

const rightCards = [
  { icon: Database, title: "Context & Data", desc: "Aggregates customer data & knowledge sources before your agents say hello" },
  { icon: Shield, title: "Governance & Control", desc: "Guardrails, configuration, & compliance controls so your ops team stays in charge" },
  { icon: Layers, title: "Platform Abstraction", desc: "LLM-agnostic and scalable architecture for flexibility" },
];

const layerIcons: LucideIcon[] = [Brain, Database, Workflow, Shield, BarChart3, Layers];

const GoAIDiagram = () => {
  return (
    <div className="goai-diagram">
      <div className="goai-diagram-col">
        {leftCards.map((card) => (
          <div key={card.title} className="goai-card">
            <div className="goai-card-icon">
              <card.icon size={22} strokeWidth={1.5} />
            </div>
            <div>
              <div className="goai-card-title">{card.title}</div>
              <div className="goai-card-desc">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="goai-layers-col">
        {layerIcons.map((LayerIcon, i) => (
          <div
            key={i}
            className="goai-diamond"
            style={{
              background: i % 2 === 0
                ? "linear-gradient(135deg, rgba(67, 181, 191, 0.5), rgba(67, 181, 191, 0.15))"
                : "linear-gradient(135deg, rgba(112, 66, 210, 0.45), rgba(112, 66, 210, 0.12))",
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <span className="goai-diamond-icon">
              <LayerIcon size={18} strokeWidth={1.5} />
            </span>
          </div>
        ))}
      </div>

      <div className="goai-diagram-col">
        {rightCards.map((card) => (
          <div key={card.title} className="goai-card">
            <div className="goai-card-icon">
              <card.icon size={22} strokeWidth={1.5} />
            </div>
            <div>
              <div className="goai-card-title">{card.title}</div>
              <div className="goai-card-desc">{card.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoAIDiagram;
