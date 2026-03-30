import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const megaMenuColumns = [
  {
    heading: "Contact Center",
    href: "#",
    items: [
      { title: "Omnichannel", href: "#", desc: "Engage across voice, chat, email & social" },
      { title: "Dialer", href: "#", desc: "Predictive & progressive outbound calling" },
      { title: "Smart Scripting", href: "#", desc: "Dynamic guided agent workflows" },
      { title: "Self Service", href: "#", desc: "IVR & automated customer journeys" },
    ],
  },
  {
    heading: "Unified Communications",
    href: "#",
    items: [
      { title: "Business Phone", href: "#", desc: "Cloud PBX with enterprise features" },
      { title: "Video & Messaging", href: "#", desc: "HD meetings & team collaboration" },
      { title: "Bubble SMS", href: "#", desc: "Two-way business text messaging" },
      { title: "SIP Trunking", href: "#", desc: "Flexible voice connectivity" },
    ],
  },
  {
    heading: "AI Solutions",
    href: "#",
    items: [
      { title: "Voice Chatbots", href: "#", desc: "AI-powered conversational agents" },
      { title: "Post Call AI", href: "#", desc: "Automated summaries & sentiment" },
      { title: "AI Analyst", href: "#", desc: "Real-time insights & reporting" },
    ],
  },
  {
    heading: "Integrations",
    href: "#",
    items: [
      { title: "MS Dynamics", href: "#", desc: "Native CRM integration" },
      { title: "Salesforce", href: "#", badge: "Coming Soon", desc: "Deep CRM connectivity" },
      { title: "Zoho", href: "#", badge: "Coming Soon", desc: "Workflow automation" },
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
              <>
              <div className="mega-backdrop" onClick={() => setMegaOpen(false)} />
              <div className="mega-menu">
                {megaMenuColumns.map((col) => (
                  <div key={col.heading} className="mega-col">
                    <a href={col.href} className="mega-col-heading-link" onClick={() => setMegaOpen(false)}>{col.heading}</a>
                    {col.items.map((item) => (
                      <a key={item.title} href={item.href} className="mega-col-link" onClick={() => setMegaOpen(false)}>
                        <span className="mega-col-link-title">
                          {item.title}
                          {item.badge && <span className="mega-coming-soon">{item.badge}</span>}
                        </span>
                        {item.desc && <span className="mega-col-link-desc">{item.desc}</span>}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              </>
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
              {megaMenuColumns.map((col) => (
                <div key={col.heading} className="mobile-mega-group">
                  <p className="mobile-mega-heading">{col.heading}</p>
                  {col.items.map((item) => (
                    <a key={item.title} href={item.href} className="mobile-mega-item" onClick={() => setMobileOpen(false)}>
                      {item.title}
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
