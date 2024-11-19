"use client";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h4 className="text-center mb-4 text-lg font-bold">About Us</h4>
          <p className="opacity-40">
            At Flexfit, we believe that fitness is a journey, not just a
            destination. Our mission is to empower you to become the best
            version of yourself, both physically and mentally. 
          </p>
        </div>
        <div>
          <h4 className="text-center mb-4 text-lg font-bold"> Quick Links</h4>
          <div className="flex flex-col items-center flex-wrap justify-center opacity-40">
            <p>Home</p>
            <p>About</p>
            <p>Courses</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <h4 className="text-center mb-4 text-lg font-bold">Follow Us</h4>
          <div className="flex items-center flex-col flex-wrap justify-center opacity-40">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div>
          <h4 className="text-center mb-4 text-lg font-bold">Contact Us</h4>
          <div className="flex items-center flex-wrap justify-center opacity-40">
            <p>New Delhi,India </p>
            <p>Email: xxxxxx@gmail.com</p>
            <p>Phone : XXXXXXXXX</p>
          </div>
        </div>
      </div>
      <p className="text-center text-white text-xs pt-8 opacity-40" >
        @ 2024 GYM Training. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
