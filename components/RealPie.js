"use client";
import React, { useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Image from "next/image";
ChartJS.register(ArcElement, Tooltip, Legend);

export const RealPie2 = () => {
  const Mile = ["ON TIME", "LATE"];

  const data = {
    labels: Mile,
    datasets: [
      {
        label: "Sea Dataset",
        data: [681, 1],
        backgroundColor: ["#7BB896", "#F7A668"],
        borderWidth: 0,
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

  return (
    <div>
      <div
        style={{ width: "150px", height: "150px" }}
        className=" flex flex-col gap-5"
      >
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
};

const RealPie = () => {
  const MileStoneArr = [
    "BOOKED",
    "DISCHARGED",
    "ARRIVED",
    "DELIVERED",
    "RETURNED",
  ];
  const data = {
    labels: MileStoneArr,
    datasets: [
      {
        label: "Sea Dataset",
        data: [463 - 19, 463 - 29, 463 - 22, 463 - 393, 463 - 149],
        backgroundColor: [
          "#6B120A",
          "#EB5D50",
          "#F7A668",
          "#7BB896",
          "#1073E6",
        ],
        borderWidth: 0,
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

  return (
    <div>
      <div
        style={{ width: "150px", height: "150px" }}
        className=" flex flex-col gap-5"
      >
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
};

export default RealPie;
