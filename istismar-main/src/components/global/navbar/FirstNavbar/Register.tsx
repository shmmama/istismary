"use client";
import React, { useRef, useState } from "react";
import { Input } from "antd";

function Register({ setOpenLogin, setOpenRegister }: any) {
  const [focusOnName, setFocusOnName] = useState(false);
  const [focusOnPassword, setFocusOnPassword] = useState(false);
  const [isUserNameFocused, setIsUserNameFocused] = useState(false);
  const [isFullNameFocused, setIsFullNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const myRef = useRef(null);

  const handleUserNameFocus = () => {
    setIsUserNameFocused(true);
  };

  const handleUserNameBlur = () => {
    setIsUserNameFocused(false);
  };

  const handleFullNameFocus = () => {
    setIsFullNameFocused(true);
  };

  const handleFullNameBlur = () => {
    setIsFullNameFocused(false);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const onFinish = (e: any) => {
    e.preventDefault();
    console.log("asd");
  };
  return (
    <div className="mt-10 w-3/5 mx-auto">
      <p className="font-semibold text-2xl block m-auto w-fit">Login</p>
      <form onSubmit={(e) => onFinish(e)} className="mt-5">
        {/* Start UserName */}
        <div className="relative rounded-3xl ">
          <label
            ref={myRef}
            className={`absolute bg-white px-3 -top-3 right-10 ${isUserNameFocused ? "text-mold" : "text-[#5e5e5e]"} text-xs`}
          >
            Username
          </label>
          <input
            placeholder="Username"
            className={`  ${isUserNameFocused ? "placeholder-mold" : "placeholder-block"}  w-full text-center border-[1px] border-[#5e5e5e] rounded-3xl py-2  outline-mold text-mold`}
            onFocus={handleUserNameFocus}
            onBlur={handleUserNameBlur}
          />
        </div>
        {/* End UserName */}

        {/* Start Full Name */}
        <div className="relative rounded-3xl mt-8">
          <label
            ref={myRef}
            className={`absolute bg-white px-3 -top-3 right-10 ${isFullNameFocused ? "text-mold" : "text-[#5e5e5e]"} text-xs `}
          >
            FullName
          </label>
          <input
            placeholder="FullName"
            className={`  ${isFullNameFocused ? "placeholder-mold" : "placeholder-block"}  w-full text-center border-[1px] border-[#5e5e5e] rounded-3xl py-2  outline-mold text-mold`}
            onFocus={handleFullNameFocus}
            onBlur={handleFullNameBlur}
          />
        </div>
        {/* End Full Name */}

        {/* Start Country */}
        <div className="relative rounded-3xl mt-8">
          <label
            ref={myRef}
            className={`absolute bg-white px-3 -top-3 right-10 ${isFullNameFocused ? "text-mold" : "text-[#5e5e5e]"} text-xs `}
          >
            Country
          </label>
          <select
            className={`  ${isFullNameFocused ? "placeholder-mold" : "placeholder-block"}  w-full text-center border-[1px] border-[#5e5e5e] rounded-3xl py-2  outline-mold text-mold`}
          >
            <option value="1">asdas</option>
            <option value="2">asda</option>
            <option value="3">asdf</option>
          </select>
        </div>

        {/* End Country */}

        {/* Start Email */}
        <div className="relative rounded-3xl mt-8">
          <label
            ref={myRef}
            className={`absolute bg-white px-3 -top-3 right-10 ${isEmailFocused ? "text-mold" : "text-[#5e5e5e]"} text-xs`}
          >
            Email
          </label>
          <input
            placeholder="Email"
            className={`  ${isEmailFocused ? "placeholder-mold" : "placeholder-block"} [&>*]:placeholder:text-[10px] w-full text-center border-[1px] border-[#5e5e5e] rounded-3xl py-2  outline-mold text-mold`}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
        </div>
        {/* End Email */}

        {/* Start Password */}
        <div className="relative rounded-3xl mt-8">
          <label
            ref={myRef}
            className={`absolute z-50 bg-white px-3 -top-3 right-10 ${isPasswordFocused ? "text-mold" : "text-[#5e5e5e]"} text-xs `}
          >
            Password
          </label>
          <div
            className={`${isPasswordFocused ? "border-mold" : "border-[#5e5e5e]"} border-[1px] rounded-3xl py-[2px]   flex items-center justify-center `}
          >
            <Input.Password
              placeholder="password"
              className={`  ${isPasswordFocused ? "[&>*]:placeholder-mold" : "[&>*]:placeholder-black"} [&>*]:placeholder:text-xs w-full [&>*]:text-center [&>*]:!border-[1px] [&>*]:!border-[#5e5e5e] [&>*]:!rounded-3xl [&>*]:py-2  [&>*]:!outline-mold [&>*]:text-mold`}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
          </div>
        </div>
        {/* End Password */}

        <button
          type="submit"
          className="w-full py-2 mt-5 bg-mold text-white text-xs hover:bg-white border-[1px] border-mold hover:text-mold rounded-3xl transition-all duration-200"
        >
          Register
        </button>
      </form>

      <div className="mt-5 mx-auto flex items-center justify-center text-[10px] text-[#ababab]">
        <span> By registering, you agree to</span>
        <span className="cursor-pointer text-mold text-xs underline ml-2 ">
          Terms and Conditions
        </span>
      </div>

      <div className="mt-10 mb-10 mx-auto flex items-center justify-center text-[10px] text-[#ababab]">
        <span
          className="cursor-pointer text-mold text-xs underline mr-2 "
          onClick={() => {
            setOpenRegister(false);
            setOpenLogin(true);
          }}
        >
          Press Here
        </span>
        <span>Login</span>
      </div>
    </div>
  );
}

export default Register;
