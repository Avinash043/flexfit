"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden pt-44 h-[40rem] w-full rounded-md ">
      <div className="mb-10">
        <h1 className=" text-xl md:text-3xl lg:text-5xl text-white font-bold inter-var text-center">
          Contact Us
        </h1>
        <p>
          We are here to help with any questions about our courses, programs, or
          events.Reach out and let us know how we can assist you in your
          training journey.
        </p>
      </div>
      <form action="" className="flex flex-col">
      <label htmlFor="email">Email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          type="text"
          id="id"
          placeholder="Your email address"
        />
        <label htmlFor="message">Message</label>
        <textarea
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          name="message"
          id="message"
          placeholder="Your message"
        ></textarea>
        <button className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="submit">Send Message</button>
      </form>
      <BackgroundBeams />
    </div>
  );
}

export default Contact;
