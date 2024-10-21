"use client";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Stores
import { useUserStore } from "@/stores/user";
// Components
import { Button, Divider, Input, useDisclosure } from "@nextui-org/react";
import SuccessfullSubscriptionModal from "./modals/SuccessfullSubscriptionModal";
// Icons
import { FaAnglesRight } from "react-icons/fa6";
// Utils
import { subscribeToTopic } from "@/lib/novu";
// Schemas
import { SubscriptionSchema, SubscriptionSchemaType } from "./schemas";

export default function SubscriptionBox() {
  const user = useUserStore((store) => store.user);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SubscriptionSchemaType>({
    resolver: zodResolver(SubscriptionSchema),
  });

  const onSubmit = async (data: SubscriptionSchemaType) => {
    try {
      let subscriberID = data.email;
      let createSubscriber = false;

      if (user && user.email === data.email) {
        subscriberID = user.uid;
      } else {
        subscriberID = data.email;
        createSubscriber = true;
      }
      await subscribeToTopic(subscriberID, createSubscriber, "newsletter");

      toast.success(`Subscribed ${data.email}`);
      onOpen();
    } catch (error: any) {
      console.error("Error while subscribing: ", error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="">Join the newsletter</h3>
      <Divider className="my-5" />
      <p className="text-avid-gray-300">
        Subscribe to our newsletter and stay updated.
      </p>
      <div className="my-3">
        <Input
          {...register("email")}
          variant="bordered"
          placeholder="Email Address"
        />
        {errors.email && (
          <p className="text-red-500 text-sm my-3">{errors.email.message}</p>
        )}
      </div>
      <Button
        className="text-base w-full"
        color="primary"
        type="submit"
        isLoading={isSubmitting}
      >
        {isSubmitting ? "Subscribing" : "Subscribe Now"} <FaAnglesRight />
      </Button>
      <SuccessfullSubscriptionModal isOpen={isOpen} onClose={onClose} />
    </form>
  );
}
