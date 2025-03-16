import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <Outlet />
      <Footer />
    </div>
  );
};
