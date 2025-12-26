"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "elevated" | "outline" | "gradient";
    hover?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
    animated?: boolean;
}

const cardVariants = {
    default: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
    glass: "glass",
    elevated: "bg-white dark:bg-gray-900 shadow-lg",
    outline: "bg-transparent border-2 border-gray-200 dark:border-gray-700",
    gradient: "bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-200 dark:border-primary-800",
};

const cardPadding = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            className,
            variant = "default",
            hover = false,
            padding = "md",
            animated = false,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles = cn(
            "rounded-2xl",
            "transition-all duration-300 ease-out",
            cardVariants[variant],
            cardPadding[padding],
            hover && [
                "hover:shadow-xl hover:shadow-primary-500/5",
                "hover:-translate-y-1",
                "hover:border-primary-200 dark:hover:border-primary-700",
            ],
            className
        );

        if (animated) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { onDrag, onDragStart, onDragEnd, ...safeProps } = props;
            return (
                <motion.div
                    className={baseStyles}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            );
        }

        return (
            <div ref={ref} className={baseStyles} {...props}>
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

// Card Header
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col space-y-1.5", className)}
            {...props}
        />
    )
);
CardHeader.displayName = "CardHeader";

// Card Title
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn("heading-2 text-gray-900 dark:text-white", className)}
            {...props}
        />
    )
);
CardTitle.displayName = "CardTitle";

// Card Description
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> { }

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-gray-600 dark:text-gray-400", className)}
            {...props}
        />
    )
);
CardDescription.displayName = "CardDescription";

// Card Content
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("", className)} {...props} />
    )
);
CardContent.displayName = "CardContent";

// Card Footer
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center pt-4", className)}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";
