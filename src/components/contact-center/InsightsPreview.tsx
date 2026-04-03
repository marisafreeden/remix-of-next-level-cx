import { TrendingUp, ArrowUpRight, ArrowDownRight, BarChart3, Users, Clock } from "lucide-react";

const InsightsPreview = () => {
  return (
    <div className="goai-flow">
      <div className="goai-flow-header">
        <BarChart3 size={14} strokeWidth={1.5} style={{ color: '#43B5BF' }} />
        <span className="goai-flow-header-title">Live Analytics</span>
      </div>

      <div className="goai-insights-body">
        {/* KPI row */}
        <div className="goai-insights-kpis">
          <div className="goai-insights-kpi">
            <span className="goai-insights-kpi-label">Answer Rate</span>
            <span className="goai-insights-kpi-value">89%</span>
            <span className="goai-insights-kpi-trend goai-insights-trend-up">
              <ArrowUpRight size={10} /> 4%
            </span>
          </div>
          <div className="goai-insights-kpi">
            <span className="goai-insights-kpi-label">Avg Handle</span>
            <span className="goai-insights-kpi-value">5:26</span>
            <span className="goai-insights-kpi-trend goai-insights-trend-down">
              <ArrowDownRight size={10} /> 12s
            </span>
          </div>
          <div className="goai-insights-kpi">
            <span className="goai-insights-kpi-label">CSAT</span>
            <span className="goai-insights-kpi-value">4.3</span>
            <span className="goai-insights-kpi-trend goai-insights-trend-up">
              <ArrowUpRight size={10} /> 0.2
            </span>
          </div>
        </div>

        {/* Mini chart area */}
        <div className="goai-insights-chart-card">
          <div className="goai-insights-chart-header">
            <TrendingUp size={12} strokeWidth={1.5} />
            <span>Call Volume — Today</span>
          </div>
          <div className="goai-insights-chart">
            {[35, 42, 58, 72, 65, 88, 95, 82, 70, 60, 48, 55].map((h, i) => (
              <div key={i} className="goai-insights-bar-wrap">
                <div
                  className="goai-insights-bar"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="goai-insights-chart-labels">
            <span>8am</span><span>10am</span><span>12pm</span><span>2pm</span><span>4pm</span><span>6pm</span>
          </div>
        </div>

        {/* Top queues */}
        <div className="goai-insights-queues">
          <div className="goai-insights-chart-header">
            <Users size={12} strokeWidth={1.5} />
            <span>Top Queues</span>
          </div>
          {[
            { name: "Billing", pct: 33, count: "612" },
            { name: "Tech Support", pct: 26, count: "489" },
            { name: "New Accounts", pct: 16, count: "298" },
          ].map((q) => (
            <div key={q.name} className="goai-insights-queue-row">
              <span className="goai-insights-queue-name">{q.name}</span>
              <div className="goai-insights-queue-bar-wrap">
                <div className="goai-insights-queue-bar" style={{ width: `${q.pct * 3}%` }} />
              </div>
              <span className="goai-insights-queue-count">{q.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsPreview;
