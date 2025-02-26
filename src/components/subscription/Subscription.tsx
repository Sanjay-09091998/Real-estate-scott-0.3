import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Subscription() {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      features: [
        "10 property views/month",
        "Basic search functionality",
        "Email support",
      ],
    },
    {
      name: "Basic Plan",
      price: "$29",
      features: [
        "100 data exports",
        "Basic analytics",
        "Priority support",
        "API access",
      ],
    },
    {
      name: "Premium Plan",
      price: "$99",
      features: [
        "Unlimited access",
        "Premium analytics",
        "24/7 support",
        "Custom reports",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Subscription Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="mt-4 mb-6">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              variant={plan.name === "Premium Plan" ? "default" : "outline"}
            >
              {plan.name === "Free Plan" ? "Current Plan" : "Upgrade"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
