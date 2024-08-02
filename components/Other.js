import Image from "next/image";
import React from "react";

const Other = () => {
  return (
    <div className=" w-full flex flex-col sm:flex-row gap-4 xl:gap-6 py-4">
      <div className=" w-full sm:w-1/2 rounded-xl xxl:rounded-2xl 2xl:rounded-3xl bg-white p-4 xl:p-6">
        <p className=" font-bold text-xl xl:text-2xl">Latest Documents</p>
        <div className=" flex justify-between py-2 border-b-[0.5px]">
          <div className=" flex gap-2">
            <Image
              src={"/pdf-logo.png"}
              width={32}
              height={32}
              alt="pdf"
              className=" flex items-start w-fit h-fit"
            />

            <div>
              <p>Packing List</p>
              <p>See job Documents(IM129043)</p>
            </div>
          </div>
          <div>
            <p>Nov 29,2023</p>
            <p>10:27 pm</p>
          </div>
        </div>

        <div className=" flex justify-between py-2 border-b-[0.5px]">
          <div className=" flex gap-2">
            <Image
              src={"/pdf-logo.png"}
              width={32}
              height={32}
              alt="pdf"
              className=" flex items-start w-fit h-fit"
            />

            <div>
              <p>Commercial invoice</p>
              <p>See job Documents(IM129043)</p>
            </div>
          </div>
          <div>
            <p>Nov 29,2023</p>
            <p>10:27 pm</p>
          </div>
        </div>

        <div className=" flex justify-between py-2 border-b-[0.5px]">
          <div className=" flex gap-2">
            <Image
              src={"/pdf-logo.png"}
              width={32}
              height={32}
              alt="pdf"
              className=" flex items-start w-fit h-fit"
            />

            <div>
              <p>Bill og Lading</p>
              <p>See job Documents(IM129043)</p>
            </div>
          </div>
          <div>
            <p>Nov 29,2023</p>
            <p>10:27 pm</p>
          </div>
        </div>

        <div className=" flex justify-between py-2 border-b-[0.5px]">
          <div className=" flex gap-2">
            <Image
              src={"/pdf-logo.png"}
              width={32}
              height={32}
              alt="pdf"
              className=" flex items-start w-fit h-fit"
            />

            <div>
              <p>Packing List</p>
              <p>See job Documents(IM129043)</p>
            </div>
          </div>
          <div>
            <p>Nov 29,2023</p>
            <p>10:27 pm</p>
          </div>
        </div>
      </div>
      <div className=" w-full sm:w-1/2 rounded-xl xxl:rounded-2xl 2xl:rounded-3xl bg-white p-4 xl:p-6">
        <div className=" flex flex-col gap-4">
          <p className=" font-bold text-xl xl:text-2xl">Announcements</p>
          <p>Soon you will see latest announcements/new in this section.</p>
        </div>
        <div className=" flex items-center justify-center">
            <Image src={"/announcements.png"} width={156} height={180}/>
        </div>
      </div>
    </div>
  );
};

export default Other;
