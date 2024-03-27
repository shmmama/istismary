"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";

function Rooms() {
  const [openSearch, setOpenSearch] = useState(false);
  const HandleOopemSearch = () => {
    setOpenSearch(!openSearch);
  };
  const handleFilter = (e: any) => {
    console.log(e.target.value);
  };

  const data = [
    {
      id: "1",
      roomImg: "/zoom.jpeg",
      roomName: "السعودية المتحدة",
      roomType: "العملات المشفرة",
      ountOfSubscribe: "65",
      subscribe: true,
    },
    {
      id: "2",
      roomImg: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      roomName: "صندوق فالكم المتداول",
      roomType: "العملات المشفرة",
      ountOfSubscribe: "5",
      subscribe: false,
    },
    {
      id: "3",
      roomImg: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      roomName: "إتش إس بي سي 20",
      roomType: "العملات المشفرة",
      ountOfSubscribe: "1",
      subscribe: true,
    },
    {
      id: "4",
      roomImg: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      roomName: "حقوق أولوية",
      roomType: "العملات المشفرة",
      ountOfSubscribe: "1",
      subscribe: true,
    },
    {
      id: "8",
      roomImg: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      roomName: "متلايف وايه أي جي",
      roomType: "العملات المشفرة",
      ountOfSubscribe: "1",
      subscribe: true,
    },
    {
      id: "5",
      roomImg: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      roomName: "الشركة السعودية",
      roomType: "العملات المشفرة",
      ountOfSubscribe: "1",
      subscribe: true,
    },
    {
      id: "6",
      roomImg: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      roomName: "الأندلس العقاري",
      roomType: "العملات المشفرة",
      ountOfSubscribe: "1",
      subscribe: true,
    },
    {
      id: "7",
      roomImg: "/apple-iphone-14-pro-128-gb-5g-space-black_360.jpeg",
      roomName: "السعودية للنقل",
      roomType: "العملات المشفرة",
      ountOfSubscribe: "1",
      subscribe: true,
    },
  ];
  return (
    <div className="bg-white border-[2px] border-[#e9e6e6]">
      <div className="flex items-center justify-between p-2 border-b-[2px] border-[#e9e6e6] !h-12">
        <div className="flex items-center ">
          <span className="bg-mold rounded-full p-[6px] ">
            <MdFormatListBulleted className="text-white text-sm" />
          </span>
          <h2 className="ml-2 text-sm">Rooms</h2>
        </div>
        <div className="mx-2">
          <div className={`${openSearch == false ? "block" : "hidden"}`}>
            <CiSearch
              className="text-sm cursor-pointer ml-2 hover:text-[#5e5e5e]"
              onClick={() => {
                HandleOopemSearch();
              }}
            />
          </div>

          <div
            className={`${openSearch == true ? "block" : "hidden"} border-[1px] border-gray-300 rounded-2xl p-1 flex item-center justify-between`}
          >
            <input
              type="text"
              className="outline-none w-4/5 pl-1 text-xs"
              onChange={(e) => handleFilter(e)}
              placeholder="search.. "
            />
            <div
              className="bg-gray-300 h-4 w-4 pb-1 flex items-center justify-center text-[10px] hover:bg-red-500 hover:text-white cursor-pointer select-none	 rounded-full transition-all duration-200"
              onClick={() => {
                HandleOopemSearch();
              }}
            >
              <p>x</p>
            </div>
          </div>
        </div>
      </div>
      <div className="!h-[183px] overflow-y-scroll">
        {data.map(
          (item: {
            id: string;
            roomImg: string;
            roomName: string;
            roomType: string;
            ountOfSubscribe: string;
            subscribe: boolean;
          }) => (
            <div
              className="flex items-center p-[10px] border-b-[1px] border-gray-300"
              key={item.id}
            >
              <div className="rounded-lg overflow-hidden !w-16">
                <Image
                  src={item.roomImg}
                  alt={item.roomName}
                  width={50}
                  height={50}
                  className="!w-12 !h-12"
                />
              </div>
              <div className="ml-2 w-full  h-12 ">
                <div className="flex items-center justify-between pr-1">
                  <p className="text-sm text-[#5e5e5e]">{item.roomName}</p>
                  <p
                    className={`${item.subscribe == false ? "border-[2px] border-mold  text-mold " : "bg-mold text-white"} !w-[72px] cursor-pointer rounded-lg text-xs text-center px-[4px]`}
                  >
                    {item.subscribe == true ? "unsubscribe" : "subscribe"}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2 pr-1">
                  <p className="text-xs text-mold">{item.roomType}</p>
                  <p className="text-[10px]">
                    subscriber:{" "}
                    <span className="text-mold">{item.ountOfSubscribe}</span>
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Rooms;
