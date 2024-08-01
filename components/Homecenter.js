import Image from "next/image";
import React from "react";

const Homecenter = () => {
  const arr = [
    { name: "Total Bookings", totalValue: 501, img: "/tv.svg" },
    { name: "Bookings utilized", totalValue: 501, img: "/todo.svg" },
    { name: "Bookings cancelled", totalValue: 0, img: "/block.svg" },
    { name: "Utilization", totalValue: 100, img: "/pie.svg" },
  ];

  return (
    <div className=" flex flex-col gap-3 py-2">
      <div className=" flex justify-between">
        {arr.map((item, idx) => (
          <div
            key={idx}
            className=" p-6 rounded-lg xxl:rounded-xl border-[1px] border-[#ECECEC] flex gap-2.5 bg-white shadow-md"
          >
            <div className=" flex flex-col justify-between">
              <p className=" text-sm">{item.name}</p>
              <p className=" text-lg">
                <b className=" font-bold">{item.totalValue} Bookings </b>{" "}
              </p>
            </div>
            <div
              className={`${
                item.name === "Total Bookings"
                  ? "bg-[#6B120A]"
                  : item.name === "Bookings utilized"
                  ? "bg-[#F7A668]"
                  : item.name === "Bookings cancelled"
                  ? "bg-[#EB5D50]"
                  : item.name === "Utilization"
                  ? " bg-[#7BB896]"
                  : ""
              }  rounded-lg p-4 xxl:p-6 flex items-center justify-center`}
            >
              <Image
                src={item.img}
                alt="tv"
                width={36}
                height={36}
                className=" w-7 xxl:w-9 h-7 xxl:h-9"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homecenter;
