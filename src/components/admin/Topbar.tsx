"use client";

import { cn } from "@/lib/utils/cn";
import { Bell, Search, User } from "lucide-react";

interface TopbarProps {
    title?: string;
}

export function Topbar({ title = "Dashboard" }: TopbarProps) {
    return (
        <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 flex items-center justify-between">
            {/* Title */}
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
            </h1>

            {/* Right side */}
            <div className="flex items-center gap-4">
                {/* Search */}
                <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Ara..."
                        className="bg-transparent border-none outline-none text-sm text-gray-600 dark:text-gray-300 placeholder:text-gray-400 w-40"
                    />
                </div>

                {/* Notifications */}
                <button className="relative p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
                </button>

                {/* User */}
                <button className="flex items-center gap-2 p-1.5 pr-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
                        Admin
                    </span>
                </button>
            </div>
        </header>
    );
}
