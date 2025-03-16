import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

// Define navigation items for reuse
const navigationItems = [
  { name: "Home", href: "/", active: true },
  { name: "About us", href: "/about", active: false },
  { name: "Services", href: "/services", active: false },
  { name: "FAQs", href: "/faq", active: false },
];

export const Navbar = () => {
  return (
    <header className="relative z-10 w-full max-w-7xl mx-auto pt-[45px]">
      <div className="relative">
        <div className="bg-[#0a1f44] rounded-md px-6">
          <div className="flex justify-between items-center">
            {/* Logo and Navigation Items */}
            <div className="flex items-center gap-10">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  className="w-[106px] h-[106px] object-cover"
                  alt="Rogis GROUP"
                  src="public/rogis-group-01-1.png"
                />
              </div>

              {/* Navigation Items */}
              <nav className="flex space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-normal text-xl ${
                      item.active ? "text-[#f9a825]" : "text-white"
                    } font-['Poppins',Helvetica]`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Us Button */}
            <button className="border-2 border-[#00a676] rounded-[10px] px-[21px] py-2 text-white text-xl font-['Poppins',Helvetica] font-normal">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
