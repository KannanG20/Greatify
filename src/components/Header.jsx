import {
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import User from "../assets/user.png";
import Logo2 from "../assets/image.png";

function Header() {
  const icons = [
    {
      name: <img src={Logo2} className="h-full w-full rounded-full" />,
      image: true,
    },
    {
      name: <BellIcon className="h-full w-full" />,
    },
    {
      name: <Cog6ToothIcon className="h-full w-full" />,
    },
    {
      name: <img src={User} className="h-full w-full rounded-full" />,
      image: true,
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col gap-4 lg:justify-between p-4 border-b border-gray-200 lg:items-center">
      <h3 className="font-medium text-gray-500 w-max flex gap-1 items-center text-xl">
        Welcome, <span className="text-gray-900 font-bold">Akash</span>
      </h3>

      <div className="flex lg:flex-row flex-col lg:justify-end w-full gap-4 items-center">
        <div className="px-2 py-1 rounded-lg border bg-white items-center w-full lg:w-[400px] border-gray-200 flex gap-2">
          <MagnifyingGlassIcon className="h-4 w-4" />
          <input
            placeholder="Search"
            className="flex-1 outline-none text-sm border-none"
          />
        </div>

        <div className="flex items-center gap-4">
          {icons?.map((item) => (
            <div
              className={`h-10 w-10 ${
                item?.image ? "" : "p-2"
              }  rounded-full bg-white`}
            >
              {item?.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
