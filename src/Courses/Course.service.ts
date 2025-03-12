import {eq} from "drizzle-orm";
import db from "../drizzle/db";
 import { TIcourseRegistrations  , TScourseRegistrations  , courseRegistrations   } from "../drizzle/schema";
  export const courseRegistrationsService = async (limit?: number): Promise<TScourseRegistrations  [] | null> => {
    if (limit) {
      return await db.query.courseRegistrations  .findMany({
        limit: limit
      });
    }
    return await db.query.courseRegistrations  .findMany();
  };

  
export const getcourseRegistrationsService = async (id: number): Promise<TIcourseRegistrations   | undefined> => {
    return await db.query.courseRegistrations  .findFirst({
        where: eq(courseRegistrations  .id, id)
    });

}
export const createcourseRegistrationsService = async (user: TIcourseRegistrations  ) => {
    await db.insert(courseRegistrations  ).values(user)
    return "courseRegistration created successfully";

}

export const updatecourseRegistrationsService = async (id: number, user: TIcourseRegistrations  ) => {
    await db.update(courseRegistrations  ).set(user).where(eq(courseRegistrations  .id, id))
    return "courseRegistration updated successfully";
}

export const deletecourseRegistrationsService = async (id: number) => {
    await db.delete(courseRegistrations  ).where(eq(courseRegistrations  .id, id))
    return "courseRegistration deleted successfully";
}
