import React from "react";
import Image from "next/image";
import sunny from "../public/sunny.png";
import stormy from "../public/storm.png";
import DaysDropdown from "./DaysDropdown";
function WeatherForcast() {
  return (
    <div className="bg-white-500   ">
      <div className="flex flex-row w lg:flex-col justify-around  lg:h-full ">
        <div className="  w-full px-2 lg:px-4 flex flex-col gap-1 py-5">
          <p className="text-gradient">Current Weather</p>
          <p>4:20 pm (17/05/23)</p>
          <div className="flex gap-1 lg:gap-3 lg:mt-5 mt-2">
            <Image
              src={sunny}
              alt="sunny"
              width={42}
              height={42}
              className="w-20"
            />
            <div className="flex flex-col">
              <p>cloudy</p>
              <h1 className="text-4xl">25&deg;c</h1>
            </div>
          </div>
          <div className=" self-end flex flex-col gap-1 lg:gap-3 mt-2 text-sm lg:text-base lg:mt-5">
            <p>wind guts - 22km/h</p>
            <p>humidy - 94%</p>
            <p>precipitation - 49%</p>
          </div>
        </div>
        <div className=" h-1/2 w-full px-2 lg:px-4 flex flex-col gap-1 py-5">
          <p className="text-gradient">Weather forcast for the week</p>
          <div className="w-full lg:mt-3 lg:mb-3 mt-1 mb-1">
            <DaysDropdown />
          </div>
          <p>Monday (17/05/23)</p>
          <div className="flex gap-1 lg:gap-3 mt-2 lg:mt-5">
            <Image
              src={stormy}
              alt="storm"
              width={42}
              height={42}
              className="w-20"
            />

            <div className="flex flex-col">
              <p>cloudy</p>
              <h1 className="text-4xl">25&deg;c</h1>
            </div>
          </div>
          <div className=" self-end flex flex-col gap-1 lg:gap-3 mt-2 lg:mt-5">
            <p>wind guts - 22km/h</p>
            <p>humidy - 94%</p>
            <p>precipitation - 49%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForcast;
