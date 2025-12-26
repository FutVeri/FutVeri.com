"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { AlertTriangle, Target, Lightbulb } from "lucide-react";

export interface ProblemVisionData {
    badge?: string;
    title: string;
    subtitle?: string;
    problems: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    vision: {
        title: string;
        description: string;
        highlights?: string[];
    };
}

interface ProblemVisionProps {
    data: ProblemVisionData;
    className?: string;
}

const iconMap: Record<string, React.ElementType> = {
    alert: AlertTriangle,
    target: Target,
    lightbulb: Lightbulb,
};

export function ProblemVision({ data, className }: ProblemVisionProps) {
    return (
        <section className={cn("section-padding bg-white dark:bg-gray-950", className)}>
            <div className="container-main">
                <SectionHeader
                    badge={data.badge}
                    title={data.title}
                    subtitle={data.subtitle}
                    align="center"
                />

                <div className="mt-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Problems Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-xs font-bold tracking-widest uppercase text-red-500 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-md">
                                Challenge
                            </span>
                            <div className="h-px flex-1 bg-red-100 dark:bg-red-900/20" />
                        </div>

                        <div className="space-y-10">
                            {data.problems.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative pl-8"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    {/* Vertical Indicator */}
                                    <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-gray-200 dark:bg-gray-800 group-hover:bg-red-400 transition-colors" />

                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                        {problem.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Vision Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-md">
                                Solution
                            </span>
                            <div className="h-px flex-1 bg-primary-100 dark:bg-primary-900/20" />
                        </div>

                        <div className="relative p-10 md:p-16 rounded-[3rem] bg-primary-50 dark:bg-primary-950/20 text-gray-900 dark:text-white border border-primary-100 dark:border-primary-900/30 shadow-sm overflow-hidden group">
                            {/* Decorative background glow */}
                            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary-500/5 rounded-full blur-[100px] group-hover:bg-primary-500/10 transition-colors duration-1000" />

                            <div className="relative z-10">
                                <h4 className="display-2 mb-8 leading-[1.15] tracking-tight text-primary-900 dark:text-primary-100">
                                    {data.vision.title}
                                </h4>
                                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-medium">
                                    {data.vision.description}
                                </p>

                                {data.vision.highlights && data.vision.highlights.length > 0 && (
                                    <div className="grid grid-cols-1 gap-6">
                                        {data.vision.highlights.map((highlight, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-4 py-4 border-t border-primary-100/50 dark:border-primary-900/20"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide uppercase">
                                                    {highlight}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
