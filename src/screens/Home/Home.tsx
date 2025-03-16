import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Define navigation items for reuse
const navigationItems = [
  { name: "Home", href: "/", active: true },
  { name: "About us", href: "/about", active: false },
  { name: "Services", href: "/services", active: false },
  { name: "FAQs", href: "/faq", active: false },
];

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

// Social media icons data
const socialIcons = [
  {
    src: "public/group-1.png",
    wrapper: "public/vector-1.svg",
    alt: "Social Icon 1",
  },
  { src: "public/icon.svg", alt: "Social Icon 2" },
  { src: "public/group-2.png", alt: "Social Icon 3" },
  { src: "public/icon-1.svg", alt: "Social Icon 4" },
  {
    src: "public/group-3.png",
    wrapper: "public/vector.svg",
    alt: "Social Icon 5",
  },
  { src: "public/group.png", alt: "Social Icon 6" },
];

export const Home = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full h-[1117px] bg-cover bg-center"
        style={{ backgroundImage: "url(public/rectangle-6.png)" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1e1e1e8c]" />

        {/* Navigation Bar */}
        <header className="relative z-10 w-full max-w-7xl mx-auto pt-[45px]">
          <div className="relative">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-[106px] h-[106px] object-cover"
                  alt="Rogis GROUP"
                  src="public/rogis-group-01-1.png"
                />
              </div>

              <div className="flex-1 ml-10">
                <div className="bg-[#0a1f44] rounded-md p-6">
                  <div className="flex justify-between items-center">
                    <nav className="flex space-x-8">
                      {navigationItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`font-normal text-xl ${
                            item.active ? "text-[#f9a825]" : "text-white"
                          } font-['Poppins',Helvetica]`}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>

                    <Button
                      variant="outline"
                      className="border-2 border-[#00a676] rounded-[10px] px-[21px] py-2 text-white text-xl font-['Poppins',Helvetica] font-normal"
                    >
                      Contact us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

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

      {/* Footer */}
      <footer className="bg-[#0a1f44] w-full py-10 px-[162px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[11px]">
            <span className="text-dark-40 text-lg tracking-[-0.54px] leading-[23.4px] font-['Poppins',Helvetica] font-normal">
              Terms &amp; Conditions
            </span>

            <Separator orientation="vertical" className="h-6" />

            <span className="text-dark-40 text-lg tracking-[-0.54px] leading-[23.4px] font-['Poppins',Helvetica] font-normal whitespace-nowrap">
              Privacy Policy
            </span>
          </div>

          <div className="flex items-start gap-3.5">
            {socialIcons.map((icon, index) => (
              <div key={index} className="relative w-6 h-6">
                {icon.wrapper ? (
                  <div
                    className="w-6 h-6"
                    style={{
                      backgroundImage: `url(${icon.wrapper})`,
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <img
                      className="absolute top-[5px] left-[5px]"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                ) : (
                  <img className="w-6 h-6" alt={icon.alt} src={icon.src} />
                )}
              </div>
            ))}
          </div>

          <span className="text-dark-40 text-lg tracking-[-0.54px] leading-[23.4px] font-['Poppins',Helvetica] font-normal whitespace-nowrap">
            © 2024 FutureTech. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
