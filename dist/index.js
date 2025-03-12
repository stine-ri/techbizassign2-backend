"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
require("dotenv/config");
const node_server_1 = require("@hono/node-server");
const Course_router_1 = require("./Courses/Course.router");
const cors_1 = require("hono/cors");
const app = new hono_1.Hono();
app.get('/', (c) => {
    return c.text('the code is okay');
});
//middleware
app.use((0, cors_1.cors)({
    origin: "http://localhost:5173", // ✅ Allow only your frontend
    credentials: true, // ✅ Allow authentication
}));
//routes
app.route("/api", Course_router_1.courseRegistrationRouter);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
