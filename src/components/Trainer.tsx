"use client";
import { cn } from "@/lib/utils";
import React from 'react'
type Card = {
  id: number;
  name: string;
  expertise: string;
  image: string;
  description : string;
};


const instructor : Card[]= [
    {
        "id": 1,
      "name": "Alex Matthews",
      "expertise": "Strength & Conditioning",
      "description": "With over 10 years of experience in strength training, Alex specializes in helping clients build muscle and improve endurance.",
      "image": "1st.jpg"
    },
    {
        "id": 2,
      "name": "Samantha Lee",
      "expertise": "Yoga & Flexibility",
      "description": "Samantha is a certified yoga instructor with a focus on flexibility and mindfulness. ",
      "image": "Samantha.jpg"
    },
    {
        "id": 3,
      "name": "David Johnson",
      "expertise": "HIIT & Cardio",
      "description": "David is a high-intensity interval training (HIIT) expert, known for his energetic classes that burn fat and build stamina.",
      "image": "2nd.jpg"
    }
  ]


function Trainer() {
  return (
    <div className="mb-10">
      <h1 className='text-xl md:text-3xl lg:text-5xl text-white font-bold text-center'>Get Your Personal Trainer</h1>
      <div className="flex flex-wrap justify-center my-10 items-center flex-row">
        <div key={instructor[0].id} className="max-w-xs mx-10 w-full group/card ">
        <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(/1st.jpg)] bg-cover"
        )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {instructor[0].name}
              </p>
              
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {instructor[0].expertise}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {instructor[0].description}
            </p>
          </div>
        </div>
      </div>
      <div key={instructor[1].id} className="max-w-xs mx-10 w-full group/card ">
        <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(/Samantha.jpg)] bg-cover"
        )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {instructor[1].name}
              </p>
              
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {instructor[1].expertise}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {instructor[1].description}
            </p>
          </div>
        </div>
      </div>
      <div key={instructor[2].id} className="max-w-xs mx-10 w-full group/card ">
        <div
        className={cn(
          " cursor-pointer overflow-hidden relative bg-cover card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(/2nd.jpg)] bg-cover"
        )}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {instructor[2].name}
              </p>
              
            </div>
          </div>
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {instructor[2].expertise}
            </h1>
            <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {instructor[2].description}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Trainer
