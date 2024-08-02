"use client";
import React, { useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Image from "next/image";
ChartJS.register(ArcElement, Tooltip, Legend);

const ShippingDetails = () => {
  const ShippingArr = [
    "NHAVA SHEVA, INDIA",
    "HONG KONG, HONG KONG",
    "YANTIAN, CHINA",
    "DALIAN, CHINA",
    "LONDON GATEWAY PORT, UK",
    "OTHER",
  ];

  return (
    <>
      {ShippingArr.map((item, idx) => (
        <div className="text-xs flex gap-1 items-center" key={idx}>
          <div
            className={` ${
              item === "NHAVA SHEVA, INDIA"
                ? "bg-[#6B120A]"
                : item === "HONG KONG, HONG KONG"
                ? "bg-[#EB5D50]"
                : item === "YANTIAN, CHINA"
                ? "bg-[#F7A668]"
                : item === "DALIAN, CHINA"
                ? " bg-[#7BB896]"
                : item === "LONDON GATEWAY PORT, UK"
                ? " bg-[#1073E6]"
                : item === "OTHER"
                ? " bg-[#856562]"
                : ""
            } rounded-full  no-content w-1.5 h-1.5   `}
          ></div>
          <p>{item}</p>
        </div>
      ))}
    </>
  );
};

const Dought = ({ data, options }) => {
  return (
    <div className=" flex flex-col sm:flex-row justify-between">
      <div
        // style={{ width: "15%", height: "15%" }}
        className=" flex flex-col gap-5 w-[65%] sm:w-[15%] h-[65%] sm:h-[15%] "
      >
        <Doughnut data={data} options={options}></Doughnut>
        <p>Origin Port</p>
        <ShippingDetails />
      </div>
      <div
        // style={{ width: "15%", height: "15%" }}
        className=" flex flex-col gap-5 w-[65%] sm:w-[15%] h-[65%] sm:h-[15%] "
      >
        <Doughnut data={data} options={options}></Doughnut>
        <p>Destination Port</p>
        <ShippingDetails />
      </div>
      <div
         className=" flex flex-col gap-5 w-[65%] sm:w-[15%] h-[65%] sm:h-[15%] "
      >
        <Doughnut data={data} options={options}></Doughnut>
        <p>Career Port</p>
        <ShippingDetails />
      </div>
      <div
         className=" flex flex-col gap-5 w-[65%] sm:w-[15%] h-[65%] sm:h-[15%] "
      >
        <Doughnut data={data} options={options}></Doughnut>
        <p>Consignee or Shipper</p>
        <ShippingDetails />
      </div>
      <div
         className=" flex flex-col gap-5 w-[65%] sm:w-[15%] h-[65%] sm:h-[15%] "
      >
        <Doughnut data={data} options={options}></Doughnut>
        <p>Milestones</p>
        <ShippingDetails />
      </div>
    </div>
  );
};

const PieChart = () => {
  const data = {
    labels: [
      "NHAVA SHEVA, INDIA",
      "HONG KONG, HONG KONG",
      "YANTIAN, CHINA",
      "DALIAN, CHINA",
      "LONDON GATEWAY PORT, UK",
      "OTHER",
    ],
    datasets: [
      {
        label: "Sea Dataset",
        data: [300, 50, 100, 22, 456, 12],
        backgroundColor: [
          "#6B120A",
          "#EB5D50",
          "#F7A668",
          "#7BB896",
          "#1073E6",
          "#856562",
        ],
        // hoverOffset: 4,
      },
    ],
  };

  const data1 = {
    labels: [
      "NHAVA SHEVA, INDIA",
      "HONG KONG, HONG KONG",
      "YANTIAN, CHINA",
      "DALIAN, CHINA",
      "LONDON GATEWAY PORT, UK",
      "OTHER",
    ],
    datasets: [
      {
        label: "Air Dataset",
        data: [18, 23, 456, 21, 45, 777],
        backgroundColor: [
          "#6B120A",
          "#EB5D50",
          "#F7A668",
          "#7BB896",
          "#1073E6",
          "#856562",
        ],
        // hoverOffset: 4,
      },
    ],
  };

  const data2 = {
    labels: [
      "NHAVA SHEVA, INDIA",
      "HONG KONG, HONG KONG",
      "YANTIAN, CHINA",
      "DALIAN, CHINA",
      "LONDON GATEWAY PORT, UK",
      "OTHER",
    ],
    datasets: [
      {
        label: "Land Dataset",
        data: [58, 238, 237, 23, 86, 11],
        backgroundColor: [
          "#6B120A",
          "#EB5D50",
          "#F7A668",
          "#7BB896",
          "#1073E6",
          "#856562",
        ],
        // hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, 
      },
      customLabels: {
        id: "customLabels",
        afterDraw: (chart) => {
          const {
            ctx,
            chartArea: { top, bottom, left, right },
            scales: { r },
          } = chart;
          const labels = data.labels;
          const dataset = data.datasets[0];
          const total = dataset.data.reduce((acc, value) => acc + value, 0);

          labels.forEach((label, index) => {
            const angle = (dataset.data[index] / total) * 2 * Math.PI;
            const radius = (r.max - r.min) / 2;
            const x = left + (right - left) / 2 + radius * Math.cos(angle / 2);
            const y = top + (bottom - top) / 2 + radius * Math.sin(angle / 2);

            ctx.fillStyle = dataset.backgroundColor[index];
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = "#000";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(label, x, y);
          });
        },
      },
    },
  };

  const seaairland = [
    { name: "Sea", img: "/ship.svg" },
    { name: "Air", img: "/flight.svg" },
    { name: "Land", img: "/truck.svg" },
  ];

  const [activeYan, setActiveYan] = useState("Sea");

  return (
    <div className=" flex flex-col gap-4 bg-white rounded-lg xl:rounded-xl p-4 xl:p-6">
      <p>PieChart</p>
      <div className="  flex justify-center gap-10">
        {seaairland.map((item, idx) => (
          <div
            key={idx}
            className={`${
              activeYan === item.name ? " border-b-2 border-rose-500 " : ""
            }  flex gap-2 cursor-pointer`}
            onClick={() => setActiveYan(item.name)}
          >
            <Image src={item.img} width={20} height={20} alt=" yan" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
     
      {activeYan === "Sea" && <Dought data={data} options={options} />}
      {activeYan === "Air" && <Dought data={data1} options={options} />}
      {activeYan === "Land" && <Dought data={data2} options={options} />}
    </div>
  );
};

export default PieChart;
