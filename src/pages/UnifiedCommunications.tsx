import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ucHeroImg from "@/assets/uc-hero.png";

const UnifiedCommunications = () => {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="uc-hero-section">
        <div className="uc-hero-inner">
          <div className="uc-hero-text">
            <p className="uc-hero-eyebrow">UNIFIED COMMUNICATIONS</p>
            <h1 className="hero-h1" style={{ textAlign: 'left' }}>
              Your team in<br />
              <span className="going-next">one app.</span>
            </h1>
            <p className="uc-hero-subtitle">
              Call and collaborate from anywhere with a single cloud PBX communication solution that unifies business phones, video conferencing, texting and collaboration under a single phone number.
            </p>
            <button className="btn-hero-a">
              Request a Demo <span style={{fontSize: '18px'}}>→</span>
            </button>
          </div>
          <div className="uc-hero-image">
            <img src={ucHeroImg} alt="Unified Communications - video calling and phone" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnifiedCommunications;
