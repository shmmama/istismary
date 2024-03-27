"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
function Companies() {
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
      companyName: "السعودية المتحدة",
    },
    {
      id: "2",
      companyName: "صندوق فالكم المتداول",
    },
    {
      id: "3",
      companyName: "إتش إس بي سي 20",
    },
    {
      id: "4",
      companyName: "حقوق أولوية",
    },
    {
      id: "8",
      companyName: "متلايف وايه أي جي",
    },
    {
      id: "5",
      companyName: "الشركة السعودية",
    },
    {
      id: "6",
      companyName: "الأندلس العقاري",
    },
    {
      id: "7",
      companyName: "السعودية للنقل",
    },
  ];
  // const filteredData =
  return (
    <div className="bg-white border-[2px] border-[#e9e6e6]">
      <div className="flex items-center justify-between p-2 border-b-[2px] border-[#e9e6e6] !h-12">
        <div className="flex items-center ">
          <span className="bg-mold rounded-full p-[6px] ">
            <FaChartBar className="text-white text-[10px]" />
          </span>
          <h2 className="ml-2 text-sm">Companies</h2>
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
        {data.map((item: { id: string; companyName: string }) => (
          <div className="flex items-center  p-[10px]" key={item.id}>
            <div className="cursor-pointer rounded-full bg-gray-300 flex items-center justify-center p-1 hover:rotate-[360deg] transition-all duration-200">
              <FaPlus className="text-white text-[8px]" />
            </div>
            <div className="ml-3 ">
              <p className="text-xs text-[#5e5e5e]">{item.companyName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
