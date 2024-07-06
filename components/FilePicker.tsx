import React from "react";
import plus from "@/public/images/plus.png";
import Image from "next/image";

const FilePicker = () => {
  return (
    <div className="">
      <div className="ml-4 flex items-center justify-center bg-neutral-100 w-[130px] h-[13vh]">
        <Image src={plus} alt="plus" className="w-16 h-16" />
      </div>
      <p className="text-center text-xs">Add file by pressing the icon</p>
    </div>
  );
};

export default FilePicker;
