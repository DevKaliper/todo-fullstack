import z from "zod";

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

export const validateSchema = (list) => {
  return listSchema.safeParse(list);
};

export const validatePartialSchema = (list) => {
  return listSchema.partial().safeParse(list);
};


