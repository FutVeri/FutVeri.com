"use client";

import { cn } from "@/lib/utils/cn";
import { motion } from "framer-motion";
import { SectionHeader, Card } from "@/components/ui";
import { Linkedin, Twitter, Github } from "lucide-react";

export interface TeamMemberItem {
    name: string;
    role: string;
    image?: string;
    bio?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
}

export interface TeamData {
    badge?: string;
    title: string;
    subtitle?: string;
    members: TeamMemberItem[];
}

interface TeamProps {
    data: TeamData;
    className?: string;
}

export function Team({ data, className }: TeamProps) {
    return (
        <section className={cn("section-padding bg-gray-50 dark:bg-gray-900", className)}>
            <div className="container-main">
                <SectionHeader
                    badge={data.badge}
                    title={data.title}
                    subtitle={data.subtitle}
                    align="center"
                />

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {data.members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card
                                variant="default"
                                hover={true}
                                padding="none"
                                className="overflow-hidden group"
                            >
                                {/* Image */}
                                <div className="relative aspect-square bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                                            {member.name.charAt(0)}
                                        </div>
                                    )}

                                    {/* Social overlay */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent",
                                        "flex items-end justify-center pb-4",
                                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    )}>
                                        <div className="flex items-center gap-3">
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                                >
                                                    <Linkedin className="w-4 h-4 text-white" />
                                                </a>
                                            )}
                                            {member.twitter && (
                                                <a
                                                    href={member.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                                >
                                                    <Twitter className="w-4 h-4 text-white" />
                                                </a>
                                            )}
                                            {member.github && (
                                                <a
                                                    href={member.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                                >
                                                    <Github className="w-4 h-4 text-white" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-5 text-center">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                                        {member.role}
                                    </p>
                                    {member.bio && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 line-clamp-2">
                                            {member.bio}
                                        </p>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
