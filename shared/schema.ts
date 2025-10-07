import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Waitlist schema for baccarat
export const waitlistSignups = pgTable("waitlist_signups", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  experienceLevel: text("experience_level").notNull(),
  referralCode: text("referral_code"),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
  status: text("status").notNull().default("pending"),
});

export const insertWaitlistSchema = createInsertSchema(waitlistSignups).omit({
  id: true,
  timestamp: true,
  status: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  fullName: z.string().min(2, "Please enter your full name"),
  experienceLevel: z.enum(["beginner", "intermediate", "advanced", "pro"]),
  referralCode: z.string().optional(),
});

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type WaitlistSignup = typeof waitlistSignups.$inferSelect;
