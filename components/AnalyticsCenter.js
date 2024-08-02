"use client";
import Image from "next/image";
import React, { useState } from "react";
import TableData from "../data/data.json";
import RealPie from "./RealPie";
import { RealPie2 } from "./RealPie";

const Box = ({ data, heading }) => {
  return (
    <div
      // style={{ scrollbarWidth: "5px", scrollbarColor: "#856562" }}
      className="scroll flex flex-col gap-4 p-3 bg-white rounded-xl xl:rounded-2xl h-[300px] overflow-y-auto"
    >
      <p className=" text-lg font-semibold">{heading}</p>
      {data.map((item, idx) => (
        <div
          key={idx}
          className=" flex justify-between border-b-[0.5px] border-gray-200"
        >
          <p className="  pb-2 ">{item.name}</p>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

const AnalyticsCenter = () => {
  const seaairland = [
    { name: "Sea", img: "/ship.svg" },
    { name: "Air", img: "/flight.svg" },
    { name: "Land", img: "/truck.svg" },
  ];

  const MileStoneChar = [
    { name: "BOOKED", value: 19 },
    { name: "DISCHARGED", value: 29 },
    { name: "ARRIVED", value: 22 },
    { name: "DELIVERED", value: 393 },
    { name: "RETURNED", value: 149 },
  ];
  const MileChar = [
    { name: "ON TIME", value: 683 },
    { name: "LATE", value: 1 },
  ];

  const [activeYan, setActiveYan] = useState("Sea");
  const SeaArr = ["Shipments", "Containers"];
  const [active, setActive] = useState("Shipments");
  const [type, setType] = useState("select");
  const [period, setPeriod] = useState("Select(day)");
  const [date, setDate] = useState("Select date");
  const typeArr = ["Start", "End"];
  const periodArr = [1, 2, 3, 7, 15, 30];
  const [dropdownActive, setDropdownActive] = useState({
    type: false,
    date: false,
    period: false,
  });

  const handleTypeIcon = () => {
    setDropdownActive((prev) => ({
      ...prev,
      type: !prev.type,
    }));
  };
  const handleTypePeriod = () => {
    setDropdownActive((prev) => ({
      ...prev,
      period: !prev.period,
    }));
  };

  const handleTypeDate = () => {
    setDropdownActive((prev) => ({
      ...prev,
      date: !prev.date,
    }));
  };

  const DataArr = [
    { name: "NHAVA SHEVA, INDIA", value: 378 },
    { name: "HONG KONG, HONG KONG", value: 70 },
    { name: "YANTIAN, CHINA", value: 48 },
    { name: "DALIAN, CHINA", value: 29 },
    { name: "LONDON GATEWAY PORT, UK", value: 26 },
    { name: "OTHER", value: 23 },
    { name: "OTHER", value: 23 },
    { name: "LONDON GATEWAY PORT, UK", value: 26 },
    { name: "DALIAN, CHINA", value: 29 },
  ];

  // piechart
  const MileStoneArr = [
    "BOOKED",
    "DISCHARGED",
    "ARRIVED",
    "DELIVERED",
    "RETURNED",
  ];
  const data1 = {
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
  const data2 = {
    labels: MileStoneArr,
    datasets: [
      {
        label: "Sea Dataset",
        data: [50, 120, 90, 80, 123],
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

  const data3 = {
    labels: MileStoneArr,
    datasets: [
      {
        label: "Sea Dataset",
        data: [60, 110, 95, 85, 113],
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

  const Mile = ["ON TIME", "LATE"];

  const r2data1 = {
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

  const r2data2 = {
    labels: Mile,
    datasets: [
      {
        label: "Sea Dataset",
        data: [452,682-452],
        backgroundColor: ["#7BB896", "#F7A668"],
        borderWidth: 0,
        // hoverOffset: 4,
      },
    ],
  };

  const r2data3 = {
    labels: Mile,
    datasets: [
      {
        label: "Sea Dataset",
        data: [234,682-234],
        backgroundColor: ["#7BB896", "#F7A668"],
        borderWidth: 0,
        // hoverOffset: 4,
      },
    ],
  };

  return (
    <div className=" flex flex-col gap-5">
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
      <div className="flex justify-center items-center">
        <div className=" p-3 shadow-md flex justify-center items-center gap-10 w-fit">
          {SeaArr.map((item, idx) => (
            <p
              key={idx}
              className={` font-semibold text-[#856562] cursor-pointer  ${
                active === item ? "bg-[#856562] bg-opacity-20 rounded-md" : ""
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className=" p-3 shadow-md flex flex-col lg:flex-row items-center gap-6 w-full bg-white rounded-lg">
        {/* type */}
        <div className=" flex gap-3 items-center bg-white ">
          <p className=" text-sm font-semibold">Type</p>
          <div className=" relative">
            <div className=" border-[1px] border-[#D9D9D9] rounded-full py-2 px-6 relative w-52">
              <span>{type}</span>
              {!dropdownActive.type && (
                <Image
                  src={"/dropdown-arrow.svg"}
                  width={48}
                  height={48}
                  alt="avatar"
                  onClick={handleTypeIcon}
                  className="w-4 h-6 absolute top-1/2 transform -translate-y-1/2 right-5"
                />
              )}
              {dropdownActive.type && (
                <Image
                  src={"/dropdown-arrow.svg"}
                  width={48}
                  height={48}
                  alt="avatar"
                  onClick={handleTypeIcon}
                  className="w-4 h-6 absolute top-1/2 transform -translate-y-1/2 right-5 rotate-180"
                />
              )}
            </div>

            {dropdownActive.type && (
              <ul className=" border-[1px] border-gray-400 rounded p-2 absolute top-10 left-0 w-full bg-gray-200 z-10">
                {typeArr.map((item, idx) => (
                  <li
                    key={idx}
                    className={` hover:bg-gray-400  cursor-pointer`}
                    onClick={() => {
                      setType(item);
                      handleTypeIcon();
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* date */}
        <div className=" flex gap-3 items-center">
          <p className=" text-sm font-semibold">Date</p>
          <div className=" relative">
            <div className=" border-[1px] border-[#D9D9D9] rounded-full py-2 px-6 relative w-52">
              <span>{date}</span>
              {!dropdownActive.date && (
                <Image
                  src={"/dropdown-arrow.svg"}
                  width={48}
                  height={48}
                  alt="avatar"
                  onClick={handleTypeDate}
                  className="w-4 h-6 absolute top-1/2 transform -translate-y-1/2 right-5"
                />
              )}
              {dropdownActive.date && (
                <Image
                  src={"/dropdown-arrow.svg"}
                  width={48}
                  height={48}
                  alt="avatar"
                  onClick={handleTypeDate}
                  className="w-4 h-6 absolute top-1/2 transform -translate-y-1/2 right-5 rotate-180"
                />
              )}
            </div>

            {dropdownActive.date && (
              <ul className=" border-[1px] border-gray-400 rounded p-2 absolute top-10 left-0 w-full bg-gray-200 z-10">
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Type to select period"
                  onChange={(e) => setDate(e.target.value)}
                />
              </ul>
            )}
          </div>
        </div>

        {/* period */}
        <div className=" flex gap-3 items-center">
          <p className=" text-sm font-semibold">Period</p>
          <div className=" relative">
            <div className=" border-[1px] border-[#D9D9D9] rounded-full py-2 px-6 relative w-52">
              <span>{period}</span>
              {!dropdownActive.period && (
                <Image
                  src={"/dropdown-arrow.svg"}
                  width={48}
                  height={48}
                  alt="avatar"
                  onClick={handleTypePeriod}
                  className="w-4 h-6 absolute top-1/2 transform -translate-y-1/2 right-5"
                />
              )}
              {dropdownActive.period && (
                <Image
                  src={"/dropdown-arrow.svg"}
                  width={48}
                  height={48}
                  alt="avatar"
                  onClick={handleTypePeriod}
                  className="w-4 h-6 absolute top-1/2 transform -translate-y-1/2 right-5 rotate-180"
                />
              )}
            </div>

            {dropdownActive.period && (
              <ul className=" border-[1px] border-gray-400 rounded p-2 absolute top-10 left-0 w-full bg-gray-200 z-10">
                {periodArr.map((item, idx) => (
                  <li
                    key={idx}
                    className={` hover:bg-gray-400  cursor-pointer`}
                    onClick={() => {
                      setPeriod(item);
                      handleTypePeriod();
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className=" flex gap-4 md:gap-2">
          <button
            onClick={() => {
              setPeriod("Select (day)");
              setType("select");
              setDate("Select date");
            }}
            className=" border-[1px] border-[#6B120A] bg-white text-[#6B120A] text-sm font-semibold rounded-full py-2 xl:py-4 px-3 xl:px-6"
          >
            cancel
          </button>
          <button className=" border-[1px] border-[#6B120A] text-white bg-[#6B120A] text-sm font-semibold rounded-full py-2 xl:py-4 px-3 xl:px-6">
            go
          </button>
        </div>
      </div>

      {/* Pie chart */}
      <div className=" w-full flex flex-col md:flex-row gap-3  ">
        <div className=" w-full md:w-1/2 p-3 bg-white rounded-xl xl:rounded-2xl flex flex-col gap-5">
          <div className=" flex justify-between">
            <p className=" text-lg xl:text-xl font-semibold">Milestones</p>
            <p className=" text-sm font-medium text-[#969596] border-[1px] border-[#D9D9D9] py-1 xl:py-2 px-4 xl:px-6 rounded-md xl:rounded-xl">
              In-transit(463)
            </p>
          </div>
          <div className=" flex gap-4 items-center justify-center">
            {activeYan === "Sea" && <RealPie data={data1} />}
            {activeYan === "Air" && <RealPie data={data2} />}
            {activeYan === "Land" && <RealPie data={data3} />}
            <div className=" flex flex-col gap-2">
              {MileStoneChar.map((item, idx) => (
                <div key={idx} className=" flex  gap-2 items-center">
                  <div
                    className={` no-content  w-2 h-2 rounded-full ${
                      item.name === "BOOKED"
                        ? "bg-[#6B120A]"
                        : item.name === "DISCHARGED"
                        ? "bg-[#EB5D50]"
                        : item.name === "ARRIVED"
                        ? "bg-[#F7A668]"
                        : item.name === "DELIVERED"
                        ? " bg-[#7BB896]"
                        : item.name === "RETURNED"
                        ? " bg-[#1073E6]"
                        : ""
                    } `}
                  ></div>
                  <p className=" text-xs">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2 p-3 bg-white rounded-xl xl:rounded-2xl">
          <p className="text-lg xl:text-xl font-semibold">Timelines</p>
          <div className=" flex gap-4 items-center justify-center">
            {activeYan === "Sea" && <RealPie2 data={r2data1} />}
            {activeYan === "Air" && <RealPie2 data={r2data2} />}
            {activeYan === "Land" && <RealPie2 data={r2data3} />}
            <div className=" flex flex-col gap-2">
              {MileChar.map((item, idx) => (
                <div key={idx} className=" flex  gap-2 items-center">
                  <div
                    className={` no-content  w-2 h-2 rounded-full ${
                      item.name === "LATE"
                        ? "bg-[#F7A668]"
                        : item.name === "ON TIME"
                        ? " bg-[#7BB896]"
                        : ""
                    } `}
                  ></div>
                  <p className=" text-xs">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* boxes */}
      <div className=" w-full flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-1/3">
          <Box data={DataArr} heading={"Loading"} />
        </div>
        <div className=" w-full md:w-1/3">
          <Box data={DataArr} heading={"Discharge"} />
        </div>
        <div className=" w-full md:w-1/3">
          <Box data={DataArr} heading={"Delivery"} />
        </div>
      </div>
      <div className=" w-full flex flex-col md:flex-row gap-3">
        <div className=" w-full md:w-1/3">
          <Box data={DataArr} heading={"Shipping"} />
        </div>
        <div className=" w-full md:w-1/3">
          <Box data={DataArr} heading={"Consignee"} />
        </div>
        <div className=" w-full md:w-1/3">
          <Box data={DataArr} heading={"Carrier"} />
        </div>
      </div>

      <div className=" bg-white p-4 rounded-xl xl:rounded-2xl shadow-md table-scroll overflow-x-auto">
        <table className=" min-w-full divide-y divide-gray-200 ">
          <thead className=" bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                HBL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                MBL#
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                PO/REF#
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                Receipt
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                Loading
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                Discharge
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                Delivery
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                Booking
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                Booking
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                Consignee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                Carrier
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {TableData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.hbl}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.mbl}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.poRef}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.receipt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.loading}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.discharge}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.delivery}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.booking}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.shipping}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.consignee}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.carrier}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsCenter;
