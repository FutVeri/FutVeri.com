"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";
import { Menu, X, ChevronDown } from "lucide-react";

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export interface HeaderProps {
    logo?: React.ReactNode;
    logoText?: string;
    navigation: NavItem[];
    ctaText?: string;
    ctaHref?: string;
}

export function Header({
    logo,
    logoText = "FutVeri",
    navigation,
    ctaText = "Uygulamayı İndir",
    ctaHref = "#download",
}: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50",
                    "transition-all duration-300",
                    isScrolled
                        ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
                        : "bg-transparent"
                )}
            >
                <div className="container-main">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className={cn(
                                "flex items-center gap-2",
                                "font-bold text-xl",
                                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                            )}
                        >
                            {logo || (
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold">
                                    F
                                </div>
                            )}
                            <span>{logoText}</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navigation.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-1 py-2",
                                            "text-sm font-medium",
                                            "transition-colors duration-200",
                                            isScrolled
                                                ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                                : "text-white/80 hover:text-white"
                                        )}
                                    >
                                        {item.label}
                                        {item.children && <ChevronDown className="w-4 h-4" />}
                                    </Link>

                                    {/* Dropdown */}
                                    {item.children && (
                                        <AnimatePresence>
                                            {activeDropdown === item.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className={cn(
                                                        "absolute top-full left-0 pt-2",
                                                        "min-w-[200px]"
                                                    )}
                                                >
                                                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 py-2">
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.label}
                                                                href={child.href}
                                                                className={cn(
                                                                    "block px-4 py-2",
                                                                    "text-sm text-gray-600 dark:text-gray-300",
                                                                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                                                                    "hover:text-primary-600 dark:hover:text-primary-400"
                                                                )}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* CTA + Mobile Menu Toggle */}
                        <div className="flex items-center gap-4">
                            <Button
                                href={ctaHref}
                                size="sm"
                                className="hidden md:inline-flex"
                            >
                                {ctaText}
                            </Button>

                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className={cn(
                                    "lg:hidden p-2 rounded-lg",
                                    "transition-colors",
                                    isScrolled
                                        ? "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                        : "text-white hover:bg-white/10"
                                )}
                                aria-label="Open menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className={cn(
                                "fixed top-0 right-0 bottom-0 z-50 lg:hidden",
                                "w-full max-w-sm",
                                "bg-white dark:bg-gray-950",
                                "shadow-2xl"
                            )}
                        >
                            {/* Close button */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                                <span className="font-bold text-lg text-gray-900 dark:text-white">
                                    Menü
                                </span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Navigation */}
                            <nav className="p-4 space-y-1">
                                {navigation.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "block px-4 py-3 rounded-xl",
                                                "text-gray-700 dark:text-gray-300",
                                                "hover:bg-gray-100 dark:hover:bg-gray-800",
                                                "font-medium"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                        {item.children && (
                                            <div className="ml-4 mt-1 space-y-1">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={cn(
                                                            "block px-4 py-2 rounded-lg",
                                                            "text-sm text-gray-500 dark:text-gray-400",
                                                            "hover:bg-gray-100 dark:hover:bg-gray-800"
                                                        )}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </nav>

                            {/* CTA */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800">
                                <Button
                                    href={ctaHref}
                                    fullWidth
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {ctaText}
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
