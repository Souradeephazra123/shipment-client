"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  const [isSelected, setSelected] = useState("Dashboard");

  const DashboardArr = [
    "Dashboard",
    "Analytics",
    "Rate Request",
    "Quote",
    "Shipments",
    "User List",
    "Archieve",
    "History",
  ];

  const DashboardArrLink = ["/", "/analytics", "/", "/", "/", "/", "/", "/"];

  const DashboardImageArr = [
    "/Dashboard/first.svg",
    "/Dashboard/eighth.svg",
    "/Dashboard/third.svg",
    "/Dashboard/fourth.svg",
    "/Dashboard/fifth.svg",
    "/Dashboard/sixth.svg",
    "/Dashboard/seventh.svg",
    "/Dashboard/second.svg",
  ];

  return (
    <div>
      <ul className=" flex flex-col gap-0.5 lg:gap-1">
        {DashboardArr.map((item, idx) => (
          <li
            className={` rounded-md xxl:rounded-lg p-2 xxl:p-4 text-sm text-white flex gap-2 xxl:gap-4 cursor-pointer ${
              isSelected === item ? "bg-white bg-opacity-15" : ""
            }  `}
            onClick={() => {
              setSelected(item);
              router.push(DashboardArrLink[idx]);
            }}
          >
            <Image
              src={DashboardImageArr[idx]}
              width={24}
              height={24}
              alt="dashboard_image"
            />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

{
  /* <Link key={idx} href={DashboardArrLink[idx]}> */
}

{
  /* </Link> */
}
