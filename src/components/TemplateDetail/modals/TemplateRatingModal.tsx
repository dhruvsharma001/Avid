import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import toast from "react-hot-toast";
// Components
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import ModalBgAssets from "@/components/reusables/ModalBgAssets";
// Icons
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
// Utils
import { nextFetch } from "@/lib/fetch";
import { API_ROUTES, NOTIFICATION_TEXTS } from "@/constants";
import { TRate } from "@/models/Rate";

type TProps = {
  userId?: string;
  templateId: string;
  isOpen: boolean;
  onClose: () => void;
  rating: number;
  setRating: (val: number) => void;
};
export default function TemplateRatingModal({
  userId,
  templateId,
  isOpen,
  onClose,
  rating,
  setRating,
}: TProps) {
  const [updatedRating, setUpdatedRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setUpdatedRating(rating);
  }, [rating]);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      if (!userId) return;
      const { data, status, ok } = await nextFetch(
        API_ROUTES.TEMPLATE_RATING.CREATE,
        {
          method: "POST",
          body: JSON.stringify({
            userId,
            resourceId: templateId,
            resourceType: "template",
            rating: updatedRating,
          } as TRate),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!ok) {
        toast.error(data.message || data.error);
      } else {
        setRating(updatedRating);

        toast.success(NOTIFICATION_TEXTS.TEMPLATE_RATING.SUBMIT_RATING_SUCCESS);
      }

      onClose();
    } catch (error: any) {
      console.error("Error while rating template: ", error);

      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <Modal
        className="bg-avid-gray-300/10 backdrop-filter backdrop-blur-md"
        classNames={{
          base: "md:p-8",
        }}
        backdrop="opaque"
        isOpen={isOpen}
        onClose={onClose}
        size="md"
        placement="center"
      >
        <ModalContent className="text-center">
          {(onClose) => (
            <>
              <ModalBgAssets />
              <ModalHeader className="text-3xl flex flex-col items-center gap-5">
                <ReactStars
                  value={updatedRating}
                  count={5}
                  onChange={(rating: number) => setUpdatedRating(rating)}
                  size={50}
                  isHalf={true}
                  emptyIcon={<FaRegStar />}
                  halfIcon={<FaStarHalfAlt />}
                  fullIcon={<FaStar />}
                  activeColor="#FFA800"
                />
                How much you like this template?
              </ModalHeader>
              <ModalBody>
                <p className="text-avid-gray-300">
                  We appreciate your feedback. Your rating will help us improve
                  our services.
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button
                  color="primary"
                  isLoading={isSubmitting}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? "Submitting" : "Submit"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
