
import { Context } from "hono";
import {courseRegistrationsService, getcourseRegistrationsService, createcourseRegistrationsService, updatecourseRegistrationsService, deletecourseRegistrationsService} from "./Course.service";
import*as bcrypt from "bcrypt";
export const listcourseRegistrations = async (c: Context) => {
    try {
        //limit the number of courseRegistrations to be returned

        const limit = Number(c.req.query('limit'))

        const data = await courseRegistrationsService(limit);
        if (data == null || data.length == 0) {
            return c.text("courseRegistrationss not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const getcourseRegistrations = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const courseRegistrationss = await getcourseRegistrationsService(id);
    if (courseRegistrationss == undefined) {
        return c.text("courseRegistrationss not found", 404);
    }
    return c.json(courseRegistrationss, 200);
}
export const createcourseRegistrations = async (c: Context) => {
    try {
        const courseRegistrationss = await c.req.json();
        // const password=courseRegistrationss.password;
        // const hashedPassword=await bcrypt.hash(password,10);
        // courseRegistrationss.password=hashedPassword;
        const createdcourseRegistrationss = await createcourseRegistrationsService(courseRegistrationss);


        if (!createdcourseRegistrationss) return c.text("courseRegistrationss not created", 404);
        return c.json({ msg: createdcourseRegistrationss }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updatecourseRegistrations = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const courseRegistrationss = await c.req.json();
    try {
        // search for the courseRegistrationss
        const searchedcourseRegistrationss= await getcourseRegistrationsService(id);
        if (searchedcourseRegistrationss == undefined) return c.text("courseRegistrationss not found", 404);
        // get the data and update it
        const res = await updatecourseRegistrationsService(id, courseRegistrationss);
        // return a success message
        if (!res) return c.text("courseRegistrationss not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deletecourseRegistrations = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the courseRegistrationss
        const courseRegistrationss = await getcourseRegistrationsService(id);
        if (courseRegistrationss== undefined) return c.text("courseRegistrationss not found", 404);
        //deleting the courseRegistrationss
        const res = await deletecourseRegistrationsService(id);
        if (!res) return c.text("courseRegistrationss not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
 
 