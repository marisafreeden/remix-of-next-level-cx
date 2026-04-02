import { useState, useEffect } from "react";
import { Phone, Mic, Shuffle, Grid3X3, Volume2 } from "lucide-react";
import ccAgentDialer from "@/assets/cc-agent-dialer.jpg";

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

const DialerPreview = () => {
  const timer = useAnimatedTimer(92);

  return (
    <div className="dialer-wrapper">
      {/* Background agent image */}
      <div className="dialer-agent-bg">
        <img src={ccAgentDialer} alt="" className="dialer-agent-img" />
        <div className="dialer-agent-overlay" />
      </div>

      {/* Glass dialer card */}
      <div className="dialer-preview">
        {/* Top bar */}
        <div className="dialer-topbar">
          <div className="dialer-timer">{timer}</div>
          <span className="dialer-status-badge">talking</span>
          <div className="dialer-topbar-icons">
            <Grid3X3 size={15} strokeWidth={1.5} />
            <Phone size={15} strokeWidth={1.5} />
            <Shuffle size={15} strokeWidth={1.5} />
            <Mic size={15} strokeWidth={1.5} />
            <Volume2 size={15} strokeWidth={1.5} />
          </div>
        </div>

        {/* Contact fields */}
        <div className="dialer-fields">
          <div className="dialer-field">
            <label>Contact Name</label>
            <div className="dialer-field-input">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Susan Smith</span>
            </div>
          </div>
          <div className="dialer-field">
            <label>Phone</label>
            <div className="dialer-field-input">
              <Phone size={14} strokeWidth={1.5} />
              <span>975234567</span>
            </div>
          </div>
          <div className="dialer-field">
            <label>Email</label>
            <div className="dialer-field-input">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>susan.smith@email.com</span>
            </div>
          </div>
        </div>

        {/* Outcome & Recording */}
        <div className="dialer-meta">
          <div className="dialer-meta-row">
            <span className="dialer-meta-label">Outcome</span>
            <span className="dialer-meta-value">Sale closed</span>
          </div>
          <div className="dialer-meta-row">
            <span className="dialer-meta-label">Recording</span>
            <div className="dialer-recording-bar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <div className="dialer-recording-track">
                <div className="dialer-recording-progress" />
              </div>
              <span className="dialer-recording-time">0:02</span>
              <Volume2 size={12} strokeWidth={1.5} />
            </div>
          </div>
          <div className="dialer-meta-row">
            <span className="dialer-meta-label">Comments</span>
            <span className="dialer-meta-value dialer-meta-truncated">Customer needed help to purchase on website...</span>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="dialer-bottom-bar">
          <div className="dialer-bottom-item">
            <span className="dialer-bottom-key">Call Type:</span>
            <span>Manual</span>
          </div>
          <div className="dialer-bottom-item">
            <span className="dialer-bottom-key">Last Call Type:</span>
            <span>Manual</span>
          </div>
          <div className="dialer-bottom-item">
            <span className="dialer-bottom-key">Origin:</span>
            <span>Manual</span>
          </div>
          <div className="dialer-bottom-item">
            <span className="dialer-bottom-key">Last Call Date:</span>
            <span>12.13.25</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialerPreview;
