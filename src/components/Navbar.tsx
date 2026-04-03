import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

interface MegaMenuItem {
  title: string;
  href: string;
  desc: string;
  badge?: string;
}

interface MegaMenuColumn {
  heading: string;
  href: string;
  items: MegaMenuItem[];
}

const megaMenuColumns: MegaMenuColumn[] = [
  {
    heading: "Contact Center",
    href: "/contact-center",
    items: [
      { title: "Omnichannel", href: "/contact-center/omnichannel", desc: "Engage across voice, chat, email & social" },
      { title: "Dialer", href: "/contact-center/dialer", desc: "Predictive & progressive outbound calling" },
      { title: "Smart Scripting", href: "/contact-center/smart-scripting", desc: "Dynamic guided agent workflows" },
      { title: "Self Service", href: "/contact-center/self-service", desc: "IVR & automated customer journeys" },
    ],
  },
  {
    heading: "Unified Communications",
    href: "/unified-communications",
    items: [
      { title: "Business Communication", href: "/unified-communications", desc: "Cloud PBX with enterprise features" },
      { title: "Video & Messaging", href: "/video-messaging", desc: "HD meetings & team collaboration" },
      { title: "Business SMS", href: "/business-sms", desc: "Two-way business text messaging" },
      { title: "SIP Trunking", href: "/sip-trunking", desc: "Flexible voice connectivity" },
    ],
  },
  {
    heading: "AI Solutions",
    href: "#",
    items: [
      { title: "Voice Chatbots", href: "/voice-chatbots", desc: "AI-powered conversational agents" },
      { title: "Post Call AI", href: "#", desc: "Automated summaries & sentiment" },
      { title: "AI Analyst", href: "#", desc: "Real-time insights & reporting" },
    ],
  },
  {
    heading: "Integrations",
    href: "#",
    items: [
      { title: "MS Dynamics", href: "/integrations/ms-dynamics", desc: "Native CRM integration" },
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
                <div className="mega-columns">
                {megaMenuColumns.map((col) => (
                  <div key={col.heading} className="mega-col">
                    <a href={col.href} className="mega-col-heading-link" onClick={() => setMegaOpen(false)}>{col.heading}</a>
                    {col.items.map((item) => {
                      const isInternal = item.href.startsWith("/");
                      const linkProps = { className: "mega-col-link", onClick: () => setMegaOpen(false) };
                      const content = (
                        <>
                          <span className="mega-col-link-title">
                            {item.title}
                            {item.badge && <span className="mega-coming-soon">{item.badge}</span>}
                          </span>
                          {item.desc && <span className="mega-col-link-desc">{item.desc}</span>}
                        </>
                      );
                      return isInternal ? (
                        <Link key={item.title} to={item.href} {...linkProps}>{content}</Link>
                      ) : (
                        <a key={item.title} href={item.href} {...linkProps}>{content}</a>
                      );
                    })}
                  </div>
                ))}
                </div>
                <div className="mega-cta-row">
                  <a href="#" className="mega-cta-pill" onClick={() => setMegaOpen(false)}>
                    <Sparkles size={16} />
                    Calculate the ROI of using an AI Agent in your Business
                    <ChevronDown size={14} className="mega-cta-arrow" />
                  </a>
                </div>
              </div>
              </>
            )}
          </div>
          <Link to="/pricing" className="hero-nav-link">{t("nav.pricing")}</Link>
          <Link to="/resources" className="hero-nav-link">{t("nav.resources")}</Link>
          <Link to="/partners" className="hero-nav-link">{t("nav.partners")}</Link>
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
                      {item.badge && <span className="mega-coming-soon">{item.badge}</span>}
                    </a>
                  ))}
                </div>
              ))}
              <a href="#" className="mobile-mega-cta" onClick={() => setMobileOpen(false)}>
                <Sparkles size={14} />
                Calculate the ROI of using an AI Agent in your Business
              </a>
            </div>
          )}
          <Link to="/pricing" className="hero-nav-mobile-link" onClick={() => setMobileOpen(false)}>{t("nav.pricing")}</Link>
          <Link to="/resources" className="hero-nav-mobile-link" onClick={() => setMobileOpen(false)}>{t("nav.resources")}</Link>
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
