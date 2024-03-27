"use client";
import React, { useState } from "react";
import { FaChartBar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
function SuggestedUsers() {
  const data = [
    {
      id: "1",
      name: "السعودية المتحدة للتأمين",
      imgUrl: "/zoom.jpeg",
    },
    {
      id: "2",
      name: "ملاذ للتأمين وإعادة التأمين",
      imgUrl: "/zoom.jpeg",
    },
    {
      id: "3",
      name: "السعودية للخدمات الأرضي",
      imgUrl: "/zoom.jpeg",
    },
    {
      id: "4",
      name: "لسعودية للنقل والاستثما",
      imgUrl: "/zoom.jpeg",
    },
    {
      id: "8",
      name: "الجوف الزراع",
      imgUrl: "/zoom.jpeg",
    },
    {
      id: "5",
      name: "الشرقية للتنمي",
      imgUrl: "/zoom.jpeg",
    },
    {
      id: "6",
      name: "السعودية للأسما",
      imgUrl: "/zoom.jpeg",
    },
    {
      id: "7",
      name: "تبوك للتنمية الزراعي",
      imgUrl: "/zoom.jpeg",
    },
  ];
  return (
    <div className="bg-white border-[2px] border-[#e9e6e6]">
      <div className="flex items-center justify-between p-2 py-4 border-b-[2px] border-[#e9e6e6] !h-12">
        <div className="flex items-center ">
          <span className="bg-mold rounded-full p-[6px] ">
            <FaChartBar className="text-white text-[10px]" />
          </span>
          <h2 className="ml-2 text-sm">SuggestedUsers</h2>
        </div>
      </div>
      <div className="!h-[183px] overflow-y-scroll">
        {data.map((item: { id: string; name: string; imgUrl: string }) => (
          <div
            className="flex items-center p-[10px] py-4 border-b-[1px] border-gray-300"
            key={item.id}
          >
            <div className="">
              <Image
                src={item.imgUrl}
                width={30}
                height={30}
                alt={item.name}
                className="rounded-full !w-8 !h-8 "
              />
            </div>
            <div className="w-[60%] ml-2 -mt-[6px]">
              <Link href="#" className="text-xs text-[#5e5e5e]">
                {item.name}
              </Link>
            </div>
            <div>
              <button className=" text-mold border-[1px] border-mold rounded-xl px-3 text-xs hover:text-white hover:bg-mold transition-all duration-200">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestedUsers;
