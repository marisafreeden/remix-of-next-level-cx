import { useTranslation } from "react-i18next";
import ctaBg from "@/assets/cta-bg.png";

const CTABlock = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-block-section">
      <div
        className="cta-block-inner"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="cta-block-title">
          {t("cta_block.title_line1")}<br />
          <span className="cta-block-title-italic">{t("cta_block.title_line2")}</span>
        </h2>
        <p className="cta-block-subtitle">{t("cta_block.subtitle")}</p>
        <div className="cta-block-buttons">
          <a href="#" className="cta-block-primary">
            {t("cta_block.cta_primary")} <span style={{ fontSize: "18px" }}>→</span>
          </a>
          <a href="#" className="cta-block-secondary">
            {t("cta_block.cta_secondary")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
