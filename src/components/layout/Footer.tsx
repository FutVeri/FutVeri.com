"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui";
import {
    Twitter,
    Instagram,
    Linkedin,
    Github,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
} from "lucide-react";

export interface FooterLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface SocialLink {
    platform: "twitter" | "instagram" | "linkedin" | "github";
    href: string;
}

export interface FooterProps {
    logoText?: string;
    description?: string;
    sections: FooterSection[];
    socialLinks?: SocialLink[];
    contactEmail?: string;
    contactPhone?: string;
    address?: string;
    copyright?: string;
}

const socialIcons = {
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    github: Github,
};

export function Footer({
    logoText = "FutVeri",
    description = "Futbol analitiği ve veri bilimini bir araya getirerek profesyonel ve amatör futbolcuların performansını artırıyoruz.",
    sections,
    socialLinks = [],
    contactEmail,
    contactPhone,
    address,
    copyright,
}: FooterProps) {
    return (
        <footer className="bg-gray-950 text-white">
            {/* Main Footer */}
            <div className="container-main section-padding">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-12">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                                F
                            </div>
                            <span className="font-bold text-xl">{logoText}</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {description}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            {contactEmail && (
                                <a
                                    href={`mailto:${contactEmail}`}
                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    {contactEmail}
                                </a>
                            )}
                            {contactPhone && (
                                <a
                                    href={`tel:${contactPhone}`}
                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    {contactPhone}
                                </a>
                            )}
                            {address && (
                                <div className="flex items-start gap-3 text-sm text-gray-400">
                                    <MapPin className="w-4 h-4 mt-0.5" />
                                    {address}
                                </div>
                            )}
                        </div>

                        {/* Social Links */}
                        {socialLinks.length > 0 && (
                            <div className="flex items-center gap-3 mt-6">
                                {socialLinks.map((social) => {
                                    const Icon = socialIcons[social.platform];
                                    return (
                                        <a
                                            key={social.platform}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "w-10 h-10 rounded-xl",
                                                "flex items-center justify-center",
                                                "bg-gray-800 text-gray-400",
                                                "hover:bg-primary-500 hover:text-white",
                                                "transition-all duration-200"
                                            )}
                                            aria-label={social.platform}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Link Sections */}
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            target={link.isExternal ? "_blank" : undefined}
                                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                                            className={cn(
                                                "flex items-center gap-1",
                                                "text-sm text-gray-400",
                                                "hover:text-white transition-colors"
                                            )}
                                        >
                                            {link.label}
                                            {link.isExternal && (
                                                <ArrowUpRight className="w-3 h-3" />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-main py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500">
                            {copyright || `© ${new Date().getFullYear()} FutVeri. Tüm hakları saklıdır.`}
                        </p>
                        <div className="flex items-center gap-6">
                            <Link
                                href="/gizlilik"
                                className="text-sm text-gray-500 hover:text-white transition-colors"
                            >
                                Gizlilik Politikası
                            </Link>
                            <Link
                                href="/kullanim-kosullari"
                                className="text-sm text-gray-500 hover:text-white transition-colors"
                            >
                                Kullanım Koşulları
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
