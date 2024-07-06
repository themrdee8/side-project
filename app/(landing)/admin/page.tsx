import Button from "@/components/Button";
import FilePicker from "@/components/FilePicker";
import Input from "@/components/Input";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const AdminPage = () => {
  return (
    <div className="bg-white h-screen">
      <div className="flex items-center justify-between px-24 py-7">
        <div className="pl-28 pt-2">
          <h1 className="text-3xl uppercase">My uploads</h1>
          <div className="pt-32 pb-12">
            <p className="text-xl text-red-700/20">
              {"<"}things will be displayed here{">"}
            </p>
          </div>
          <div className="bg-blue-800/65 rounded-xl w-[350px]  mt-28 pt-1 pb-40 items-center flex justify-center">
            <p>Number of Emails sent for each file</p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center pb-3">
            <FilePicker />
          </div>
          <Input
            placeholder="title"
            type="text"
            addedInputStyle="w-[300px]"
            addedStyle="pb-4"
          />
          <Input
            placeholder="description"
            type="text"
            addedInputStyle="w-[300px]"
          />
          <div className="flex items-center justify-center pt-6">
            <Button name="Upload" extraStyles="w-[180px]" />
          </div>

          <div className="bg-purple-800/75 rounded-xl w-[250px] ml-6 mt-14 pt-1 pb-16 items-center flex justify-center">
            <p>Number of downloads:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
