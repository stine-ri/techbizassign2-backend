import  {Hono }from 'hono'
import "dotenv/config"
import { serve } from '@hono/node-server'
import { courseRegistrationRouter  } from './Courses/Course.router'
import {cors} from 'hono/cors'

const app = new Hono();
app.get('/', (c) => {
    return c.text('the code is okay')
  })

//middleware
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Allow only your frontend
    credentials: true, // ✅ Allow authentication
  })
);

//routes
app.route("/api",courseRegistrationRouter)

serve({
    fetch: app.fetch,
    port:Number(process.env.PORT)
  })