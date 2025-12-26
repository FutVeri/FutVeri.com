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

export default function HomePage() {
    return (
        <>
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
        </>
    );
}
