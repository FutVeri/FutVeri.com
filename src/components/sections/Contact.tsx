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

                <div className="mt-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-12">
                            <h3 className="display-2 text-gray-900 dark:text-white mb-6">
                                {data.formTitle || "Bize Ulaşın"}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                                {data.formSubtitle || "Sorularınız, önerileriniz veya iş birliği teklifleriniz için bize ulaşabilirsiniz."}
                            </p>
                        </div>

                        <div className="space-y-10">
                            {[
                                { icon: Mail, label: "E-posta", value: data.email, href: `mailto:${data.email}` },
                                { icon: Phone, label: "Telefon", value: data.phone, href: `tel:${data.phone}` },
                                { icon: MapPin, label: "Adres", value: data.address },
                            ].map((item, index) => item.value && (
                                <div key={index} className="group flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-colors">
                                        <item.icon className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">
                                            {item.label}
                                        </div>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div
                            className={cn(
                                "p-10 md:p-12 rounded-[2.5rem]",
                                "bg-white dark:bg-gray-900",
                                "border border-gray-100 dark:border-gray-800",
                                "shadow-[0_30px_60px_rgba(0,0,0,0.08)] dark:shadow-none"
                            )}
                        >
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <h4 className="display-2 text-gray-900 dark:text-white mb-4">
                                        Gönderildi!
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        En kısa sürede size geri dönüş yapacağız.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <Input
                                            label="Ad Soyad"
                                            placeholder="Adınızı girin"
                                            required
                                            className="bg-gray-50/30 border-gray-100"
                                        />
                                        <Input
                                            label="E-posta"
                                            type="email"
                                            placeholder="ornek@email.com"
                                            required
                                            className="bg-gray-50/30 border-gray-100"
                                        />
                                    </div>
                                    <Input
                                        label="Telefon"
                                        type="tel"
                                        placeholder="+90 5XX XXX XX XX"
                                        className="bg-gray-50/30 border-gray-100"
                                    />
                                    <Input
                                        label="Konu"
                                        placeholder="Mesajınızın konusu"
                                        required
                                        className="bg-gray-50/30 border-gray-100"
                                    />
                                    <Textarea
                                        label="Mesaj"
                                        placeholder="Mesajınızı buraya yazın..."
                                        rows={4}
                                        required
                                        className="bg-gray-50/30 border-gray-100"
                                    />
                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            fullWidth
                                            icon={Send}
                                            iconPosition="right"
                                            isLoading={isSubmitting}
                                            className="h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary-500/10 hover:shadow-primary-500/20"
                                        >
                                            {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
