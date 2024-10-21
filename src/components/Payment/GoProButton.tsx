import { useEffect, useState } from "react";
import Script from "next/script";
import toast from "react-hot-toast";
// Firebase
import { collection, orderBy, query, where } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
// Components
import { Button } from "@nextui-org/react";
import firestore from "@/firebase/db";
// Utils
import { API_ROUTES, FIREBASE_CONSTANTS, PAYMENT_STATUS } from "@/constants";
import { TRender } from "@/models/Render";
import { SubscriptionStatusEnum } from "@/models/Subscription";
import { Spinner } from "phosphor-react";
import { FaCrown } from "react-icons/fa6";
import { on } from "events";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type RazorPayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type TProps = {
  userId: string;
  subscriptionPlanId: string;
  couponCode: string | undefined;
  onPaymentProcessing?: () => void;
  onPaymentSuccess?: () => void;
  onPaymentFailure?: () => void;
};
export default function GoProButton(props: TProps) {
  const {
    userId,
    subscriptionPlanId,
    couponCode,
    onPaymentProcessing,
    onPaymentSuccess,
    onPaymentFailure,
  } = props;
  const [loading, setLoading] = useState(false);

  // get subscriptions Associated with user
  const [subscription, subscriptionLoading, subscriptionError] =
    useCollectionDataOnce(
      query(
        collection(firestore, FIREBASE_CONSTANTS.COLLECTIONS.SUBSCRIPTION),
        where("userId", "==", userId),
        where("status", "==", SubscriptionStatusEnum.Values.active)
      )
    );

  useEffect(() => {}, [loading]);
  if (subscriptionLoading || subscriptionError) return <Spinner />;
  if (subscription?.length) return null;

  const initiatePayment = async () => {
    setLoading(true);
    onPaymentProcessing && onPaymentProcessing();
    try {
      const data = await fetch(`${API_ROUTES.PAYMENT.RAZORPAY.CREATE_ORDER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscriptionId: subscriptionPlanId,
          couponCode: couponCode,
        }),
      }).then((t) => t.json());

      const respData = await data.data;
      var options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        name: "Cine Machines Pvt Ltd",
        currency: respData.currency,
        amount: respData.amount,
        notify: {
          sms: true,
          email: true,
        },
        checkout: {
          netbanking: "1",
          card: "1",
          upi: "1",
          wallet: "1",
        },
        order_id: respData.id,
        description: respData.description,
        image: "https://www.blinkadz.com/assets/logo2.png",
        handler: async function (response: RazorPayResponse) {
          // Validate payment at server - using webhooks is a better idea.
          const resp = await fetch(
            `${API_ROUTES.PAYMENT.RAZORPAY.VERIFY_PAYMENT}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                transactionId: respData.transactionId,
                response,
                subscriptionPlanId: subscriptionPlanId,
              }),
            }
          ).catch((error) => {
            console.error("Error while verifying payment: ", error);
            toast.error(error.message);
            onPaymentFailure && onPaymentFailure();
          });
          onPaymentSuccess && onPaymentSuccess();
          //save transaction details in firestore
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.open();
    } catch (error: any) {
      console.error("Error while initiating payment: ", error);
      onPaymentFailure && onPaymentFailure();
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  // https://razorpay.com/docs/get-started/#2-choose-your-product
  // https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/#1-build-integration
  // https://razorpay.com/docs/payments/payment-gateway/web-integration/custom/

  return (
    <>
      <Button
        className="bg-avid-gradient md:w-fit"
        onClick={initiatePayment}
        isLoading={loading}
      >
        <FaCrown color="golden"></FaCrown> Go Pro
      </Button>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        id="razorpay-checkout-js"
        onLoad={() => {
          document
            .getElementsByClassName("razorpay-container")[0]
            .classList.add("razorpay-container-override");
        }}
      ></Script>
    </>
  );
}
