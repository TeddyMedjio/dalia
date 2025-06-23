import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Nom requis"),
  email: z.string().email("Email invalide"),
  object: z.string().min(5, "Objet requis"),
  message: z.string().min(20, "Message requis (min 20 caractètes)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
