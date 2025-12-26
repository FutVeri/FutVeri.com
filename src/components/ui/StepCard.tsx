"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface StepCardProps {
    stepNumber: number;
    title: string;
    description: string;
    icon?: LucideIcon;
    image?: string;
    isLast?: boolean;
    variant?: "horizontal" | "vertical";
    className?: string;
    animated?: boolean;
    delay?: number;
}

export function StepCard({
    stepNumber,
    title,
    description,
    icon: Icon,
    image,
    isLast = false,
    variant = "vertical",
    className,
    animated = true,
    delay = 0,
}: StepCardProps) {
    const cardContent = (
        <div
            className={cn(
                "relative",
                variant === "horizontal" && "flex gap-6 items-start",
                variant === "vertical" && "flex flex-col items-center text-center",
                className
            )}
        >
            {/* Step Number / Icon */}
            <div className="relative z-10 flex-shrink-0">
                <div
                    className={cn(
                        "w-14 h-14 rounded-2xl",
                        "flex items-center justify-center",
                        "bg-gradient-to-br from-primary-500 to-primary-600",
                        "text-white font-bold text-xl",
                        "shadow-lg shadow-primary-500/30"
                    )}
                >
                    {Icon ? (
                        <Icon className="w-6 h-6" />
                    ) : (
                        <span>{stepNumber}</span>
                    )}
                </div>

                {/* Connector Line (for horizontal variant) */}
                {!isLast && variant === "horizontal" && (
                    <div
                        className={cn(
                            "absolute top-7 left-14 w-full h-0.5",
                            "bg-gradient-to-r from-primary-500 to-transparent"
                        )}
                        style={{ width: "calc(100% + 3rem)" }}
                    />
                )}
            </div>

            {/* Content */}
            <div
                className={cn(
                    variant === "vertical" && "mt-6",
                    "flex-1"
                )}
            >
                <h3 className="heading-2 text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {description}
                </p>

                {/* Optional Image */}
                {image && (
                    <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto"
                        />
                    </div>
                )}
            </div>

            {/* Vertical Connector (for vertical variant with multiple steps per row) */}
            {!isLast && variant === "vertical" && (
                <div
                    className={cn(
                        "hidden lg:block absolute top-7 left-1/2 w-0.5 h-8",
                        "bg-gradient-to-b from-primary-500 to-transparent",
                        "transform -translate-x-1/2 translate-y-full"
                    )}
                />
            )}
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
