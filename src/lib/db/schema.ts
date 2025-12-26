import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// ========================================
// HERO SECTION
// ========================================
export const heroContent = sqliteTable("hero_content", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    subtitle: text("subtitle"),
    ctaPrimaryText: text("cta_primary_text"),
    ctaPrimaryHref: text("cta_primary_href"),
    ctaSecondaryText: text("cta_secondary_text"),
    ctaSecondaryHref: text("cta_secondary_href"),
    backgroundImage: text("background_image"),
    badge: text("badge"),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// FEATURES
// ========================================
export const features = sqliteTable("features", {
    id: text("id").primaryKey(),
    icon: text("icon").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    category: text("category").default("main"), // main, app, business
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// STATISTICS
// ========================================
export const stats = sqliteTable("stats", {
    id: text("id").primaryKey(),
    label: text("label").notNull(),
    value: integer("value").notNull(),
    suffix: text("suffix"), // '+', 'K', '%' etc.
    prefix: text("prefix"), // '₺', '$' etc.
    icon: text("icon"),
    color: text("color"), // 'green', 'orange', 'blue'
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// HOW IT WORKS (STEPS)
// ========================================
export const steps = sqliteTable("steps", {
    id: text("id").primaryKey(),
    stepNumber: integer("step_number").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    icon: text("icon"),
    image: text("image"),
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// TEAM MEMBERS
// ========================================
export const teamMembers = sqliteTable("team_members", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    role: text("role").notNull(),
    image: text("image"),
    bio: text("bio"),
    linkedin: text("linkedin"),
    twitter: text("twitter"),
    github: text("github"),
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// TESTIMONIALS
// ========================================
export const testimonials = sqliteTable("testimonials", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    role: text("role"),
    company: text("company"),
    content: text("content").notNull(),
    image: text("image"),
    rating: integer("rating").default(5),
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// SCREENSHOTS / GALLERY
// ========================================
export const screenshots = sqliteTable("screenshots", {
    id: text("id").primaryKey(),
    title: text("title"),
    description: text("description"),
    image: text("image").notNull(),
    category: text("category").default("app"), // app, dashboard, mobile
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// CONTENT BLOCKS (Generic)
// ========================================
export const contentBlocks = sqliteTable("content_blocks", {
    id: text("id").primaryKey(),
    section: text("section").notNull(), // 'problem', 'vision', 'sustainability', 'about'
    type: text("type").notNull(), // 'heading', 'paragraph', 'list', 'image', 'video', 'quote'
    content: text("content").notNull(), // JSON string for flexible content
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// BUSINESS SOLUTIONS
// ========================================
export const businessSolutions = sqliteTable("business_solutions", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    icon: text("icon"),
    image: text("image"),
    benefits: text("benefits"), // JSON array of benefits
    targetAudience: text("target_audience"), // 'restaurant', 'club', 'enterprise'
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// FAQ
// ========================================
export const faqs = sqliteTable("faqs", {
    id: text("id").primaryKey(),
    question: text("question").notNull(),
    answer: text("answer").notNull(),
    category: text("category").default("general"), // general, app, business, pricing
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// CONTACT SUBMISSIONS
// ========================================
export const contactSubmissions = sqliteTable("contact_submissions", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    subject: text("subject"),
    message: text("message").notNull(),
    type: text("type").default("contact"), // contact, partner, support
    status: text("status").default("new"), // new, read, replied, archived
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// SITE SETTINGS
// ========================================
export const siteSettings = sqliteTable("site_settings", {
    id: text("id").primaryKey(),
    key: text("key").notNull().unique(),
    value: text("value").notNull(),
    type: text("type").default("string"), // string, number, boolean, json
    description: text("description"),
    updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ========================================
// NAVIGATION
// ========================================
export const navigation = sqliteTable("navigation", {
    id: text("id").primaryKey(),
    label: text("label").notNull(),
    href: text("href").notNull(),
    icon: text("icon"),
    parentId: text("parent_id"),
    order: integer("order").default(0),
    isActive: integer("is_active", { mode: "boolean" }).default(true),
    isExternal: integer("is_external", { mode: "boolean" }).default(false),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Type exports for TypeScript
export type HeroContent = typeof heroContent.$inferSelect;
export type NewHeroContent = typeof heroContent.$inferInsert;

export type Feature = typeof features.$inferSelect;
export type NewFeature = typeof features.$inferInsert;

export type Stat = typeof stats.$inferSelect;
export type NewStat = typeof stats.$inferInsert;

export type Step = typeof steps.$inferSelect;
export type NewStep = typeof steps.$inferInsert;

export type TeamMember = typeof teamMembers.$inferSelect;
export type NewTeamMember = typeof teamMembers.$inferInsert;

export type Testimonial = typeof testimonials.$inferSelect;
export type NewTestimonial = typeof testimonials.$inferInsert;

export type Screenshot = typeof screenshots.$inferSelect;
export type NewScreenshot = typeof screenshots.$inferInsert;

export type ContentBlock = typeof contentBlocks.$inferSelect;
export type NewContentBlock = typeof contentBlocks.$inferInsert;

export type BusinessSolution = typeof businessSolutions.$inferSelect;
export type NewBusinessSolution = typeof businessSolutions.$inferInsert;

export type FAQ = typeof faqs.$inferSelect;
export type NewFAQ = typeof faqs.$inferInsert;

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type NewContactSubmission = typeof contactSubmissions.$inferInsert;

export type SiteSetting = typeof siteSettings.$inferSelect;
export type NewSiteSetting = typeof siteSettings.$inferInsert;

export type Navigation = typeof navigation.$inferSelect;
export type NewNavigation = typeof navigation.$inferInsert;
