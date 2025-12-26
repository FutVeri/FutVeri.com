"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export type ColorVariant = "green" | "orange" | "blue" | "purple" | "gray";

export interface IconCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    color?: string; // ColorVariant
    variant?: "default" | "outlined" | "filled";
    size?: "sm" | "md" | "lg";
    className?: string;
    animated?: boolean;
    delay?: number;
}

const colorVariants = {
    green: {
        icon: "text-primary-600 dark:text-primary-400",
        bg: "bg-primary-100 dark:bg-primary-900/40",
        border: "border-primary-200 dark:border-primary-800",
        filledBg: "bg-gradient-to-br from-primary-500 to-primary-600",
    },
    orange: {
        icon: "text-accent-600 dark:text-accent-400",
        bg: "bg-accent-100 dark:bg-accent-900/40",
        border: "border-accent-200 dark:border-accent-800",
        filledBg: "bg-gradient-to-br from-accent-500 to-accent-600",
    },
    blue: {
        icon: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900/40",
        border: "border-blue-200 dark:border-blue-800",
        filledBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    purple: {
        icon: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-100 dark:bg-purple-900/40",
        border: "border-purple-200 dark:border-purple-800",
        filledBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    gray: {
        icon: "text-gray-600 dark:text-gray-400",
        bg: "bg-gray-100 dark:bg-gray-800/40",
        border: "border-gray-200 dark:border-gray-700",
        filledBg: "bg-gradient-to-br from-gray-600 to-gray-700",
    },
};

const sizeVariants = {
    sm: {
        iconWrapper: "w-10 h-10 rounded-xl",
        icon: "w-5 h-5",
        title: "text-base",
        description: "text-sm",
        gap: "gap-3",
        padding: "p-4",
    },
    md: {
        iconWrapper: "w-12 h-12 rounded-xl",
        icon: "w-6 h-6",
        title: "text-lg heading-2",
        description: "text-base",
        gap: "gap-4",
        padding: "p-6",
    },
    lg: {
        iconWrapper: "w-14 h-14 rounded-2xl",
        icon: "w-7 h-7",
        title: "text-xl heading-2",
        description: "text-base",
        gap: "gap-5",
        padding: "p-8",
    },
};

export function IconCard({
    icon: Icon,
    title,
    description,
    color = "green",
    variant = "default",
    size = "md",
    className,
    animated = true,
    delay = 0,
}: IconCardProps) {
    // Get valid color or fallback to blue
    const validColor = (Object.keys(colorVariants).includes(color || "") ? color : "blue") as ColorVariant;
    const colors = colorVariants[validColor];
    const sizes = sizeVariants[size];

    const cardContent = (
        <div
            className={cn(
                "flex flex-col",
                sizes.gap,
                sizes.padding,
                "rounded-2xl",
                "transition-all duration-300",
                variant === "default" && [
                    "bg-white dark:bg-gray-900",
                    "border border-gray-200 dark:border-gray-800",
                    "hover:shadow-lg hover:shadow-primary-500/5",
                    "hover:-translate-y-1",
                    "hover:border-primary-200 dark:hover:border-primary-700",
                ],
                variant === "outlined" && [
                    "bg-transparent",
                    "border-2 border-gray-200 dark:border-gray-700",
                    "hover:border-primary-500 dark:hover:border-primary-500",
                ],
                variant === "filled" && [
                    colors.filledBg,
                    "text-white",
                    "shadow-lg",
                ],
                className
            )}
        >
            <div
                className={cn(
                    sizes.iconWrapper,
                    "flex items-center justify-center",
                    variant === "filled"
                        ? "bg-white/20"
                        : colors.bg,
                    variant !== "filled" && ["border", colors.border]
                )}
            >
                <Icon
                    className={cn(
                        sizes.icon,
                        variant === "filled" ? "text-white" : colors.icon
                    )}
                />
            </div>
            <div className="space-y-2">
                <h3
                    className={cn(
                        sizes.title,
                        "font-semibold",
                        variant === "filled"
                            ? "text-white"
                            : "text-gray-900 dark:text-white"
                    )}
                >
                    {title}
                </h3>
                <p
                    className={cn(
                        sizes.description,
                        "leading-relaxed",
                        variant === "filled"
                            ? "text-white/80"
                            : "text-gray-600 dark:text-gray-400"
                    )}
                >
                    {description}
                </p>
            </div>
        </div>
    );

    if (animated) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay, ease: "easeOut" }}
            >
                {cardContent}
            </motion.div>
        );
    }

    return cardContent;
}
