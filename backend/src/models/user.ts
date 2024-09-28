import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(50),
    username: z.string().email()
});