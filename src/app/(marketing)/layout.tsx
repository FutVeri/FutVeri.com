import { Header, Footer, type SocialLink } from "@/components/layout";
import content from "@/data/content.json";

// Type assertion for JSON data
const socialLinks = content.footer.socialLinks as SocialLink[];

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header
                logoText="FutVeri"
                navigation={content.navigation}
                ctaText="Uygulamayı İndir"
                ctaHref="#download"
            />
            <main>{children}</main>
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
