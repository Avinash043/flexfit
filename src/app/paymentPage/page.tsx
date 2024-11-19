"use client";

import Checkout from "@/components/Checkout";
import convertToSubCurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY! === undefined) {
  throw new Error("STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentPage({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-40 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Avinash Raj</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> Rs {amount}</span>
        </h2>
      </div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubCurrency(amount),
          currency: "inr",
        }}
      >
        <Checkout amount={amount} />
      </Elements>
    </main>
  );
}