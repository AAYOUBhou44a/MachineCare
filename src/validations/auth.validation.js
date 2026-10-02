const { z } = require("zod");

const loginSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(8)
});

const registerSchema = z.object({
    firstName: z.string().trim().min(2),
    lastName: z.string().trim().min(2),
    email: z.string().trim().email(),
    password: z.string().min(8)
});


module.exports = {
    registerSchema,
    loginSchema
};