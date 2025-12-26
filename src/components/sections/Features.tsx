"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { SectionHeader, IconCard } from "@/components/ui";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface FeatureItem {
    icon: string;
    title: string;
    description: string;
    color?: string; // "green" | "orange" | "blue" | "purple"
}

export interface FeaturesData {
    badge?: string;
    title: string;
    subtitle?: string;
    features: FeatureItem[];
}

interface FeaturesProps {
    data: FeaturesData;
    className?: string;
    columns?: 2 | 3 | 4;
    variant?: "default" | "outlined" | "filled";
}

function getIconComponent(iconName: string): LucideIcon {
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    return icons[iconName] || LucideIcons.Star;
}

export function Features({
    data,
    className,
    columns = 3,
    variant = "default",
}: FeaturesProps) {
    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-2 lg:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4",
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

                <div className={cn("mt-12 grid gap-6", gridCols[columns])}>
                    {data.features.map((feature, index) => (
                        <IconCard
                            key={index}
                            icon={getIconComponent(feature.icon)}
                            title={feature.title}
                            description={feature.description}
                            color={feature.color || "green"}
                            variant={variant}
                            animated={true}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
