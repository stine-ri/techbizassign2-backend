"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletecourseRegistrationsService = exports.updatecourseRegistrationsService = exports.createcourseRegistrationsService = exports.getcourseRegistrationsService = exports.courseRegistrationsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const courseRegistrationsService = async (limit) => {
    if (limit) {
        return await db_1.default.query.courseRegistrations.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.courseRegistrations.findMany();
};
exports.courseRegistrationsService = courseRegistrationsService;
const getcourseRegistrationsService = async (id) => {
    return await db_1.default.query.courseRegistrations.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.courseRegistrations.id, id)
    });
};
exports.getcourseRegistrationsService = getcourseRegistrationsService;
const createcourseRegistrationsService = async (user) => {
    await db_1.default.insert(schema_1.courseRegistrations).values(user);
    return "courseRegistration created successfully";
};
exports.createcourseRegistrationsService = createcourseRegistrationsService;
const updatecourseRegistrationsService = async (id, user) => {
    await db_1.default.update(schema_1.courseRegistrations).set(user).where((0, drizzle_orm_1.eq)(schema_1.courseRegistrations.id, id));
    return "courseRegistration updated successfully";
};
exports.updatecourseRegistrationsService = updatecourseRegistrationsService;
const deletecourseRegistrationsService = async (id) => {
    await db_1.default.delete(schema_1.courseRegistrations).where((0, drizzle_orm_1.eq)(schema_1.courseRegistrations.id, id));
    return "courseRegistration deleted successfully";
};
exports.deletecourseRegistrationsService = deletecourseRegistrationsService;
