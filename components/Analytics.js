import React from "react";
import SideBar from "./SideBar";
import AnalyticsCenter from "./AnalyticsCenter";
import Header from "./Header";

const Analytics = () => {
  return (
    <div className=" w-[100%] flex justify-between">
      <div className=" w-[17%] bg-brown rounded-r-lg py-20 px-3 ">
        <SideBar />
      </div>

      <div className=" w-[80%] pr-5">
        <Header />
        <AnalyticsCenter />
      </div>
    </div>
  );
};

export default Analytics;
