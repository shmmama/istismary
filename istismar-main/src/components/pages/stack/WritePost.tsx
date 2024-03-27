"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosPhotos } from "react-icons/io";

function WritePost() {
  const [inpuValue, setInputValue] = useState("");
  const [inpuCount, setInputCOunt] = useState(140);
  const [currentType, setCurrentType] = useState("Bullish");
  const handleinputChange = (e: any) => {
    setInputCOunt(140 - e.target.value.length);
    setInputValue(e.target.value);
  };
  const handleInput = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white mt-10">
      <div className="p-3 bg-[#f6f6f6] shadow-sm">
        <p className="">Write Post</p>
      </div>
      <div>
        <div className="p-[10px] px-10">
          <Image
            src={"/zoom.jpeg"}
            width={60}
            height={60}
            alt="/zoom.jpeg"
            className="!w-16 !h-16"
          />
        </div>
      </div>
      <div className="p-2 ">
        <form onSubmit={(e) => handleInput(e)} className="h-24 bg-[#f6f6f6] ">
          <input
            type="text"
            placeholder="write..."
            className="bg-[#f6f6f6] outline-none px-3 py-1  w-full"
            onChange={(e) => {
              handleinputChange(e);
            }}
          />
        </form>
      </div>
      <div className="p-2 flex items-center justify-between">
        <div className=" flex items-center justify-between w-[220px]">
          <div className=" p-1 border-[1px] text-gray-400 text-sm border-gray-300 border-dashed rounded-full hover:text-white hover:bg-mold hover:rotate-[360deg] transition-all duration-300 cursor-pointer ">
            <IoIosPhotos />
          </div>

          <button
            onClick={() => {
              setCurrentType("Breach");
            }}
            className={` border-[1px] border-cusGreen rounded-3xl cursor-pointer p-1 px-5 text-xs hover:bg-cusGreen hover:text-white ${currentType != "Bullish" ? " text-white bg-cusGreen" : "text[#db3030] bg-white"} transition-all duration-200`}
          >
            Bullish
          </button>

          <button
            onClick={() => {
              setCurrentType("Bullish");
            }}
            className={` border-[1px] border-[#db3030] rounded-3xl cursor-pointer p-1 px-5 text-xs hover:bg-[#db3030] hover:text-white ${currentType != "Breach" ? " text-white bg-[#db3030]" : "text[#db3030] bg-white"} transition-all duration-200`}
          >
            Breach
          </button>
        </div>
        <div className="w-fit flex items-center">
          <div className="mr-3">
            <p className="text-sm text-[#878787]">{inpuCount}</p>
          </div>
          <div>
            <button className="bg-[#4babae] text-white hover:bg-white hover:text-[#4babae] border-[1px] border-[#4babae] rounded-3xl p-1 px-5 cursor-pointer transition-all duration-200">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritePost;
