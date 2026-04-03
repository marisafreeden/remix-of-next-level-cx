import { useTranslation } from "react-i18next";
import ctaBg from "@/assets/cta-bg.png";

const CTABlock = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-block-section">
      <div
        className="cta-block-inner"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '30px',
        }}
      >
        {/* Background image */}
        <img
          src={ctaBg}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        {/* Blur overlay ellipses */}
        <div style={{
          position: 'absolute',
          width: '1328px',
          height: '1302px',
          background: '#767CB2',
          filter: 'blur(152px)',
          transform: 'matrix(0.92, 0.39, 0.69, -0.73, 0, 0)',
          top: '-30%',
          left: '-20%',
          opacity: 0.55,
          zIndex: 1,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          width: '1328px',
          height: '1302px',
          background: '#3DA6B7',
          filter: 'blur(152px)',
          transform: 'matrix(0.92, 0.39, 0.69, -0.73, 0, 0)',
          bottom: '-40%',
          right: '-30%',
          opacity: 0.45,
          zIndex: 1,
          pointerEvents: 'none',
        }} />
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
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
      </div>
    </section>
  );
};

export default CTABlock;
