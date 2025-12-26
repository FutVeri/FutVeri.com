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

                <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Problems */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                            </div>
                            <h3 className="heading-2 text-gray-900 dark:text-white">Problem</h3>
                        </div>

                        <div className="space-y-4">
                            {data.problems.map((problem, index) => {
                                const IconComponent = iconMap[problem.icon] || AlertTriangle;
                                return (
                                    <motion.div
                                        key={index}
                                        className={cn(
                                            "p-5 rounded-2xl",
                                            "bg-gray-50 dark:bg-gray-900",
                                            "border border-gray-100 dark:border-gray-800",
                                            "hover:border-red-200 dark:hover:border-red-800/50",
                                            "transition-colors duration-300"
                                        )}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                                    <IconComponent className="w-4 h-4 text-red-500" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                    {problem.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {problem.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                                <Target className="w-5 h-5 text-primary-500" />
                            </div>
                            <h3 className="heading-2 text-gray-900 dark:text-white">Vizyonumuz</h3>
                        </div>

                        <div
                            className={cn(
                                "p-6 rounded-2xl",
                                "bg-gradient-to-br from-primary-50 to-primary-100/50",
                                "dark:from-primary-950/50 dark:to-primary-900/30",
                                "border border-primary-200 dark:border-primary-800"
                            )}
                        >
                            <h4 className="heading-2 text-primary-700 dark:text-primary-300 mb-3">
                                {data.vision.title}
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                {data.vision.description}
                            </p>

                            {data.vision.highlights && data.vision.highlights.length > 0 && (
                                <ul className="space-y-2">
                                    {data.vision.highlights.map((highlight, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
