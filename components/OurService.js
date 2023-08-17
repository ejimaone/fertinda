import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/Logo.png";
import Vector from "/public/Frame.png";
import { AnimatePresence, motion } from "framer-motion";
import personalize from "../public/personalized.png";
import {
  AiFillCheckCircle,
  AiFillPushpin,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineCheck,
  AiOutlineMail,
} from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

function OurService() {
  const Ourservicies = [
    {
      imagePath: "personalized",
      title: " Personalized fertilizer recommendations",
      content:
        "Our data-driven approach uses up-to-date weather and soil data to provide personalized fertilizer recommendations that are tailored to your specific crops and location.",
    },
    {
      imagePath: "educational",
      title: " Educational Resources",
      content:
        "We offer a range of educational materials, including articles, videos, and webinars, to help you learn more about precision farming and optimize your fertilizer application.",
    },
    {
      imagePath: "management",
      title: " Task Management",
      content:
        " Users can create tasks related to their fertilizer application process, such as testing soil, applying fertilizer, or checking weather conditions",
    },
    {
      imagePath: "weather",
      title: "Weather Forcast",
      content:
        "The weather forecast feature will provide a location-based forecast for the user's specific farm location, using GPS or manual input.",
    },
    {
      imagePath: "nutrient",
      title: "Nutrient management calculator",
      content:
        "Our calculator helps you determine the ideal application rates for various nutrients, based on your soil type and crop selection.",
    },
    {
      imagePath: "expert",
      title: "Expert support",
      content:
        "Our team of agricultural experts is available to answer your questions and provide personalized advice on all aspects of precision farming.",
    },
  ];
  const [slideDirecction, setSlideDirection] = useState();
  const [currImage, setCurrImage] = useState(0);
  const [activePlan, setActivePlan] = useState(0);
  const images = Array(10).fill(1);
  const subscriptions = [
    {
      plan: "Basic",
      price: "Free",
      content:
        "Our basic subscription package includes personalized fertilizer recommendations,soil testing, and access to our weather forecast and task management features.",
    },
    {
      plan: "Premium",
      price: "$75 per month",
      content:
        "For farmers who require more advanced features, we offer a premium subscription package that includes additional analytics and reporting, as well as custom-tailored fertilization plans.",
    },
    {
      plan: "Pay-As-You-Go",
      price: "Based on need",
      content:
        "For farmers who prefer a pay-as-you-go option, we offer a range of services a la carte, including soil testing, personalized fertilizer recommendations,and weather forecasts. These services are priced individually based on your specific needs.",
    },
  ];
  const mapped = images.map((image, index) => {
    return (
      <motion.div
        // exit={{ x: -200, opacity: 0 }}

        animate={{ x: 0, opacity: 1 }}
        exit={slideDirecction}
        transition={{ duration: 0.3 }}
        key={index}
        className="bg-white h-full w-[80%]  lg:w-[80%]  rounded-2xl shadow-lg flex px-2 lg:px-4  flex-col py-2 lg:py-5 gap-2 lg:gap-3"
      >
        <div className=" flex gap-2">
          <div>
            <Image
              src={"/userimage.png"}
              alt="user-image"
              height={2}
              width={50}
              className="h-10 w-10 lg:w-16 lg:h-16"
            />
          </div>
          <div>
            <p className=" text-gradient"> Dolly Adams</p>
            <p> Abuja {index}</p>
          </div>
        </div>
        <div className=" self-center">stars</div>
        <p className="tracking-tighter leading-tight text-sm lg:text-xl">
          I&apos;ve been using Fertinder&apos;s personalized fertilizer
          recommendations for two seasons now, and my crop yields have never
          been better. The recommendations are tailored to my specific crops and
          location, and the data-driven approach really makes a difference.
        </p>
      </motion.div>
    );
  });

  let prev = () => {
    setSlideDirection({ x: -200, opacity: 0 });
    if (currImage == 0) {
      setCurrImage(mapped.length - 1);
    } else setCurrImage(currImage - 1);
  };
  let next = () => {
    setSlideDirection({ x: 200, opacity: 0 });
    if (currImage == mapped.length - 1) {
      setCurrImage(0);
    } else setCurrImage(currImage + 1);
  };
  const services = Ourservicies.map((service) => {
    return (
      <div
        className="h-40 lg:h-52 w-full  rounded-lg px-3 shadow hover:shadow-xl  hover:border mt-2 flex flex-col gap-[6%] py-2 justify-center"
        key={service.title}
      >
        <Image
          src={`/${service.imagePath}.png`}
          alt={`logo for ${service.title}`}
          height={28}
          width={28}
          className="lg:h-16 lg:w-16"
        />
        <p className="text-gradient">{service.title}</p>
        <p className=" leading-tight tracking-tight">{service.content}</p>
      </div>
    );
  });

  return (
    <>
      <div className="px-[5%] mt-10 w-full  mb-20">
        <div className="w-full  flex items-center justify-center flex-col gap-10 ">
          <div className="border-b-2 border-yellow-500 h-fit py-2  px-3 w-fit text-2xl  tracking-wide text-[#104911] ">
            OUR SERVICES
          </div>
          <p className="text-center tracking-tighter text-sm lg:text-3xl">
            At Fertinder, we offer a range of precisionfarming services to help
            you optimize your fertilizer application and achieve your farming
            goals. Our services include:
          </p>
        </div>
        <div className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4  lg:gap-10 ">
          {services}
        </div>
      </div>
      <div className=" h-[60vh]    w-full bg-[#EEFBEF] flex border-b-2 ">
        <div className="w-full  flex flex-col items-center gap-9 ">
          <div className="border-b-2 border-yellow-500 h-fit py-2  px-3 w-fit text-xl sm:text-2xl  tracking-wide text-[#104911] mt-16 ">
            WHAT OUR FARMERS ARE SAYING
          </div>
          <div className="  h-56 lg:h-64 w-screen  lg:w-[60%]  flex justify-between items-center px-2 sm:px-4 lg:px-6 ">
            <div className="h-5 w-5 bg-green-200 rounded-full flex items-center justify-center active:bg-green-800">
              <AiOutlineArrowLeft
                onClick={() => {
                  // setSlideDirection({
                  //   whileHover: { x: -200, opacity: 0 },
                  // });

                  prev();
                }}
              />
            </div>
            <AnimatePresence mode="wait">{mapped[currImage]}</AnimatePresence>
            <div className="h-5 w-5 bg-green-200 rounded-full flex items-center justify-center active:bg-green-800">
              <AiOutlineArrowRight
                onClick={() => {
                  // setSlideDirection({
                  //   whileHover: { x: -200, opacity: 0 },
                  // });

                  next();
                }}
              />
            </div>
          </div>
          <div className="flex gap-1 ">
            <div className="bg-white w-2 h-2 rounded-full border border-green-800"></div>
            <div className="bg-green-600 w-2 h-2 rounded-full border border-green-800"></div>
            <div className="bg-white w-2 h-2 rounded-full border border-green-800"></div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="w-full  flex items-center justify-center flex-col ">
          <div className="border-b-2 border-yellow-500 h-fit py-2  px-3 w-fit text-2xl  tracking-wide text-[#104911] mb-12 ">
            PRICING
          </div>
          <div className="text-center tracking-tighter text-sm lg:text-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  px-[5%] w-full gap-x-2">
            {subscriptions.map((subscription, index) => {
              const selectedPlan =
                activePlan === index
                  ? {
                      height: "scale-[100%]",
                      bg: "bg-green-800",
                      check: "text-white ",
                    }
                  : {
                      height: "scale-[90%]",
                      bg: "",
                      check: "text-transparent",
                    };
              return (
                <div
                  className={`w-full h-96 bg-white shadow-xl px-[5%]  rounded-br-2xl  rounded-tl-2xl border border-slate-100 flex flex-col justify-between pb-4 ${selectedPlan.height}`}
                  key={index}
                  onClick={() => {
                    setActivePlan(index);
                  }}
                >
                  <div className="flex justify-between  pt-3  ">
                    <h1>{subscription.plan}</h1>
                    <div
                      className={`h-7 w-7 rounded-full bg-green-300 flex items-center justify-center ${selectedPlan.bg}`}
                    >
                      <AiOutlineCheck
                        className={` h-5 ${selectedPlan.check}`}
                      />
                    </div>
                  </div>
                  <p className="text-left pt-4">{subscription.price}</p>
                  <h3 className="text-xl text-left tracking-tighter  pt-4">
                    {subscription.content}
                  </h3>
                  <button className="text-white rounded-lg bg-yellow-400 w-full h-14 ">
                    Upgrade plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <footer className=" mt-20 ">
          <div className=" bg-green-900 grid gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 px-[5%] pb-20 pt-10">
            <div className="h-full w-full text-white flex flex-col justify-center gap-5 ">
              <Image src={Logo} alt="logo for fertinder" />
              <p>
                Join our community today and start optimizing your fertilizer
                application with precision farming.
              </p>
              <h1>Follow us on:</h1>
              <div className="flex gap-1">
                <FaWhatsapp className="h-7 w-7" />
                <FaInstagram className="h-7 w-7" />
                <FaFacebook className="h-7 w-7" />
                <FaLinkedin className="h-7 w-7" />
              </div>
            </div>
            <div className="h-[70%]  flex flex-col gap-6 pt-2  sm:pl-10 text-white  ">
              <h1 className="text-4xl ">Contacts</h1>
              <div className="flex flex-col gap-2 pt-3">
                <div className="flex items-center gap-2">
                  <FaPhone />
                  <p>091 234 555</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineMail />
                  <p>info.fertinder@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillPushpin />
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div className="h-full w-full text-white pt-2 flex flex-col gap-6 ">
              <h1 className="text-4xl">Quick Links</h1>
              <div className="flex flex-col pt-3">
                <p>Terms and Conditions</p>
                <p>Privacy policy</p>
              </div>
            </div>
            <div className="h-full w-full flex flex-col gap-5 ">
              <h1 className="text-4xl text-white pt-2">Subscribe</h1>
              <div className="relative">
                <input
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-md outline-none text-2xl pl-3"
                />
                <Image
                  src={Vector}
                  alt="vector"
                  className=" absolute top-0 right-0  h-12 w-12 rounded-r-md"
                />
              </div>
            </div>
          </div>

          <div className=" w-full h-32  bg-green-900    top-1 flex flex-col justify-center items-center text-white leading-10">
            <div className=" w-[90%] h-1 border-gradient text-center mb-6  "></div>
            2023. All rights reserved
          </div>
        </footer>
      </div>
    </>
  );
}

export default OurService;
