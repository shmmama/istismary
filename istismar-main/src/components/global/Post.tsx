import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { LiaShareAltSolid } from "react-icons/lia";
import { IoIosMore } from "react-icons/io";
import { GoCommentDiscussion } from "react-icons/go";

function Post(data: any) {
  return (
    <div>
      {data.data.map((item: any) => (
        <div className="bg-white py-3 mt-5">
          <div className="grid grid-cols-[15%_85%] gap-3">
            {/* Start First Section */}
            <div className="flex flex-col items-center">
              <div>
                <Image
                  src={item.userImage}
                  alt="asd"
                  width={60}
                  height={60}
                  className="rounded-full !w-16 !h-16"
                />
              </div>
              <div className="w-fit mx-auto mt-2 rounded-xl bg-cusGreen text-white text-center font-semibold px-2 py-0 text-[10px]">
                {item.postType}
              </div>
            </div>
            {/* End First Section */}

            {/* Start secound Section */}
            <div className="mx-5  mt-3">
              {/* Start Header */}
              <div className="flex justify-between">
                <div className="">
                  <div className="text-xs !w-12 !h-12">
                    <p>{item.FirstName}</p>
                    <p className="mt-1">{item.LastName}</p>
                  </div>
                  <div className="text-[#878787] text-sm mt-1">
                    {item.postContent}
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-[#ababab]">{item.date}</p>
                </div>
              </div>
              {/* End Header */}

              {/* Start Image */}
              {item.contentImage != false && (
                <div className="mt-2 text ">
                  <div className="border-[1px] border-[#ababab] rounded-lg overflow-hidden">
                    <Image
                      src={item.contentImage}
                      alt="asd"
                      height={300}
                      width={560}
                      className=""
                    />
                  </div>
                </div>
              )}
              {/* End Image */}
            </div>
            {/* end secound Section */}
          </div>
          <hr className="w-full h-[1px] bg-[#ababab] mt-3" />
          <div className="grid grid-cols-[15%_78%] gap-7 mt-2">
            <div></div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center justify-between w-fit">
                <div className="flex items-center mx-1">
                  <span className="text-mold">{item.countOfLike}</span>
                  <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:text-white ml-1 hover:rotate-[360deg] transition-all duration-500">
                    <AiOutlineLike className="text-xs cursor-pointer " />
                  </span>
                </div>
                <div className="flex items-center mx-1">
                  <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:text-white ml-1 hover:rotate-[360deg] transition-all duration-500">
                    <PiShareFat className="text-xs cursor-pointer " />
                  </span>
                </div>
                <div className="flex items-center mx-1">
                  <span className="text-mold">{item.countOfLike}</span>
                  <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:rotate-[360deg] hover:text-white ml-1 transition-all duration-500">
                    <LiaShareAltSolid className="text-xs cursor-pointer " />
                  </span>
                </div>
                <div className="flex items-center ">
                  <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:text-white ml-1 hover:rotate-[360deg] transition-all duration-500">
                    <IoIosMore className="text-xs cursor-pointer " />
                  </span>
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-center">
                  <span className="text-mold">{item.countOfComment}</span>
                  <span className="border-[2px] border-[#ababab] border-dotted rounded-full p-1 hover:bg-mold hover:rotate-[360deg] hover:text-white ml-1 transition-all duration-500">
                    <GoCommentDiscussion className="text-xs cursor-pointer " />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
