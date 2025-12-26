"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type = "text",
            label,
            error,
            helperText,
            leftIcon,
            rightIcon,
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        {label}
                    </label>
                )}
                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            {leftIcon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        type={type}
                        id={inputId}
                        className={cn(
                            "w-full px-4 py-3 rounded-xl",
                            "bg-white dark:bg-gray-900",
                            "border border-gray-200 dark:border-gray-700",
                            "text-gray-900 dark:text-white",
                            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
                            "transition-all duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                            "disabled:opacity-50 disabled:cursor-not-allowed",
                            leftIcon && "pl-12",
                            rightIcon && "pr-12",
                            error && "border-red-500 focus:ring-red-500",
                            className
                        )}
                        {...props}
                    />
                    {rightIcon && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            {rightIcon}
                        </div>
                    )}
                </div>
                {(error || helperText) && (
                    <p
                        className={cn(
                            "mt-2 text-sm",
                            error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
                        )}
                    >
                        {error || helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

// Textarea component
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        { className, label, error, helperText, id, ...props },
        ref
    ) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={inputId}
                    className={cn(
                        "w-full px-4 py-3 rounded-xl",
                        "bg-white dark:bg-gray-900",
                        "border border-gray-200 dark:border-gray-700",
                        "text-gray-900 dark:text-white",
                        "placeholder:text-gray-400 dark:placeholder:text-gray-500",
                        "transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "resize-y min-h-[120px]",
                        error && "border-red-500 focus:ring-red-500",
                        className
                    )}
                    {...props}
                />
                {(error || helperText) && (
                    <p
                        className={cn(
                            "mt-2 text-sm",
                            error ? "text-red-500" : "text-gray-500 dark:text-gray-400"
                        )}
                    >
                        {error || helperText}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";
