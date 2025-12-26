"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { LucideIcon } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline" | "accent";
    size?: "sm" | "md" | "lg" | "xl";
    href?: string;
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    fullWidth?: boolean;
}

const buttonVariants = {
    primary: [
        "bg-gradient-to-r from-primary-500 to-primary-600",
        "text-white font-semibold",
        "hover:from-primary-600 hover:to-primary-700",
        "shadow-md hover:shadow-lg hover:shadow-primary-500/20",
        "active:scale-[0.98]",
    ].join(" "),
    secondary: [
        "bg-gray-100 dark:bg-gray-800",
        "text-gray-900 dark:text-gray-100",
        "hover:bg-gray-200 dark:hover:bg-gray-700",
        "border border-gray-200 dark:border-gray-700",
    ].join(" "),
    ghost: [
        "bg-transparent",
        "text-gray-700 dark:text-gray-300",
        "hover:bg-gray-100 dark:hover:bg-gray-800",
    ].join(" "),
    outline: [
        "bg-transparent",
        "text-primary-600 dark:text-primary-400",
        "border-2 border-primary-500",
        "hover:bg-primary-50 dark:hover:bg-primary-950",
    ].join(" "),
    accent: [
        "bg-gradient-to-r from-accent-500 to-accent-600",
        "text-white font-semibold",
        "hover:from-accent-600 hover:to-accent-700",
        "shadow-md hover:shadow-lg hover:shadow-accent-500/20",
        "active:scale-[0.98]",
    ].join(" "),
};

const buttonSizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3 text-base gap-2",
    xl: "px-10 py-4 text-lg gap-3",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            href,
            icon: Icon,
            iconPosition = "left",
            isLoading = false,
            fullWidth = false,
            disabled,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles = cn(
            "inline-flex items-center justify-center",
            "rounded-xl font-medium",
            "transition-all duration-200 ease-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
            buttonVariants[variant],
            buttonSizes[size],
            fullWidth && "w-full",
            className
        );

        const content = (
            <>
                {isLoading && (
                    <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {Icon && iconPosition === "left" && !isLoading && (
                    <Icon className="w-5 h-5" />
                )}
                {children}
                {Icon && iconPosition === "right" && !isLoading && (
                    <Icon className="w-5 h-5" />
                )}
            </>
        );

        if (href) {
            return (
                <Link href={href} className={baseStyles}>
                    {content}
                </Link>
            );
        }

        return (
            <button
                ref={ref}
                className={baseStyles}
                disabled={disabled || isLoading}
                {...props}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = "Button";
