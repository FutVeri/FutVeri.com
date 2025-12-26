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
                    <Card variant="default" padding="lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Başlık
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
                    <Card variant="default" padding="lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Rozet
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
                    <Card variant="default" padding="lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
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
                    <Card variant="gradient" padding="lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Canlı Önizleme
                            </h3>
                            <button className="text-sm text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline">
                                <RefreshCw className="w-4 h-4" />
                                Yenile
                            </button>
                        </div>
                        <div className="bg-gray-900 rounded-xl p-8 text-center">
                            {formData.badge && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-400 border border-primary-500/30 mb-4">
                                    {formData.badge}
                                </span>
                            )}
                            <h1 className="text-2xl md:text-3xl font-bold text-white">
                                {formData.title}{" "}
                                {formData.highlightedText && (
                                    <span className="gradient-text">{formData.highlightedText}</span>
                                )}
                            </h1>
                            <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
                                {formData.subtitle}
                            </p>
                            <div className="flex items-center justify-center gap-3 mt-6">
                                {formData.ctaPrimaryText && (
                                    <span className="px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium">
                                        {formData.ctaPrimaryText}
                                    </span>
                                )}
                                {formData.ctaSecondaryText && (
                                    <span className="px-4 py-2 text-gray-300 text-sm">
                                        {formData.ctaSecondaryText} →
                                    </span>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
