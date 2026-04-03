import { TrendingUp, Users, MessageSquare, Phone, Bot, ArrowUpRight, ArrowDownRight } from "lucide-react";

const GoAIDashboardPreview = () => {
  return (
    <div className="goai-dash">
      {/* Top stats row */}
      <div className="goai-dash-stats">
        <div className="goai-dash-stat-card">
          <div className="goai-dash-stat-header">
            <Phone size={14} strokeWidth={1.5} />
            <span>Active Calls</span>
          </div>
          <div className="goai-dash-stat-value">247</div>
          <div className="goai-dash-stat-trend goai-dash-trend-up">
            <ArrowUpRight size={12} /> 12%
          </div>
        </div>
        <div className="goai-dash-stat-card">
          <div className="goai-dash-stat-header">
            <Bot size={14} strokeWidth={1.5} />
            <span>AI Resolved</span>
          </div>
          <div className="goai-dash-stat-value">68%</div>
          <div className="goai-dash-stat-trend goai-dash-trend-up">
            <ArrowUpRight size={12} /> 8%
          </div>
        </div>
        <div className="goai-dash-stat-card">
          <div className="goai-dash-stat-header">
            <Users size={14} strokeWidth={1.5} />
            <span>CSAT</span>
          </div>
          <div className="goai-dash-stat-value">94.2</div>
          <div className="goai-dash-stat-trend goai-dash-trend-up">
            <ArrowUpRight size={12} /> 3%
          </div>
        </div>
      </div>

      {/* Sentiment bar */}
      <div className="goai-dash-card">
        <div className="goai-dash-card-title">
          <MessageSquare size={14} strokeWidth={1.5} />
          Live Sentiment
        </div>
        <div className="goai-dash-sentiment-bar">
          <div className="goai-dash-sent-pos" style={{ width: "62%" }} />
          <div className="goai-dash-sent-neu" style={{ width: "26%" }} />
          <div className="goai-dash-sent-neg" style={{ width: "12%" }} />
        </div>
        <div className="goai-dash-sentiment-labels">
          <span className="goai-dash-sent-label"><span className="goai-dot goai-dot-pos" />Positive 62%</span>
          <span className="goai-dash-sent-label"><span className="goai-dot goai-dot-neu" />Neutral 26%</span>
          <span className="goai-dash-sent-label"><span className="goai-dot goai-dot-neg" />Negative 12%</span>
        </div>
      </div>

      {/* Agent activity */}
      <div className="goai-dash-card">
        <div className="goai-dash-card-title">
          <TrendingUp size={14} strokeWidth={1.5} />
          Agent Performance
        </div>
        <div className="goai-dash-agents">
          {[
            { name: "Sarah M.", score: 96, status: "On Call" },
            { name: "James R.", score: 91, status: "Wrap-up" },
            { name: "Lisa K.", score: 88, status: "Available" },
          ].map((agent) => (
            <div key={agent.name} className="goai-dash-agent-row">
              <div className="goai-dash-agent-avatar">{agent.name[0]}</div>
              <span className="goai-dash-agent-name">{agent.name}</span>
              <span className="goai-dash-agent-status">{agent.status}</span>
              <div className="goai-dash-agent-bar-wrap">
                <div className="goai-dash-agent-bar" style={{ width: `${agent.score}%` }} />
              </div>
              <span className="goai-dash-agent-score">{agent.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoAIDashboardPreview;
