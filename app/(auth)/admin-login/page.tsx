import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import React from "react";

const AdminLoginPage = () => {
  return (
    <div className="flex items-center justify-center mt-32 h-full">
      <div className="bg-white w-[33%] h-full p-2">
        <div className="flex items-center justify-center pt-28 pb-6 w-[38%] ml-[141px]">
          <p className="text-center uppercase text-xl">Admin Panel</p>
        </div>

        <div className="ml-14">
          <Input
            placeholder="Email Address"
            type="email"
            addedStyle="pb-10"
            addedInputStyle="w-[85%]"
          />
          <Input
            placeholder="Password"
            type="password"
            addedStyle="pb-10"
            addedInputStyle="w-[85%]"
          />
        </div>

        <div className="flex justify-center pb-40">
          <Button name="Login" extraStyles="text-lg font-semibold" />
          <Link href="/">
            <p className="text-sm text-blue-300 font-light pl-5 pt-5">
              Forgot Password?
            </p>
          </Link>
        </div>
        {/* <div className="pb-36 flex items-center justify-center pt-6">
          <Link href="/admin">
            <p>User Login</p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default AdminLoginPage;
