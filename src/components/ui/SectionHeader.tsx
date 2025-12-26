"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

export interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    badge?: string;
    align?: "left" | "center" | "right";
    size?: "sm" | "md" | "lg";
    className?: string;
    animated?: boolean;
}

export function SectionHeader({
    title,
    subtitle,
    badge,
    align = "center",
    size = "md",
    className,
    animated = true,
}: SectionHeaderProps) {
    const alignmentClasses = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
    };

    const titleSizes = {
        sm: "heading-1",
        md: "display-2",
        lg: "display-1",
    };

    const content = (
        <div
            className={cn(
                "flex flex-col gap-6",
                alignmentClasses[align],
                className
            )}
        >
            {badge && (
                <span
                    className={cn(
                        "inline-flex items-center",
                        "px-4 py-1.5 rounded-full",
                        "text-sm font-semibold",
                        "bg-primary-100 dark:bg-primary-900/30",
                        "text-primary-700 dark:text-primary-300",
                        "border border-primary-200 dark:border-primary-800"
                    )}
                >
                    {badge}
                </span>
            )}
            <h2
                className={cn(
                    titleSizes[size],
                    "text-gray-900 dark:text-white"
                )}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "body-lg text-gray-600 dark:text-gray-400",
                        "max-w-2xl",
                        align === "center" && "mx-auto"
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );

    if (animated) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {content}
            </motion.div>
        );
    }

    return content;
}
