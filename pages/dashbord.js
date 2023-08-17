import React from "react";
import Layout from "@/components/Layout";

import yellowcircle from "../public/yellowcircle.png";

import { FaCalendarAlt } from "react-icons/fa";
import {
  AiOutlineBell,
  AiOutlineCalendar,
  AiOutlineHistory,
} from "react-icons/ai";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import DaysDropdown from "@/components/DaysDropdown";
import WeatherForcast from "@/components/WeatherForcast";

function dashbord() {
  const tableData = [
    {
      id: 1,
      date: "16/05/2023",
      rate: 150,
      condition: "Sunny, moderate temperature",
      status: "Yes",
      Note: "Applied during early growth stage",
    },
    {
      id: 2,
      date: "11/05/2023",
      rate: "-",
      condition: "-",
      status: "No",
      Note: "Applied during early growth stage",
    },
    {
      id: 3,
      date: "30/04/2023",
      rate: 120,
      condition: "Sunny, high temperature",
      status: "Yes",
      Note: "Applied during early growth stage",
    },
    {
      id: 4,
      date: "30/04/2023",
      rate: 120,
      condition: "Sunny, high temperature",
      status: "Yes",
      Note: "Applied during early growth stage",
    },
    {
      id: 5,
      date: "30/04/2023",
      rate: 120,
      condition: "Sunny, high temperature",
      status: "Yes",
      Note: "Applied during early growth stage",
    },
    {
      id: 3,
      date: "30/04/2023",
      rate: 120,
      condition: "Sunny, high temperature",
      status: "Yes",
      Note: "Applied during early growth stage",
    },
    {
      id: 3,
      date: "30/04/2023",
      rate: 120,
      condition: "Sunny, high temperature",
      status: "Yes",
      Note: "Applied during early growth stage",
    },
    {
      id: 3,
      date: "30/04/2023",
      rate: 120,
      condition: "Sunny, high temperature",
      status: "Yes",
      Note: "Applied during early growth stage",
    },
    // Add more data rows as needed
  ];

  return (
    //page screen
    <div className="grid lg:grid-cols-[5fr,1.5fr] lg:h-screen lg:overflow-y-auto grid-cols-1 lg:w-full w-screen">
      {/* main screen  */}
      <main className=" flex flex-col  gap-4 bg-slate-100 relative">
        {/* search bar with date */}
        <div className="h-16  flex  items-center justify-between absolute top-0 w-full   px-2 lg:px-10">
          <div>
            <p className="text-gradient tracking-tighter">
              {" "}
              Tuesday, 13 May 2023
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className=" relative w-32 lg:w-56">
              <input
                className=" rounded-lg h-9 w-full  text-sm pl-3 outline-none border"
                placeholder="Search"
              />
              <AiOutlineCalendar className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 " />
            </div>

            <AiOutlineHistory />
            <div className="relative ">
              <AiOutlineBell />
              <div className="h-1 w-1 rounded-full bg-red-600 absolute top-0 right-[3px]"></div>
            </div>
          </div>
        </div>

        {/* upper versionn for main */}
        <div className="grid lg:grid-cols-2 grid-cols-1  mt-20 lg:mt-20 px-2 lg:px-10">
          <div className="flex flex-col gap-6 ">
            <div>
              <h1 className=" font-extralight mb-1">Fertilizer</h1>

              <Dropdown />
            </div>
            <div className="flex flex-col gap-6 ">
              <div className="flex gap-2 items-center">
                <FaCalendarAlt className="text-gray-400" />
                <h2>May 1 - May 16</h2>
              </div>
              <div className="flex gap-12">
                <div className="border-gradient h-40 w-40 rounded-full "></div>
                <div className=" self-center">
                  <div className="flex gap-3 items-center">
                    <div className="h-3 w-3 rounded-full bg-slate-600"></div>
                    <p>Rain</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="h-3 w-3 rounded-full bg-green-600"></div>
                    <p>Apply Ferilizer</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <p>no rain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 ">
            <div>
              <h1 className="mb-4 mt-4"> This week</h1>
              <div className=" flex justify-between ">
                <div className=" text-center  w-10 flex flex-col gap-3">
                  <p>Sun</p>
                  <div className="h-20 w-10 rounded-full  grid items-center bg-white">
                    2
                  </div>
                </div>
                <div className=" text-center  w-10 flex flex-col gap-3">
                  <p>Mon</p>
                  <div className="h-20 w-10 rounded-full  grid items-center bg-green-800">
                    3
                  </div>
                </div>
                <div className=" text-center  w-10 flex flex-col gap-3">
                  <p>Tue</p>
                  <div className="h-20 w-10 rounded-full  grid items-center bg-white">
                    4
                  </div>
                </div>
                <div className=" text-center  w-10 flex flex-col gap-3">
                  <p>Wed</p>
                  <div className="h-20 w-10 rounded-full  grid items-center bg-yellow-400">
                    5
                  </div>
                </div>
                <div className=" text-center bg--300 w-10 flex flex-col gap-3">
                  <p>Thur</p>
                  <div className="h-20 w-10 rounded-full bg-white grid items-center">
                    6
                  </div>
                </div>
                <div className=" text-center bg--300 w-10 flex flex-col gap-3">
                  <p>Fri</p>
                  <div className="h-20 w-10 rounded-full bg-white grid items-center">
                    7
                  </div>
                </div>
                <div className=" text-center bg--300 w-10 flex flex-col gap-3">
                  <p>Sat</p>
                  <div className="h-20 w-10 rounded-full  grid items-center bg-green-800">
                    8
                  </div>
                </div>
              </div>
              <div className="flex justify-between  pt-4">
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-3 rounded-full bg-slate-600"></div>
                  <p> No Rain</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-3 rounded-full bg-green-600"></div>
                  <p>Rain</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <p>Apply fertilizer</p>
                </div>
              </div>
            </div>
            <div className="">
              <p className="  font-light mb-1">Alerts</p>
              <div className="flex flex-col gap-1">
                <div className="h-12 w-full rounded-md bg-white flex items-center gap-3 px-1 py-1">
                  <div className="bg-green-200 h-[80%] w-10 grid place-content-center rounded-sm">
                    <AiOutlineBell className="text-xl" />
                  </div>
                  <p className=" tracking-normal leading-tight">
                    Ideal conditions for fertilizer application in the coming
                    days
                  </p>
                </div>
                <div className="h-12 w-full rounded-md bg-white flex items-center gap-3 px-1 py-1">
                  <div className="bg-green-200 h-[80%] w-10 grid place-content-center rounded-sm">
                    <AiOutlineBell className="text-xl" />
                  </div>
                  <p className=" tracking-normal leading-tight">
                    Ideal conditions for fertilizer application in the coming
                    days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <WeatherForcast />
        </div>
        <p className="text-2xl tracking-tighter px-2 lg:px-10">
          Past activities
        </p>

        {/* lower version for main */}
        <div className=" w-full bg-white  rounded-lg overflow-y-auto lg:max-h-[30vh] xl:max-h-[48vh] whitespace-nowrap  ">
          <table className="w-full text-sm">
            <thead className=" h-20  ">
              <tr className="text-gray-500 sticky border-b top-0  bg-white tracking-tighter  w-full">
                <th>Date</th>
                <th>Weather condition</th>
                <th>Crop perfomance</th>
                <th>Status</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className=" tracking-tighter h-12 text-center">
                  <td>{row.date}</td>
                  <td>{row.rate}</td>
                  <td>{row.condition}</td>
                  <td>{row.status}</td>
                  <td>{row.Note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      {/* second which has weather  */}
      <div className="hidden lg:block">
        <WeatherForcast />
      </div>
    </div>
  );
}

export default dashbord;

dashbord.getLayout = function PageLayout(page) {
  return (
    <div className="">
      <Layout>{page}</Layout>
    </div>
  );
};
