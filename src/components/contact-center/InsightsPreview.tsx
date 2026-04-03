import { Sparkles } from "lucide-react";
import supervisorAvatar from "@/assets/supervisor-avatar.jpg";
import bIcon from "@/assets/b-icon.png";

const InsightsPreview = () => {
  return (
    <div className="goai-flow">
      <div className="goai-flow-header">
        <img src={bIcon} alt="" style={{ width: 18, height: 18, borderRadius: 5 }} />
        <span className="goai-flow-header-title">AI Analyst</span>
      </div>

      <div className="goai-insights-chat">
        {/* User message */}
        <div className="goai-chat-row goai-chat-row-user">
          <div className="goai-chat-bubble goai-chat-bubble-user">
            How has today been going so far?
          </div>
          <img src={supervisorAvatar} alt="" className="goai-chat-avatar" />
        </div>

        {/* AI response */}
        <div className="goai-chat-row goai-chat-row-ai">
          <div className="goai-chat-ai-icon">
            <Sparkles size={12} strokeWidth={1.5} />
          </div>
          <div className="goai-chat-bubble goai-chat-bubble-ai">
            <p>Here's a summary of today's call activity:</p>
            <p>• <strong>Total Calls:</strong> 1,847</p>
            <p>• <strong>Answered:</strong> 1,643</p>
            <p>• <strong>Abandoned:</strong> 128</p>
            <p>• <strong>Answer Rate:</strong> 89%</p>
            <p>• <strong>Avg Handle Time:</strong> 5m 26s</p>
            <p>• <strong>CSAT (live):</strong> 4.3/5</p>
            <p style={{ marginTop: 8 }}>The Billing queue saw a brief spike around 11am — handle times jumped to 7 min before settling.</p>
          </div>
        </div>

        {/* User follow-up */}
        <div className="goai-chat-row goai-chat-row-user">
          <div className="goai-chat-bubble goai-chat-bubble-user">
            Where is most volume coming from?
          </div>
          <img src={supervisorAvatar} alt="" className="goai-chat-avatar" />
        </div>

        {/* Typing indicator */}
        <div className="goai-chat-row goai-chat-row-ai">
          <div className="goai-chat-ai-icon">
            <Sparkles size={12} strokeWidth={1.5} />
          </div>
          <div className="goai-chat-typing">
            <span /><span /><span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPreview;
