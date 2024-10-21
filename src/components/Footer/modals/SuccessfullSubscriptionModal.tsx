import { useAppNavigation } from "@/hooks/navigation";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import ModalBgAssets from "@/components/reusables/ModalBgAssets";
import { FaThumbsUp } from "react-icons/fa";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function SuccessfullSubscriptionModal({
  isOpen,
  onClose,
}: TProps) {
  const { navigateToHome } = useAppNavigation();

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
        <ModalContent className="text-center">
          {(onClose) => (
            <>
              <ModalBgAssets />
              <ModalHeader className="text-3xl flex flex-col gap-3 items-center">
                <div className="bg-white p-4 rounded-full text-avid-accent">
                  <FaThumbsUp />
                </div>
                Thank you for subscribing!
              </ModalHeader>
              <ModalBody>
                <p className="text-avid-gray-300">
                  You’ve been successfully subscribed! <br /> Check your inbox
                  soon for great emails.
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button
                  color="primary"
                  onPress={() => {
                    navigateToHome();
                    onClose();
                  }}
                >
                  Back to Homepage
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
