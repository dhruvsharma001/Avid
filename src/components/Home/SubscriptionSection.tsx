"use client";
import MaxWidthWrapper from "@/app/MaxWidthWrapper";
import { useUserStore } from "@/stores/user";
import GoProModal from "../Payment/GoProModal";
import PricingSection from "./PricingSection";

function SubscriptionSection() {
  const user = useUserStore((state) => state.user);
  if (!user) return <PricingSection></PricingSection>;

  return (
    <section className="bg-avid-main-500">
      <MaxWidthWrapper className="relative flex flex-col items-center">
        <div className="flex justify-center flex-col ">
          <div>
            <h1 className="text-2xl md:text-5xl font-semibold text-center">
              Subscribe to Pro
            </h1>
          </div>
          <div>
            <GoProModal userId={user.uid} buttonVariant="large"></GoProModal>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default SubscriptionSection;
