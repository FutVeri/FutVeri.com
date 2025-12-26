"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import {
    LayoutDashboard,
    Sparkles,
    BarChart3,
    Users,
    Settings,
    FileText,
    Image,
    Menu,
    X,
    LogOut,
    ChevronDown,
    Briefcase,
    MessageSquare,
} from "lucide-react";

const navItems = [
    {
        label: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        label: "Hero",
        href: "/admin/hero",
        icon: Sparkles,
    },
    {
        label: "Özellikler",
        href: "/admin/features",
        icon: BarChart3,
    },
    {
        label: "İstatistikler",
        href: "/admin/stats",
        icon: BarChart3,
    },
    {
        label: "Ekip",
        href: "/admin/team",
        icon: Users,
    },
    {
        label: "İş Çözümleri",
        href: "/admin/solutions",
        icon: Briefcase,
    },
    {
        label: "İçerikler",
        href: "/admin/content",
        icon: FileText,
    },
    {
        label: "Görseller",
        href: "/admin/media",
        icon: Image,
    },
    {
        label: "Mesajlar",
        href: "/admin/messages",
        icon: MessageSquare,
    },
    {
        label: "Ayarlar",
        href: "/admin/settings",
        icon: Settings,
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile toggle */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                            F
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">Admin</span>
                    </Link>
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                    >
                        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Overlay */}
            {isMobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 bottom-0 z-50",
                    "w-64 bg-white dark:bg-gray-900",
                    "border-r border-gray-200 dark:border-gray-800",
                    "flex flex-col",
                    "transition-transform duration-300 lg:translate-x-0",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Logo */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                    <Link href="/admin" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold">
                            F
                        </div>
                        <div>
                            <span className="font-bold text-gray-900 dark:text-white">FutVeri</span>
                            <span className="block text-xs text-gray-500">Admin Panel</span>
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-2.5 rounded-xl",
                                        "text-sm font-medium",
                                        "transition-colors",
                                        isActive
                                            ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    )}
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <LogOut className="w-5 h-5" />
                        Siteye Dön
                    </Link>
                </div>
            </aside>
        </>
    );
}
