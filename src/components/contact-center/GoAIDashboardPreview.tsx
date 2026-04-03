import { PhoneIncoming, Bot, BookOpen, CheckCircle, Headphones, Globe, Zap, ChevronDown } from "lucide-react";

const Connector = () => (
  <div className="goai-flow-connector">
    <div className="goai-flow-connector-line" />
    <ChevronDown size={14} className="goai-flow-connector-arrow" />
  </div>
);

const GoAIDashboardPreview = () => {
  return (
    <div className="goai-flow">
      <div className="goai-flow-header">
        <div className="goai-flow-dot goai-flow-dot-green" />
        <span className="goai-flow-header-title">AI Agent Flow</span>
        <span className="goai-flow-header-badge">Live</span>
      </div>

      <div className="goai-flow-canvas">
        {/* Incoming call */}
        <div className="goai-flow-node goai-flow-node-start">
          <div className="goai-flow-node-icon"><PhoneIncoming size={16} strokeWidth={1.5} /></div>
          <div className="goai-flow-node-content">
            <span className="goai-flow-node-label">Incoming Call</span>
            <span className="goai-flow-node-meta">Caller identified • CRM lookup</span>
          </div>
        </div>

        <Connector />

        {/* AI Agent picks up */}
        <div className="goai-flow-node goai-flow-node-ai">
          <div className="goai-flow-node-icon goai-flow-icon-ai"><Bot size={16} strokeWidth={1.5} /></div>
          <div className="goai-flow-node-content">
            <span className="goai-flow-node-label">AI Agent Answers</span>
            <span className="goai-flow-node-meta">Natural language • Intent detected</span>
          </div>
        </div>

        <Connector />

        {/* Parallel lookups label */}
        <div className="goai-flow-parallel-label">
          <Zap size={10} strokeWidth={2} />
          <span>Parallel lookup</span>
        </div>

        {/* Branch: External API + Knowledge Base */}
        <div className="goai-flow-branches goai-flow-branches-two">
          <div className="goai-flow-branch-path">
            <div className="goai-flow-branch-line" />
            <div className="goai-flow-node goai-flow-node-small">
              <div className="goai-flow-node-icon goai-flow-icon-api"><Globe size={14} strokeWidth={1.5} /></div>
              <div className="goai-flow-node-content">
                <span className="goai-flow-node-label">External API</span>
                <span className="goai-flow-node-meta">Order status • Billing</span>
              </div>
            </div>
          </div>
          <div className="goai-flow-branch-path">
            <div className="goai-flow-branch-line" />
            <div className="goai-flow-node goai-flow-node-small">
              <div className="goai-flow-node-icon goai-flow-icon-kb"><BookOpen size={14} strokeWidth={1.5} /></div>
              <div className="goai-flow-node-content">
                <span className="goai-flow-node-label">Knowledge Base</span>
                <span className="goai-flow-node-meta">Policies • FAQs • Docs</span>
              </div>
            </div>
          </div>
        </div>

        <Connector />

        {/* AI processes & responds */}
        <div className="goai-flow-node goai-flow-node-ai">
          <div className="goai-flow-node-icon goai-flow-icon-ai"><Bot size={16} strokeWidth={1.5} /></div>
          <div className="goai-flow-node-content">
            <span className="goai-flow-node-label">AI Resolves</span>
            <span className="goai-flow-node-meta">Generates answer • Takes action</span>
          </div>
        </div>

        {/* Outcome branches */}
        <div className="goai-flow-branches goai-flow-branches-two goai-flow-branches-bottom">
          <div className="goai-flow-branch-path">
            <div className="goai-flow-branch-line goai-flow-branch-line-green" />
            <div className="goai-flow-node goai-flow-node-small goai-flow-node-end">
              <div className="goai-flow-node-icon goai-flow-icon-end"><CheckCircle size={14} strokeWidth={1.5} /></div>
              <div className="goai-flow-node-content">
                <span className="goai-flow-node-label">Resolved</span>
                <span className="goai-flow-node-meta">68% of calls</span>
              </div>
            </div>
          </div>
          <div className="goai-flow-branch-path">
            <div className="goai-flow-branch-line" />
            <div className="goai-flow-node goai-flow-node-small goai-flow-node-escalate">
              <div className="goai-flow-node-icon goai-flow-icon-escalate"><Headphones size={14} strokeWidth={1.5} /></div>
              <div className="goai-flow-node-content">
                <span className="goai-flow-node-label">Escalate to Agent</span>
                <span className="goai-flow-node-meta">Full context passed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoAIDashboardPreview;
