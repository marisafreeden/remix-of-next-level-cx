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
import { ChevronRight, ChevronDown, Search, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Resource = {
  title: string;
  desc: string;
  topic: string;
  type: string;
  industry: string;
  hasVideo?: boolean;
};

const resources: Resource[] = [
  { title: "Using AI to improve and automate service recovery", desc: "Learn how AI transforms service recovery with real-time detection, automation and personalization to reduce churn and build loyalty.", topic: "cx", type: "article", industry: "all" },
  { title: "Unified solutions and CCaaS: A platform-based approach to modern CX", desc: "Discover how a unified CX platform powered by CCaaS connects channels, data and AI to deliver consistent, personalized experiences at scale.", topic: "technology", type: "whitepaper", industry: "all" },
  { title: "How AI-powered analytics are transforming contact centers", desc: "Explore how real-time AI analytics give supervisors instant visibility into agent performance, customer sentiment, and operational efficiency.", topic: "cx", type: "article", industry: "contact-center", hasVideo: true },
  { title: "Hyper-personalization at scale: AI's role in digital CX", desc: "Explore how AI-powered hyper-personalization transforms digital CX with real-time data, predictive insights and tailored customer journeys.", topic: "cx", type: "article", industry: "all" },
  { title: "5 key questions to improve CX this quarter", desc: "A practical guide to evaluating your customer experience strategy with five essential questions every CX leader should be asking right now.", topic: "cx", type: "guide", industry: "all" },
  { title: "Why your business needs a cloud contact center in 2025", desc: "The case for migrating to a cloud contact center — flexibility, cost savings, and the AI capabilities that legacy systems can't match.", topic: "technology", type: "article", industry: "contact-center" },
  { title: "The complete guide to SIP trunking for growing businesses", desc: "Everything you need to know about SIP trunking — from cost savings and scalability to implementation best practices.", topic: "technology", type: "guide", industry: "telecom" },
  { title: "Building a remote-first communication strategy", desc: "How to design a unified communications stack that keeps distributed teams productive, connected, and engaged.", topic: "employee", type: "whitepaper", industry: "all" },
  { title: "Reducing hold times with intelligent call routing", desc: "Learn how AI-driven call routing matches customers to the right agent faster, cutting wait times and boosting first-call resolution.", topic: "cx", type: "article", industry: "contact-center", hasVideo: true },
  { title: "SMS marketing benchmarks: What response rates to expect", desc: "Industry benchmarks for business SMS campaigns — open rates, response rates, and best practices for maximizing engagement.", topic: "business", type: "guide", industry: "retail" },
  { title: "Compliance and security in cloud communications", desc: "A deep dive into HIPAA, SOC 2, and GDPR compliance for businesses using cloud-based phone systems and contact centers.", topic: "technology", type: "whitepaper", industry: "healthcare" },
  { title: "How to onboard a new phone system in 30 days", desc: "A step-by-step implementation timeline for migrating to a cloud PBX — from planning and porting to training and go-live.", topic: "technology", type: "guide", industry: "all" },
];

const topicFilters = [
  { value: "all", label: "All topics" },
  { value: "cx", label: "Customer experience" },
  { value: "employee", label: "Employee experience" },
  { value: "technology", label: "Technology" },
  { value: "business", label: "Grow your business" },
];

const typeFilters = [
  { value: "all", label: "All types" },
  { value: "article", label: "Articles" },
  { value: "guide", label: "Guides" },
  { value: "whitepaper", label: "Whitepapers" },
  { value: "video", label: "Videos" },
];

const industryFilters = [
  { value: "all", label: "All industries" },
  { value: "contact-center", label: "Contact Center" },
  { value: "healthcare", label: "Healthcare" },
  { value: "retail", label: "Retail" },
  { value: "telecom", label: "Telecommunications" },
];

const Resources = () => {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("all");
  const [type, setType] = useState("all");
  const [industry, setIndustry] = useState("all");
  const [openFilter, setOpenFilter] = useState<string | null>("topic");

  const filtered = resources.filter((r) => {
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.desc.toLowerCase().includes(search.toLowerCase())) return false;
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
              <input
                type="radio"
                name={id}
                checked={value === o.value}
                onChange={() => onChange(o.value)}
                className="res-filter-radio"
              />
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

      {/* Hero */}
      <section className="res-hero">
        <div className="res-hero-inner">
          <h1 className="hero-h1">
            <span className="going-next">Resources</span>
          </h1>
          <p className="res-hero-subtitle">
            Reach your customer experience goals faster with free articles, guides, videos and tools.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="res-featured-section">
        <div className="res-featured-inner">
          <h2 className="res-section-title">Latest and popular</h2>
          <div className="res-featured-grid">
            {featured.map((r) => (
              <a key={r.title} href="#" className="res-card">
                <div className="res-card-image">
                  {r.hasVideo && (
                    <div className="res-card-play"><Play size={20} fill="#fff" /></div>
                  )}
                </div>
                <div className="res-card-body">
                  <h3 className="res-card-title">{r.title}</h3>
                  <p className="res-card-desc">{r.desc}</p>
                </div>
                <div className="res-card-footer">
                  <div className="res-card-arrow"><ChevronRight size={16} /></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources with filters */}
      <section className="res-all-section">
        <div className="res-all-inner">
          <h2 className="res-section-title">All resources</h2>
          <div className="res-all-layout">
            {/* Sidebar */}
            <aside className="res-sidebar">
              <div className="res-search-wrap">
                <Search size={16} className="res-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="res-search-input"
                />
              </div>

              <FilterSection title="Topic" id="topic" options={topicFilters} value={topic} onChange={setTopic} />
              <FilterSection title="Content type" id="type" options={typeFilters} value={type} onChange={setType} />
              <FilterSection title="Industry" id="industry" options={industryFilters} value={industry} onChange={setIndustry} />

              <button className="res-clear-btn" onClick={clearAll}>Clear all</button>
            </aside>

            {/* Grid */}
            <div className="res-grid">
              {filtered.length === 0 && (
                <p className="res-empty">No resources match your filters. Try broadening your search.</p>
              )}
              {filtered.map((r) => (
                <a key={r.title} href="#" className="res-card">
                  <div className="res-card-image">
                    {r.hasVideo && (
                      <div className="res-card-play"><Play size={20} fill="#fff" /></div>
                    )}
                  </div>
                  <div className="res-card-body">
                    <h3 className="res-card-title">{r.title}</h3>
                    <p className="res-card-desc">{r.desc}</p>
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
