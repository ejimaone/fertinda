import Image from "next/image";
import React from "react";
import Aboutus from "../public/Aboutus.png";
function About() {
  return (
    <div className=" px-[5%]  h-[98.7vh] lg:h-[89.7vh] mt-12 border-b-2 ">
      <div className="w-full  flex justify-center">
        <div className="border-b-2 border-yellow-500 h-fit py-2 px-3 w-fit text-2xl  tracking-wide text-[#104911]">
          ABOUT US
        </div>
      </div>
      <div className="flex h-[80%] gap-2 lg:gap-10 mt-12 flex-col lg:flex-row ">
        <div className="w-full  h-full -gap-4 flex flex-col   2xl:pt-[3%] lg:pt-[8%] ">
          <text className=" font-bold text-2xl tracking-tighter lg:tracking-normal 2xl:leading-loose lg:text-3xl 2xl:text-4xl">
            Revolutionizing Farming with Precision Solutions: Our Story and
            Mission
          </text>
          <br />
          <text className="text-sm tracking-tighter lg:tracking-wider 2xl:text-xl 2xl:leading-10">
            At Fertinder, we&apos;re dedicated to helping farmers optimize their
            fertilizer application and grow more successful crops. Our team of
            agricultural experts and datascientists has developed a data-driven
            approach to fertilization that leverages up-to-date weather and soil
            data to provide personalized recommendations for each farmer&apos;s
            unique needs.We understand that fertilizer application is a complex
            and nuanced process, and that farmers need reliable, accurate
            guidance to get the best results from their crops. That&apos;s why
            we&apos;re committed to using the latest technology and expertise to
            make precision farming accessible and intuitive for everyone.
          </text>
        </div>
        <div className="w-full h-full  flex items-center ">
          <Image
            src={Aboutus}
            alt="A man and a Woman trimming an overgrown leaf "
            className=" rounded-tl-2xl rounded-br-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
