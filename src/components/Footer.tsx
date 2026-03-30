import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("footer.product"),
      links: [
        { label: t("footer.product_contact_center"), href: "#" },
        { label: t("footer.product_unified_comms"), href: "/unified-communications" },
        { label: "Video & Messaging", href: "/video-messaging" },
        { label: "SIP Trunking", href: "/sip-trunking" },
        { label: t("footer.product_ai_cx"), href: "#" },
      ],
    },
    {
      title: t("footer.industries"),
      links: [
        { label: t("footer.industries_financial"), href: "#" },
        { label: t("footer.industries_real_estate"), href: "#" },
        { label: t("footer.industries_logistics"), href: "#" },
        { label: t("footer.industries_healthcare"), href: "#" },
        { label: t("footer.industries_insurance"), href: "#" },
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        { label: t("footer.resources_hub"), href: "#" },
        { label: t("footer.resources_blog"), href: "#" },
        { label: t("footer.resources_webinars"), href: "#" },
        { label: t("footer.resources_ebooks"), href: "#" },
        { label: t("footer.resources_release_notes"), href: "#" },
        { label: t("footer.resources_customer_stories"), href: "#" },
        { label: t("footer.resources_newsroom"), href: "#" },
      ],
    },
    {
      title: t("footer.partners"),
      links: [
        { label: t("footer.partners_hub"), href: "#" },
        { label: t("footer.partners_resources"), href: "#" },
        { label: t("footer.partners_login"), href: "#" },
      ],
    },
    {
      title: t("footer.contact"),
      links: [
        { label: t("footer.contact_sales"), href: "#" },
        { label: t("footer.contact_status"), href: "#" },
        { label: t("footer.contact_faq"), href: "#" },
      ],
    },
    {
      title: t("footer.pricing"),
      links: [{ label: t("footer.pricing_link"), href: "/pricing" }],
    },
    {
      title: t("footer.use_cases"),
      links: [{ label: t("footer.use_cases_posts"), href: "#" }],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Top row */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Broadvoice" className="footer-logo" />
            <div className="footer-socials">
              <a href="#" aria-label="X / Twitter" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-columns">
          {columns.map((col) => (
            <div key={col.title} className="footer-column">
              <h4 className="footer-column-title">{col.title}</h4>
              <ul className="footer-column-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} className="footer-column-link">{link.label}</Link>
                    ) : (
                      <a href={link.href} className="footer-column-link">{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal row */}
        <div className="footer-legal">
          <a href="#" className="footer-legal-link">{t("footer.legal_security")}</a>
          <span className="footer-legal-sep">|</span>
          <a href="#" className="footer-legal-link">{t("footer.legal_privacy")}</a>
          <span className="footer-legal-sep">|</span>
          <a href="#" className="footer-legal-link">{t("footer.legal_terms")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
