"use client";

import Image from "next/image";
import React from "react";
import Trainer from "@/components/Trainer";
import gymCourses from "@/data/gym_course.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";



function Courses() {
  return (
    <div>
      <div className="min-h-screen mx-auto pt-36">
        <h1 className=" text-xl md:text-3xl lg:text-5xl text-white font-bold text-center">
          All Training Plans({gymCourses.courses.length})
        </h1>
        <div className="flex flex-wrap flex-row justify-center">
          {gymCourses.courses.map((course) => (
            <CardContainer key={course.id} className=" px-3">
              <CardBody className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {course.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                 {course.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="image"
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-8">
                  <Link href={`/paymentPage?amount=${course.price}`}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-6 py-3 rounded-xl  bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Book
                  </CardItem>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
      <Trainer/>
    </div>
  );
}

export default Courses;
