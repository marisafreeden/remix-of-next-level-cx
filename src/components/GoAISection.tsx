import { useTranslation } from "react-i18next";
import GoAIDiagram from "./GoAIDiagram";

const GoAISection = () => {
  const { t } = useTranslation();

  return (
    <section className="goai-section">
      <div className="goai-inner">
        <div className="goai-columns">
          <div className="goai-col-left">
            
            <h2 className="goai-title">
              {t("goai.title_line1")}<br />
              <span className="goai-title-italic">{t("goai.title_line2")}</span>
            </h2>
          </div>
          <div className="goai-col-right">
            <p className="goai-desc">{t("goai.desc")}</p>
            <button className="goai-cta">
              {t("goai.cta")} <span>→</span>
            </button>
          </div>
        </div>
        <div className="goai-image-wrap">
          <GoAIDiagram />
        </div>
      </div>
    </section>
  );
};

export default GoAISection;
