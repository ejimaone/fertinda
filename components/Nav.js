import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/Logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import AuthButtons from "./AuthButtons";
import About from "./About";
import Hero from "./Hero";
import OurService from "./OurService";

function Nav() {
  // Get the current URL

  // Define the new path name

  // Replace the current path name with the new one

  // Modify the URL without refreshing the page

  const [OpenMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("");

  const defaultMenu = OpenMenu ? "" : "hidden";

  const urlPathss = [
    {
      nav: "About Us",
      url: "about",
    },
    {
      nav: "Our Services",
      url: "services",
    },
    {
      nav: "Pricing",
      url: "#pricing",
    },
    {
      nav: "Contact Us",
      url: "contact",
    },
  ];

  const MenuHandler = () => {
    setOpenMenu(!OpenMenu);
  };
  return (
    <>
      <div className="shadow-lg bg-white h-14 flex justify-between px-[5%] lg:pl-[5%] lg:h-20  items-center mt-0 sticky top-0  z-50 ">
        <div>
          <Image
            src={Logo}
            alt="Fertinda Logo"
            height={100}
            width={100}
            className="lg:h-16 lg:w-28"
          />
        </div>

        <div
          className={` bg-green-400 pt-10 lg:pt-0 lg:bg-white lg:text-black flex flex-col h-screen  fixed  mt-14 top-0  w-[60%] ml-[-5%] text-white  text-left lg:mt-0 lg:static lg:w-[60%] z-50 lg:gap-0 lg:justify-center  lg:items-center lg:h-11  lg:flex lg:flex-row rounded ${defaultMenu}`}
        >
          {urlPathss.map((path) => {
            const activeLink =
              path.nav === active ? "bg-green-300  lg:bg-white  " : "";
            return (
              <div
                className={`h-16 lg:h-full grid items-center pl-10 hover:bg-gray-100 lg:hover:bg-transparent hover:text-black ${activeLink}`}
                key={path.nav}
                onClick={() => {
                  window.history.pushState(null, "", `/${"#" + path.url}`);

                  setActive(path.nav);
                  setOpenMenu(false);
                }}
              >
                <div
                  className={`lg:border-b-4  ${
                    activeLink ? "lg:border-yellow-500" : "lg:border-none"
                  } `}
                >
                  {path.nav}
                </div>
              </div>
            );
          })}

          <div className="block lg:hidden ">
            <AuthButtons />
          </div>
        </div>

        <div className="lg:h-full">
          <div className="block lg:hidden">
            {OpenMenu ? (
              <AiOutlineClose onClick={MenuHandler} />
            ) : (
              <FaBars onClick={MenuHandler} />
            )}
          </div>
          <div className="hidden lg:block">
            <AuthButtons />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
