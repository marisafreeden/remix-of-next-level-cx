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
        width: '500px',
        height: '500px',
        left: '5%',
        top: '10%',
        background: 'rgba(122, 111, 212, 0.25)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '450px',
        height: '450px',
        right: '0%',
        top: '20%',
        background: 'rgba(198, 134, 248, 0.22)',
        filter: 'blur(90px)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        left: '35%',
        bottom: '5%',
        background: 'rgba(112, 66, 210, 0.18)',
        filter: 'blur(95px)',
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
