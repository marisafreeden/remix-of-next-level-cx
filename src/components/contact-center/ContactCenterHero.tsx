import { useState, useEffect } from "react";
import EditableText from "@/components/EditableText";
import { BarChart3, Headphones, MessageSquare, Phone, Users } from "lucide-react";

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
                <div className="cc-glass-bar" style={{ height: "60%" }} />
                <div className="cc-glass-bar" style={{ height: "80%" }} />
                <div className="cc-glass-bar" style={{ height: "45%" }} />
                <div className="cc-glass-bar" style={{ height: "90%" }} />
                <div className="cc-glass-bar" style={{ height: "70%" }} />
                <div className="cc-glass-bar" style={{ height: "55%" }} />
                <div className="cc-glass-bar" style={{ height: "85%" }} />
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

            <div className="cc-glass-card cc-glass-dialer-card">
              <div className="cc-dialer-toolbar">
                <div className="cc-dialer-toolbar-left">
                  <span className="cc-dialer-timer-badge">{timer}</span>
                  <span className="cc-glass-badge cc-glass-badge-success cc-pulse-badge">Talking</span>
                </div>
                <div className="cc-dialer-toolbar-icons">
                  <span className="cc-dialer-icon-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                  </span>
                  <span className="cc-dialer-icon-btn">
                    <Phone size={13} strokeWidth={2} />
                  </span>
                  <span className="cc-dialer-icon-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
                  </span>
                  <span className="cc-dialer-icon-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                  </span>
                  <span className="cc-dialer-icon-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  </span>
                </div>
              </div>
              <div className="cc-glass-dialer">
                <div className="cc-glass-dialer-info">
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Customer</span><span>Susan Smith</span></div>
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Phone</span><span>975 234 567</span></div>
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Email</span><span>susan.smith@email.com</span></div>
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Outcome</span><span className="cc-glass-green">Purchase</span></div>
                  <div className="cc-glass-dialer-row">
                    <span className="cc-glass-dialer-label">Recording</span>
                    <span className="cc-dialer-recording">
                      <span className="cc-dialer-rec-dot" />
                      <span>0:02</span>
                    </span>
                  </div>
                  <div className="cc-glass-dialer-row"><span className="cc-glass-dialer-label">Comments</span><span className="cc-dialer-comment">Customer wants to try for 3 months</span></div>
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
                <div className="cc-glass-queue-row"><span>Dec</span><span>1,803</span><span>631</span><span>35%</span></div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCenterHero;