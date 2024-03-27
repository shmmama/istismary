"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";

function MyRooms() {
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
    },
    {
      id: "2",
      roomImg: "/zoom.jpeg",
      roomName: " المتداول",
    },
    {
      id: "3",
      roomImg: "/zoom.jpeg",
      roomName: "إتش إس 20",
    },
    {
      id: "4",
      roomImg: "/zoom.jpeg",
      roomName: "حقوق أولوية",
    },
    {
      id: "8",
      roomImg: "/zoom.jpeg",
      roomName: "م أي جي",
    },
    {
      id: "5",
      roomImg: "/zoom.jpeg",
      roomName: "الشركة السعودية",
    },
    {
      id: "6",
      roomImg: "/zoom.jpeg",
      roomName: "الأندلس العقاري",
    },
    {
      id: "7",
      roomImg: "/zoom.jpeg",
      roomName: "السعودية للنقل",
    },
  ];
  return (
    <div className="bg-white border-[2px] border-[#e9e6e6]">
      <div className="flex items-center justify-between p-2 border-b-[2px] border-[#e9e6e6] !h-12">
        <div className="flex items-center ">
          <span className="bg-mold rounded-full p-[6px] ">
            <MdFormatListBulleted className="text-white text-sm" />
          </span>
          <h2 className="ml-2 text-sm">My Rooms</h2>
        </div>
        <div className="mx-2">
          <div
            className={`${openSearch == false ? "block" : "hidden"} flex items-center cursor=pointer`}
            onClick={() => {
              HandleOopemSearch();
            }}
          >
            <FaPlus className="text-mold text-sm" />
            <button className="text-sm text-mold ml-2"> Create Room</button>
          </div>

          <div
            className={`${openSearch == true ? "block" : "hidden"} border-[1px] border-gray-300 rounded-2xl p-1 flex item-center justify-between`}
          >
            <input
              type="text"
              className="outline-none w-2/5 pl-1 text-xs"
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
      <div className="!h-[183px] overflow-y-scroll grid grid-cols-3 pl-3 pt-3  ">
        {data.map((item: { id: string; roomImg: string; roomName: string }) => (
          <div className="flex flex-col items-start mb-3" key={item.id}>
            <div className="rounded-lg overflow-hidden  ">
              <Image
                src={item.roomImg}
                alt={item.roomName}
                width={84}
                height={80}
                className="!w-20 !h-20"
              />
            </div>
            <div className="">
              <p className="text-[##5e5e5e] text-[10px]">{item.roomName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRooms;
