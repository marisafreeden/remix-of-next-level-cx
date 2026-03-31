import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/pricing.css";
import "@/styles/pricing-banner.css";

import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSiteCopy } from "@/hooks/useSiteCopy";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import Footer from "@/components/Footer";

interface PlanDef {
  nameKey: string;
  subtitleKey: string;
  priceKey: string | null; // null = custom
  perKey: string;
  popular: boolean;
  featureKeys: string[];
}

const ucPlanDefs: PlanDef[] = [
  {
    nameKey: "uc_metered", subtitleKey: "uc_metered_subtitle", priceKey: "uc_metered_price",
    perKey: "per_month_user", popular: false,
    featureKeys: ["uc_metered_f1","uc_metered_f2","uc_metered_f3","uc_metered_f4","uc_metered_f5","uc_metered_f6","uc_metered_f7","uc_metered_f8"],
  },
  {
    nameKey: "uc_standard", subtitleKey: "uc_standard_subtitle", priceKey: "uc_standard_price",
    perKey: "per_month_user", popular: true,
    featureKeys: ["uc_standard_f1","uc_standard_f2","uc_standard_f3","uc_standard_f4","uc_standard_f5"],
  },
  {
    nameKey: "uc_pro", subtitleKey: "uc_pro_subtitle", priceKey: "uc_pro_price",
    perKey: "per_month_user", popular: false,
    featureKeys: ["uc_pro_f1","uc_pro_f2","uc_pro_f3","uc_pro_f4","uc_pro_f5","uc_pro_f6","uc_pro_f7"],
  },
];

const ccPlanDefs: PlanDef[] = [
  {
    nameKey: "cc_essential", subtitleKey: "cc_essential_subtitle", priceKey: "cc_essential_price",
    perKey: "per_month_agent", popular: false,
    featureKeys: ["cc_essential_f1","cc_essential_f2","cc_essential_f3","cc_essential_f4","cc_essential_f5"],
  },
  {
    nameKey: "cc_professional", subtitleKey: "cc_professional_subtitle", priceKey: "cc_professional_price",
    perKey: "per_month_agent", popular: true,
    featureKeys: ["cc_professional_f1","cc_professional_f2","cc_professional_f3","cc_professional_f4","cc_professional_f5","cc_professional_f6"],
  },
  {
    nameKey: "cc_enterprise", subtitleKey: "cc_enterprise_subtitle", priceKey: null,
    perKey: "", popular: false,
    featureKeys: ["cc_enterprise_f1","cc_enterprise_f2","cc_enterprise_f3","cc_enterprise_f4","cc_enterprise_f5","cc_enterprise_f6"],
  },
];

const aiPlanDefs: PlanDef[] = [
  {
    nameKey: "ai_starter", subtitleKey: "ai_starter_subtitle", priceKey: "ai_starter_price",
    perKey: "per_month_agent", popular: false,
    featureKeys: ["ai_starter_f1","ai_starter_f2","ai_starter_f3","ai_starter_f4"],
  },
  {
    nameKey: "ai_advanced", subtitleKey: "ai_advanced_subtitle", priceKey: "ai_advanced_price",
    perKey: "per_month_agent", popular: true,
    featureKeys: ["ai_advanced_f1","ai_advanced_f2","ai_advanced_f3","ai_advanced_f4","ai_advanced_f5","ai_advanced_f6"],
  },
  {
    nameKey: "ai_enterprise", subtitleKey: "ai_enterprise_subtitle", priceKey: null,
    perKey: "", popular: false,
    featureKeys: ["ai_enterprise_f1","ai_enterprise_f2","ai_enterprise_f3","ai_enterprise_f4","ai_enterprise_f5","ai_enterprise_f6"],
  },
];

const Pricing = () => {
  const { t } = useTranslation();
  const { c } = useSiteCopy("pricing");
  const [activeTab, setActiveTab] = useState<"uc" | "cc" | "ai">("uc");
  const planDefs = activeTab === "uc" ? ucPlanDefs : activeTab === "cc" ? ccPlanDefs : aiPlanDefs;
  const currency = t("pricing_page.currency");

  return (
    <div className="pricing-page">
      <Navbar />

      <section className="pricing-hero">
        <h1 className="pricing-title">
          {c("title_pre", "pricing_page.title_pre")} <em className="pricing-title-italic">{c("title_em", "pricing_page.title_em")}</em>
        </h1>

        <div className="pricing-tabs">
          <button
            className={`pricing-tab ${activeTab === "uc" ? "pricing-tab-active" : ""}`}
            onClick={() => setActiveTab("uc")}
          >
            {t("pricing_page.tab_uc")}
          </button>
          <button
            className={`pricing-tab ${activeTab === "cc" ? "pricing-tab-active" : ""}`}
            onClick={() => setActiveTab("cc")}
          >
            {t("pricing_page.tab_cc")}
          </button>
          <button
            className={`pricing-tab ${activeTab === "ai" ? "pricing-tab-active" : ""}`}
            onClick={() => setActiveTab("ai")}
          >
            {t("pricing_page.tab_ai")}
          </button>
        </div>
      </section>

      <section className="pricing-cards-section">
        <div className="pricing-cards-grid">
          {planDefs.map((plan) => {
            const isCustom = plan.priceKey === null;
            const price = isCustom ? t("pricing_page.custom") : `${currency}${t(`pricing_page.${plan.priceKey}`)}`;
            const per = plan.perKey ? t(`pricing_page.${plan.perKey}`) : "";

            return (
              <div
                key={plan.nameKey}
                className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
              >
                {plan.popular && <span className="pricing-popular-badge">{t("pricing_page.most_popular")}</span>}
                <h3 className="pricing-card-name">{t(`pricing_page.${plan.nameKey}`)}</h3>
                <p className="pricing-card-subtitle">{t(`pricing_page.${plan.subtitleKey}`)}</p>

                <div className="pricing-card-price-row">
                  <span className="pricing-card-price">{price}</span>
                  {per && <span className="pricing-card-per">{per}</span>}
                </div>

                <ul className="pricing-card-features">
                  {plan.featureKeys.map((fk) => (
                    <li key={fk} className="pricing-card-feature">
                      <Check size={16} className="pricing-check" />
                      {t(`pricing_page.${fk}`)}
                    </li>
                  ))}
                </ul>

                <a href="#" className="pricing-card-cta">{t("pricing_page.request_quote")}</a>
              </div>
            );
          })}
        </div>
      </section>

      <img src="/images/pricing-gradient-bg.png" alt="" className="pricing-cards-bottom-gradient" />

      <FAQSection />
      <CTABlock />

      <Footer />
    </div>
  );
};

export default Pricing;
