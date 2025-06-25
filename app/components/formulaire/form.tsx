// app/contact/Form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "./schema";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSuccess(true);
    // Ajoutez ceci pour voir les données envoyées
    const res = await fetch("../api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      reset();
      setSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5 ">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-white">Nom*</label>
          <input
            {...register("name")}
            placeholder="Votre nom"
            className="bg-vert-citron p-3 w-full rounded-md focus:outline-0 placeholder:text-vert-contrast/50 mt-2 text-vert-fonce"
          />
          <p className="text-red-400 text-sm">{errors.name?.message}</p>
        </div>
        <div>
          <label className="text-white">Email*</label>
          <input
            {...register("email")}
            placeholder="example@example.com"
            className="bg-vert-citron p-3 w-full rounded-md focus:outline-0 placeholder:text-vert-contrast/50 mt-2 text-vert-fonce"
          />
          <p className="text-red-400 text-sm">{errors.email?.message}</p>
        </div>
        <div>
          <label className="text-white">Sujet*</label>
          <input
            {...register("object")}
            placeholder="Objet du messasge"
            className="bg-vert-citron p-3 w-full rounded-md focus:outline-0 placeholder:text-vert-contrast/50 mt-2 text-vert-fonce"
          />
          <p className="text-red-400 text-sm">{errors.object?.message}</p>
        </div>
      </div>
      <div>
        <label className="text-white">Message*</label>
        <textarea
          rows={4}
          {...register("message")}
          placeholder="Votre message..."
          className="bg-vert-citron p-3 w-full rounded-md focus:outline-0 placeholder:text-vert-contrast/50 mt-2 text-vert-fonce"
        />
        <p className="text-red-400 text-sm">{errors.message?.message}</p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer grid place-items-center w-full py-3 rounded-full bg-vert-secondary hover:bg-vert-contrast transition duration-300 ease-in-out text-white font-semibold"
      >
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          "Envoyer un message"
        )}
      </button>
      {success && (
        <p className="text-jaune-clair text-center">Envoi en cours!</p>
      )}
    </form>
  );
}
