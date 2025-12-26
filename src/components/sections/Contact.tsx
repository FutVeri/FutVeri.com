"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { SectionHeader, Button, Input, Textarea } from "@/components/ui";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";

export interface ContactData {
    badge?: string;
    title: string;
    subtitle?: string;
    email?: string;
    phone?: string;
    address?: string;
    formTitle?: string;
    formSubtitle?: string;
}

interface ContactProps {
    data: ContactData;
    className?: string;
}

export function Contact({ data, className }: ContactProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section className={cn("section-padding bg-gray-50 dark:bg-gray-900", className)}>
            <div className="container-main">
                <SectionHeader
                    badge={data.badge}
                    title={data.title}
                    subtitle={data.subtitle}
                    align="center"
                />

                <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="heading-1 text-gray-900 dark:text-white mb-6">
                            Bize Ulaşın
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Sorularınız, önerileriniz veya iş birliği teklifleriniz için bize ulaşabilirsiniz.
                        </p>

                        <div className="space-y-6">
                            {data.email && (
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                            E-posta
                                        </div>
                                        <a
                                            href={`mailto:${data.email}`}
                                            className="font-medium text-gray-900 dark:text-white hover:text-primary-600 transition-colors"
                                        >
                                            {data.email}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {data.phone && (
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                            Telefon
                                        </div>
                                        <a
                                            href={`tel:${data.phone}`}
                                            className="font-medium text-gray-900 dark:text-white hover:text-primary-600 transition-colors"
                                        >
                                            {data.phone}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {data.address && (
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                            Adres
                                        </div>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {data.address}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div
                            className={cn(
                                "p-6 md:p-8 rounded-2xl",
                                "bg-white dark:bg-gray-800",
                                "border border-gray-200 dark:border-gray-700",
                                "shadow-lg"
                            )}
                        >
                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <h4 className="heading-2 text-gray-900 dark:text-white mb-2">
                                        Mesajınız Gönderildi!
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        En kısa sürede size geri dönüş yapacağız.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    {(data.formTitle || data.formSubtitle) && (
                                        <div className="mb-6">
                                            {data.formTitle && (
                                                <h4 className="heading-2 text-gray-900 dark:text-white">
                                                    {data.formTitle}
                                                </h4>
                                            )}
                                            {data.formSubtitle && (
                                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                                    {data.formSubtitle}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <Input
                                                label="Ad Soyad"
                                                placeholder="Adınızı girin"
                                                required
                                            />
                                            <Input
                                                label="E-posta"
                                                type="email"
                                                placeholder="ornek@email.com"
                                                required
                                            />
                                        </div>
                                        <Input
                                            label="Telefon"
                                            type="tel"
                                            placeholder="+90 5XX XXX XX XX"
                                        />
                                        <Input
                                            label="Konu"
                                            placeholder="Mesajınızın konusu"
                                            required
                                        />
                                        <Textarea
                                            label="Mesaj"
                                            placeholder="Mesajınızı buraya yazın..."
                                            rows={4}
                                            required
                                        />
                                        <Button
                                            type="submit"
                                            size="lg"
                                            fullWidth
                                            icon={Send}
                                            iconPosition="right"
                                            isLoading={isSubmitting}
                                        >
                                            {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
