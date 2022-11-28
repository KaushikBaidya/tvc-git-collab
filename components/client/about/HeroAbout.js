import React from "react";
import Image from "next/image";
import Service from "../../../public/service/3.png";

const HeroAbout = () => {
  return (
    <section className="w-full">
      <div className="hidden lg:block relative max-w-[1800px] mx-auto">
        <div className="bg-yellow-200 w-40 h-40 rounded-full absolute top-36 left-20 "></div>
        <div className="bg-green-200 w-28 h-28 rounded-full absolute top-28 right-24"></div>
        <div className="bg-red-200 w-16 h-16 rounded-full absolute top-36 left-96"></div>
      </div>
      <div className="max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 pt-28 pb-5 lg:pb-28 mx-auto z-10">
        <div className="flex items-center justify-center mx-5">
          <div className="max-w-[500px]">
            <Image src={Service} alt="" />
          </div>
        </div>

        <div className="mx-5 lg:mx-20 text-center lg:text-left z-10">
          <h1 className="text-3xl lg:text-5xl text-[#211A53] py-5 ">
            We are a premier college admissions and career coaching company.
          </h1>
          <h2 className="text-[16px] text-justify lg:text-xl pr-5">
            Our mission is to equip students with the resources to get admitted
            to their dream school and provide career professionals with the
            confidence and skills to land the job.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
