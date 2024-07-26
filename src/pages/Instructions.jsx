import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import React from "react";

function Instructions() {
  const list = [
    {
      name: "Before the exam",
      current: true,
    },
    {
      name: "Accessibility",
    },
    {
      name: "Technical Support",
    },
    {
      name: "During the exam",
    },
    {
      name: "Troubleshooting",
    },
    {
      name: "Post-Exam",
    },
  ];
  return (
    <div className=" flex flex-col h-full justify-between">
      <div className="flex flex-col gap-4">
        <div className="p-4 border-b border-gray-200 flex lg:justify-between lg:flex-row flex-col gap-4 lg:items-center">
          <h4 className="text-xl font-bold text-gray-900">Instructions</h4>
          <p className="text-gray-900 text-xs">
            Read and agree all the instructions before test
          </p>

          <span className="text-xs flex gap-1 items-center text-gray-900">
            Exam starts in{" "}
            <span className="text-base flex gap-1 items-center font-medium text-orange-500">
              <ClockIcon className="h-5 w-5 " /> 01:23:05
            </span>
          </span>
        </div>

        <div className="p-4 border-b border-gray-300 flex gap-1 flex-wrap items-center">
          {list?.map((item) => (
            <div
              className={` rounded-lg px-2 py-1 w-max flex justify-center items-center ${
                item?.current
                  ? "bg-white text-gray-900 border border-gray-900"
                  : "bg-gray-200 border-gray-300 border text-gray-500"
              } `}
            >
              {item?.current && (
                <CheckIcon className="h-3 w-3 text-green-500 mr-2" />
              )}
              <span className="text-xs font-semibold">{item?.name}</span>
            </div>
          ))}
        </div>

        <div className="p-4 flex flex-col gap-4 ">
          <h4 className="font-semibold text-gray-900 text-xl">
            Before the Exam
          </h4>

          <div className="flex flex-col gap-4 pl-5 lg:pl-10">
            <div className="flex flex-col gap-4">
              <h6 className="font-medium text-green-500 text-base">
                System Requirements:
              </h6>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="h-2 w-2 bg-green-500"></div>
                  <p className="text-sm font-medium text-gray-700">
                    Ensure your desktop or tablet meets the minimum system
                    requirements for the exam platform.
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="h-2 w-2 bg-green-500"></div>
                  <p className="text-sm font-medium text-gray-700">
                    Disable any browser extensions that may interfere with the
                    exam.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="font-medium text-green-500 text-base">
                Stable Internet Connection:
              </h6>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="h-2 w-2 bg-green-500"></div>
                  <p className="text-sm font-medium text-gray-700">
                    Make sure you have a reliable internet connection.
                    Preferably, use a wired connection for desktops or a strong
                    Wi-Fi signal for tablets.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="font-medium text-green-500 text-base">
                Device Preparation:
              </h6>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="h-2 w-2 bg-green-500"></div>
                  <p className="text-sm font-medium text-gray-700">
                    Fully charge your device or keep it plugged in during the
                    exam.
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="h-2 w-2 bg-green-500"></div>
                  <p className="text-sm font-medium text-gray-700">
                    Close all unnecessary applications and tabs to avoid
                    distractions and potential technical issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 p-4 flex justify-between items-center">
        <div className="gap-2 flex items-center">
          <input type="checkbox" />
          <p className="text-gray-900 font-bold uppercase text-xs">
            I have read all the instructions
          </p>
        </div>
        <button className="border w-32 py-3 text-sm border-[#00373A]/60 text-white font-medium px-4 rounded-lg bg-gradient-to-r from-green-500 from-80% to-green-600">
          I Agree
        </button>
      </div>
    </div>
  );
}

export default Instructions;
