"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { ArrowRight, Download, Play } from "lucide-react";

export interface HeroData {
    title: string;
    highlightedText?: string;
    subtitle: string;
    ctaPrimary: { text: string; href: string };
    ctaSecondary?: { text: string; href: string };
    badge?: string;
    stats?: Array<{ value: string; label: string }>;
}

interface HeroProps {
    data: HeroData;
    className?: string;
}

export function Hero({ data, className }: HeroProps) {
    return (
        <section
            className={cn(
                "relative min-h-screen flex items-center justify-center overflow-hidden",
                "bg-gradient-to-br from-blue-50 via-white to-sky-50",
                className
            )}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>

            {/* Content */}
            <div className="container-main relative z-10 pt-28 pb-32 sm:pt-32 sm:pb-40">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    {data.badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span
                                className={cn(
                                    "inline-flex items-center gap-2",
                                    "px-4 py-2 rounded-full",
                                    "text-sm font-semibold",
                                    "bg-primary-50 border border-primary-200",
                                    "text-primary-600"
                                )}
                            >
                                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                                {data.badge}
                            </span>
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h1
                        className="display-1 text-gray-900 mt-10 md:mt-12 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {data.highlightedText ? (
                            <>
                                {data.title}{" "}
                                <span className="gradient-text">{data.highlightedText}</span>
                            </>
                        ) : (
                            data.title
                        )}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="body-lg text-gray-600 mt-10 md:mt-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {data.subtitle}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button
                            href={data.ctaPrimary.href}
                            size="lg"
                            icon={Download}
                            iconPosition="left"
                            className="min-w-[200px]"
                        >
                            {data.ctaPrimary.text}
                        </Button>
                        {data.ctaSecondary && (
                            <Button
                                href={data.ctaSecondary.href}
                                variant="ghost"
                                size="lg"
                                icon={ArrowRight}
                                iconPosition="right"
                                className="text-gray-300 hover:text-white hover:bg-white/5"
                            >
                                {data.ctaSecondary.text}
                            </Button>
                        )}
                    </motion.div>

                    {/* Stats */}
                    {data.stats && data.stats.length > 0 && (
                        <motion.div
                            className="flex flex-wrap items-center justify-center gap-10 sm:gap-20 mt-24 pt-12 border-t border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {data.stats.map((stat, index) => (
                                <div key={index} className="text-center min-w-[100px]">
                                    <div className="text-3xl sm:text-5xl font-extrabold text-primary-600 tracking-tighter">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] sm:text-xs text-gray-400 mt-2 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="flex flex-col items-center gap-2 text-gray-500">
                    <span className="text-xs uppercase tracking-wider">Keşfet</span>
                    <motion.div
                        className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <div className="w-1.5 h-3 rounded-full bg-gray-500" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
