import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <main>
      <div className="w-full md:flex">
        <Navbar />

        <section className="flex flex-1 h-full">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
