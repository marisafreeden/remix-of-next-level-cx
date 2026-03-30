import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="hero-nav">
      <div className="hero-nav-inner">
        <a href="/" className="hero-nav-logo">
          <img src={logo} alt="Broadvoice" width={140} height={28} className="hero-nav-logo-img" />
        </a>

        <div className="hero-nav-links">
          <a href="#" className="hero-nav-link">{t("nav.products")}</a>
          <a href="#" className="hero-nav-link">{t("nav.pricing")}</a>
          <a href="#" className="hero-nav-link">{t("nav.resources")}</a>
          <a href="#" className="hero-nav-link">{t("nav.customers")}</a>
        </div>

        <div className="hero-nav-right">
          <LanguageSwitcher />
          <a href="#" className="hero-nav-login">{t("nav.login")}</a>
          <a href="#" className="hero-nav-cta">{t("nav.demo")}</a>
        </div>
      </div>
      <div className="hero-nav-divider" />
    </nav>
  );
};

export default Navbar;
