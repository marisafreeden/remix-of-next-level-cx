import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { key: "t1", company: "TechFlow" },
  { key: "t2", company: "NovaCare Health" },
  { key: "t3", company: "Nordic Logistics" },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);

  const prev = () => setOffset((o) => Math.max(o - 1, 0));
  const next = () => setOffset((o) => Math.min(o + 1, testimonials.length - 1));

  return (
    <section className="testimonials-wrapper">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div>
            <p className="testimonials-eyebrow">CUSTOMERS</p>
            <h2 className="testimonials-title" style={{ whiteSpace: "nowrap" }}>
              {t("testimonials.title_line1")}{" "}
              <span className="testimonials-title-italic" style={{ display: "inline" }}>{t("testimonials.title_line2")}</span>
            </h2>
          </div>
          <div className="testimonials-nav">
            <button className="testimonials-arrow" onClick={prev} aria-label="Previous" style={{ opacity: offset === 0 ? 0.3 : 1 }}>
              <ChevronLeft size={18} />
            </button>
            <button className="testimonials-arrow" onClick={next} aria-label="Next" style={{ opacity: offset === testimonials.length - 1 ? 0.3 : 1 }}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="testimonials-carousel-track">
          <div
            className="testimonials-carousel-slider"
            style={{ transform: `translateX(-${offset * (100 / 3 + 2)}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.key} className="testimonial-card">
                <Quote size={24} strokeWidth={1.5} className="testimonial-card-quote" />
                <p className="testimonial-card-text">
                  {t(`testimonials.${item.key}_quote`)}
                </p>
                <div className="testimonial-card-footer">
                  <p className="testimonial-card-name">{t(`testimonials.${item.key}_name`)}</p>
                  <p className="testimonial-card-role">{t(`testimonials.${item.key}_role`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
