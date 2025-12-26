"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { SectionHeader, Button } from "@/components/ui";
import { Apple, PlayCircle, Smartphone } from "lucide-react";

export interface DownloadCTAData {
    badge?: string;
    title: string;
    subtitle?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    features?: string[];
}

interface DownloadCTAProps {
    data: DownloadCTAData;
    className?: string;
}

export function DownloadCTA({ data, className }: DownloadCTAProps) {
    return (
        <section className={cn("section-padding bg-white dark:bg-gray-950", className)}>
            <div className="container-main">
                <div
                    className={cn(
                        "relative overflow-hidden",
                        "rounded-3xl",
                        "bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500",
                        "p-6 sm:p-8 md:p-12 lg:p-16"
                    )}
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                        {/* Content */}
                        <div className="flex-1 text-center lg:text-left">
                            {data.badge && (
                                <motion.span
                                    className={cn(
                                        "inline-flex items-center gap-2",
                                        "px-4 py-1.5 rounded-full",
                                        "text-sm font-semibold",
                                        "bg-white/20 text-white"
                                    )}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <Smartphone className="w-4 h-4" />
                                    {data.badge}
                                </motion.span>
                            )}

                            <motion.h2
                                className="display-2 text-white mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                {data.title}
                            </motion.h2>

                            <motion.p
                                className="body-lg text-white/80 mt-4 max-w-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                {data.subtitle}
                            </motion.p>

                            {data.features && data.features.length > 0 && (
                                <motion.ul
                                    className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {data.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2 text-white/90 text-sm"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                            {feature}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}

                            {/* Download Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                {data.appStoreUrl && (
                                    <a
                                        href={data.appStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "flex items-center gap-3 px-6 py-3 rounded-xl",
                                            "bg-black text-white",
                                            "hover:bg-gray-900 transition-colors",
                                            "min-w-[180px]"
                                        )}
                                    >
                                        <Apple className="w-7 h-7" />
                                        <div className="text-left">
                                            <div className="text-xs text-gray-400">Download on the</div>
                                            <div className="font-semibold">App Store</div>
                                        </div>
                                    </a>
                                )}
                                {data.playStoreUrl && (
                                    <a
                                        href={data.playStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "flex items-center gap-3 px-6 py-3 rounded-xl",
                                            "bg-black text-white",
                                            "hover:bg-gray-900 transition-colors",
                                            "min-w-[180px]"
                                        )}
                                    >
                                        <PlayCircle className="w-7 h-7" />
                                        <div className="text-left">
                                            <div className="text-xs text-gray-400">Get it on</div>
                                            <div className="font-semibold">Google Play</div>
                                        </div>
                                    </a>
                                )}
                            </motion.div>
                        </div>

                        {/* Phone Mockup */}
                        <motion.div
                            className="flex-shrink-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div
                                className={cn(
                                    "w-52 h-[420px] sm:w-64 sm:h-[500px] rounded-[2.5rem] sm:rounded-[3rem]",
                                    "bg-gradient-to-br from-gray-900 to-gray-800",
                                    "border-4 border-gray-700",
                                    "shadow-2xl shadow-black/30",
                                    "flex items-center justify-center",
                                    "relative overflow-hidden"
                                )}
                            >
                                {/* Screen */}
                                <div className="absolute inset-2 rounded-[2rem] sm:rounded-[2.5rem] bg-gray-950 overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-primary-600/20 to-accent-500/20 flex items-center justify-center">
                                        <span className="text-4xl">📱</span>
                                    </div>
                                </div>
                                {/* Notch */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
