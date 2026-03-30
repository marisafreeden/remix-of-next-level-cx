import { useEffect, useState, useCallback, useRef } from "react";
import bIcon from "@/assets/b-icon.png";
import supervisorAvatar from "@/assets/supervisor-avatar.jpg";

interface Message {
  id: number;
  from: "user" | "ai";
  text: string;
  delay: number;
}

const conversation: Message[] = [
  { id: 1, from: "user", text: "How has today been going so far?", delay: 0 },
  { id: 2, from: "ai", text: `Here's a summary of today's call activity so far:\n\n• **Total Calls:** 1,847\n• **Answered:** 1,643\n• **Abandoned:** 128\n• **Answer Rate:** 89%\n• **Avg Handle Time:** 5 min 26 sec\n• **CSAT (live):** 4.3/5\n\nThe Billing queue saw a brief spike around 11am — handle times jumped to 7 minutes before settling back down.`, delay: 1400 },
  { id: 3, from: "user", text: "Where is most of today's call volume coming from?", delay: 4800 },
  { id: 4, from: "ai", text: `Top queues by volume today:\n\n1. **Billing & Payments** — 612 calls (33%)\n2. **Technical Support** — 489 calls (26%)\n3. **New Accounts** — 298 calls (16%)\n4. **Retention** — 241 calls (13%)\n5. **General Inquiry** — 207 calls (12%)\n\nBilling is running about 18% above its daily average.`, delay: 6400 },
  { id: 5, from: "user", text: "What's driving low CSAT in the billing queue?", delay: 9000 },
  { id: 6, from: "ai", text: `Three main drivers of low CSAT in Billing:\n\n1. **Long wait times** — avg 4:12 vs 2:30 target\n2. **First call resolution** — only 61% (target: 80%)\n3. **Agent knowledge gaps** — 23% of calls escalated to Tier 2\n\nRecommendation: Route overflow to trained backup agents during peak hours.`, delay: 10800 },
];

const LOOP_PAUSE = 3000;
const TOTAL_DURATION = 13500;

const DashboardPreview = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const startCycle = useCallback(() => {
    setVisibleCount(0);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    conversation.forEach((msg, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), msg.delay + 600));
    });
    timers.push(setTimeout(startCycle, TOTAL_DURATION + LOOP_PAUSE));
    return () => timers.forEach(clearTimeout);
  }, [animKey, startCycle]);

  // Auto-scroll to bottom smoothly
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visibleCount]);

  const renderText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} style={{ color: "#0a0f18" }}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="dash-preview">
      <div className="dash-window">
        <div className="dash-topbar">
          <div className="dash-topbar-left">
            <img src={bIcon} alt="" className="dash-ai-icon" />
            <div>
              <div className="dash-ai-title">AI ANALYST</div>
              <div className="dash-ai-sub">AI-Powered Analytics</div>
            </div>
          </div>
          <div className="dash-topbar-right">
            <div className="dash-search-bar">
              <span className="dash-search-icon">⌕</span>
              <span>Search dashboards, reports...</span>
            </div>
          </div>
        </div>

        <div className="dash-chat-body" ref={scrollRef} key={animKey}>
          <div className="dash-messages">
            {conversation.slice(0, visibleCount).map((msg) => (
              <div
                key={msg.id}
                className={`dash-msg dash-msg-${msg.from} dash-msg-animate`}
              >
                {msg.from === "ai" && (
                  <div className="dash-msg-ai-avatar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
                    </svg>
                  </div>
                )}
                {msg.from === "user" && (
                  <div className="dash-msg-user-avatar">
                    <img src={supervisorAvatar} alt="Supervisor" className="dash-msg-user-avatar-img" />
                  </div>
                )}
                <div className={`dash-msg-bubble dash-msg-bubble-${msg.from}`}>
                  {msg.text.split("\n").map((line, i) => (
                    <div key={i} className={line === "" ? "dash-msg-spacer" : "dash-msg-line"}>
                      {renderText(line)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {visibleCount > 0 && visibleCount < conversation.length && (
              <div className={`dash-typing ${conversation[visibleCount]?.from === "user" ? "dash-typing-user" : ""}`}>
                <span /><span /><span />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
