"use client";
import React, { useRef, useState } from "react";
import { Input, Modal } from "antd";

function Login({ setOpenForgetPassword, setOpenLogin }: any) {
  const [focusOnName, setFocusOnName] = useState(false);
  const [focusOnPassword, setFocusOnPassword] = useState(false);
  const [isUserNameFocused, setIsUserNameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const myRef = useRef(null);

  const handleUserNameFocus = () => {
    setIsUserNameFocused(true);
  };

  const handleUserNameBlur = () => {
    setIsUserNameFocused(false);
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
    <div className="mt-10 w-4/5 mx-auto">
      <p className="font-semibold text-2xl block m-auto w-fit">Login</p>
      <form onSubmit={(e) => onFinish(e)} className="mt-5">
        <div className="relative rounded-3xl ">
          <label
            ref={myRef}
            className={`absolute bg-white px-3 -top-3 right-10 ${isUserNameFocused ? "text-mold" : "text-[#5e5e5e]"} `}
          >
            Username or mail
          </label>
          <input
            placeholder="Username or mail"
            className={`  ${isUserNameFocused ? "placeholder-mold" : "placeholder-block"}  w-full text-center border-[2px] border-[#5e5e5e] rounded-3xl py-2  outline-mold text-mold`}
            onFocus={handleUserNameFocus}
            onBlur={handleUserNameBlur}
          />
        </div>
        <div className="relative rounded-3xl mt-12">
          <label
            ref={myRef}
            className={`absolute z-50 bg-white px-3 -top-3 right-10 ${isPasswordFocused ? "text-mold" : "text-[#5e5e5e]"} `}
          >
            Password
          </label>
          <div
            className={`${isPasswordFocused ? "border-mold" : "border-[#5e5e5e]"} border-[2px] rounded-3xl [&>*]:py-2  py-2 flex items-center justify-center `}
          >
            <Input.Password
              placeholder="Password"
              className={`  ${isPasswordFocused ? "[&>*]:placeholder-mold" : "[&>*]:placeholder-black"} w-full [&>*]:text-center [&>*]:!border-[2px] [&>*]:!border-[#5e5e5e] [&>*]:!rounded-3xl [&>*]:py-2  [&>*]:!outline-mold [&>*]:text-mold`}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div>
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked
              className="bg-mold"
            />
            <label>Remember me</label>
          </div>
          <button
            className="text-[#ababab] text-xs"
            onClick={() => {
              setOpenLogin(false);
              setOpenForgetPassword(true);
            }}
          >
            Did you forget your password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-7 bg-mold text-white text-sm hover:bg-white border-[1px] border-mold hover:text-mold rounded-3xl transition-all duration-200"
        >
          Login
        </button>
      </form>
      <div className="mt-10 mx-auto flex items-center justify-center">
        <span className="cursor-pointer text-mold underline mr-2">
          New Account
        </span>
        <span>No Account ?</span>
      </div>
    </div>
  );
}

export default Login;
