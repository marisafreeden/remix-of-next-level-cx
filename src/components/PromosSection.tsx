import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import promoChartsImg from "@/assets/promo-charts.png";
import promoTimelineImg from "@/assets/promo-timeline.png";

const promoData = [
  { key: "promo1", image: promoChartsImg },
  { key: "promo2", image: promoTimelineImg },
  { key: "promo3", image: promoChartsImg },
];

const PromosSection = () => {
  const { t } = useTranslation();

  return (
    <section className="promos-section">
      <div className="promos-header">
        <p className="promos-eyebrow">WHY BROADVOICE</p>
        <h2 className="promos-title">
          {t("promos.title_line1")}<br />
          <span className="promos-title-italic">{t("promos.title_line2")}</span>
        </h2>
      </div>
      <div className="promos-stack">
        {promoData.map(({ key }, i) => (
          <div key={key} className={`promo-row ${i % 2 === 1 ? "promo-row-reverse" : ""}`}>
            <div className="promo-row-text">
              <h3 className="promo-row-title">{t(`promos.${key}_title`)}</h3>
              <p className="promo-row-desc">{t(`promos.${key}_desc`)}</p>
              <button className="promo-row-cta">
                Learn more <ChevronRight size={16} />
              </button>
            </div>
            <div className="promo-row-image-wrap">
              <img
                src={promoChartsImg}
                alt={t(`promos.${key}_title`)}
                loading="lazy"
                width={1280}
                height={960}
                className="promo-row-image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromosSection;
