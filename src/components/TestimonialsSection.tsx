import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

const testimonials = [
  { key: "t1", company: "TechFlow" },
  { key: "t2", company: "NovaCare Health" },
  { key: "t3", company: "Nordic Logistics" },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials-wrapper">
      <div className="testimonials-inner">

        <div className="testimonials-carousel-track">
          <div className="testimonials-carousel-slider">
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
