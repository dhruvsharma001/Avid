import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Stores
import { useUserStore } from "@/stores/user";
// Components
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@nextui-org/react";
import UrgencyDropdown from "./UrgencyDropdown";
import ModalBgAssets from "@/components/reusables/ModalBgAssets";
// Constants
import { API_ROUTES, NOTIFICATION_TEXTS } from "@/constants";
// Schemas
import {
  CustomDevelopmentSchema,
  CustomDevelopmentSchemaType,
} from "../schemas";
import { TTicketUrgency } from "@/models/Ticket";
import { nextFetch } from "@/lib/fetch";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function CustomDevelopmentModal({ isOpen, onClose }: TProps) {
  const user = useUserStore((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    resetField,
  } = useForm<CustomDevelopmentSchemaType>({
    resolver: zodResolver(CustomDevelopmentSchema),
    defaultValues: {
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
      urgency: "Low",
    },
  });

  const onSubmit = async (data: CustomDevelopmentSchemaType) => {
    try {
      const {
        data: respData,
        status,
        ok,
      } = await nextFetch(API_ROUTES.TICKET.CREATE, {
        method: "POST",
        body: JSON.stringify({ ...data, status: "OPEN", type: "CUST_DEV" }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (status !== 201 || !ok) {
        toast.error(respData.message);
      }
      toast.success(
        NOTIFICATION_TEXTS.CUSTOM_DEVELOPMENT.SUBMIT_DETAILS_SUCCESS
      );

      onClose();
    } catch (error: any) {
      console.error(
        "Error while submitting create custtom development form: ",
        error
      );

      toast.error(error.message);
    }
  };

  return (
    <div className="relative">
      <Modal
        className="bg-avid-gray-300/10 backdrop-filter backdrop-blur-md"
        classNames={{
          base: "p-2 md:p-8",
        }}
        backdrop="opaque"
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        placement="center"
      >
        <ModalContent className="">
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBgAssets />
              <ModalHeader className="text-3xl">Custom Development</ModalHeader>
              <ModalBody>
                <div>
                  <Input
                    {...register("email")}
                    type="text"
                    variant="bordered"
                    placeholder="Email"
                    size="sm"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("phoneNumber")}
                    type="text"
                    variant="bordered"
                    placeholder="Phone Number"
                    size="sm"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.phoneNumber.message}
                    </p>
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
                    <p className="text-red-500 text-sm">
                      {errors.description.message}
                    </p>
                  )}
                </div>
                <div>
                  <UrgencyDropdown
                    urgency={watch("urgency") as TTicketUrgency}
                    resetField={resetField}
                  />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button type="submit" color="primary" isLoading={isSubmitting}>
                  {isSubmitting ? "Submitting" : "Submit Details"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
