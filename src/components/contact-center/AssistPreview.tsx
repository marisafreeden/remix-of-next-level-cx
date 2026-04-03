import { Phone, Sparkles, X } from "lucide-react";

const AssistPreview = () => {
  return (
    <div className="goai-flow">
      <div className="goai-flow-header">
        <Sparkles size={14} strokeWidth={1.5} style={{ color: '#43B5BF' }} />
        <span className="goai-flow-header-title">Conversation Insights</span>
        <X size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
      </div>

      <div className="goai-assist-body">
        {/* Transfer card */}
        <div className="goai-assist-transfer">
          <div className="goai-assist-transfer-icon">
            <Phone size={14} strokeWidth={1.5} />
          </div>
          <div className="goai-assist-transfer-text">
            <span className="goai-assist-transfer-title">Call transferred from GoEngage</span>
            <span className="goai-assist-transfer-time">10:34 AM</span>
          </div>
        </div>

        {/* Handoff label */}
        <div className="goai-assist-handoff-row">
          <span className="goai-assist-handoff-label">Call handoff</span>
          <span className="goai-assist-ai-badge">AI-generated</span>
        </div>

        {/* Summary */}
        <p className="goai-assist-summary">
          The customer reported a duplicate subscription charge. The AI verified the account and found two charges in the same billing cycle, with no automatic refund triggered. The case requires human review to confirm and issue a refund if applicable.
        </p>

        {/* Context cards */}
        <div className="goai-assist-context-grid">
          <div className="goai-assist-context-card">
            <span className="goai-assist-context-label">Sentiment</span>
            <span className="goai-assist-context-value goai-assist-sentiment-neg">Frustrated</span>
          </div>
          <div className="goai-assist-context-card">
            <span className="goai-assist-context-label">Priority</span>
            <span className="goai-assist-context-value goai-assist-priority-high">High</span>
          </div>
          <div className="goai-assist-context-card">
            <span className="goai-assist-context-label">Duration</span>
            <span className="goai-assist-context-value">3m 42s</span>
          </div>
          <div className="goai-assist-context-card">
            <span className="goai-assist-context-label">Topic</span>
            <span className="goai-assist-context-value">Billing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistPreview;
