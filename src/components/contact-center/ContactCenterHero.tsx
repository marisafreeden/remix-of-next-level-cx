import { useState, useEffect } from "react";
import EditableText from "@/components/EditableText";
import { BarChart3, Clock, Headphones, MessageSquare, Phone, Shield, Timer, Users } from "lucide-react";

interface ContactCenterHeroProps {
  title1: string;
  title2: string;
  subtitle: string;
  requestDemoLabel: string;
  onSave: (copyKey: string, content: string) => void | Promise<void>;
}

const useAnimatedTimer = (startSeconds: number, maxSeconds: number = 180) => {
  const [seconds, setSeconds] = useState(startSeconds);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => (s + 1) >= maxSeconds ? startSeconds : s + 1), 1000);
    return () => clearInterval(id);
  }, [startSeconds, maxSeconds]);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

const waitTimes = ["2:34", "2:18", "2:45", "3:01", "2:12", "2:52"];
const useAnimatedWait = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % waitTimes.length), 3000);
    return () => clearInterval(id);
  }, []);
  return waitTimes[idx];
};

const ContactCenterHero = ({
  title1,
  title2,
  subtitle,
  requestDemoLabel,
  onSave,
}: ContactCenterHeroProps) => {
  const timer = useAnimatedTimer(92);
  const billingWait = useAnimatedWait();

  return (
    <section className="cc-platform-section cc-hero-platform-combined">
      <div className="cc-hero-blur-extra1" />
      <div className="cc-hero-blur-extra2" />
      <div className="cc-hero-blur-extra3" />
      <div className="cc-hero-shell">
        <div className="cc-hero-copy">
          <h1 className="cc-hero-heading">
            <span className="cc-hero-heading-line">
              <EditableText
                value={title1}
                copyKey="hero_title1"
                onSave={onSave}
                className="cc-hero-heading-editable"
              />
            </span>
            <span className="cc-hero-heading-accent">
              <EditableText
                value={title2}
                copyKey="hero_title2"
                onSave={onSave}
                className="cc-hero-heading-editable"
              />
            </span>
          </h1>

          <p className="cc-hero-desc text-primary">{subtitle}</p>

          <div className="cc-hero-actions">
            <button type="button" className="btn-hero-a">
              {requestDemoLabel} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="cc-hero-stage">
          <div className="cc-glass-top-row">
            <div className="cc-glass-card cc-glass-metric">
              <div className="cc-glass-card-header">
                <Clock size={14} strokeWidth={1.5} />
                <span>Avg Wait Time</span>
                <span className="cc-glass-badge">Live</span>
              </div>
              <div className="cc-glass-big-number">1:24</div>
              <div className="cc-glass-sub-label">across all queues</div>
              <div className="cc-glass-metric-trend cc-glass-green">↓ 18% vs last week</div>
              <div className="cc-glass-metric-bar">
                <div className="cc-glass-metric-bar-fill cc-glass-metric-bar-teal" style={{ width: '72%' }} />
              </div>
            </div>
            <div className="cc-glass-card cc-glass-metric">
              <div className="cc-glass-card-header">
                <Timer size={14} strokeWidth={1.5} />
                <span>Avg Hold Time</span>
                <span className="cc-glass-badge cc-glass-badge-warning">Monitoring</span>
              </div>
              <div className="cc-glass-big-number">0:42</div>
              <div className="cc-glass-sub-label">per interaction</div>
              <div className="cc-glass-metric-trend cc-glass-green">↓ 12% vs last week</div>
              <div className="cc-glass-metric-bar">
                <div className="cc-glass-metric-bar-fill cc-glass-metric-bar-purple" style={{ width: '35%' }} />
              </div>
            </div>
            <div className="cc-glass-card cc-glass-metric">
              <div className="cc-glass-card-header">
                <Shield size={14} strokeWidth={1.5} />
                <span>SLA %</span>
                <span className="cc-glass-badge cc-glass-badge-success">On Target</span>
              </div>
              <div className="cc-glass-big-number">94.2<span style={{ fontSize: '28px', opacity: 0.6 }}>%</span></div>
              <div className="cc-glass-sub-label">calls answered within 20s</div>
              <div className="cc-glass-metric-tags">
                <span className="cc-glass-tag cc-glass-tag-teal">Voice 96%</span>
                <span className="cc-glass-tag cc-glass-tag-purple">Chat 91%</span>
                <span className="cc-glass-tag cc-glass-tag-blue">Email 88%</span>
              </div>
              <div className="cc-glass-metric-trend cc-glass-green">↑ 3.1% vs last month</div>
            </div>
          </div>
          <div className="cc-glass-widgets">
            <div className="cc-glass-card cc-glass-tall">
              <div className="cc-glass-card-header">
                <Phone size={14} strokeWidth={1.5} />
                <span>Total Calls</span>
                <span className="cc-glass-badge">Live</span>
              </div>
              <div className="cc-glass-big-number">1,847</div>
              <div className="cc-glass-sub-label">Today's volume</div>
              <div className="cc-glass-mini-stats">
                <div className="cc-glass-mini-stat">
                  <span className="cc-glass-mini-val cc-glass-green">1,643</span>
                  <span className="cc-glass-mini-label">Answered</span>
                </div>
                <div className="cc-glass-mini-stat">
                  <span className="cc-glass-mini-val cc-glass-red">128</span>
                  <span className="cc-glass-mini-label">Abandoned</span>
                </div>
                <div className="cc-glass-mini-stat">
                  <span className="cc-glass-mini-val">76</span>
                  <span className="cc-glass-mini-label">In Queue</span>
                </div>
              </div>
              <div className="cc-glass-bar-chart">
                <div className="cc-glass-bar" style={{ height: "50%" }} />
                <div className="cc-glass-bar" style={{ height: "60%" }} />
                <div className="cc-glass-bar" style={{ height: "80%" }} />
                <div className="cc-glass-bar" style={{ height: "45%" }} />
                <div className="cc-glass-bar" style={{ height: "90%" }} />
                <div className="cc-glass-bar" style={{ height: "70%" }} />
                <div className="cc-glass-bar" style={{ height: "55%" }} />
                <div className="cc-glass-bar" style={{ height: "85%" }} />
                <div className="cc-glass-bar" style={{ height: "65%" }} />
                <div className="cc-glass-bar" style={{ height: "75%" }} />
              </div>
            </div>

            <div className="cc-glass-card">
              <div className="cc-glass-card-header">
                <BarChart3 size={14} strokeWidth={1.5} />
                <span>CSAT Score</span>
              </div>
              <div className="cc-glass-csat-ring">
                <svg viewBox="0 0 100 100" className="cc-glass-ring-svg">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="url(#ccHeroCsatGrad)" strokeWidth="7" strokeDasharray="211 264" strokeLinecap="round" transform="rotate(-90 50 50)" className="cc-csat-arc" />
                  <defs>
                    <linearGradient id="ccHeroCsatGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="hsl(185 49% 51%)" />
                      <stop offset="100%" stopColor="hsl(261 61% 54%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="cc-glass-ring-text">4.3<span>/5</span></div>
              </div>
            </div>

            <div className="cc-glass-card">
              <div className="cc-glass-card-header">
                <Phone size={14} strokeWidth={1.5} />
                <span>Active Call</span>
                <span className="cc-glass-badge cc-glass-badge-success cc-pulse-badge">Talking</span>
              </div>
              <div className="cc-glass-dialer">
                <div className="cc-glass-dialer-timer">{timer}</div>
                <div className="cc-glass-dialer-info">
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Name</span><span>Susan Smith</span></div>
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Phone</span><span>975 234 567</span></div>
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Type</span><span>Predictive</span></div>
                </div>
                <div className="cc-glass-dialer-modes">
                  <span className="cc-glass-dialer-mode">Manual</span>
                  <span className="cc-glass-dialer-mode">Power</span>
                  <span className="cc-glass-dialer-mode cc-glass-dialer-mode-active">Predictive</span>
                </div>
              </div>
            </div>

            <div className="cc-glass-card">
              <div className="cc-glass-card-header">
                <MessageSquare size={14} strokeWidth={1.5} />
                <span>Chats (Monthly)</span>
              </div>
              <div className="cc-glass-queue-table">
                <div className="cc-glass-queue-header">
                  <span>Month</span><span>Received</span><span>Answered</span><span>Rate</span>
                </div>
                <div className="cc-glass-queue-row"><span>May</span><span>2,029</span><span className="cc-glass-green">893</span><span>44%</span></div>
                <div className="cc-glass-queue-row"><span>Apr</span><span>1,903</span><span>877</span><span>46%</span></div>
                <div className="cc-glass-queue-row"><span>Mar</span><span>1,856</span><span className="cc-glass-green">812</span><span>44%</span></div>
                <div className="cc-glass-queue-row"><span>Feb</span><span>1,721</span><span>745</span><span>43%</span></div>
                <div className="cc-glass-queue-row"><span>Jan</span><span>1,803</span><span>631</span><span>35%</span></div>
              </div>
            </div>

            <div className="cc-glass-card">
              <div className="cc-glass-card-header">
                <Users size={14} strokeWidth={1.5} />
                <span>Agent Status</span>
              </div>
              <div className="cc-glass-presence-list">
                <div className="cc-glass-presence-row">
                  <span className="cc-glass-dot cc-dot-green" />
                  <span>Available</span>
                  <span className="cc-glass-presence-count">24</span>
                </div>
                <div className="cc-glass-presence-row">
                  <span className="cc-glass-dot cc-dot-yellow" />
                  <span>On Call</span>
                  <span className="cc-glass-presence-count">18</span>
                </div>
                <div className="cc-glass-presence-row">
                  <span className="cc-glass-dot cc-dot-red" />
                  <span>Away</span>
                  <span className="cc-glass-presence-count">6</span>
                </div>
                <div className="cc-glass-presence-row">
                  <span className="cc-glass-dot cc-dot-gray" />
                  <span>Offline</span>
                  <span className="cc-glass-presence-count">3</span>
                </div>
              </div>
            </div>

            <div className="cc-glass-card cc-glass-wide">
              <div className="cc-glass-card-header">
                <Headphones size={14} strokeWidth={1.5} />
                <span>Queue Status</span>
                <span className="cc-glass-badge">All Queues</span>
              </div>
              <div className="cc-glass-queue-table">
                <div className="cc-glass-queue-header">
                  <span>Queue</span><span>Agents</span><span>Waiting</span><span>Avg Wait</span>
                </div>
                <div className="cc-glass-queue-row"><span>Billing</span><span>12</span><span className="cc-glass-red">8</span><span className="cc-animated-wait">{billingWait}</span></div>
                <div className="cc-glass-queue-row"><span>Support</span><span>8</span><span>3</span><span>1:12</span></div>
                <div className="cc-glass-queue-row"><span>Sales</span><span>6</span><span className="cc-glass-green">1</span><span>0:45</span></div>
                <div className="cc-glass-queue-row"><span>Retention</span><span>5</span><span>2</span><span>1:38</span></div>
                <div className="cc-glass-queue-row"><span>Technical</span><span>4</span><span className="cc-glass-red">4</span><span>2:15</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCenterHero;