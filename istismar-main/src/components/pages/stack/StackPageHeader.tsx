"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaUsers } from "react-icons/fa";

function StackPageHeader() {
  const path = usePathname();
  const isStock = path.includes("stock");
  return (
    <>
      {isStock && (
        <div className="bg-white">
          <div className="container  grid grid-cols-3 py-4">
            <div className="">
              <div className="bg-[#f3f3f3] w-fit p-2 rounded-xl">
                <FaUsers className="text-[#878787]" />
              </div>
              <p className="text-[#878787] text-sm my-1">5 views</p>
              <button className="text-xs  text-white bg-mold border-[1px] border-mold rounded-xl cursor-pointer p-1 px-9 hover:bg-white hover:text-mold transition-all duration-200">
                View
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl mb-3 ">مصرف الراجحي1120</p>
              <p className="text-[11px] text-[#5e5e5e]">
                Update : الأحد ٢٩ أغسطس ١٠:٥٨ م
              </p>
            </div>
            <div className=""></div>
          </div>
        </div>
      )}
    </>
  );
}

export default StackPageHeader;
