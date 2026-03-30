import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-globe-btn"
        onClick={() => setOpen(!open)}
        aria-label="Select language"
      >
        <Globe size={18} strokeWidth={1.5} />
      </button>
      {open && (
        <div className="lang-dropdown-menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-dropdown-item ${i18n.language?.startsWith(lang.code) ? "lang-dropdown-item-active" : ""}`}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
            >
              <span className="lang-dropdown-flag">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
