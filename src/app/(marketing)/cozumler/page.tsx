import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui";
import { BusinessSolutions, Contact } from "@/components/sections";
import content from "@/data/content.json";

export const metadata: Metadata = {
    title: "İş Çözümleri",
    description: "Futbol kulüpleri, akademiler ve scoutlar için profesyonel analitik çözümler. FutVeri kurumsal çözümlerini keşfedin.",
};

export default function SolutionsPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-950">
                <div className="container-main text-center">
                    <SectionHeader
                        badge="İş Çözümleri"
                        title="Kurumsal Çözümler"
                        subtitle="Futbol kulüpleri, akademiler ve federasyonlar için özel analitik çözümler. Profesyonel ihtiyaçlarınız için güçlü araçlar."
                        className="[&_h2]:text-white [&_p]:text-gray-300 [&_span]:text-white [&_span]:bg-primary-600 [&_span]:border-primary-500"
                    />
                </div>
            </section>

            {/* Solutions */}
            <BusinessSolutions data={content.businessSolutions} className="pt-0" />

            {/* Why Choose Us */}
            <section className="section-padding bg-gray-50 dark:bg-gray-900">
                <div className="container-main">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 mb-4">
                                Neden FutVeri?
                            </span>
                            <h2 className="display-2 text-gray-900 dark:text-white mb-6">
                                Kurumsal Avantajlar
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Özelleştirilebilir dashboard ve raporlama",
                                    "Dedicated account manager desteği",
                                    "API erişimi ve entegrasyon desteği",
                                    "On-premise kurulum seçeneği",
                                    "SLA garantisi ve 7/24 destek",
                                    "Eğitim ve onboarding programları",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center">
                                <span className="text-6xl">📊</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-white dark:bg-gray-950">
                <div className="container-main">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="display-2 text-gray-900 dark:text-white mb-4">
                            Kurumsal Demo Talep Edin
                        </h2>
                        <p className="body-lg text-gray-600 dark:text-gray-400 mb-8">
                            Ekibimiz size özel bir demo hazırlayarak ihtiyaçlarınıza en uygun çözümü sunacak.
                        </p>
                        <a
                            href="/iletisim"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/20"
                        >
                            Demo Talep Et
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
