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
    <section className="testimonials-wrapper" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <div className="testimonials-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="testimonials-carousel-track">
          <div className="testimonials-carousel-slider">
            {testimonials.map((item, i) => {
              const blurColors = [
                'rgba(122, 111, 212, 0.25)',
                'rgba(198, 134, 248, 0.22)',
                'rgba(112, 66, 210, 0.2)',
              ];
              return (
                <div key={item.key} className="testimonial-card" style={{ position: 'relative', overflow: 'visible' }}>
                  <div style={{
                    position: 'absolute',
                    width: '280px',
                    height: '280px',
                    background: blurColors[i],
                    filter: 'blur(80px)',
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }} />
                  <Quote size={24} strokeWidth={1.5} className="testimonial-card-quote" style={{ position: 'relative', zIndex: 1 }} />
                  <p className="testimonial-card-text" style={{ position: 'relative', zIndex: 1 }}>
                    {t(`testimonials.${item.key}_quote`)}
                  </p>
                  <div className="testimonial-card-footer" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="testimonial-card-name">{t(`testimonials.${item.key}_name`)}</p>
                    <p className="testimonial-card-role">{t(`testimonials.${item.key}_role`)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
