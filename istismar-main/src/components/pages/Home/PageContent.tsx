"use client";
import React, { useState } from "react";
import Persons from "./Persons";
import WatchList from "./WatchList";
import Recommends from "./Recommends";
import Charts from "./Charts";
import Popular from "./Popular";
enum Titles {
  Person = "Person",
  WatchList = "Watch List",
  Recommends = "Recommends",
  Charts = "Charts",
  Popular = "Popular",
}

function PageContent() {
  const [currentTitle, setCurrentTitle] = useState<string>(Titles.Person);
  const [hoverTitle, setHoverTitle] = useState<string>("");
  const titles = [
    { title: Titles.Person, id: "1" },
    { title: Titles.WatchList, id: "2" },
    { title: Titles.Recommends, id: "3" },
    { title: Titles.Charts, id: "4" },
    { title: Titles.Popular, id: "5" },
  ];
  return (
    <div className="w-full">
      {/* Start Titles */}
      <div className="bg-white pt-2 ">
        <ul className="flex items-cneter justify-between ">
          {titles.map((item: { title: string; id: string }) => (
            <li
              key={item.id}
              className={`w-full text-center cursor-pointer text-sm ${currentTitle == item.title && "text-mold"} ${hoverTitle == item.title && "text-mold"}`}
              onClick={() => {
                setCurrentTitle(item.title);
              }}
              onMouseOver={() => {
                setHoverTitle(item.title);
              }}
              onMouseLeave={() => {
                setHoverTitle("");
              }}
            >
              {item.title}
              <hr
                className={`w-0 h-[2px] block bg-mold mt-3 ${currentTitle == item.title && "!w-full"}  ${hoverTitle == item.title && "!w-full"} transition-all duration-200 `}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* End Titles */}

      {/* Start Show Components */}
      <div className="">
        {currentTitle == Titles.Person && <Persons />}
        {currentTitle == Titles.WatchList && <WatchList />}
        {currentTitle == Titles.Recommends && <Recommends />}
        {currentTitle == Titles.Charts && <Charts />}
        {currentTitle == Titles.Popular && <Popular />}
      </div>
      {/* End Show Components */}
    </div>
  );
}

export default PageContent;
