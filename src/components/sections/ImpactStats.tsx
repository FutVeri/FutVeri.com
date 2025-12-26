"use client";

import { cn } from "@/lib/utils/cn";
import { SectionHeader, StatCounter } from "@/components/ui";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface StatItem {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    icon?: string;
    color?: string; // "green" | "orange" | "blue" | "purple"
}

export interface ImpactStatsData {
    badge?: string;
    title: string;
    subtitle?: string;
    stats: StatItem[];
}

interface ImpactStatsProps {
    data: ImpactStatsData;
    className?: string;
}

function getIconComponent(iconName?: string): LucideIcon | undefined {
    if (!iconName) return undefined;
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    return icons[iconName];
}

export function ImpactStats({ data, className }: ImpactStatsProps) {
    return (
        <section
            className={cn(
                "section-padding",
                "bg-gradient-to-br from-gray-900 via-gray-900 to-primary-950",
                "text-white",
                className
            )}
        >
            <div className="container-main">
                <SectionHeader
                    badge={data.badge}
                    title={data.title}
                    subtitle={data.subtitle}
                    align="center"
                    className="[&_h2]:text-white [&_p]:text-gray-400"
                />

                <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {data.stats.map((stat, index) => (
                        <StatCounter
                            key={index}
                            value={stat.value}
                            label={stat.label}
                            suffix={stat.suffix}
                            prefix={stat.prefix}
                            icon={getIconComponent(stat.icon)}
                            color={stat.color || "green"}
                            className="[&_div]:text-white [&_p]:text-gray-400"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
