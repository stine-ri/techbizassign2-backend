import { pgTable, serial, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";

export const courseRegistrations = pgTable("course_registrations", {
  id: serial("id").primaryKey(),
  fname: varchar("fname", { length: 255 }).notNull(),
  lname: varchar("lname", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  phone: varchar("phone", { length: 20 }).notNull(),
  educationLevel: text("education_level"),
  modeOfLearning: text("mode_of_learning").notNull(),
  paymentOption: text("payment_option").notNull(),
  mpesaNumber: varchar("mpesa_number", { length: 20 }),
  enrollDay: integer("enroll_day").notNull(),
  enrollMonth: integer("enroll_month").notNull(),
  enrollYear: integer("enroll_year").notNull(),
  courseSelected: text("course_selected").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
export type TIcourseRegistrations = typeof courseRegistrations.$inferInsert;
export type TScourseRegistrations = typeof courseRegistrations.$inferSelect;