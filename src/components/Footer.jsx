import React from "react";
import { Separator } from "../components/ui/separator";

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

export const Footer = () => {
  return (
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
  );
};
