import React from "react";
import { Button } from "../../components/ui/button";
import { Navbar } from "../../components/Navbar";

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="py-20 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Innovating for a{" "}
              <span className="text-orange-500">Digital Future</span>
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed">
              At ROGISTECH, we believe in pushing the boundaries of technology
              to create smart, scalable, and secure business solutions. Founded
              by a team of industry experts in AI, cybersecurity, fintech, and
              IoT, we have spent years perfecting innovative strategies that
              help businesses thrive in a digital-first world.
            </p>
          </div>
          <div>
            <img
              src="/public/Rectangle 163.png"
              alt="Digital Innovation"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-16 bg-gray-100 py-10 px-6 rounded-lg text-center">
          <img src="/public/CTA 2.png" alt="" srcset="" />
        </div>

        {/* Core Values Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
          <img
            className=""
            src="/public/Screenshot 2025-03-16 162833.png"
            alt=""
          />
          <div className="grid md:grid-cols-3 gap-8 mt-10"></div>

          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-6">
            <Button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700">
              Read Our Case Studies
            </Button>
            <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
              Meet Our Experts
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
