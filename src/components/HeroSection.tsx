import React from "react";
import Link from "next/link";

import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="bgimage h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="max-w-4xl mx-auto pt-36">
        <h1 className=" text-xl md:text-3xl lg:text-5xl text-white font-bold inter-var text-center">
          Empower Your Fitness Journey
        </h1>
        <p className="text-bold md:text-lg mt-4 text-white font-normal inter-var text-center">
          Experience the difference with <strong>Flexfit</strong> —a place where
          fitness meets community. With state-of-the-art equipment, expert
          trainers, and personalized courses, you'll have everything you need to
          crush your fitness goals and have fun while doing it!
        </p>
      </div>
      <div className="text-center pt-5">
        <Link href="/courses">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Explore courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
