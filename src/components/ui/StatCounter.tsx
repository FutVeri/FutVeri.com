"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";

type ColorVariant = "green" | "orange" | "blue" | "purple";

export interface StatCounterProps {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    icon?: LucideIcon;
    color?: string; // ColorVariant
    duration?: number;
    className?: string;
}

const colorVariants = {
    green: {
        icon: "text-primary-500",
        bg: "bg-primary-100 dark:bg-primary-900/30",
        border: "border-primary-200 dark:border-primary-800",
    },
    orange: {
        icon: "text-accent-500",
        bg: "bg-accent-100 dark:bg-accent-900/30",
        border: "border-accent-200 dark:border-accent-800",
    },
    blue: {
        icon: "text-blue-500",
        bg: "bg-blue-100 dark:bg-blue-900/30",
        border: "border-blue-200 dark:border-blue-800",
    },
    purple: {
        icon: "text-purple-500",
        bg: "bg-purple-100 dark:bg-purple-900/30",
        border: "border-purple-200 dark:border-purple-800",
    },
};

function useCounter(end: number, duration: number, isInView: boolean) {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
        if (!isInView) return;

        const startTime = Date.now();
        const endValue = end;

        const updateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);

            // Easing function: easeOutExpo
            const easeOutExpo = 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.floor(endValue * easeOutExpo);

            if (currentCount !== countRef.current) {
                countRef.current = currentCount;
                setCount(currentCount);
            }

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(updateCount);
    }, [end, duration, isInView]);

    return count;
}

export function StatCounter({
    value,
    label,
    suffix = "",
    prefix = "",
    icon: Icon,
    color = "green",
    duration = 2,
    className,
}: StatCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useCounter(value, duration, isInView);
    // Get valid color or fallback to blue
    const validColor = (Object.keys(colorVariants).includes(color || "") ? color : "blue") as ColorVariant;
    const colors = colorVariants[validColor];

    return (
        <motion.div
            ref={ref}
            className={cn(
                "flex flex-col items-center text-center",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {Icon && (
                <div
                    className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-4",
                        colors.bg,
                        "border",
                        colors.border
                    )}
                >
                    <Icon className={cn("w-7 h-7", colors.icon)} />
                </div>
            )}
            <div className="display-2 text-gray-900 dark:text-white font-bold">
                {prefix}
                {count.toLocaleString()}
                {suffix}
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">
                {label}
            </p>
        </motion.div>
    );
}
