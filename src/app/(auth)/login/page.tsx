import React from "react";
import { LoginForm } from "./_components/login-form";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex h-[100vh]">
      <div className="h-1/2 xl:w-1/2 xl:h-full relative">
        <div className="relative flex flex-col justify-between z-30 h-full">
          <h1 className="ml-5 mt-5 text-3xl font-bold text-white">MSTC</h1>
          <p className=" ml-5 mb-14 text-white text-xl">
            {"The only way to do great work is to love what you do."} - Steve
            Jobs
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1670282840604-7789834af47c"
          alt=""
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="w-[50%]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
