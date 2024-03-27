"use client";
import React, { useState } from "react";
import WatchList from "./WatchList";
import Followers from "./Followers";
import Following from "./Following";
import Idea from "./Idea";
import Like from "./Like";
import UserPageHeader from "./UserPageHeader";

enum Titles {
  WatchList = "Watch List",
  Followers = "Followers",
  Following = "Following",
  Idea = "Idea",
  Like = "Like",
}

interface TitleItem {
  title: Titles;
  id: string;
}

function PageContent() {
  const [currentTitle, setCurrentTitle] = useState<Titles>(Titles.WatchList);
  const [hoverTitle, setHoverTitle] = useState<Titles | "">("");

  const titles: TitleItem[] = [
    { title: Titles.Idea, id: "1" },
    { title: Titles.Followers, id: "2" },
    { title: Titles.Following, id: "3" },
    { title: Titles.Like, id: "4" },
    { title: Titles.WatchList, id: "5" },
  ];

  return (
    <>
      <div className="pt-1 pb-4">
        <UserPageHeader />
      </div>
      <div className="w-full">
        {/* Start Titles */}
        <div className="bg-white pt-2">
          <ul className="flex items-cneter justify-between ">
            {titles.map((item: TitleItem) => (
              <li
                key={item.id}
                className={`w-full text-center cursor-pointer text-sm ${currentTitle === item.title && "text-mold"} ${hoverTitle === item.title && "text-mold"}`}
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
                  className={`w-0 h-[2px] block bg-mold mt-3 ${currentTitle === item.title && "!w-full"}  ${hoverTitle === item.title && "!w-full"} transition-all duration-200 `}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* End Titles */}

        {/* Start Show Components */}
        <div className="">
          {currentTitle === Titles.Idea && <Idea />}
          {currentTitle === Titles.Followers && <Followers />}
          {currentTitle === Titles.Following && <Following />}
          {currentTitle === Titles.Like && <Like />}
          {currentTitle === Titles.WatchList && <WatchList />}
        </div>
        {/* End Show Components */}
      </div>
    </>
  );
}

export default PageContent;
