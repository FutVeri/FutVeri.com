import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui";
import { Features, HowItWorks, DownloadCTA } from "@/components/sections";
import content from "@/data/content.json";

export const metadata: Metadata = {
    title: "Uygulama",
    description: "FutVeri mobil uygulamasını keşfedin. Özellikler, nasıl çalışır ve indirme linkleri.",
};

const screenshots = [
    { id: 1, title: "Ana Ekran", description: "Tüm istatistiklerinize tek bakışta ulaşın" },
    { id: 2, title: "Oyuncu Analizi", description: "Detaylı oyuncu performans grafikleri" },
    { id: 3, title: "Maç Takibi", description: "Canlı maç istatistikleri ve analizler" },
    { id: 4, title: "Karşılaştırma", description: "Oyuncuları yan yana karşılaştırın" },
];

export default function AppPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-950">
                <div className="container-main text-center">
                    <SectionHeader
                        badge="Mobil Uygulama"
                        title="FutVeri Uygulaması"
                        subtitle="Futbol analitiğinin gücünü cebinize taşıyın. iPhone ve Android için ücretsiz indirin."
                        className="[&_h2]:text-white [&_p]:text-gray-300 [&_span]:text-white [&_span]:bg-primary-600 [&_span]:border-primary-500"
                    />
                </div>
            </section>

            {/* Features */}
            <Features data={content.features} columns={3} />

            {/* How It Works */}
            <HowItWorks data={content.howItWorks} />

            {/* Screenshots */}
            <section className="section-padding bg-gray-50 dark:bg-gray-900">
                <div className="container-main">
                    <SectionHeader
                        badge="Ekran Görüntüleri"
                        title="Uygulama İçinden"
                        subtitle="Modern ve kullanıcı dostu arayüzümüzü keşfedin."
                        align="center"
                    />
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {screenshots.map((screenshot) => (
                            <div
                                key={screenshot.id}
                                className="group"
                            >
                                <div className="aspect-[9/16] bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden mb-4 relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        <span className="text-6xl">📱</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <span className="text-white text-sm font-medium">
                                            {screenshot.title}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    {screenshot.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {screenshot.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download CTA */}
            <DownloadCTA data={content.downloadCTA} />
        </>
    );
}
