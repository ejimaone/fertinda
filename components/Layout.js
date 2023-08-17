import React from "react";
import dashbordimg from "../public/dashboard.png";
import tasklist from "../public/tasklist.png";
import historyimg from "../public/schedule.png";
import settingimg from "../public/settings.png";
import userimg from "../public/eevee.png";
import logoutimg from "../public/logout.png";

import Image from "next/image";

function Layout({ children }) {
  return (
    <div className=" grid grid-cols-[1.4fr,6fr] h-screen">
      <div className="bg-green-900   pt-10  flex-col justify-between lg:block hidden">
        <div className="text-2xl text-white flex flex-col  gap-8 pl-4 w-full ">
          <h1 className="text-3xl mb-10">My Farm 1</h1>
          <div className="flex items-center gap-2">
            <Image
              src={dashbordimg}
              alt="dashbord img"
              width={25}
              height={25}
            />
            Dashbord
          </div>
          <div className="flex items-center gap-2  ">
            <Image src={tasklist} alt="tasklist" width={25} height={25} />
            Task management
          </div>
          <div className="flex items-center gap-2 ">
            <Image src={historyimg} alt="history" width={25} height={25} />
            History
          </div>
          <div className="flex items-center gap-2">
            <Image src={settingimg} alt="settings" width={25} height={25} />
            Settings
          </div>
        </div>
        <div className="pb-10 text-white flex flex-col gap-2 pl-4 text-xl ">
          <div className="flex items-center h-10 gap-3 ">
            <div className="h-30 w-30 bg-black rounded-full">
              <Image src={userimg} alt="user" width={25} height={25} />
            </div>
            <p>Frank michel</p>
          </div>
          <div className="text-red-600  flex gap-3 items-center ">
            <Image src={logoutimg} alt="logout" width={25} height={25} />
            <p className="cursor-pointer">Logout </p>
          </div>
        </div>
      </div>
      <div className="  ">{children}</div>
    </div>
  );
}

export default Layout;
