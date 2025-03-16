import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Navbar } from "../../components/Navbar";

// Define feature cards data
const featureCards = [
  {
    icon: "public/uil-focus-add.svg",
    title: "Enterprise-Grade AI & Cybersecurity",
    description:
      "Stay ahead with real-time threat intelligence and automated risk management.",
  },
  {
    icon: "public/uil-brain.svg",
    title: "Fintech & Blockchain Expertise",
    description:
      "Secure digital transactions, smart contracts, and decentralized finance (DeFi) solutions.",
  },
  {
    icon: "public/image-1.png",
    title: "Global Reach, Local Impact",
    description:
      "Trusted by Fortune 500 companies and fast-growing startups alike.",
  },
  {
    icon: "public/uil-arrow-random.svg",
    title: "IoT & Smart Tech Solutions",
    description:
      "Integrate advanced QR/NFC payment systems and AI-powered automation.",
  },
];

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[1117px] bg-cover bg-center"
        style={{ backgroundImage: "url(public/rectangle-6.png)" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1e1e1e8c]" />
        {/* Navbar */}
        <Navbar />
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto mt-[250px] text-center px-4">
          <h1 className="text-7xl font-extrabold leading-[72px] font-['Poppins',Helvetica] mb-[26px]">
            <span className="text-white">Empowering Businesses with Next </span>
            <span className="text-[#f9a825]">Generation Technology</span>
          </h1>

          <p className="text-white text-xl font-normal font-['Roboto',Helvetica] max-w-[1005px] mb-[70px]">
            ROGISTECH is a leading technology consulting firm dedicated to
            delivering AI-driven solutions, cybersecurity innovations,
            blockchain technologies, and smart enterprise automation. Our <br />
            mission is to provide cutting-edge digital solutions that drive
            efficiency, security, and growth for <br />
            businesses worldwide.
          </p>

          <Button className="bg-[#00a676] text-white rounded-[10px] px-[83px] py-5 text-xl font-medium font-['Poppins',Helvetica] flex items-center gap-2.5">
            Book a Consultation
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <h2 className="text-5xl font-medium text-black text-center font-['Poppins',Helvetica] mb-16">
          Why choose us ?
        </h2>

        <div className="flex justify-center gap-[79px] max-w-7xl mx-auto px-4 flex-wrap">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="w-[296px] bg-neutral-100 rounded-[3px] shadow-shadow-4x overflow-hidden border-none"
            >
              <CardContent className="flex flex-col items-center gap-6 p-[45px]">
                <div className="w-[72px] h-[72px] relative">
                  <div className="w-[63px] h-[63px] bg-[#f9a825] rounded absolute top-1 left-1 flex items-center justify-center">
                    <img
                      className="w-12 h-12"
                      alt={card.title}
                      src={card.icon}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3.5">
                  <h3 className="font-semibold text-[25px] text-black-100 text-center leading-[33.2px] font-['Poppins',Helvetica]">
                    {card.title}
                  </h3>

                  <p className="font-medium text-[15px] text-neutralgrey text-center leading-[23.1px] font-['Roboto',Helvetica]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-[54px] mt-24">
          <Button
            variant="outline"
            className="w-[275px] h-[79px] border-[#00a676] text-[#00a676] rounded-[10px] text-xl font-medium font-['Poppins',Helvetica]"
          >
            Explore Our Services
          </Button>

          <Button className="w-[300px] h-[79px] bg-[#00a676] text-white rounded-[10px] text-xl font-medium font-['Poppins',Helvetica]">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
};
