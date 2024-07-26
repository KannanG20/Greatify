import {
  CalendarDateRangeIcon,
  ChevronRightIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import TestCard from "../components/tests/TestCard";

function Screen2() {
  return (
    <div className="flex flex-col gap-4 h-full flex-1">
      <div className="border-b border-gray-200 text-xs font-medium p-4 flex gap-2 items-center">
        <span className="text-gray-400 ">My Subjects</span>
        <ChevronRightIcon className="h-3 w-3 text-gray-500" />
        <span className="text-green-500">Data structure and Algorithm</span>
      </div>

      <div className="px-4 flex flex-col gap-4 ">
        <div className="flex lg:flex-row flex-col gap-4 lg:items-center lg:justify-between">
          <h3 className="text-xl font-semibold text-gray-900">
            Data Structure & Algorithms Tests
          </h3>

          <div className="rounded-md bg-gray-200 border gap-1 border-gray-300  p-1 flex items-center w-max">
            <div className="h-full w-max px-2 py-1 rounded-lg text-xs border border-gray-200 bg-gray-100 flex justify-center items-center">
              <span className="w-max text-xs text-gray-500">All Tests 8</span>
            </div>
            <div className="h-full w-max px-2 py-1 rounded-lg text-xs border border-purple-500 bg-white flex justify-center items-center">
              <span className="w-max text-gray-900">Upcoming 8</span>
            </div>
            <div className="h-full w-max px-2 py-1 rounded-lg text-xs border border-gray-200 bg-gray-100 flex justify-center items-center">
              <span className="w-max text-gray-500">Completed 5</span>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col border-b pb-2 border-gray-200 lg:items-center gap-4 lg:justify-between">
          <span className="font-medium text-xs">
            3 <span className="text-gray-500">results found</span>
          </span>

          <div className="flex gap-1 items-center">
            <div className="p-1 h-6 w-6 rounded-md border border-gray-200">
              <WalletIcon className="h-full w-full" />
            </div>

            <div className="p-[2px] rounded-md flex border border-gray-200 bg-gray-200 w-max gap-1">
              <div className="p-[2px] h-4 w-4 rounded-md ">
                <ListBulletIcon className="text-gray-500 h-full w-full" />
              </div>
              <div className="p-[2px] h-4 w-4 rounded-md border bg-white border-gray-200">
                <Squares2X2Icon className="h-full w-full" />
              </div>
            </div>

            <div className="flex gap-2 items-center px-2 h-6 rounded-md border border-gray-200">
              <MagnifyingGlassIcon className="h-3 w-3 bg-transparent text-gray-500" />
              <input
                placeholder="Search"
                className="outline-none text-[10px] placeholder:text-[10px] bg-gray-100 w-32 border-none"
              />
            </div>
            <div className="h-6 w-6 p-1">
              <EllipsisVerticalIcon className="h-full w-full text-gray-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 divide-y divide-y-gray-200">
          <TestCard
            title={"Priority queues and lists - unit 1"}
            status={"Today"}
            text={"Read Instructions"}
            description={
              <span className="text-orange-500 flex gap-1 items-center text-xs">
                <ClockIcon className="h-3 w-3" /> 00:00:00
              </span>
            }
          />

          <div className="pt-4 pb-4 flex flex-col gap-4">
            <div className="flex gap-4 lg:flex-row flex-col">
              <TestCard
                title={"Algorithm Design Techniques"}
                status={"Upcoming"}
                description={
                  <span className="text-green-500 flex gap-1 items-center font-medium text-xs">
                    <CalendarDateRangeIcon className="h-3 w-3" /> May 25, 2024
                  </span>
                }
              />
              <TestCard
                description={
                  <span className="text-green-500 flex gap-1 items-center font-medium text-xs">
                    <CalendarDateRangeIcon className="h-3 w-3" /> June 2, 2024
                  </span>
                }
                title={"Graphs"}
                status={"Upcoming"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen2;
