import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Headphones, BarChart3, Sparkles } from "lucide-react";
import contactCenterImg from "@/assets/platform-contact-center.jpg";
import businessPhoneImg from "@/assets/platform-business-phone.jpg";
import analyticsImg from "@/assets/platform-analytics.jpg";
import goaiImg from "@/assets/platform-goai.jpg";

const PlatformSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  const platforms = [
    {
      id: "contact-center",
      label: t("platform.contact_center"),
      icon: Headphones,
      description: t("platform.contact_center_desc"),
      image: contactCenterImg,
    },
    {
      id: "business-phone",
      label: t("platform.business_phone"),
      icon: Phone,
      description: t("platform.business_phone_desc"),
      image: businessPhoneImg,
    },
    {
      id: "analytics",
      label: t("platform.analytics"),
      icon: BarChart3,
      description: t("platform.analytics_desc"),
      image: analyticsImg,
    },
    {
      id: "goai",
      label: t("platform.goai"),
      icon: Sparkles,
      description: t("platform.goai_desc"),
      image: goaiImg,
    },
  ];

  const current = platforms[active];

  return (
    <section className="platform-section">
      <div className="platform-inner">
        <p className="platform-label">{t("platform.label")}</p>
        <h2 className="platform-h2">
          {t("platform.title_line1")}<br />
          <span className="platform-h2-italic">{t("platform.title_line2")}</span>
        </h2>

        {/* Desktop: tab interface */}
        <div className="platform-grid platform-desktop">
          <nav className="platform-nav">
            {platforms.map((p, i) => {
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  className={`platform-nav-item ${i === active ? "platform-nav-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <Icon size={20} strokeWidth={1.5} />
                  <span>{p.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="platform-display">
            <p className="platform-desc">{current.description}</p>
            <div className="platform-img-wrap">
              <img
                src={current.image}
                alt={current.label}
                loading="lazy"
                width={1280}
                height={800}
                className="platform-img"
              />
            </div>
            <button className="platform-cta">
              {t("platform.learn_more")} <span>→</span>
            </button>
          </div>
        </div>

        {/* Mobile: stacked tiles */}
        <div className="platform-tiles-mobile">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="platform-tile">
                <div className="platform-tile-header">
                  <Icon size={20} strokeWidth={1.5} />
                  <h3 className="platform-tile-label">{p.label}</h3>
                </div>
                <p className="platform-tile-desc">{p.description}</p>
                <div className="platform-img-wrap">
                  <img
                    src={p.image}
                    alt={p.label}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="platform-img"
                  />
                </div>
                <button className="platform-cta">
                  {t("platform.learn_more")} <span>→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
