"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRegistrations = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.courseRegistrations = (0, pg_core_1.pgTable)("course_registrations", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    fname: (0, pg_core_1.varchar)("fname", { length: 255 }).notNull(),
    lname: (0, pg_core_1.varchar)("lname", { length: 255 }).notNull(),
    email: (0, pg_core_1.varchar)("email", { length: 255 }).notNull().unique(),
    phone: (0, pg_core_1.varchar)("phone", { length: 20 }).notNull(),
    educationLevel: (0, pg_core_1.text)("education_level"),
    modeOfLearning: (0, pg_core_1.text)("mode_of_learning").notNull(),
    paymentOption: (0, pg_core_1.text)("payment_option").notNull(),
    mpesaNumber: (0, pg_core_1.varchar)("mpesa_number", { length: 20 }),
    enrollDay: (0, pg_core_1.integer)("enroll_day").notNull(),
    enrollMonth: (0, pg_core_1.integer)("enroll_month").notNull(),
    enrollYear: (0, pg_core_1.integer)("enroll_year").notNull(),
    courseSelected: (0, pg_core_1.text)("course_selected").notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow(),
});
