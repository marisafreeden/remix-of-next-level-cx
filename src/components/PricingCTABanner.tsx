import ctaImage from "@/assets/pricing-cta-image.png";

const PricingCTABanner = () => {
  return (
    <section className="pricing-banner-section">
      <div className="pricing-banner-inner">
        <div className="pricing-banner-content">
          <h2 className="pricing-banner-title">
            Ready to transform your<br />
            <em className="pricing-banner-title-italic">business communications?</em>
          </h2>
          <p className="pricing-banner-subtitle">
            See why thousands of teams big and small stay connected with Broadvoice.
          </p>
          <a href="#" className="pricing-banner-cta">Get started <span style={{ fontSize: "18px" }}>→</span></a>
        </div>
        <div className="pricing-banner-image-wrap">
          <img src={ctaImage} alt="Business professional on a call" className="pricing-banner-image" />
        </div>
      </div>
    </section>
  );
};

export default PricingCTABanner;
