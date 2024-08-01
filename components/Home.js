import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import Homecenter from "./Homecenter";
import PieChart from "./PieChart";
import Other from "./Other";
import MapPage from "./MapPage";

const Home = () => {
  return (
    <div className=" w-[100%] flex justify-between">
      <div className=" w-[17%] bg-brown rounded-r-lg py-20 px-3 ">
        <SideBar />
      </div>

      <div className=" w-[80%] pr-5">
        <Header />
        <Homecenter/>
        <MapPage/>
        <PieChart/>
        <Other/>
      </div>
    </div>
  );
};

export default Home;
