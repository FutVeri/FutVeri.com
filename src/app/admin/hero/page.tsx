"use client";

import { useState } from "react";
import { Topbar } from "@/components/admin";
import { Card, Button, Input, Textarea } from "@/components/ui";
import { Save, Eye, RefreshCw } from "lucide-react";
import content from "@/data/content.json";

export default function HeroEditorPage() {
    const [formData, setFormData] = useState({
        title: content.hero.title,
        highlightedText: content.hero.highlightedText || "",
        subtitle: content.hero.subtitle,
        badge: content.hero.badge || "",
        ctaPrimaryText: content.hero.ctaPrimary.text,
        ctaPrimaryHref: content.hero.ctaPrimary.href,
        ctaSecondaryText: content.hero.ctaSecondary?.text || "",
        ctaSecondaryHref: content.hero.ctaSecondary?.href || "",
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async () => {
        setIsSaving(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSaving(false);
        alert("Değişiklikler kaydedildi!");
    };

    return (
        <>
            <Topbar title="Hero Düzenleme" />

            <div className="p-6 max-w-4xl">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Hero Bölümü
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Ana sayfanın üst kısmındaki hero bölümünü düzenleyin.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="secondary" icon={Eye}>
                            Önizle
                        </Button>
                        <Button
                            variant="primary"
                            icon={Save}
                            onClick={handleSave}
                            isLoading={isSaving}
                        >
                            Kaydet
                        </Button>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Title Section */}
                    <Card variant="default" padding="lg" className="bg-white dark:bg-gray-800/50">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-primary-500 rounded-full" />
                            Başlık Yapılandırması
                        </h3>
                        <div className="grid gap-4">
                            <Input
                                label="Ana Başlık"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Ana başlık..."
                            />
                            <Input
                                label="Vurgulanan Metin (Gradient)"
                                name="highlightedText"
                                value={formData.highlightedText}
                                onChange={handleChange}
                                placeholder="Gradient ile vurgulanacak metin..."
                                helperText="Bu metin yeşil gradient ile vurgulanacak."
                            />
                            <Textarea
                                label="Alt Başlık"
                                name="subtitle"
                                value={formData.subtitle}
                                onChange={handleChange}
                                placeholder="Alt başlık..."
                                rows={3}
                            />
                        </div>
                    </Card>

                    {/* Badge */}
                    <Card variant="default" padding="lg" className="bg-white dark:bg-gray-800/50">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-primary-500 rounded-full" />
                            Rozet Ayarları
                        </h3>
                        <Input
                            label="Rozet Metni"
                            name="badge"
                            value={formData.badge}
                            onChange={handleChange}
                            placeholder="Örn: 🚀 Mobil uygulamamız yayında!"
                            helperText="Boş bırakırsanız rozet gösterilmez."
                        />
                    </Card>

                    {/* CTAs */}
                    <Card variant="default" padding="lg" className="bg-white dark:bg-gray-800/50">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-primary-500 rounded-full" />
                            Aksiyon Butonları
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    Birincil Buton (Yeşil)
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Input
                                        label="Buton Metni"
                                        name="ctaPrimaryText"
                                        value={formData.ctaPrimaryText}
                                        onChange={handleChange}
                                        placeholder="Uygulamayı İndir"
                                    />
                                    <Input
                                        label="Buton Linki"
                                        name="ctaPrimaryHref"
                                        value={formData.ctaPrimaryHref}
                                        onChange={handleChange}
                                        placeholder="#download"
                                    />
                                </div>
                            </div>

                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                    İkincil Buton (Ghost)
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Input
                                        label="Buton Metni"
                                        name="ctaSecondaryText"
                                        value={formData.ctaSecondaryText}
                                        onChange={handleChange}
                                        placeholder="Projeyi Keşfet"
                                    />
                                    <Input
                                        label="Buton Linki"
                                        name="ctaSecondaryHref"
                                        value={formData.ctaSecondaryHref}
                                        onChange={handleChange}
                                        placeholder="/projemiz"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Preview */}
                    <Card variant="outline" padding="lg" className="bg-gray-50/50 dark:bg-gray-900/20">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="w-1 h-4 bg-primary-500 rounded-full" />
                                Canlı Önizleme
                            </h3>
                            <button className="text-sm font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline">
                                <RefreshCw className="w-4 h-4" />
                                Yenile
                            </button>
                        </div>
                        <div className="relative rounded-3xl p-10 text-center overflow-hidden border border-gray-100 dark:border-gray-800 bg-gradient-to-br from-blue-50 via-white to-sky-50 shadow-inner">
                            {/* Grid overlay for preview */}
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />

                            <div className="relative z-10">
                                {formData.badge && (
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-50 text-primary-600 border border-primary-100 mb-6">
                                        {formData.badge}
                                    </span>
                                )}
                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                                    {formData.title}{" "}
                                    {formData.highlightedText && (
                                        <span className="text-primary-600">{formData.highlightedText}</span>
                                    )}
                                </h1>
                                <p className="text-gray-500 mt-6 text-sm max-w-lg mx-auto leading-relaxed">
                                    {formData.subtitle}
                                </p>
                                <div className="flex items-center justify-center gap-4 mt-8">
                                    {formData.ctaPrimaryText && (
                                        <span className="px-6 py-3 rounded-xl bg-gray-900 text-white text-xs font-bold uppercase tracking-wider">
                                            {formData.ctaPrimaryText}
                                        </span>
                                    )}
                                    {formData.ctaSecondaryText && (
                                        <span className="px-6 py-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
                                            {formData.ctaSecondaryText}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
