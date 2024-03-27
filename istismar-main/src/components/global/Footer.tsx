import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <div className="bg-white p-4">
      <div className=" w-fit mx-auto mb-5 bg-gray-900">
        <Link href="/" className="">
          <Image
            src={"https://istthmary.com/static/media/logo.84096001.png"}
            alt="Logo"
            width={90}
            height={45}
          />
        </Link>
      </div>
      <div className="grid grid-cols-3 w-4/5 m-auto">
        <div className="">
          <div className="">
            <Link
              href=""
              className="text-[#5e5e5e] hover:text-mold text-[10px] transition-all duration-200"
            >
              About
            </Link>
          </div>
          <div className="mt-3">
            <Link
              href=""
              className="text-[#5e5e5e] hover:text-mold text-[10px] transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="">
          <div className="">
            <Link
              href=""
              className="text-[#5e5e5e] hover:text-mold text-[10px] transition-all duration-200"
            >
              Help
            </Link>
          </div>
          <div className="mt-3">
            <Link
              href=""
              className="text-[#5e5e5e] hover:text-mold text-[10px] transition-all duration-200"
            >
              Terms And Conditions
            </Link>
          </div>
        </div>
        <div className="">
          <div className="">
            <Link
              href=""
              className="text-[#5e5e5e] hover:text-mold text-[10px] transition-all duration-200"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center w-16 mx-auto mt-5">
        <div className="-ml-1  border-[1px] border-gray-300 border-dashed rounded-full cursor-pointer text-mold text-xs hover:text-white hover:bg-mold transition-all duration-200 p-1 ">
          <FaFacebookF />
        </div>
        <div className=" ml-2 border-[1px] border-gray-300 border-dashed rounded-full cursor-pointer text-mold text-xs hover:text-white hover:bg-mold transition-all duration-200 p-1 ">
          <CiTwitter />
        </div>
      </div>
      <div className="bg-[#444] p-1 mt-4">
        <div className="mx-auto w-fit flex items-center ">
          {" "}
          <span className="text-[#a1a1a1] text-[10px]">
            {" "}
            All rights reservedi{" "}
            <Link className="text-mold" href="/">
              istthmary{" "}
            </Link>
            @ 2024
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
