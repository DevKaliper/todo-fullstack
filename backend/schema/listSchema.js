const z = require("zod");

const listSchema = z.object({ // Esquema de validaciones para la lista
  name: z
    .string({
      required_error: "You must enter a name",
    })
    .min(2)
    .max(100),
  description: z.string().min(2).max(100).optional(),
  status: z.boolean().default(false),
});

const validateSchema = (list) => {
  return listSchema.safeParse(list);
};

const validatePartialSchema = (list) => {
  return listSchema.partial().safeParse(list);
};

module.exports = {
  validateSchema,
  validatePartialSchema,
};
