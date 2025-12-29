import type { Metadata } from "next";
import { SectionHeader, Card } from "@/components/ui";
import { Team } from "@/components/sections";
import content from "@/data/content.json";
import { Target, Heart, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description: "FutVeri ekibini ve hikayemizi tanıyın. Futbol analitiğini demokratikleştirme misyonumuz hakkında bilgi edinin.",
};

const values = [
    {
        icon: Target,
        title: "Misyon Odaklı",
        description: "Futbol analitiğini herkes için erişilebilir kılma misyonumuzda kararlıyız.",
    },
    {
        icon: Heart,
        title: "Futbol Tutkusu",
        description: "Ekibimiz futbola olan tutkusuyla bir araya gelmiş profesyonellerden oluşuyor.",
    },
    {
        icon: Zap,
        title: "İnovasyon",
        description: "En son teknolojileri kullanarak sürekli yenilik yapıyor ve gelişiyoruz.",
    },
    {
        icon: Shield,
        title: "Güvenilirlik",
        description: "Kullanıcılarımızın verilerini korumak ve güvenli bir platform sunmak önceliğimiz.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-950">
                <div className="container-main text-center">
                    <SectionHeader
                        badge="Hakkımızda"
                        title="Hikayemiz"
                        subtitle="Futbol tutkusu ve teknoloji uzmanlığını bir araya getirerek futbol analitiğinin geleceğini şekillendiriyoruz."
                        className="[&_h2]:text-white [&_p]:text-gray-300 [&_span]:text-white [&_span]:bg-primary-600 [&_span]:border-primary-500"
                    />
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-white dark:bg-gray-950">
                <div className="container-main">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="heading-1 text-gray-900 dark:text-white mb-6">
                            Neden FutVeri?
                        </h2>
                        <div className="prose prose-lg dark:prose-invert">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                FutVeri, 2025 yılında bir grup futbol tutkunu ve teknoloji uzmanı tarafından kuruldu.
                                Amacımız basit ama güçlü: Futbol analitiğini profesyonel kulüplerden amatör takımlara
                                kadar herkes için erişilebilir kılmak.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                Geleneksel futbol analitiği araçları pahalı, karmaşık ve sadece büyük kulüplerin
                                erişebileceği sistemlerdi. Biz bu durumu değiştirmek istedik. Yapay zeka ve modern
                                teknolojileri kullanarak, herkesin anlayabileceği ve kullanabileceği bir platform geliştirdik.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Bugün, binlerce kullanıcı ve onlarca partner kulüp ile çalışıyoruz. Ama bu sadece başlangıç.
                                Hedefimiz, dünyanın en büyük futbol analitiği platformu olmak ve futbolun geleceğini
                                şekillendirmeye yardımcı olmak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-gray-50 dark:bg-gray-900">
                <div className="container-main">
                    <SectionHeader
                        title="Değerlerimiz"
                        subtitle="Bizi yönlendiren temel değerler."
                        align="center"
                    />
                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} variant="default" hover padding="lg" className="text-center">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="heading-2 text-gray-900 dark:text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {value.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <Team data={content.team} />
        </>
    );
}
