import { Phone, Voicemail, Play, SkipBack, SkipForward, Shuffle, Copy } from "lucide-react";
import ivrPersonImg from "@/assets/cc-ivr-person.png";

const IVRPreview = () => (
  <div className="ivr-wrapper">
    {/* Person image */}
    <div className="ivr-person-frame">
      <img src={ivrPersonImg} alt="Customer on phone" className="ivr-person-img" />
    </div>

    {/* Customer Care card - top right */}
    <div className="ivr-card ivr-card-care">
      <div className="ivr-care-header">
        <div className="ivr-care-icon"><Phone size={14} strokeWidth={2} /></div>
        <span className="ivr-care-title">Customer Care</span>
        <div className="ivr-care-vm"><Voicemail size={16} strokeWidth={1.5} /></div>
      </div>
      <div className="ivr-care-number">1800 - 642 - 1456</div>
      <div className="ivr-care-waveform">
        <span className="ivr-wf-time">00:00</span>
        <div className="ivr-wf-bars">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="ivr-wf-bar" style={{ height: `${8 + Math.sin(i * 0.8) * 10 + Math.random() * 6}px` }} />
          ))}
        </div>
        <span className="ivr-wf-time">01:34</span>
      </div>
    </div>

    {/* Press 2 for Support - left */}
    <div className="ivr-card ivr-card-route ivr-route-support">
      <div className="ivr-route-avatar">
        <div className="ivr-avatar-circle ivr-avatar-teal">2</div>
      </div>
      <span className="ivr-route-label">Press 2 for Support</span>
    </div>


    {/* Audio player bar */}
    <div className="ivr-player-bar">
      <div className="ivr-player-track">
        <div className="ivr-player-progress" />
        <div className="ivr-player-dot" />
      </div>
      <div className="ivr-player-controls">
        <Shuffle size={16} strokeWidth={1.5} />
        <SkipBack size={16} strokeWidth={1.5} />
        <div className="ivr-play-btn"><Play size={18} strokeWidth={2} fill="currentColor" /></div>
        <SkipForward size={16} strokeWidth={1.5} />
        <Copy size={16} strokeWidth={1.5} />
      </div>
    </div>
  </div>
);

export default IVRPreview;
