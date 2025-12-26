import type { Metadata } from "next";
import { Sidebar } from "@/components/admin";

export const metadata: Metadata = {
    title: {
        default: "Admin Panel",
        template: "%s | FutVeri Admin",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <Sidebar />
            <div className="lg:ml-64">
                <div className="pt-14 lg:pt-0">{children}</div>
            </div>
        </div>
    );
}
