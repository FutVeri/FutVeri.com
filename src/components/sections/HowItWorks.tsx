"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { SectionHeader, StepCard } from "@/components/ui";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface StepItem {
    stepNumber: number;
    title: string;
    description: string;
    icon?: string;
    image?: string;
}

export interface HowItWorksData {
    badge?: string;
    title: string;
    subtitle?: string;
    steps: StepItem[];
}

interface HowItWorksProps {
    data: HowItWorksData;
    className?: string;
    variant?: "horizontal" | "vertical";
}

function getIconComponent(iconName?: string): LucideIcon | undefined {
    if (!iconName) return undefined;
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    return icons[iconName];
}

export function HowItWorks({
    data,
    className,
    variant = "vertical",
}: HowItWorksProps) {
    return (
        <section className={cn("section-padding bg-white dark:bg-gray-950", className)}>
            <div className="container-main">
                <SectionHeader
                    badge={data.badge}
                    title={data.title}
                    subtitle={data.subtitle}
                    align="center"
                />

                <div
                    className={cn(
                        "mt-16",
                        variant === "vertical" && "grid md:grid-cols-2 lg:grid-cols-3 gap-10",
                        variant === "horizontal" && "space-y-12"
                    )}
                >
                    {data.steps.map((step, index) => (
                        <StepCard
                            key={index}
                            stepNumber={step.stepNumber}
                            title={step.title}
                            description={step.description}
                            icon={getIconComponent(step.icon)}
                            image={step.image}
                            isLast={index === data.steps.length - 1}
                            variant={variant}
                            delay={index * 0.15}
                        />
                    ))}
                </div>

                {/* Optional: Alternative timeline view for horizontal variant */}
                {variant === "horizontal" && (
                    <div className="mt-16 hidden lg:flex items-center justify-center">
                        <div className="flex items-center gap-4">
                            {data.steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <div
                                        className={cn(
                                            "w-10 h-10 rounded-full",
                                            "flex items-center justify-center",
                                            "bg-primary-500 text-white font-bold text-sm"
                                        )}
                                    >
                                        {step.stepNumber}
                                    </div>
                                    {index < data.steps.length - 1 && (
                                        <div className="w-24 h-0.5 bg-primary-200 dark:bg-primary-800" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
