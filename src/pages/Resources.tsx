import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/resources.css";
import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight, ChevronDown, Search, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Resource = {
  titleKey: string;
  descKey: string;
  topic: string;
  type: string;
  industry: string;
  hasVideo?: boolean;
};

const resources: Resource[] = [
  { titleKey: "res1", descKey: "res1", topic: "cx", type: "article", industry: "all" },
  { titleKey: "res2", descKey: "res2", topic: "technology", type: "whitepaper", industry: "all" },
  { titleKey: "res3", descKey: "res3", topic: "cx", type: "article", industry: "contact-center", hasVideo: true },
  { titleKey: "res4", descKey: "res4", topic: "cx", type: "article", industry: "all" },
  { titleKey: "res5", descKey: "res5", topic: "cx", type: "guide", industry: "all" },
  { titleKey: "res6", descKey: "res6", topic: "technology", type: "article", industry: "contact-center" },
  { titleKey: "res7", descKey: "res7", topic: "technology", type: "guide", industry: "telecom" },
  { titleKey: "res8", descKey: "res8", topic: "employee", type: "whitepaper", industry: "all" },
  { titleKey: "res9", descKey: "res9", topic: "cx", type: "article", industry: "contact-center", hasVideo: true },
  { titleKey: "res10", descKey: "res10", topic: "business", type: "guide", industry: "retail" },
  { titleKey: "res11", descKey: "res11", topic: "technology", type: "whitepaper", industry: "healthcare" },
  { titleKey: "res12", descKey: "res12", topic: "technology", type: "guide", industry: "all" },
];

const Resources = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("all");
  const [type, setType] = useState("all");
  const [industry, setIndustry] = useState("all");
  const [openFilter, setOpenFilter] = useState<string | null>("topic");

  const topicFilters = [
    { value: "all", label: t("resources_page.topic_all") },
    { value: "cx", label: t("resources_page.topic_cx") },
    { value: "employee", label: t("resources_page.topic_employee") },
    { value: "technology", label: t("resources_page.topic_technology") },
    { value: "business", label: t("resources_page.topic_business") },
  ];
  const typeFilters = [
    { value: "all", label: t("resources_page.type_all") },
    { value: "article", label: t("resources_page.type_article") },
    { value: "guide", label: t("resources_page.type_guide") },
    { value: "whitepaper", label: t("resources_page.type_whitepaper") },
    { value: "video", label: t("resources_page.type_video") },
  ];
  const industryFilters = [
    { value: "all", label: t("resources_page.industry_all") },
    { value: "contact-center", label: t("resources_page.industry_contact_center") },
    { value: "healthcare", label: t("resources_page.industry_healthcare") },
    { value: "retail", label: t("resources_page.industry_retail") },
    { value: "telecom", label: t("resources_page.industry_telecom") },
  ];

  const filtered = resources.filter((r) => {
    const title = t(`resources_page.${r.titleKey}_title`);
    const desc = t(`resources_page.${r.descKey}_desc`);
    if (search && !title.toLowerCase().includes(search.toLowerCase()) && !desc.toLowerCase().includes(search.toLowerCase())) return false;
    if (topic !== "all" && r.topic !== topic) return false;
    if (type !== "all" && r.type !== type) return false;
    if (industry !== "all" && r.industry !== industry) return false;
    return true;
  });

  const featured = resources.slice(0, 4);

  const clearAll = () => {
    setSearch("");
    setTopic("all");
    setType("all");
    setIndustry("all");
  };

  const FilterSection = ({ title, id, options, value, onChange }: {
    title: string; id: string;
    options: { value: string; label: string }[];
    value: string; onChange: (v: string) => void;
  }) => (
    <div className="res-filter-group">
      <button
        className="res-filter-group-header"
        onClick={() => setOpenFilter(openFilter === id ? null : id)}
      >
        <span>{title}</span>
        <ChevronDown size={16} className={`res-filter-chevron ${openFilter === id ? "res-filter-chevron-open" : ""}`} />
      </button>
      {openFilter === id && (
        <div className="res-filter-options">
          {options.map((o) => (
            <label key={o.value} className="res-filter-option">
              <input type="radio" name={id} checked={value === o.value} onChange={() => onChange(o.value)} className="res-filter-radio" />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      <section className="res-hero">
        <div className="res-hero-inner">
          <h1 className="hero-h1">
            <span className="going-next">{t("resources_page.hero_title")}</span>
          </h1>
          <p className="res-hero-subtitle">{t("resources_page.hero_subtitle")}</p>
        </div>
      </section>

      <section className="res-featured-section">
        <div className="res-featured-inner">
          <h2 className="res-section-title">{t("resources_page.latest_popular")}</h2>
          <div className="res-featured-grid">
            {featured.map((r) => (
              <a key={r.titleKey} href="#" className="res-card">
                <div className="res-card-image">
                  {r.hasVideo && <div className="res-card-play"><Play size={20} fill="#fff" /></div>}
                </div>
                <div className="res-card-body">
                  <h3 className="res-card-title">{t(`resources_page.${r.titleKey}_title`)}</h3>
                  <p className="res-card-desc">{t(`resources_page.${r.descKey}_desc`)}</p>
                </div>
                <div className="res-card-footer">
                  <div className="res-card-arrow"><ChevronRight size={16} /></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="res-all-section">
        <div className="res-all-inner">
          <h2 className="res-section-title">{t("resources_page.all_resources")}</h2>
          <div className="res-all-layout">
            <aside className="res-sidebar">
              <div className="res-search-wrap">
                <Search size={16} className="res-search-icon" />
                <input
                  type="text"
                  placeholder={t("resources_page.search")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="res-search-input"
                />
              </div>
              <FilterSection title={t("resources_page.topic")} id="topic" options={topicFilters} value={topic} onChange={setTopic} />
              <FilterSection title={t("resources_page.content_type")} id="type" options={typeFilters} value={type} onChange={setType} />
              <FilterSection title={t("resources_page.industry")} id="industry" options={industryFilters} value={industry} onChange={setIndustry} />
              <button className="res-clear-btn" onClick={clearAll}>{t("resources_page.clear_all")}</button>
            </aside>

            <div className="res-grid">
              {filtered.length === 0 && (
                <p className="res-empty">{t("resources_page.no_results")}</p>
              )}
              {filtered.map((r) => (
                <a key={r.titleKey} href="#" className="res-card">
                  <div className="res-card-image">
                    {r.hasVideo && <div className="res-card-play"><Play size={20} fill="#fff" /></div>}
                  </div>
                  <div className="res-card-body">
                    <h3 className="res-card-title">{t(`resources_page.${r.titleKey}_title`)}</h3>
                    <p className="res-card-desc">{t(`resources_page.${r.descKey}_desc`)}</p>
                  </div>
                  <div className="res-card-footer">
                    <div className="res-card-arrow"><ChevronRight size={16} /></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;