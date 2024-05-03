import { Elysia } from "elysia";

export const admin = new Elysia({ prefix: "/admin" })
    .get("/", () => "You are at Admin Panel")