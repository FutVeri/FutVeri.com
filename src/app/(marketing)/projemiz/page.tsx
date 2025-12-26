import type { Metadata } from "next";
import { SectionHeader, Card } from "@/components/ui";
import { ProblemVision, ImpactStats } from "@/components/sections";
import content from "@/data/content.json";
import { Milestone, Target, Sparkles, Rocket } from "lucide-react";

export const metadata: Metadata = {
    title: "Projemiz",
    description: "FutVeri projesini tanıyın. Vizyonumuz, misyonumuz ve futbol analitiğindeki yolculuğumuz hakkında bilgi edinin.",
};

const timeline = [
    {
        year: "2023 Q1",
        title: "Fikir Aşaması",
        description: "FutVeri fikri doğdu. Ekip kuruldu ve pazar araştırması yapıldı.",
        icon: Sparkles,
    },
    {
        year: "2023 Q2",
        title: "Geliştirme Başlangıcı",
        description: "MVP geliştirme sürecine başlandı. Temel özellikler belirlendi.",
        icon: Target,
    },
    {
        year: "2023 Q4",
        title: "Beta Lansmanı",
        description: "İlk kullanıcılarla beta testi başladı. Geri bildirimler toplandı.",
        icon: Milestone,
    },
    {
        year: "2024 Q1",
        title: "Resmi Lansman",
        description: "FutVeri uygulaması App Store ve Google Play'de yayınlandı.",
        icon: Rocket,
    },
];

export default function ProjectPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-950">
                <div className="container-main text-center">
                    <SectionHeader
                        badge="Projemiz"
                        title="FutVeri Hikayesi"
                        subtitle="Futbol analitiğini herkes için erişilebilir kılma yolculuğumuz."
                        className="[&_h2]:text-white [&_p]:text-gray-400"
                    />
                </div>
            </section>

            {/* Problem & Vision */}
            <ProblemVision data={content.problemVision} />

            {/* Timeline */}
            <section className="section-padding bg-gray-50 dark:bg-gray-900">
                <div className="container-main">
                    <SectionHeader
                        badge="Yolculuğumuz"
                        title="Zaman Çizelgesi"
                        subtitle="Başlangıçtan bugüne FutVeri'nin gelişimi."
                        align="center"
                    />

                    <div className="mt-16 max-w-3xl mx-auto">
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

                            {/* Timeline items */}
                            <div className="space-y-12">
                                {timeline.map((item, index) => (
                                    <div key={index} className="relative flex gap-6">
                                        {/* Icon */}
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center border-4 border-white dark:border-gray-900">
                                                <item.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <Card variant="default" padding="md" className="flex-1">
                                            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                                                {item.year}
                                            </span>
                                            <h3 className="heading-2 text-gray-900 dark:text-white mt-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                                {item.description}
                                            </p>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <ImpactStats data={content.impactStats} />

            {/* Future Vision */}
            <section className="section-padding bg-white dark:bg-gray-950">
                <div className="container-main">
                    <div className="max-w-3xl mx-auto text-center">
                        <SectionHeader
                            badge="Gelecek Vizyonu"
                            title="Önümüzdeki Dönem"
                            subtitle="FutVeri olarak hedeflerimiz büyük. İşte önümüzdeki dönemde planladıklarımız."
                            align="center"
                        />

                        <div className="mt-12 grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Uluslararası Genişleme", description: "Avrupa ve Orta Doğu pazarlarına açılma" },
                                { title: "AI Geliştirmeleri", description: "Daha gelişmiş yapay zeka modelleri" },
                                { title: "B2B Platformu", description: "Kulüpler için enterprise çözümler" },
                                { title: "Topluluk Özellikleri", description: "Scout ağı ve oyuncu vitrinleri" },
                            ].map((item, index) => (
                                <Card key={index} variant="gradient" padding="md">
                                    <h3 className="heading-2 text-gray-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
