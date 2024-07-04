import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center mt-32 h-full">
      <div className="bg-white w-[33%] h-full p-2">
        <h2 className="text-center py-5 text-2xl font-semibold">
          Create An Account
        </h2>
        <div className="flex items-center justify-center pb-8 w-[58%] ml-[98px]">
          <p className="text-center">
            Create an account to enjoy all the services without any ads for free
          </p>
        </div>

        <div className="ml-16">
          <Input
            placeholder="Name"
            type="text"
            addedStyle="pb-12"
            addedInputStyle="w-[85%]"
          />
          <Input
            placeholder="Email Address"
            type="email"
            addedStyle="pb-12"
            addedInputStyle="w-[85%]"
          />
          <Input
            placeholder="Password"
            type="password"
            addedStyle="pb-3"
            addedInputStyle="w-[85%]"
          />
        </div>

        <div className="flex justify-center">
          <Button name="Create Account" />
        </div>

        <div className="flex items-center justify-center pt-2 pb-10">
          <p className="text-sm font-light">Already have an Account?</p>
          <Link href="/login">
            <p className="text-sm font-light pl-1">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
