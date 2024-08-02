"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import AnalyticsCenter from "./AnalyticsCenter";
import Header from "./Header";
import { CiMenuBurger } from "react-icons/ci";

const Analytics = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-[100%] flex justify-between">
      <div className="hidden md:block md:w-[17%] bg-brown rounded-r-lg py-20 px-3 ">
        <SideBar />
      </div>
      <div className=" w-[8%] block md:hidden">
        <CiMenuBurger size={30} onClick={() => setOpenMenu(true)} />
      </div>

      <div className="w-[92%] md:w-[80%] pr-5">
        <Header />
        <AnalyticsCenter />
      </div>
      {openMenu && (
        <div className="z-10 w-[50vw] absolute left-0 top-0 bg-brown h-full">
          <SideBar />
          <button
            className="absolute top-1 right-1 text-white"
            onClick={() => setOpenMenu(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Analytics;
