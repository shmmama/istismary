"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdFormatListBulleted } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

function Views() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAddStock, setOpenAddStock] = useState(false);

  const HandleOpemSearch = () => {
    setOpenSearch(!openSearch);
  };
  const HandleOpemDelete = () => {
    setOpenDelete(!openDelete);
  };
  const handleFilter = (e: any) => {
    console.log(e.target.value);
  };

  const HandleOpemAddStock = () => {
    setOpenAddStock(!openAddStock);
  };

  const HandleddStock = (e: any) => {
    console.log(e.target.value);
  };
  const data = [
    {
      id: "1",
      name: "السعودية المتحدة للتأمين",
    },
    {
      id: "2",
      name: "ملاذ للتأمين وإعادة التأمين",
    },
    {
      id: "3",
      name: "السعودية للخدمات الأرضي",
    },
    {
      id: "4",
      name: "لسعودية للنقل والاستثما",
    },
    {
      id: "8",
      name: "الجوف الزراع",
    },
    {
      id: "5",
      name: "الشرقية للتنمي",
    },
    {
      id: "6",
      name: "السعودية للأسما",
    },
    {
      id: "7",
      name: "تبوك للتنمية الزراعي",
    },
  ];
  return (
    <div className="bg-white border-[2px] border-[#e9e6e6]">
      <div className="flex items-center justify-between p-2 py-4 border-b-[2px] border-[#e9e6e6] !h-12">
        <div className="flex items-center ">
          <span className="bg-mold rounded-full p-[6px] ">
            <MdFormatListBulleted className="text-white text-sm" />
          </span>
          <h2 className="ml-2 text-sm">Views</h2>
        </div>
        <div className="mx-2">
          <div
            className={`${openSearch == false ? "flex" : "hidden"}  ${openAddStock == false ? "flex" : "hidden"}  items-center justify-between `}
          >
            <FaMinus
              className="text-sm mx-3 text-[#abaeb3] cursor-pointer hover:text-[#5e5e5e]"
              onClick={() => {
                HandleOpemDelete();
              }}
            />
            <FaPlus
              className="text-sm mx-3 text-[#abaeb3] cursor-pointer hover:text-[#5e5e5e]"
              onClick={() => {
                HandleOpemAddStock();
              }}
            />
            <CiSearch
              className="text-sm cursor-pointer ml-2 hover:text-[#5e5e5e]"
              onClick={() => {
                HandleOpemSearch();
              }}
            />
          </div>

          <div
            className={`${openSearch == true ? "block" : "hidden"} border-[1px] border-gray-300 rounded-2xl p-1 flex item-center justify-between`}
          >
            <input
              type="text"
              name="search"
              className="outline-none w-4/5 pl-1 text-xs"
              onChange={(e) => handleFilter(e)}
              placeholder="search.. "
            />
            <div
              className="bg-gray-300 h-4 w-4 pb-1 flex items-center justify-center text-[10px] hover:bg-red-500 hover:text-white cursor-pointer select-none	 rounded-full transition-all duration-200"
              onClick={() => {
                HandleOpemSearch();
              }}
            >
              <p>x</p>
            </div>
          </div>

          <div
            className={`${openAddStock == true ? "block" : "hidden"} border-[1px] border-gray-300 rounded-2xl p-1 flex item-center justify-between`}
          >
            <input
              type="text"
              name="createView"
              className="outline-none w-4/5 pl-1 text-xs"
              onChange={(e) => HandleddStock(e)}
              placeholder="Add Stock"
            />
            <div
              className="bg-gray-300 h-4 w-4 pb-1 flex items-center justify-center text-[10px] hover:bg-red-500 hover:text-white cursor-pointer select-none	 rounded-full transition-all duration-200"
              onClick={() => {
                HandleOpemAddStock();
              }}
            >
              <p>x</p>
            </div>
          </div>
        </div>
      </div>
      <div className="!h-[183px] overflow-y-scroll">
        {data.map((item: { id: string; name: string }) => (
          <div
            className="flex items-center justify-between p-[10px]  border-b-[1px] border-gray-300"
            key={item.id}
          >
            <div className="text-xs text-[#5e5e5e] h-6">{item.name}</div>
            {openDelete && (
              <div className="flex items-center justify-center bg-mold w-6 h-6 rounded-full cursor-pointer hover:scale-125 transition-all duration-200 ">
                <ImBin className="text-white text-sm" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Views;
