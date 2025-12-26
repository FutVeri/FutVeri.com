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
                "bg-gradient-to-br from-gray-900 via-gray-900 to-primary-950",
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
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Content */}
            <div className="container-main relative z-10 py-20">
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
                                    "bg-primary-500/10 border border-primary-500/30",
                                    "text-primary-400"
                                )}
                            >
                                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                                {data.badge}
                            </span>
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h1
                        className="display-1 text-white mt-6"
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
                        className="body-lg text-gray-400 mt-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {data.subtitle}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
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
                            className="flex items-center justify-center gap-8 sm:gap-16 mt-16 pt-10 border-t border-white/10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {data.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-white">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Floating App Preview (optional decoration) */}
                <motion.div
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-lg opacity-60"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="w-full h-[300px] bg-gradient-to-t from-transparent to-gray-800/50 rounded-t-3xl border border-white/10 border-b-0" />
                </motion.div>
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
