const { z } = require("zod");

const machineSchema = z.object({
    reference: z.string().trim().min(2),
    name: z.string().trim().min(2),
    workshop: z.string().trim().min(2),
    status: z.enum([
        "available",
        "maintenance",
        "out_of_service"
    ])
});

module.exports = {
    machineSchema
};