"use client";
import React from "react";
import Link from "next/link";
import gymCourse from "../data/gym_course.json";
import { BackgroundGradient } from "./ui/background_gradient";

interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCard() {
  const featuredCourse = gymCourse.courses.filter(
    (course: Courses) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn with the best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {" "}
          {featuredCourse.map((course: Courses) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <h1 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
                <button
                  className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                  Learn more
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCard;
