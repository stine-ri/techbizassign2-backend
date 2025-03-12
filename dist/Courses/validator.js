"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRegistrationsSchema = void 0;
const zod_1 = require("zod");
exports.courseRegistrationsSchema = zod_1.z.object({
    fname: zod_1.z.string(),
    lname: zod_1.z.string(),
    email: zod_1.z.string(),
    phone: zod_1.z.string(),
    educationLevel: zod_1.z.string(),
    modeOfLearning: zod_1.z.string(),
    paymentOption: zod_1.z.string(),
    mpesaNumber: zod_1.z.string(),
    enrollDay: zod_1.z.string(),
    enrollMonth: zod_1.z.string(),
    enrollYear: zod_1.z.string(),
    courseSelected: zod_1.z.string(),
});
