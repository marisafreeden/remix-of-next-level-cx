import { Phone, PhoneIncoming, Bot, GitBranch, Headphones, CheckCircle, ArrowRight } from "lucide-react";

const GoAIDashboardPreview = () => {
  return (
    <div className="goai-flow">
      {/* Flow header */}
      <div className="goai-flow-header">
        <div className="goai-flow-dot goai-flow-dot-green" />
        <span className="goai-flow-header-title">Call Flow Builder</span>
        <span className="goai-flow-header-badge">Live</span>
      </div>

      {/* Flow nodes */}
      <div className="goai-flow-canvas">
        {/* Incoming call node */}
        <div className="goai-flow-node goai-flow-node-start">
          <div className="goai-flow-node-icon"><PhoneIncoming size={16} strokeWidth={1.5} /></div>
          <div className="goai-flow-node-content">
            <span className="goai-flow-node-label">Incoming Call</span>
            <span className="goai-flow-node-meta">+1 (800) 555-0199</span>
          </div>
        </div>

        <div className="goai-flow-connector">
          <div className="goai-flow-connector-line" />
          <ArrowRight size={12} className="goai-flow-connector-arrow" />
        </div>

        {/* AI Greeting node */}
        <div className="goai-flow-node goai-flow-node-ai">
          <div className="goai-flow-node-icon goai-flow-icon-ai"><Bot size={16} strokeWidth={1.5} /></div>
          <div className="goai-flow-node-content">
            <span className="goai-flow-node-label">AI Greeting</span>
            <span className="goai-flow-node-meta">Sentiment analysis</span>
          </div>
        </div>

        <div className="goai-flow-connector">
          <div className="goai-flow-connector-line" />
          <ArrowRight size={12} className="goai-flow-connector-arrow" />
        </div>

        {/* Branch node */}
        <div className="goai-flow-node goai-flow-node-branch">
          <div className="goai-flow-node-icon goai-flow-icon-branch"><GitBranch size={16} strokeWidth={1.5} /></div>
          <div className="goai-flow-node-content">
            <span className="goai-flow-node-label">Smart Route</span>
            <span className="goai-flow-node-meta">Intent detection</span>
          </div>
        </div>

        {/* Branch paths */}
        <div className="goai-flow-branches">
          <div className="goai-flow-branch-path">
            <div className="goai-flow-branch-line" />
            <div className="goai-flow-node goai-flow-node-small">
              <div className="goai-flow-node-icon goai-flow-icon-ai"><Bot size={14} strokeWidth={1.5} /></div>
              <div className="goai-flow-node-content">
                <span className="goai-flow-node-label">Self-Service</span>
                <span className="goai-flow-node-meta">68% resolved</span>
              </div>
            </div>
          </div>
          <div className="goai-flow-branch-path">
            <div className="goai-flow-branch-line" />
            <div className="goai-flow-node goai-flow-node-small">
              <div className="goai-flow-node-icon"><Headphones size={14} strokeWidth={1.5} /></div>
              <div className="goai-flow-node-content">
                <span className="goai-flow-node-label">Live Agent</span>
                <span className="goai-flow-node-meta">Avg 2m 14s</span>
              </div>
            </div>
          </div>
          <div className="goai-flow-branch-path">
            <div className="goai-flow-branch-line" />
            <div className="goai-flow-node goai-flow-node-small">
              <div className="goai-flow-node-icon"><Phone size={14} strokeWidth={1.5} /></div>
              <div className="goai-flow-node-content">
                <span className="goai-flow-node-label">Callback</span>
                <span className="goai-flow-node-meta">Scheduled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resolution */}
        <div className="goai-flow-connector goai-flow-connector-end">
          <div className="goai-flow-connector-line" />
          <ArrowRight size={12} className="goai-flow-connector-arrow" />
        </div>

        <div className="goai-flow-node goai-flow-node-end">
          <div className="goai-flow-node-icon goai-flow-icon-end"><CheckCircle size={16} strokeWidth={1.5} /></div>
          <div className="goai-flow-node-content">
            <span className="goai-flow-node-label">Resolved</span>
            <span className="goai-flow-node-meta">CSAT 94.2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoAIDashboardPreview;
