import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const faqKeys = ["q1", "q2", "q3", "q4", "q5"];

const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <p className="faq-eyebrow">SUPPORT</p>
      <h2 className="faq-title">
        {t("faq.title_line1")}<br />
        <span className="faq-title-italic">{t("faq.title_line2")}</span>
      </h2>
      <div className="faq-list">
        {faqKeys.map((key, i) => (
          <div
            key={key}
            className={`faq-item ${openIndex === i ? "faq-item-open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{t(`faq.${key}`)}</span>
              <ChevronDown
                size={18}
                className={`faq-chevron ${openIndex === i ? "faq-chevron-open" : ""}`}
              />
            </button>
            <div className={`faq-answer-wrap ${openIndex === i ? "faq-answer-open" : ""}`}>
              <p className="faq-answer">{t(`faq.a${i + 1}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
