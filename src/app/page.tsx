import { Header, Footer, type SocialLink } from "@/components/layout";
import {
  Hero,
  ProblemVision,
  Features,
  HowItWorks,
  ImpactStats,
  DownloadCTA,
  BusinessSolutions,
  Contact,
} from "@/components/sections";
import content from "@/data/content.json";

// Type assertion for JSON data
const socialLinks = content.footer.socialLinks as SocialLink[];

export default function HomePage() {
  return (
    <>
      <Header
        logoText="FutVeri"
        navigation={content.navigation}
        ctaText="Uygulamayı İndir"
        ctaHref="#download"
      />
      <main>
        {/* Hero Section */}
        <Hero data={content.hero} />

        {/* Problem & Vision */}
        <ProblemVision data={content.problemVision} />

        {/* Features */}
        <section id="features">
          <Features data={content.features} columns={3} />
        </section>

        {/* How It Works */}
        <section id="how-it-works">
          <HowItWorks data={content.howItWorks} />
        </section>

        {/* Impact Stats */}
        <ImpactStats data={content.impactStats} />

        {/* Download CTA */}
        <section id="download">
          <DownloadCTA data={content.downloadCTA} />
        </section>

        {/* Business Solutions */}
        <BusinessSolutions data={content.businessSolutions} />

        {/* Contact */}
        <section id="contact">
          <Contact data={content.contact} />
        </section>
      </main>
      <Footer
        logoText="FutVeri"
        description={content.footer.description}
        sections={content.footer.sections}
        socialLinks={socialLinks}
        contactEmail={content.footer.contactEmail}
        contactPhone={content.footer.contactPhone}
        address={content.footer.address}
      />
    </>
  );
}
