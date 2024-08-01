import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" flex justify-between border-b-[0.5px] border-[#D9D9D9] ">
      <p>DashBoardCenter</p>
      <div className=" flex gap-2 items-center">
        <div className=" relative">
          <Image
            src={"/bell.svg"}
            width={24}
            height={24}
            alt="bell"
            className="w-4 xxL:w-6 h-4 xxl:h-6"
          />
          <div className="no-content bg-[#FF4D49] w-1 xxl:w-1.5 h-1 xxl:h-1.5 rounded-full absolute top-0.5 right-1"></div>
        </div>
        <div className=" flex gap-2 xxl:gap-3">
          <Image
            src={"/avatar.png"}
            width={48}
            height={48}
            alt="avatar"
            className=" w-9 xxl:w-12 h-9 xxl:h-12"
          />
          <div className=" text-sm">
            <p>Edward william</p>
            <p>Admin</p>
          </div>
        </div>
        <Image
          src={"/dropdown-inactive.svg"}
          width={48}
          height={48}
          alt="avatar"
          className="w-2 h-3.5
              "
        />
      </div>
    </div>
  );
};

export default Header;
