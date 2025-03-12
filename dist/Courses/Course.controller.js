"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletecourseRegistrations = exports.updatecourseRegistrations = exports.createcourseRegistrations = exports.getcourseRegistrations = exports.listcourseRegistrations = void 0;
const Course_service_1 = require("./Course.service");
const listcourseRegistrations = async (c) => {
    try {
        //limit the number of courseRegistrations to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, Course_service_1.courseRegistrationsService)(limit);
        if (data == null || data.length == 0) {
            return c.text("courseRegistrationss not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listcourseRegistrations = listcourseRegistrations;
const getcourseRegistrations = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const courseRegistrationss = await (0, Course_service_1.getcourseRegistrationsService)(id);
    if (courseRegistrationss == undefined) {
        return c.text("courseRegistrationss not found", 404);
    }
    return c.json(courseRegistrationss, 200);
};
exports.getcourseRegistrations = getcourseRegistrations;
const createcourseRegistrations = async (c) => {
    try {
        const courseRegistrationss = await c.req.json();
        // const password=courseRegistrationss.password;
        // const hashedPassword=await bcrypt.hash(password,10);
        // courseRegistrationss.password=hashedPassword;
        const createdcourseRegistrationss = await (0, Course_service_1.createcourseRegistrationsService)(courseRegistrationss);
        if (!createdcourseRegistrationss)
            return c.text("courseRegistrationss not created", 404);
        return c.json({ msg: createdcourseRegistrationss }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createcourseRegistrations = createcourseRegistrations;
const updatecourseRegistrations = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const courseRegistrationss = await c.req.json();
    try {
        // search for the courseRegistrationss
        const searchedcourseRegistrationss = await (0, Course_service_1.getcourseRegistrationsService)(id);
        if (searchedcourseRegistrationss == undefined)
            return c.text("courseRegistrationss not found", 404);
        // get the data and update it
        const res = await (0, Course_service_1.updatecourseRegistrationsService)(id, courseRegistrationss);
        // return a success message
        if (!res)
            return c.text("courseRegistrationss not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updatecourseRegistrations = updatecourseRegistrations;
const deletecourseRegistrations = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the courseRegistrationss
        const courseRegistrationss = await (0, Course_service_1.getcourseRegistrationsService)(id);
        if (courseRegistrationss == undefined)
            return c.text("courseRegistrationss not found", 404);
        //deleting the courseRegistrationss
        const res = await (0, Course_service_1.deletecourseRegistrationsService)(id);
        if (!res)
            return c.text("courseRegistrationss not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deletecourseRegistrations = deletecourseRegistrations;
