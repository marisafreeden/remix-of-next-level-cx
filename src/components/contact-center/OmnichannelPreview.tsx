import { Mail, Phone, MessageCircle, Globe, Share2 } from "lucide-react";
import ccOmnichannelImg from "@/assets/cc-omnichannel-diagram.png";

const icons = [
  { Icon: Phone, label: "Voice" },
  { Icon: Mail, label: "Email" },
  { Icon: MessageCircle, label: "Chat" },
  { Icon: Globe, label: "Web" },
  { Icon: Share2, label: "Social" },
];

const OmnichannelPreview = () => (
  <div className="omni-preview-wrap">
    <div className="omni-icons-stack">
      {icons.map(({ Icon, label }) => (
        <div key={label} className="omni-icon-node">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      ))}
    </div>
    <img
      src={ccOmnichannelImg}
      alt="Omnichannel contact center agent"
      className="omni-preview-img"
    />
  </div>
);

export default OmnichannelPreview;
