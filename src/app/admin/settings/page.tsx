"use client";

import { useState } from "react";
import { Topbar } from "@/components/admin";
import { Card, Button, Input } from "@/components/ui";
import { Save, Globe, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        siteName: "FutVeri",
        siteDescription: "Yapay zeka destekli futbol analitik platformu.",
        siteUrl: "https://futveri.com",
        contactEmail: "info@futveri.com",
        contactPhone: "+90 212 123 45 67",
        address: "İstanbul, Türkiye",
        twitter: "https://twitter.com/futveri",
        instagram: "https://instagram.com/futveri",
        linkedin: "https://linkedin.com/company/futveri",
        github: "https://github.com/futveri",
        appStoreUrl: "https://apps.apple.com/app/futveri",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.futveri.app",
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSettings({
            ...settings,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async () => {
        setIsSaving(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSaving(false);
        alert("Ayarlar kaydedildi!");
    };

    return (
        <>
            <Topbar title="Ayarlar" />

            <div className="p-6 max-w-3xl">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Site Ayarları
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Genel site ayarlarını ve iletişim bilgilerini yönetin.
                        </p>
                    </div>
                    <Button
                        variant="primary"
                        icon={Save}
                        onClick={handleSave}
                        isLoading={isSaving}
                    >
                        Kaydet
                    </Button>
                </div>

                <div className="space-y-6">
                    {/* General */}
                    <Card variant="default" padding="lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-primary-600" />
                            Genel Bilgiler
                        </h3>
                        <div className="grid gap-4">
                            <Input
                                label="Site Adı"
                                name="siteName"
                                value={settings.siteName}
                                onChange={handleChange}
                            />
                            <Input
                                label="Site Açıklaması"
                                name="siteDescription"
                                value={settings.siteDescription}
                                onChange={handleChange}
                            />
                            <Input
                                label="Site URL"
                                name="siteUrl"
                                value={settings.siteUrl}
                                onChange={handleChange}
                            />
                        </div>
                    </Card>

                    {/* Contact */}
                    <Card variant="default" padding="lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-primary-600" />
                            İletişim Bilgileri
                        </h3>
                        <div className="grid gap-4">
                            <Input
                                label="E-posta"
                                name="contactEmail"
                                value={settings.contactEmail}
                                onChange={handleChange}
                                leftIcon={<Mail className="w-4 h-4" />}
                            />
                            <Input
                                label="Telefon"
                                name="contactPhone"
                                value={settings.contactPhone}
                                onChange={handleChange}
                                leftIcon={<Phone className="w-4 h-4" />}
                            />
                            <Input
                                label="Adres"
                                name="address"
                                value={settings.address}
                                onChange={handleChange}
                                leftIcon={<MapPin className="w-4 h-4" />}
                            />
                        </div>
                    </Card>

                    {/* Social */}
                    <Card variant="default" padding="lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Twitter className="w-5 h-5 text-primary-600" />
                            Sosyal Medya
                        </h3>
                        <div className="grid gap-4">
                            <Input
                                label="Twitter"
                                name="twitter"
                                value={settings.twitter}
                                onChange={handleChange}
                                leftIcon={<Twitter className="w-4 h-4" />}
                            />
                            <Input
                                label="Instagram"
                                name="instagram"
                                value={settings.instagram}
                                onChange={handleChange}
                                leftIcon={<Instagram className="w-4 h-4" />}
                            />
                            <Input
                                label="LinkedIn"
                                name="linkedin"
                                value={settings.linkedin}
                                onChange={handleChange}
                                leftIcon={<Linkedin className="w-4 h-4" />}
                            />
                            <Input
                                label="GitHub"
                                name="github"
                                value={settings.github}
                                onChange={handleChange}
                                leftIcon={<Github className="w-4 h-4" />}
                            />
                        </div>
                    </Card>

                    {/* App Links */}
                    <Card variant="default" padding="lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Uygulama Linkleri
                        </h3>
                        <div className="grid gap-4">
                            <Input
                                label="App Store URL"
                                name="appStoreUrl"
                                value={settings.appStoreUrl}
                                onChange={handleChange}
                                placeholder="https://apps.apple.com/..."
                            />
                            <Input
                                label="Google Play URL"
                                name="playStoreUrl"
                                value={settings.playStoreUrl}
                                onChange={handleChange}
                                placeholder="https://play.google.com/..."
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
