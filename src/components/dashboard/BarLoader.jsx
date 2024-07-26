import React from "react";

function BarLoader({ label, color, width, text }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold text-gray-500 text-xs uppercase">
        {label}
      </span>
      <div className="w-full h-6 rounded-md bg-gray-100">
        <div
          className={` ${width} ${color} h-full rounded-md flex justify-end items-center `}
        >
          <span className="text-white  text-xs pr-2 font-medium">{text}%</span>
        </div>
      </div>
    </div>
  );
}

export default BarLoader;
