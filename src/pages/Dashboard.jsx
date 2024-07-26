import React from "react";
import Layout from "../components/Layout";
import {
  ArrowDownIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ExclamationCircleIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Cards from "../components/dashboard/Cards";
import BarLoader from "../components/dashboard/BarLoader";
import LineCard from "../components/dashboard/LineCard";
import DoughnutChart from "../components/dashboard/DoughnutChart";
import User from "../assets/user.png";
import Logo2 from "../assets/image.png";

function Dashboard() {
  const card1 = [
    {
      icon: <PencilSquareIcon className="h-5 w-5" />,
      title: 20,
      description: "Attempted Tests",
    },
    {
      icon: <ExclamationCircleIcon className="h-5 w-5 text-gray-500" />,
      title: 2,
      description: "Unattempted Tests",
    },
    {
      icon: <ArrowPathIcon className="h-5 w-5 text-purple-500" />,
      title: 5,
      description: "Reattempted Tests",
    },
    {
      icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
      title: 15,
      description: "Passed Tests",
    },
    {
      icon: (
        <div className="h-4 w-4 p-[2px] border border-red-500 text-red-500 rounded-full">
          <XMarkIcon className="h-full w-full" />
        </div>
      ),
      title: 5,
      description: "Failed Tests",
    },
  ];

  const performanceData = [
    {
      name: "Date Structure &  Engineering",
      percentage: "46%",
      status: "Average",
    },
    {
      name: "Physiotherapy",
      percentage: "56%",
      status: "Average",
    },
    {
      name: "Algorithm Design Techniques",
      percentage: "40%",
      status: "Average",
    },
    {
      name: "Priority queues and lists - Unit 1",
      percentage: "55%",
      status: "Average",
    },
    {
      name: "Graphs",
      percentage: "56%",
      status: "Average",
    },
    {
      name: "Tally",
      percentage: "58%",
      status: "Average",
    },
    {
      name: "Calculus",
      percentage: "60%",
      status: "Average",
    },
    {
      name: "Organic chemistry",
      percentage: "66%",
      status: "Average",
    },
    {
      name: "Data Scientist",
      percentage: "72%",
      status: "Average",
    },
    {
      name: "Date Analytics",
      percentage: "80%",
      status: "Average",
    },
  ];

  const data1 = [
    {
      name: "Coding sources",
      color: "bg-green-100 border-green-500 border text-green-500",
    },
    {
      name: "Aptitude Practice",
      color: "bg-blue-100 border border-blue-500 text-blue-500",
    },
    {
      name: "English Practice",
      color: "bg-orange-100 border border-orange-500 text-orange-500",
    },
    {
      name: "Analytical",
      color: "bg-gray-100 border border-gray-500 text-gray-500",
    },
    {
      name: "Algorithms",
      color: "bg-purple-100 border border-purple-500 text-purple-500",
    },
  ];

  const data2 = [
    {
      name: "Graphical Problem",
      color: "bg-blue-100 border border-blue-500 text-blue-500",
    },
    {
      name: "Algorithms",
      color: "bg-orange-100 border border-orange-500 text-orange-500",
    },
    {
      name: "Resume Building",
      color: "bg-green-100 border border-green-500 text-green-500",
    },
    {
      name: "Testing",
      color: "bg-gray-200 border border-gray-500 text-gray-500",
    },
  ];
  return (
    <div className="p-4 flex gap-4  justify-between">
      <div className="w-72 lg:flex hidden -mt-4 items-center flex-col">
        <div className="h-20 w-20 z-50 bg-gradient-to-br from-[#005C23] from-70% to-[#006821]  flex flex-col gap-2">
          <div className="w-full h-2 bg-[#00373A]"></div>
          <div className="w-full h-2 bg-[#00373A]"></div>
          <div className="w-full h-2 bg-[#00373A]"></div>
        </div>

        <div className="h-72 w-60 border border-gray-200 bg-white rounded-xl relative flex flex-col gap-4 justify-center items-center">
          <div className="absolute -top-5 w-full flex  h-10 justify-center">
            <div className="w-32 bg-white flex justify-center items-center rounded-3xl border-t border-gray-200 h-full">
              <div className="border border-gray-200 -translate-y-[2px] h-[6px] rounded-full w-[70%]"></div>
            </div>
          </div>
          <div className="h-32 w-32 bg-gray-500 rounded-full">
            <img src={User} className="h-full w-full rounded-full" />
          </div>
          <span className="text-xs bg-green-100 border font-medium px-2 py-1 rounded-full border-green-500 text-green-500 uppercase">
            ID: STU000125
          </span>
          <h4 className="text-gray-900 font-medium text-lg">Akash Singhania</h4>
          <p className="text-gray-500 font-medium uppercase text-xs">
            Bachelor of technology
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:flex-1 flex flex-col gap-4">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-5">
          {card1?.map((item) => (
            <Cards
              title={item?.title}
              description={item?.description}
              icon={item?.icon}
            />
          ))}
        </div>

        {/* Card section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {/* 1st card */}
          <div className="p-4 shadow-sm flex w-full bg-white rounded-lg border border-gray-200 flex-col gap-4">
            <div className="flex flex-col leading-none gap-2">
              <div className="flex justify-between w-full items-center">
                <h6 className="font-semibold text-gray-900 text-lg">
                  Skill to focus
                </h6>

                <div className="border border-gray-300 flex gap-2 items-center rounded-lg px-2 py-1 text-xs">
                  <span>All</span>
                  <ChevronDownIcon className="h-3 w-3 text-gray-500" />
                </div>
              </div>

              <div className="flex gap-4  items-center">
                <div className="flex gap-2 items-center">
                  <div className="h-3 w-3 rounded-lg bg-green-500"></div>
                  <span className="text-xs font-medium">Low priority</span>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="h-3 w-3 rounded-lg bg-purple-500"></div>
                  <span className="text-xs font-medium">Medium priority</span>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="h-3 w-3 rounded-lg bg-gray-900"></div>
                  <span className="text-xs font-medium">High priority</span>
                </div>
              </div>
            </div>

            <BarLoader
              color={"bg-gray-900"}
              width={"w-[30%]"}
              text={30}
              label={"Analytical skills"}
            />
            <BarLoader
              color={"bg-purple-500"}
              width={"w-[61%]"}
              text={61}
              label={"coding"}
            />
            <BarLoader
              color={"bg-green-500"}
              width={"w-[89%]"}
              text={89}
              label={"Aptitude"}
            />
          </div>

          {/* 2nd card */}
          <div className=" bg-gradient-to-br shadow-sm rounded-lg from-[#00373A] to-[#00773F] flex flex-col justify-between gap-4  ">
            <div className="flex flex-col gap-4 p-4">
              <div className="h-16 w-16 rounded-full bg-green-800">
                <img src={Logo2} className="h-full w-full rounded-full" />
              </div>
              <h5 className="text-lg text-white max-w-[80%] font-medium">
                Let Greatify AI help you identifying your skills
              </h5>
            </div>

            <div className="flex flex-col gap-2">
              <span className="uppercase p-4 text-[#26ad6e] font-bold text-xs">
                Improve your skills like:
              </span>

              <div className="flex flex-col gap-2 pb-4">
                <marquee
                  scrollamount="5"
                  direction="left"
                  className="mask-effect"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="flex gap-2 flex-nowrap whitespace-nowrap">
                    {data1?.map((item) => (
                      <span
                        className={`px-2 py-1 ${item?.color} font-medium w-max rounded-full text-[10px]`}
                      >
                        {item?.name}
                      </span>
                    ))}
                  </div>
                </marquee>
                <marquee
                  scrollamount="5"
                  direction="right"
                  className="mask-effect"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="flex gap-2 flex-nowrap whitespace-nowrap">
                    {data2?.map((item) => (
                      <span
                        className={`px-2 py-1 ${item?.color} w-max rounded-full font-medium text-[10px]`}
                      >
                        {item?.name}
                      </span>
                    ))}
                  </div>
                </marquee>
              </div>
            </div>
          </div>
        </div>

        {/* Card section 3 */}
        <div className="w-full shadow-sm rounded-lg bg-white p-4 flex lg:flex-row flex-col lg:justify-between lg:divide-x lg:divide-x-gray-200">
          {/* Inner section1 */}
          <div className="flex-1 pr-4 flex flex-col gap-4">
            {/* heading */}
            <div className="flex flex-col">
              <h6 className="font-semibold text-lg text-gray-900">
                Test performance
              </h6>
              <span className="text-gray-400 font-medium text-sm">
                Total tests: 20
              </span>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center ">
              <div className="h-auto border border-gray-200 rounded-full p-1">
                <DoughnutChart />
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <div className="h-3 w-3 rounded-lg bg-[#58FF33]"></div>
                  <span className="text-xs font-medium">Above average</span>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="h-3 w-3 rounded-lg bg-[#EEA247]"></div>
                  <span className="text-xs font-medium">Average</span>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="h-3 w-3 rounded-lg bg-[#6833FF]"></div>
                  <span className="text-xs font-medium">Below average</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inner section2 */}
          <div className="flex-1 pl-4  flex flex-col gap-4">
            <div className="w-full flex justify-end gap-2 items-center">
              <div className="px-2 py-1 flex gap-2 border border-gray-200 items-center rounded-lg">
                <span className="text-xs">First year</span>
                <ChevronDownIcon className="h-3 w-3 text-gray-500" />
              </div>
              <div className="px-2 py-1 flex gap-2 border border-gray-200 items-center rounded-lg">
                <span className="text-xs">Average</span>
                <ChevronDownIcon className="h-3 w-3 text-gray-500" />
              </div>
            </div>

            <div className="flex flex-col gap-2 max-h-80 pr-2 custom-scrollbar overflow-y-auto">
              {performanceData.map((item) => (
                <LineCard
                  name={item?.name}
                  percentage={item?.percentage}
                  status={item?.status}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card section 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {/* 1st card */}
          <div className="flex shadow-sm w-full bg-white rounded-lg border border-gray-200 flex-col gap-4">
            <div className="p-4 border-b border-gray-200 flex items-start justify-between gap-4">
              <div className="flex flex-col">
                <h6 className="font-semibold text-lg ">Subject scores</h6>
                <p className="text-gray-400 text-sm font-medium">
                  My total score in each subject
                </p>
              </div>

              <div className="border border-gray-200 px-2 py-1 flex gap-2 rounded-lg text-xs">
                <span>Sem 1</span>
                <ChevronDownIcon className="h-3 w-3" />
              </div>
            </div>

            <div className="px-4 pb-4 flex flex-col gap-4">
              <div className="border-b border-gray-200 pb-2 flex justify-between items-center">
                <h6 className="font-medium text-xs text-gray-900">
                  Data structure % Engineering
                </h6>

                <span className="font-medium flex items-center text-gray-900 text-lg">
                  78
                  <span className="text-sm flex items-start gap-1 text-gray-400">
                    /100 <span className="text-xs">marks</span>
                  </span>
                </span>
              </div>
              <div className="border-b border-gray-200 pb-2 flex justify-between items-center">
                <h6 className="font-medium text-xs text-gray-900">
                  Physiotherapy
                </h6>

                <span className="font-medium flex items-center text-gray-900 text-lg">
                  50
                  <span className="text-sm flex items-start gap-1 text-gray-400">
                    /100 <span className="text-xs">marks</span>
                  </span>
                </span>
              </div>
              <div className="border-b border-gray-200 pb-2 flex justify-between items-center">
                <h6 className="font-medium text-xs text-gray-900">
                  Organic chemistry
                </h6>

                <span className="font-medium flex items-center text-gray-900 text-lg">
                  80
                  <span className="text-sm flex items-start gap-1 text-gray-400">
                    /100 <span className="text-xs">marks</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div className=" shadow-sm bg-white rounded-lg border border-gray-200  flex flex-col gap-4 ">
            <div className="p-4 border-b border-gray-200 flex items-start justify-between gap-4">
              <div className="flex flex-col">
                <h6 className="font-semibold text-lg ">Semester results</h6>
                <p className="font-medium text-sm text-gray-400">
                  Semester results per year
                </p>
              </div>

              <div className="border border-gray-200 px-2 py-1 flex gap-2 rounded-lg text-xs">
                <span>First year</span>
                <ChevronDownIcon className="h-3 w-3" />
              </div>
            </div>

            <div className="px-4 pb-4 flex flex-col gap-4">
              <BarLoader
                color={"bg-green-500"}
                text={80}
                width={"w-[80%]"}
                label={
                  <div className="w-full text-gray-500 justify-between gap-4 flex items-center">
                    <h6>Sem 01</h6>
                    <span>Grade: A</span>
                  </div>
                }
              />

              <BarLoader
                color={"bg-orange-500"}
                width={"w-[45%]"}
                text={45}
                label={
                  <div className="w-full text-gray-400 justify-between gap-4 flex items-center">
                    <h6>Sem 02</h6>
                    <span>Grade: C</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
