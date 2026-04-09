import { useTranslation } from "react-i18next";
import promoChartsImg from "@/assets/promo-charts.png";
import promoTimelineImg from "@/assets/promo-timeline.png";

const promoData = [
  { key: "promo1", image: promoChartsImg, eyebrow: "FAST DEPLOYMENT" },
  { key: "promo2", image: promoTimelineImg, eyebrow: "ONGOING SUPPORT" },
  { key: "promo3", image: promoChartsImg, eyebrow: "BUILT TO SCALE" },
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
      <div className="cc-alt-features">
        {promoData.map(({ key, image, eyebrow }, i) => (
          <div key={key} className={`cc-alt-row ${i % 2 === 1 ? "cc-alt-row-reverse" : ""}`}>
            <div className="cc-alt-text">
              <p className="promos-eyebrow">{eyebrow}</p>
              <h3 className="cc-alt-heading">{t(`promos.${key}_title`)}</h3>
              <p className="cc-alt-desc">{t(`promos.${key}_desc`)}</p>
              <button className="cc-alt-cta">
                Learn more <span>→</span>
              </button>
            </div>
            <div className="cc-alt-image-side">
              <img
                src={image}
                alt={t(`promos.${key}_title`)}
                loading="lazy"
                width={1280}
                height={960}
                className="cc-alt-img"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromosSection;
