import "@/App.css";
import "@/styles/megamenu.css";
import "@/styles/footer.css";
import "@/styles/uc.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";
import "@fontsource/instrument-sans/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import {
  Phone, Video, MessageSquare, Monitor, Users, Link2,
  Shield, Mic, History, Voicemail, Eye, FileText, ChevronRight, Smartphone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABlock from "@/components/CTABlock";
import ucHeroImg from "@/assets/uc-hero.png";

const benefits = [
  { icon: Phone, title: "One App, Every Channel", desc: "Call, text, chat, and video conference with customers and teammates — all from a single interface and one business number." },
  { icon: Video, title: "Rebuilt for Modern Teams", desc: "A completely redesigned experience with faster performance, cleaner UI, and enterprise-grade encrypted video." },
  { icon: Users, title: "Included with b-hive", desc: "Every standard b-hive seat includes Communicator. Pro seats unlock full video conferencing and screen sharing." },
];

const features = [
  {
    title: "Every conversation, your way.",
    desc: "Follow up a call with a text. Escalate a chat into a video meeting. Share your screen mid-conversation. Communicator lets your team move fluidly between channels without ever switching apps — so customers get faster answers and teammates stay in sync.",
  },
  {
    title: "Collaboration without boundaries.",
    desc: "Give your team the tools to work together from anywhere. Host video conferences with up to 50 participants, create persistent chat groups, share files in real time, and use personal meeting links that make scheduling effortless. Your full company directory is always a click away.",
  },
  {
    title: "Your office in your pocket.",
    desc: "Carry your entire business phone system wherever you go. The all-new mobile app for iOS and Android lets you place calls, send texts, join video meetings, and collaborate with your team — all from your business number, not your personal one.",
  },
];

const featureGrid = [
  { icon: Phone, title: "Voice Calling", desc: "Make, take, and manage calls with mute, hold, and transfer — right from your desktop." },
  { icon: MessageSquare, title: "Real-Time Chat", desc: "Message teammates one-on-one or in groups with persistent, searchable threads." },
  { icon: Video, title: "Video Conferencing", desc: "Crystal-clear video meetings for up to 50 participants with one click." },
  { icon: Smartphone, title: "Text Messaging", desc: "Send and receive SMS from your business number to any mobile device." },
  { icon: Monitor, title: "Screen Sharing", desc: "Present slides, walk through apps, or share your full desktop in seconds." },
  { icon: Link2, title: "Personal Meeting Links", desc: "Every user gets a unique video room URL — plus schedulable links for future meetings." },
  { icon: Shield, title: "Meeting Lobbies", desc: "Keep video calls private. Only the host can admit guests from the lobby." },
  { icon: Mic, title: "Call Recording", desc: "Record voice and video calls on demand and store them for review." },
  { icon: History, title: "Chat History", desc: "Full meeting details with recordings and chat transcripts, always accessible." },
  { icon: Voicemail, title: "Voicemail & Fax", desc: "Speech-to-text voicemail and virtual fax — no extra hardware needed." },
  { icon: Eye, title: "Team Presence", desc: "See who's available, busy, or away in real time across your entire org." },
  { icon: FileText, title: "HIPAA Compliant", desc: "Secure, encrypted communications that meet healthcare compliance standards." },
];

const VideoMessaging = () => {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="uc-hero-section">
        <div className="uc-hero-inner">
          <div className="uc-hero-text">
            <h1 className="hero-h1" style={{ textAlign: 'left', lineHeight: '1.05' }}>
              One app for<br />
              <span className="going-next">every conversation.</span>
            </h1>
            <p className="uc-hero-subtitle">
              Calling, video, texting, and collaboration — unified in a single interface. Your team communicates faster. Your customers get better answers.
            </p>
            <button className="btn-hero-a">
              Request a Demo <span style={{ fontSize: '18px' }}>→</span>
            </button>
          </div>
          <div className="uc-hero-image">
            <img src={ucHeroImg} alt="Video and Messaging - b-hive Communicator" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">WHY COMMUNICATOR</p>
          <h2 className="promos-title">
            Connected teams build<br />
            <span className="promos-title-italic">stronger businesses.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {benefits.map((b) => (
            <div key={b.title} className="uc-benefit-card">
              <div className="uc-benefit-icon">
                <b.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="uc-benefit-title">{b.title}</h3>
              <p className="uc-benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Big Feature Image */}
      <section className="uc-features-section" style={{ paddingBottom: 0 }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="uc-benefits-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="promos-eyebrow" style={{ textAlign: 'center' }}>THE PLATFORM</p>
            <h2 className="promos-title" style={{ textAlign: 'center' }}>
              Made to help your team<br />
              <span className="promos-title-italic">succeed.</span>
            </h2>
          </div>
          <div className="uc-big-feature-image">
            <img src={ucHeroImg} alt="b-hive Communicator platform overview" />
          </div>
        </div>
      </section>

      {/* Features - Alternating Rows */}
      <section className="uc-features-section">
        <div className="promos-stack">
          {features.map((f, i) => (
            <div key={f.title} className={`promo-row ${i % 2 === 1 ? "promo-row-reverse" : ""}`}>
              <div className="promo-row-text">
                <h3 className="promo-row-title">{f.title}</h3>
                <p className="promo-row-desc" style={{ maxWidth: '520px' }}>{f.desc}</p>
                <button className="promo-row-cta">
                  Learn more <ChevronRight size={16} />
                </button>
              </div>
              <div className="promo-row-image-wrap">
                <div className="uc-feature-placeholder">
                  <img src={ucHeroImg} alt={f.title} className="promo-row-image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="uc-benefits-section">
        <div className="uc-benefits-header">
          <p className="promos-eyebrow">EVERY TOOL YOU NEED</p>
          <h2 className="promos-title">
            Communicate and collaborate.<br />
            <span className="promos-title-italic">All in one place.</span>
          </h2>
        </div>
        <div className="uc-benefits-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {featureGrid.map((f) => (
            <div key={f.title} className="uc-benefit-card">
              <div className="uc-benefit-icon">
                <f.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="uc-benefit-title">{f.title}</h3>
              <p className="uc-benefit-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <CTABlock />
      <Footer />
    </div>
  );
};

export default VideoMessaging;
