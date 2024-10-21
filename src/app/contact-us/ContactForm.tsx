"use client";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Stores
import { useUserStore } from "@/stores/user";
// Components
import { Button, Input, Textarea } from "@nextui-org/react";
import ModalBgAssets from "@/components/reusables/ModalBgAssets";
// Constants
import { API_ROUTES, NOTIFICATION_TEXTS } from "@/constants";
// Schemas

import { nextFetch } from "@/lib/fetch";
import { z } from "zod";

export default function ContactForm() {
  const user = useUserStore((state) => state.user);
  const ContactUsSchema = z.object({
    email: z.string().email(),
    phoneNumber: z.string().min(10).max(10),
    description: z.string().min(10).optional(),
  });
  type ContactUsSchemaType = z.infer<typeof ContactUsSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },

    reset,
  } = useForm<ContactUsSchemaType>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
    },
  });

  const onSubmit = async (data: ContactUsSchemaType) => {
    try {
      const {
        data: respData,
        status,
        ok,
      } = await nextFetch(API_ROUTES.TICKET.CREATE, {
        method: "POST",
        body: JSON.stringify({
          ...data,
          status: "OPEN",
          type: "OTHER",
          urgency: "Low",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!ok) {
        toast.error(respData.message);
      }
      toast.success(
        NOTIFICATION_TEXTS.CUSTOM_DEVELOPMENT.SUBMIT_DETAILS_SUCCESS
      );
      reset();
    } catch (error: any) {
      console.error("Error while submitting : ", error);

      toast.error(error.message);
    }
  };

  return (
    <div className="relative py-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            {...register("email")}
            type="text"
            variant="bordered"
            placeholder="Email"
            size="sm"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4 mt-4">
          <Input
            {...register("phoneNumber")}
            type="text"
            variant="bordered"
            placeholder="Phone Number"
            size="sm"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div>
          <Textarea
            {...register("description")}
            type="text"
            variant="bordered"
            placeholder="Description"
            size="lg"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <div className="mt-4">
          <Button type="submit" color="primary" isLoading={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit Details"}
          </Button>
        </div>
      </form>
    </div>
  );
}
