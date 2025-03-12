    import { integer } from 'drizzle-orm/pg-core'
    import { z } from 'zod'
    
    
    export const courseRegistrationsSchema = z.object({
        fname: z.string(),
        lname: z.string(),
        email:z.string(),
        phone: z.string(),
        educationLevel:z.string(),
        modeOfLearning: z.string(),
        paymentOption: z.string(),
        mpesaNumber: z.string(),
        enrollDay: z.string(),
        enrollMonth: z.string(),
        enrollYear: z.string(),
        courseSelected: z.string(),
    })
    
    