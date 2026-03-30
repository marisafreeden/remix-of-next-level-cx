import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const megaMenuData = [
  {
    heading: "Product",
    items: [
      { title: "NEXT Platform", desc: "Unified communications and CX solution.", isNew: true },
      { title: "XBert", desc: "AI employee for customer conversations.", isNew: true },
      { title: "Contact Center", desc: "Omnichannel customer experience platform." },
      { title: "Business Phone", desc: "Phone service for any size business." },
    ],
  },
  {
    heading: "AI Capabilities",
    items: [
      { title: "AI Employee", desc: "Works tasks start to finish." },
      { title: "Agent Assist", desc: "Real-time agent guidance." },
      { title: "AI Receptionist", desc: "Handle incoming calls 24/7." },
    ],
  },
  {
    heading: "Channels",
    items: [
      { title: "Voice & Texting", desc: "Phone calls and texting." },
      { title: "Live Chat", desc: "Interact with website visitors." },
      { title: "Messenger", desc: "Help customers on every channel." },
      { title: "Email", desc: "Unified customer inbox." },
      { title: "Social & Reviews", desc: "Manage all social channels." },
      { title: "Video Meetings", desc: "Instant virtual meetings." },
    ],
  },
  {
    heading: "Advanced",
    items: [
      { title: "Integrations", desc: "Apps and integrations." },
      { title: "Analytics & Reporting", desc: "Insights and dashboards." },
      { title: "Workforce Engagement", desc: "Scale your contact center." },
      { title: "Journey Orchestration", desc: "End-to-end customer engagement." },
    ],
  },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    if (megaOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [megaOpen]);

  return (
    <nav className="hero-nav">
      <div className="hero-nav-inner">
        <a href="/" className="hero-nav-logo">
          <img src={logo} alt="Broadvoice" width={140} height={28} className="hero-nav-logo-img" />
        </a>

        <div className="hero-nav-links">
          <div className="mega-trigger" ref={megaRef}>
            <button
              className="hero-nav-link mega-trigger-btn"
              onClick={() => setMegaOpen(!megaOpen)}
            >
              {t("nav.products")} <ChevronDown size={14} className={`mega-chevron ${megaOpen ? "mega-chevron-open" : ""}`} />
            </button>
            {megaOpen && (
              <div className="mega-menu">
                {megaMenuData.map((col) => (
                  <div key={col.heading} className="mega-col">
                    <p className="mega-col-heading">{col.heading}</p>
                    {col.items.map((item) => (
                      <a key={item.title} href="#" className="mega-item" onClick={() => setMegaOpen(false)}>
                        <span className="mega-item-title">
                          {item.title}
                          {item.isNew && <span className="mega-badge">NEW</span>}
                        </span>
                        <span className="mega-item-desc">{item.desc}</span>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="hero-nav-link">{t("nav.pricing")}</a>
          <a href="#" className="hero-nav-link">{t("nav.resources")}</a>
          <a href="#" className="hero-nav-link">{t("nav.partners")}</a>
        </div>

        <div className="hero-nav-right">
          <LanguageSwitcher />
          <a href="#" className="hero-nav-login">{t("nav.login")}</a>
          <a href="#" className="hero-nav-cta">{t("nav.demo")}</a>
        </div>

        <button
          className="hero-nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="hero-nav-mobile-menu">
          <button
            className="hero-nav-mobile-link mobile-products-toggle"
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
          >
            {t("nav.products")}
            <ChevronDown size={16} className={mobileProductsOpen ? "mega-chevron-open" : ""} />
          </button>
          {mobileProductsOpen && (
            <div className="mobile-mega-menu">
              {megaMenuData.map((col) => (
                <div key={col.heading} className="mobile-mega-group">
                  <p className="mobile-mega-heading">{col.heading}</p>
                  {col.items.map((item) => (
                    <a key={item.title} href="#" className="mobile-mega-item" onClick={() => setMobileOpen(false)}>
                      {item.title}
                      {item.isNew && <span className="mega-badge">NEW</span>}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
          <a href="#" className="hero-nav-mobile-link" onClick={() => setMobileOpen(false)}>{t("nav.pricing")}</a>
          <a href="#" className="hero-nav-mobile-link" onClick={() => setMobileOpen(false)}>{t("nav.resources")}</a>
          <a href="#" className="hero-nav-mobile-link" onClick={() => setMobileOpen(false)}>{t("nav.partners")}</a>
          <div className="hero-nav-mobile-actions">
            <a href="#" className="hero-nav-login">{t("nav.login")}</a>
            <a href="#" className="hero-nav-cta">{t("nav.demo")}</a>
          </div>
        </div>
      )}

      <div className="hero-nav-divider" />
    </nav>
  );
};

export default Navbar;
