"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { SectionHeader, Card } from "@/components/ui";
import * as LucideIcons from "lucide-react";
import { LucideIcon, ArrowRight } from "lucide-react";

export interface SolutionItem {
    title: string;
    description: string;
    icon?: string;
    benefits: string[];
    targetAudience: string;
    ctaText?: string;
    ctaHref?: string;
}

export interface BusinessSolutionsData {
    badge?: string;
    title: string;
    subtitle?: string;
    solutions: SolutionItem[];
}

interface BusinessSolutionsProps {
    data: BusinessSolutionsData;
    className?: string;
}

function getIconComponent(iconName?: string): LucideIcon {
    if (!iconName) return LucideIcons.Briefcase;
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    return icons[iconName] || LucideIcons.Briefcase;
}

export function BusinessSolutions({ data, className }: BusinessSolutionsProps) {
    return (
        <section className={cn("section-padding bg-white dark:bg-gray-950", className)}>
            <div className="container-main">
                <SectionHeader
                    badge={data.badge}
                    title={data.title}
                    subtitle={data.subtitle}
                    align="center"
                />

                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.solutions.map((solution, index) => {
                        const Icon = getIconComponent(solution.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    variant="default"
                                    hover={true}
                                    padding="lg"
                                    className="h-full flex flex-col"
                                >
                                    {/* Icon & Target */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                        </div>
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                            {solution.targetAudience}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="heading-2 text-gray-900 dark:text-white mb-2">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                        {solution.description}
                                    </p>

                                    {/* Benefits */}
                                    <ul className="space-y-2 mb-6">
                                        {solution.benefits.map((benefit, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    {solution.ctaText && (
                                        <a
                                            href={solution.ctaHref || "#"}
                                            className={cn(
                                                "inline-flex items-center gap-2",
                                                "text-primary-600 dark:text-primary-400 font-medium",
                                                "hover:gap-3 transition-all duration-200"
                                            )}
                                        >
                                            {solution.ctaText}
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    )}
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
