"use client";

import { useState } from "react";
import { Topbar } from "@/components/admin";
import { Card, Button, Input, Textarea } from "@/components/ui";
import { Plus, Trash2, Save, Edit2 } from "lucide-react";
import content from "@/data/content.json";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin: string;
    twitter: string;
    github: string;
}

export default function TeamEditorPage() {
    const [members, setMembers] = useState<TeamMember[]>(
        content.team.members.map((m, i) => ({
            id: `member-${i}`,
            name: m.name,
            role: m.role,
            bio: m.bio || "",
            image: "",
            linkedin: m.linkedin || "",
            twitter: m.twitter || "",
            github: m.github || "",
        }))
    );

    const [editingId, setEditingId] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        setIsSaving(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSaving(false);
        alert("Ekip bilgileri kaydedildi!");
    };

    const handleDelete = (id: string) => {
        if (confirm("Bu üyeyi silmek istediğinizden emin misiniz?")) {
            setMembers(members.filter((m) => m.id !== id));
        }
    };

    const handleAdd = () => {
        const newMember: TeamMember = {
            id: `member-${Date.now()}`,
            name: "Yeni Üye",
            role: "Pozisyon",
            bio: "",
            image: "",
            linkedin: "",
            twitter: "",
            github: "",
        };
        setMembers([...members, newMember]);
        setEditingId(newMember.id);
    };

    const handleUpdate = (id: string, field: keyof TeamMember, value: string) => {
        setMembers(
            members.map((m) => (m.id === id ? { ...m, [field]: value } : m))
        );
    };

    return (
        <>
            <Topbar title="Ekip Yönetimi" />

            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Ekip Üyeleri
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Ekip üyelerini ekleyin, düzenleyin veya silin.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="secondary" icon={Plus} onClick={handleAdd}>
                            Üye Ekle
                        </Button>
                        <Button
                            variant="primary"
                            icon={Save}
                            onClick={handleSave}
                            isLoading={isSaving}
                        >
                            Kaydet
                        </Button>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((member) => (
                        <Card key={member.id} variant="default" padding="none" className="overflow-hidden">
                            {/* Image */}
                            <div className="aspect-square bg-gray-200 dark:bg-gray-800 flex items-center justify-center relative group">
                                <span className="text-6xl">{member.name.charAt(0)}</span>

                                {/* Overlay actions */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <button
                                        onClick={() =>
                                            setEditingId(editingId === member.id ? null : member.id)
                                        }
                                        className="p-3 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors"
                                    >
                                        <Edit2 className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(member.id)}
                                        className="p-3 rounded-xl bg-red-500/50 text-white hover:bg-red-500/70 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {editingId === member.id ? (
                                    <div className="space-y-3">
                                        <Input
                                            label="Ad Soyad"
                                            value={member.name}
                                            onChange={(e) => handleUpdate(member.id, "name", e.target.value)}
                                        />
                                        <Input
                                            label="Pozisyon"
                                            value={member.role}
                                            onChange={(e) => handleUpdate(member.id, "role", e.target.value)}
                                        />
                                        <Textarea
                                            label="Biyografi"
                                            value={member.bio}
                                            onChange={(e) => handleUpdate(member.id, "bio", e.target.value)}
                                            rows={2}
                                        />
                                        <Input
                                            label="LinkedIn"
                                            value={member.linkedin}
                                            onChange={(e) => handleUpdate(member.id, "linkedin", e.target.value)}
                                            placeholder="https://linkedin.com/in/..."
                                        />
                                        <Input
                                            label="Twitter"
                                            value={member.twitter}
                                            onChange={(e) => handleUpdate(member.id, "twitter", e.target.value)}
                                            placeholder="https://twitter.com/..."
                                        />
                                        <Input
                                            label="GitHub"
                                            value={member.github}
                                            onChange={(e) => handleUpdate(member.id, "github", e.target.value)}
                                            placeholder="https://github.com/..."
                                        />
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            fullWidth
                                            onClick={() => setEditingId(null)}
                                        >
                                            Tamam
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-primary-600 dark:text-primary-400 mt-1">
                                            {member.role}
                                        </p>
                                        {member.bio && (
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                                                {member.bio}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}

                    {/* Add New Card */}
                    <button
                        onClick={handleAdd}
                        className="aspect-square rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-primary-600 hover:border-primary-500 transition-colors"
                    >
                        <Plus className="w-8 h-8" />
                        <span className="text-sm font-medium">Üye Ekle</span>
                    </button>
                </div>
            </div>
        </>
    );
}
