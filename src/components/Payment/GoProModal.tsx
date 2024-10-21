import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Radio,
  Spacer,
  Image,
  RadioGroup,
  useDisclosure,
  Spinner,
  Divider,
} from "@nextui-org/react";
import GoProButton from "./GoProButton";
import { FaCrown } from "react-icons/fa6";
import ReviewCard from "./ReviewCard";
import { SUBSCRIPTION_PLANS } from "@/constants";
import {
  cn,
  getCurrencySymbol,
  getUserCountry,
  getUserCurrency,
} from "@/lib/utils";
import { useUserStore } from "@/stores/user";
import moment from "moment";

type TProps = {
  userId: string;
  buttonVariant?: "small" | "large";
};
export default function GoProModal(props: TProps) {
  const { userId } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPlan, setSelectedPlan] = useState("pro_one_day");
  const { setIsPro, proValidity } = useUserStore((state) => state);
  const isPro = useUserStore((state) => state.isPro);
  const [paymentState, setPaymentState] = useState<string>();
  const couponRef = React.useRef<HTMLInputElement>(null);

  const handleSelectPlan = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlan(event.target.value);
  };
  const applyCouponCode = () => {
    const code = couponRef.current?.value;
  };
  const getMessage = (paymentState: string | undefined) => {
    switch (paymentState) {
      case "success":
        return <div>Payment successful</div>;
      case "failed":
        return <div>Payment failed</div>;
      case "processing":
        return <Spinner label="Initiating payment..." />;
      default:
        return null;
    }
  };
  const getPlanDays = () => {
    switch (selectedPlan) {
      case "pro_one_day":
        return 1;
      case "pro_one_week":
        return 7;
      case "pro_one_month":
        return 30;
      case "pro_one_year":
        return 365;
      default:
        return 1;
    }
  };
  const userCurrency = getUserCurrency();
  return (
    <>
      <Button
        onPress={() => onOpen()}
        className={cn("hover:text-blue-600", {
          "mt-10 w-full bg-avid-gradient text-white hover:text-white px-20 tracking-widest text-md":
            props.buttonVariant === "large",
        })}
      >
        <FaCrown color="yellow" className="text-golden-200"></FaCrown>{" "}
        {isPro ? "Extend Pro" : "Go Pro"}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Go Pro</ModalHeader>

              {
                <>
                  <ModalBody
                    className={
                      paymentState === "success" || paymentState === "failed"
                        ? "hidden"
                        : ""
                    }
                  >
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <RadioGroup
                          value={selectedPlan}
                          onChange={handleSelectPlan}
                          isDisabled={paymentState === "processing"}
                        >
                          {Object.keys(SUBSCRIPTION_PLANS).map(
                            (key: string) => (
                              <div
                                className="flex flex-row max-w-[400px]"
                                key={key}
                              >
                                <Radio
                                  value={key}
                                  description={
                                    SUBSCRIPTION_PLANS[
                                      key as keyof typeof SUBSCRIPTION_PLANS
                                    ].description
                                  }
                                >
                                  {
                                    SUBSCRIPTION_PLANS[
                                      key as keyof typeof SUBSCRIPTION_PLANS
                                    ].name
                                  }
                                </Radio>
                                <Spacer x={1} />
                                <div className="min-w-[130px]">
                                  {getCurrencySymbol(
                                    SUBSCRIPTION_PLANS[
                                      key as keyof typeof SUBSCRIPTION_PLANS
                                    ].price[userCurrency].currency
                                  ) +
                                    " " +
                                    SUBSCRIPTION_PLANS[
                                      key as keyof typeof SUBSCRIPTION_PLANS
                                    ].price[userCurrency].amount /
                                      100}
                                </div>
                              </div>
                            )
                          )}
                        </RadioGroup>
                        <Divider className="my-4" />
                        <div className="text-xs text-gray-300 ">
                          Pro membership will be activated till{" "}
                          {isPro
                            ? moment(proValidity)
                                .add(getPlanDays(), "days")
                                .format("DD/MM/YYYY")
                            : moment()
                                .add(getPlanDays(), "days")
                                .format("DD/MM/YYYY")}
                        </div>
                      </div>
                      <Spacer y={2} />
                      <div className="justify-center">
                        <ReviewCard
                          name="John Doe"
                          company="Google"
                          position="Software Engineer"
                          review="I love the pro features, they are so cool"
                          avatar="/assets/logo.png"
                        ></ReviewCard>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter
                    className={
                      paymentState === "success" || paymentState === "failed"
                        ? "justify-between hidden"
                        : "justify-between"
                    }
                  >
                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        ref={couponRef}
                      />
                      <Button onPress={() => applyCouponCode()}>Apply</Button>
                    </div>
                    <div className="flex flex-row gap-4">
                      <GoProButton
                        subscriptionPlanId={selectedPlan}
                        userId={userId}
                        couponCode={couponRef.current?.value}
                        onPaymentProcessing={() => {
                          setPaymentState("processing");
                        }}
                        onPaymentSuccess={() => {
                          setPaymentState("success");
                          setIsPro(true);
                        }}
                        onPaymentFailure={() => {
                          setPaymentState("failed");
                        }}
                      />

                      <Button onClick={() => onClose()}>Close</Button>
                    </div>
                  </ModalFooter>
                  <ModalBody
                    className={
                      paymentState === "success" || paymentState === "failed"
                        ? ""
                        : "hidden"
                    }
                  >
                    {getMessage(paymentState)}
                  </ModalBody>
                </>
              }
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
