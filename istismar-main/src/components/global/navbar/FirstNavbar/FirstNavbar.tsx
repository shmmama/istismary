"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdMail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Input, Modal } from "antd";
import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
function FirstNavbar() {
  const [isLoggend, setIsLoggend] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openForgetPassword, setOpenForgetPassword] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="bg-[#2e2e2e] py-2">
      <div className=" container grid grid-cols-[23%_65%] gap-32 items-center p-0">
        <div className="flex items-center justify-between">
          <Link href="/" className="">
            <Image
              src={"https://istthmary.com/static/media/logo.84096001.png"}
              alt="Logo"
              width={105}
              height={45}
            />
          </Link>

          <Link
            href="/"
            className="text-white text-xs hover:text-mold transition-all duration-200 font-semibold"
          >
            istthmary social
          </Link>

          <hr className="w-[1px] h-5 bg-[#5e5e5e] block text-[#5e5e5e] border-none" />

          <Link
            href="/"
            className="text-white text-xs hover:text-mold transition-all duration-200 font-semibold"
          >
            HeatMap
          </Link>
        </div>

        <div className="flex items-center ">
          <div className="text-white w-[64%] h-12 flex items-center justify-end mr-10 overflow-hidden relative">
            <CiSearch
              onClick={() => setOpenSearch(!openSearch)}
              className="text-lg text-[#707070] cursor-pointer hover:text-mold transition-all duration-200"
            />
            <div
              className={`w-80 border-2 border-red  rounded-lg absolute top-1  ${openSearch ? " right-10" : " -right-80"} transition-all duration-200`}
            >
              <input
                type="text"
                placeholder="Search.. "
                className="w-full p-2 text-[#707070] outline-none "
              />
            </div>
          </div>
          {isLoggend ? (
            <>
              <div className="hover:text-mold transition-all duration-200">
                <MdMail />
              </div>
              <div className="hover:text-mold transition-all duration-200">
                <IoIosNotifications />
              </div>
              <div></div>
            </>
          ) : (
            <div className="w-56 flex items-center justify-between ">
              <button
                className="text-white text-sm font-semibold bg-[#707070] rounded-3xl py-[6px] px-7 hover:bg-mold transition-all duration-200"
                onClick={() => {
                  setOpenLogin(true);
                }}
              >
                Login
              </button>
              <button
                className="text-white text-sm font-semibold bg-[#707070] rounded-3xl py-[6px] px-7 hover:bg-mold transition-all duration-200"
                onClick={() => {
                  setOpenRegister(true);
                }}
              >
                Register
              </button>
            </div>
          )}
          <div className="text-[#707070] ml-5 hover:text-mold transition-all duration-200 cursor-pointer">
            EN
          </div>
        </div>
      </div>

      {/* Start Login Model */}
      <Modal
        width={500}
        open={openLogin}
        onOk={() => setOpenLogin(false)}
        onCancel={() => setOpenLogin(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Login
          setOpenForgetPassword={setOpenForgetPassword}
          setOpenLogin={setOpenLogin}
        />
      </Modal>
      {/* End Login Model */}

      {/* Start Register Model */}
      <Modal
        width={500}
        open={openRegister}
        onOk={() => setOpenRegister(false)}
        onCancel={() => setOpenRegister(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Register
          setOpenLogin={setOpenLogin}
          setOpenRegister={setOpenRegister}
        />
      </Modal>
      {/* End Register Model */}

      {/* Start Forget Pssword */}
      <Modal
        width={500}
        open={openForgetPassword}
        onOk={() => setOpenForgetPassword(false)}
        onCancel={() => setOpenForgetPassword(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <ForgetPassword setOpenLogin={setOpenLogin} />
      </Modal>
      {/* End Forget Pssword */}
    </div>
  );
}

export default FirstNavbar;
