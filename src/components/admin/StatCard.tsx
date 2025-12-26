"use client";

import { cn } from "@/lib/utils/cn";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    change?: string;
    changeType?: "positive" | "negative" | "neutral";
    icon: LucideIcon;
    color?: "green" | "orange" | "blue" | "purple";
}

const colorVariants = {
    green: "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400",
    orange: "bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
};

export function StatCard({
    title,
    value,
    change,
    changeType = "neutral",
    icon: Icon,
    color = "green",
}: StatCardProps) {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-start justify-between mb-4">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colorVariants[color])}>
                    <Icon className="w-6 h-6" />
                </div>
                {change && (
                    <span
                        className={cn(
                            "text-sm font-medium px-2 py-1 rounded-lg",
                            changeType === "positive" && "text-green-600 bg-green-100 dark:bg-green-900/30",
                            changeType === "negative" && "text-red-600 bg-red-100 dark:bg-red-900/30",
                            changeType === "neutral" && "text-gray-600 bg-gray-100 dark:bg-gray-800"
                        )}
                    >
                        {change}
                    </span>
                )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {value}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{title}</p>
        </div>
    );
}
