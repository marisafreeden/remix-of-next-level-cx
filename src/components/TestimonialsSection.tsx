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
      {/* Purple blur effects */}
      <div style={{
        position: 'absolute',
        width: '340px',
        height: '340px',
        left: '10%',
        top: '20%',
        background: 'rgba(122, 111, 212, 0.15)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        right: '5%',
        top: '30%',
        background: 'rgba(198, 134, 248, 0.12)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '260px',
        height: '260px',
        left: '45%',
        bottom: '10%',
        background: 'rgba(112, 66, 210, 0.1)',
        filter: 'blur(110px)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div className="testimonials-inner" style={{ position: 'relative', zIndex: 1 }}>

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
