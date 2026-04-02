import { Mail, Phone, MessageCircle, Globe, Share2 } from "lucide-react";
import ccOmnichannelImg from "@/assets/cc-omnichannel-diagram.png";

const icons = [
  { Icon: Phone, label: "Voice", top: "-28px", left: "50%", tx: "-50%" },
  { Icon: Mail, label: "Email", top: "15%", left: "calc(100% + 8px)", tx: "0" },
  { Icon: MessageCircle, label: "Chat", top: "65%", left: "calc(100% + 8px)", tx: "0" },
  { Icon: Globe, label: "Web", top: "65%", left: "-8px", tx: "-100%" },
  { Icon: Share2, label: "Social", top: "15%", left: "-8px", tx: "-100%" },
];

const OmnichannelPreview = () => (
  <div className="omni-preview-wrap">
    <img
      src={ccOmnichannelImg}
      alt="Omnichannel contact center agent"
      className="omni-preview-img"
    />
    {icons.map(({ Icon, label, top, left, tx }) => (
      <div
        key={label}
        className="omni-icon-node"
        style={{ top, left, transform: `translateX(${tx})` }}
      >
        <Icon size={24} strokeWidth={1.5} />
      </div>
    ))}
  </div>
);

export default OmnichannelPreview;
