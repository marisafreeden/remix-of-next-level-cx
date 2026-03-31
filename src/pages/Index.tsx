import "@/App.css";
import "@/styles/platform.css";
import "@/styles/goai.css";
import "@/styles/sections.css";
import "@/styles/footer.css";
import "@/styles/megamenu.css";
import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";

import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useSiteCopy } from "@/hooks/useSiteCopy";
import EditableText from "@/components/EditableText";
import Navbar from "@/components/Navbar";
import DashboardPreview from "@/components/DashboardPreview";
import PlatformSection from "@/components/PlatformSection";
import GoAISection from "@/components/GoAISection";
import PromosSection from "@/components/PromosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

const Index = () => {
  const { t, i18n } = useTranslation();
  const { c } = useSiteCopy("home");

  useEffect(() => {
    document.documentElement.lang = i18n.language || "en";
    document.title = t("meta.title");
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t("meta.title"));
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", t("meta.description"));
  }, [i18n.language, t]);

  return (
    <>
      <section className="hero-section">
        <Navbar />

        <div className="hero-bg-wrap">
          <div className="hero-ellipse hero-e52" />
          <div className="hero-ellipse hero-e56" />
          <div className="hero-ellipse hero-e10" />
          <div className="hero-ellipse hero-e11" />
          <div className="hero-ellipse hero-e13" />
          <div className="hero-ellipse hero-e9" />
          <div className="hero-ellipse hero-e14" />
        </div>

        <div className="hero-content">
          <h1 className="hero-h1">
            {c("hero_title1", "hero.title_line1")}<br />
            <span className="going-next">{c("hero_title2", "hero.title_line2")}</span>
          </h1>

          <p className="hero-sub">{t("hero.subtitle")}</p>

          <div className="hero-ctas">
            <button className="btn-hero-a">
              {t("hero.cta_platform")} <span style={{fontSize: '18px'}}>→</span>
            </button>
            <button className="btn-hero-b">
              {t("hero.cta_video")} <span>▶</span>
            </button>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section className="logo-strip">
        <p className="logo-strip-label">{t("logos.label")}</p>
        <div className="logo-strip-logos">
          <span className="logo-strip-item">Pfizer</span>
          <span className="logo-strip-item">UPS</span>
          <span className="logo-strip-item">L'Oréal</span>
          <span className="logo-strip-item">Hertz</span>
          <span className="logo-strip-item">Toyota</span>
          <span className="logo-strip-item">Deloitte</span>
        </div>
      </section>

      <PlatformSection />
      <GoAISection />
      <PromosSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABlock />
      <Footer />
    </>
  );
};

export default Index;
