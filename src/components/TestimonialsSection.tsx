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
    <section className="testimonials-wrapper" style={{ background: 'linear-gradient(130.54deg, #FCF6FF 5.82%, #E8FCFF 113.26%)', position: 'relative', overflow: 'hidden' }}>
      <div className="testimonials-inner" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="cc-alt-heading" style={{ textAlign: 'center', marginBottom: '48px' }}>What Customers <span className="cc-alt-heading-italic">Say</span></h2>
        <div className="testimonials-carousel-track">
          <div className="testimonials-carousel-slider">
            {testimonials.map((item) => (
              <div key={item.key} className="testimonial-card" style={{ background: '#ffffff', borderRadius: '20px' }}>
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
