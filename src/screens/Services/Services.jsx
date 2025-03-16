import React from "react";
import { Button } from "../../components/ui/button";
import { Navbar } from "../../components/Navbar";

// Service data (Text & Image)
const services = [
  {
    title: "AI-Powered Business Intelligence",
    description:
      "Transform raw data into actionable insights with our machine learning algorithms and predictive analytics. Enhance decision-making and unlock new revenue streams.",
    image: "public/Rectangle 163 (1).png",
  },
  {
    title: "Enterprise Cybersecurity & Threat Intelligence",
    description:
      "Protect your business with advanced cybersecurity frameworks, including threat intelligence, real-time monitoring, and incident response.",
    image: "public/Rectangle 171.png",
  },
  {
    title: "Blockchain & Fintech Solutions",
    description:
      "Leverage the power of decentralized finance (DeFi) and secure digital transactions with smart contract solutions for seamless and transparent financial operations.",
    image: "public/Rectangle 172.png",
  },
  {
    title: "IoT & Smart Tech Integration",
    description:
      "Implement next-generation automation for businesses with AI-driven IoT and smart device ecosystems that enhance operational efficiency.",
    image: "public/Rectangle 173.png",
  },
];

export const Services = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto py-16 px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-6">
          {/* Title Section */}
          <h2 className="text-5xl font-bold text-center md:text-left">
            Our bespoke <span className="text-orange-500">services</span>
          </h2>

          {/* Image Section */}
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } gap-10`}
            >
              {/* Text Content */}
              <div className="md:w-1/2 text-left">
                <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Image */}
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mt-16">
          <Button
            variant="outline"
            className="px-8 py-4 border-green-500 text-green-500 rounded-lg text-lg"
          >
            Request a Demo
          </Button>

          <Button className="px-8 py-4 bg-green-500 text-white rounded-lg text-lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
};
