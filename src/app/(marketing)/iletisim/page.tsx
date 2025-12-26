import type { Metadata } from "next";
import { Contact } from "@/components/sections";
import content from "@/data/content.json";

export const metadata: Metadata = {
    title: "İletişim",
    description: "FutVeri ekibiyle iletişime geçin. Sorularınız, önerileriniz veya iş birliği teklifleriniz için bize yazın.",
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-8 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-950">
                <div className="container-main text-center">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-500/10 border border-primary-500/30 text-primary-400">
                        İletişim
                    </span>
                    <h1 className="display-2 text-white mt-4">
                        Bizimle İletişime Geçin
                    </h1>
                    <p className="body-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        Sorularınız, önerileriniz veya iş birliği teklifleriniz için bize ulaşabilirsiniz.
                    </p>
                </div>
            </section>

            {/* Contact Form */}
            <Contact data={content.contact} className="pt-0" />

            {/* Map placeholder */}
            <section className="pb-20">
                <div className="container-main">
                    <div className="rounded-2xl overflow-hidden h-[400px] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                            <p className="text-lg font-medium">Harita Alanı</p>
                            <p className="text-sm">Google Maps entegrasyonu eklenecek</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
