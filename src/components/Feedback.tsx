"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { div } from "framer-motion/client";

interface Feedback {
  name: string;
  quote: string;
}

const feedback: Feedback[] = [
  {
    name: "Emily Roberts",
    quote:
      "The instructors are amazing, and the classes are challenging yet fun! I've seen great progress in my strength and endurance since joining.",
  },
  {
    name: "Michael Johnson",
    quote:
      "I love the variety of courses offered here. From yoga to weightlifting, there's something for everyone, and the facilities are top-notch!",
  },
  {
    name: "Sophia Brown",
    quote:
      "Great community and fantastic trainers! They really focus on form and personalized attention, which has helped me a lot.",
  },
  {
    name: "Daniel White",
    quote:
      "I signed up for the HIIT classes, and I can already see an improvement in my fitness level. Highly recommend for anyone looking for a serious workout!",
  },
  {
    name: "Olivia Martinez",
    quote:
      "The Zumba classes are so much fun! It's a great way to get in shape without feeling like you're working out.",
  },
  {
    name: "James Carter",
    quote:
      "I've been a member for six months now, and it's the best gym I've ever joined. The instructors are knowledgeable, and the environment is super motivating.",
  },
];

function Feedback() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony : Voice of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 max-w-6xl">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={feedback}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
