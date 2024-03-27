"use client";
import React, { useRef, useState } from "react";

function ForgetPassword({ setOpenLogin }: any) {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const myRef = useRef(null);

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };
  const onFinish = (e: any) => {
    e.preventDefault();
    console.log("asd");
  };
  return (
    <div className="mt-10 w-3/5 mx-auto">
      <p className="font-semibold text-2xl block m-auto w-fit text-center">
        Did you forget your password?
      </p>
      <form onSubmit={(e) => onFinish(e)} className="mt-5">
        {/* Start Email */}
        <div className="relative rounded-3xl mt-4">
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

        <button
          type="submit"
          className="w-full py-2 mt-7 bg-mold text-white text-xs hover:bg-white border-[1px] border-mold hover:text-mold rounded-3xl transition-all duration-200"
        >
          Forget Password
        </button>
      </form>
      <div className="mt-8 mx-auto flex items-center justify-center">
        <span className="cursor-pointer text-mold underline mr-2">
          New Account
        </span>
        <span>No Account ?</span>
      </div>
    </div>
  );
}

export default ForgetPassword;
