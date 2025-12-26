"use client";

import { useState } from "react";
import { Topbar } from "@/components/admin";
import { Card, Button, Input } from "@/components/ui";
import { Plus, Trash2, GripVertical, Save, Edit2 } from "lucide-react";
import content from "@/data/content.json";

interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
    color: string;
}

export default function FeaturesEditorPage() {
    const [features, setFeatures] = useState<Feature[]>(
        content.features.features.map((f, i) => ({
            id: `feature-${i}`,
            ...f,
            color: f.color || "green",
        }))
    );

    const [editingId, setEditingId] = useState<string | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        setIsSaving(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSaving(false);
        alert("Özellikler kaydedildi!");
    };

    const handleDelete = (id: string) => {
        if (confirm("Bu özelliği silmek istediğinizden emin misiniz?")) {
            setFeatures(features.filter((f) => f.id !== id));
        }
    };

    const handleAdd = () => {
        const newFeature: Feature = {
            id: `feature-${Date.now()}`,
            icon: "Star",
            title: "Yeni Özellik",
            description: "Özellik açıklaması...",
            color: "green",
        };
        setFeatures([...features, newFeature]);
        setEditingId(newFeature.id);
    };

    const handleUpdate = (id: string, field: keyof Feature, value: string) => {
        setFeatures(
            features.map((f) => (f.id === id ? { ...f, [field]: value } : f))
        );
    };

    return (
        <>
            <Topbar title="Özellikler" />

            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Özellikler Yönetimi
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Ürün özelliklerini ekleyin, düzenleyin veya silin.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="secondary" icon={Plus} onClick={handleAdd}>
                            Yeni Ekle
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

                <div className="grid gap-4">
                    {features.map((feature, index) => (
                        <Card
                            key={feature.id}
                            variant="default"
                            padding="md"
                            className="group"
                        >
                            <div className="flex items-start gap-4">
                                {/* Drag Handle */}
                                <div className="mt-2 cursor-move text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                    <GripVertical className="w-5 h-5" />
                                </div>

                                {/* Icon Preview */}
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl">⚡</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    {editingId === feature.id ? (
                                        <div className="grid gap-3">
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                <Input
                                                    label="Icon (Lucide)"
                                                    value={feature.icon}
                                                    onChange={(e) =>
                                                        handleUpdate(feature.id, "icon", e.target.value)
                                                    }
                                                    placeholder="BarChart3"
                                                />
                                                <select
                                                    value={feature.color}
                                                    onChange={(e) =>
                                                        handleUpdate(feature.id, "color", e.target.value)
                                                    }
                                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white mt-7"
                                                >
                                                    <option value="green">Yeşil</option>
                                                    <option value="orange">Turuncu</option>
                                                    <option value="blue">Mavi</option>
                                                    <option value="purple">Mor</option>
                                                </select>
                                            </div>
                                            <Input
                                                label="Başlık"
                                                value={feature.title}
                                                onChange={(e) =>
                                                    handleUpdate(feature.id, "title", e.target.value)
                                                }
                                                placeholder="Özellik başlığı"
                                            />
                                            <Input
                                                label="Açıklama"
                                                value={feature.description}
                                                onChange={(e) =>
                                                    handleUpdate(feature.id, "description", e.target.value)
                                                }
                                                placeholder="Özellik açıklaması"
                                            />
                                            <div className="flex justify-end">
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    onClick={() => setEditingId(null)}
                                                >
                                                    Tamam
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                                    {feature.title}
                                                </h3>
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
                                                    {feature.icon}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                {feature.description}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() =>
                                            setEditingId(editingId === feature.id ? null : feature.id)
                                        }
                                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(feature.id)}
                                        className="p-2 rounded-lg text-gray-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {features.length === 0 && (
                    <Card variant="default" padding="lg" className="text-center">
                        <p className="text-gray-500 dark:text-gray-400">
                            Henüz özellik eklenmemiş.
                        </p>
                        <Button
                            variant="primary"
                            icon={Plus}
                            onClick={handleAdd}
                            className="mt-4"
                        >
                            İlk Özelliği Ekle
                        </Button>
                    </Card>
                )}
            </div>
        </>
    );
}
