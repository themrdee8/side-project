import Input from "@/components/Input";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white h-screen">
      <div className="flex items-center justify-between px-24 py-7">
        <div className="pl-32">
          <h1 className="text-3xl uppercase">My Feed</h1>
        </div>
        <div>
          <Input placeholder="Search" type="text" addedInputStyle="w-[300px]" />
        </div>
      </div>
      <div className="px-40 pt-32">
        <p className="text-3xl text-red-700/20">{"<"}things will be displayed here{">"}</p>
      </div>
    </div>
  );
};

export default HomePage;
