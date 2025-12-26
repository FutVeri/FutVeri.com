"use client";

import { Topbar, StatCard } from "@/components/admin";
import { Card } from "@/components/ui";
import {
    Users,
    Activity,
    BarChart3,
    TrendingUp,
    FileText,
    Eye,
    ArrowUpRight,
    Clock,
} from "lucide-react";

const stats = [
    {
        title: "Toplam Kullanıcı",
        value: "10,234",
        change: "+12%",
        changeType: "positive" as const,
        icon: Users,
        color: "green" as const,
    },
    {
        title: "Sayfa Görüntüleme",
        value: "45,678",
        change: "+8%",
        changeType: "positive" as const,
        icon: Eye,
        color: "blue" as const,
    },
    {
        title: "Aktif Oturum",
        value: "234",
        change: "-3%",
        changeType: "negative" as const,
        icon: Activity,
        color: "orange" as const,
    },
    {
        title: "Dönüşüm Oranı",
        value: "3.2%",
        change: "+0.5%",
        changeType: "positive" as const,
        icon: TrendingUp,
        color: "purple" as const,
    },
];

const recentActivities = [
    { id: 1, action: "Hero içeriği güncellendi", user: "Admin", time: "5 dk önce" },
    { id: 2, action: "Yeni feature eklendi", user: "Admin", time: "2 saat önce" },
    { id: 3, action: "Ekip üyesi eklendi", user: "Admin", time: "1 gün önce" },
    { id: 4, action: "İstatistikler güncellendi", user: "Admin", time: "2 gün önce" },
];

const quickActions = [
    { label: "Hero Düzenle", href: "/admin/hero", icon: FileText },
    { label: "Özellik Ekle", href: "/admin/features", icon: BarChart3 },
    { label: "Ekip Düzenle", href: "/admin/team", icon: Users },
    { label: "Ayarlar", href: "/admin/settings", icon: Activity },
];

export default function AdminDashboard() {
    return (
        <>
            <Topbar title="Dashboard" />

            <div className="p-6 space-y-6">
                {/* Stats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Quick Actions */}
                    <Card variant="default" padding="lg">
                        <h3 className="heading-2 text-gray-900 dark:text-white mb-4">
                            Hızlı İşlemler
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {quickActions.map((action, index) => (
                                <a
                                    key={index}
                                    href={action.href}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                                        <action.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                                        {action.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </Card>

                    {/* Recent Activity */}
                    <Card variant="default" padding="lg" className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="heading-2 text-gray-900 dark:text-white">
                                Son Aktiviteler
                            </h3>
                            <a
                                href="/admin/activity"
                                className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
                            >
                                Tümünü Gör
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="space-y-4">
                            {recentActivities.map((activity) => (
                                <div
                                    key={activity.id}
                                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                            {activity.action}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {activity.user}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <Clock className="w-3 h-3" />
                                        {activity.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Content Overview */}
                <Card variant="default" padding="lg">
                    <h3 className="heading-2 text-gray-900 dark:text-white mb-4">
                        İçerik Özeti
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: "Özellikler", count: 6 },
                            { label: "Ekip Üyeleri", count: 4 },
                            { label: "İstatistikler", count: 4 },
                            { label: "İş Çözümleri", count: 3 },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 text-center"
                            >
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {item.count}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </>
    );
}
