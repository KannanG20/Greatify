import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Logo from "../assets/greatifyLogo.png";
import SmallLogo from "../assets/logo.png";
import amityLogo from "../assets/amityLogo.png";
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightStartOnRectangleIcon,
  ClipboardDocumentListIcon,
  NewspaperIcon,
  PencilSquareIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useLocation, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { GlobalContextProvider } from "../context/GlobalContext";
import { motion } from "framer-motion";

export default function () {
  const menuItems = [
    {
      name: "Dashboard",
      icon: RectangleGroupIcon,
      href: "/",
      current: true,
    },
    {
      name: "My Tests",
      icon: PencilSquareIcon,
      href: "/tests",
      current: false,
    },
  ];

  const location = useLocation();
  const [data, setData] = useState(menuItems);
  const { id } = useParams();

  const {
    toggleSidebar,
    setToggleSidebar,
    handleToggle: handleSideBar,
  } = useContext(GlobalContextProvider);

  useEffect(() => {
    setData([
      {
        name: "Dashboard",
        icon: RectangleGroupIcon,
        href: "/",
        current: location.pathname === "/",
      },
      {
        name: "My Tests",
        icon: PencilSquareIcon,
        href: "/tests",
        current: location.pathname.includes("tests"),
      },
    ]);
  }, [location.pathname]);

  return (
    <div className={`fixed left-0 z-[9999] h-screen top-0 p-4 w-auto`}>
      <div
        className={`text-lg text-black h-full bg-[#00373A] ${
          toggleSidebar ? "w-[70px]" : "w-[240px]"
        }  rounded-lg flex duration-150 ease-in flex-col justify-between `}
      >
        <div
          onClick={handleSideBar}
          className="cursor-pointer absolute top-10 right-0 bg-[#F9F7E8] rounded-full h-6 w-6 flex items-center justify-center"
        >
          {!toggleSidebar ? (
            <ChevronLeftIcon className="absolute right-[3px] w-4 h-4 text-[#00373A] bg-[#00DC46] rounded-full" />
          ) : (
            <ChevronRightIcon className="absolute right-[3px] w-4 h-4 text-[#00373A] bg-[#00DC46] rounded-full" />
          )}
        </div>

        <div>
          <div className="p-1">
            <div className="p-4 h-[72px] bg-[#F9F7E8] flex justify-center gap-2 items-center rounded-lg">
              <img src={amityLogo} className="h-8 w-8" />
              {!toggleSidebar && (
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-base font-medium text-gray-900"
                >
                  Amity University
                </motion.h2>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full  gap-4  pt-8 overflow-hidden">
            {data?.map((item, index) => (
              <div className=" flex w-full justify-between pl-4 items-center ">
                <a
                  href={item?.href}
                  className={`flex ${
                    item?.current
                      ? "text-white"
                      : "hover:text-white text-gray-300 "
                  }  items-center text-sm p-2 whitespace-nowrap `}
                >
                  {item.icon && (
                    <item.icon
                      data-tooltip-id={item?.name}
                      data-tooltip-content={item?.name}
                      className={`h-6 w-6 mr-2 inline-block ${
                        item?.current
                          ? "text-[#00DC46]"
                          : " hover:text-white text-gray-300 outline-none border-none"
                      } `}
                    />
                  )}
                  {toggleSidebar && (
                    <Tooltip
                      id={item?.name}
                      place="right"
                      style={{
                        backgroundColor: "#005C23",
                        fontWeight: "500",
                        color: "#ffffff",
                        fontSize: "14px",
                        zIndex: 9999,
                      }}
                    />
                  )}
                  {!toggleSidebar && item?.name}
                </a>
                {!toggleSidebar && item?.current && (
                  <div className="h-10 w-[10px] bg-[#00DC46] rounded-s-md "></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {!toggleSidebar && (
          <div className=" overflow-hidden h-[150px] rounded-lg w-full">
            <div className="translate-y-6 -translate-x-8">
              <img src={SmallLogo} className="h-[240px] w-60 " />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
