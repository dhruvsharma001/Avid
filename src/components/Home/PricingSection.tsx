import { useState } from "react";
import { Card, Button, CardBody } from "@nextui-org/react";
import MaxWidthWrapper from "@/app/MaxWidthWrapper";

const plans = {
  free: {
    price: "$0",
    features: ["Basic access", "Limited components", "Community support"],
  },
  monthly: {
    price: "$25 / mo",
    features: ["All components", "Priority support", "Regular updates"],
  },
  yearly: {
    price: "$270 / yr",
    features: ["All components", "Premium support", "Free updates"],
  },
};

export default function PricingSection() {
  const [activePlan, setActivePlan] = useState("free");

  return (
    <section className="bg-avid-main-500">
      <MaxWidthWrapper className="relative flex flex-row items-center gap-8">
        <Card>
          <CardBody>
            <h3>Free</h3>
            <p>{plans.free.price}</p>
            <ul>
              {plans.free.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button
              onClick={() => setActivePlan("free")}
              color={activePlan === "free" ? "primary" : "default"}
            >
              Select
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3>Pro</h3>
            <p>{plans.monthly.price}</p>
            <ul>
              {plans.monthly.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button
              onClick={() => setActivePlan("monthly")}
              color={activePlan === "monthly" ? "primary" : "default"}
            >
              Select
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3>Enterprise</h3>
            <p>{plans.yearly.price}</p>
            <ul>
              {plans.yearly.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button
              onClick={() => setActivePlan("yearly")}
              color={activePlan === "yearly" ? "primary" : "default"}
            >
              Select
            </Button>
          </CardBody>
        </Card>
      </MaxWidthWrapper>
    </section>
  );
}
