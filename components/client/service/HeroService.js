import React from "react";
import Image from "next/image";
import Service from "../../../public/service/3.png";

const HeroService = () => {
  return (
    <main>
      <section className="w-full">
        <div className="hidden lg:block relative max-w-[1800px] mx-auto">
          <div className="bg-yellow-200 w-40 h-40 rounded-full absolute top-36 left-20 "></div>
          <div className="bg-green-200 w-28 h-28 rounded-full absolute top-28 right-24"></div>
          <div className="bg-red-200 w-16 h-16 rounded-full absolute top-36 left-96"></div>
          <div className="w-full absolute top-0"></div>
        </div>
        <div className="max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 pt-28 pb-5 lg:pb-28 mx-auto z-10">
          <div className="mx-5 lg:mx-20 text-center lg:text-left z-10">
            <h1 className="text-3xl lg:text-5xl text-[#211A53] py-5 ">
              Best Counseling Service for College Admission.
            </h1>
            <h2 className="text-[16px] text-justify lg:text-xl py-5">
              Our start-to-finish BSN program consulting is meant to supercharge
              your ability to get accepted at the countries most competitive
              nursing school programs. We tailor every aspect of your
              application to ensure the best quality right from your personal
              statement to your interview.
            </h2>
          </div>

          <div className="flex items-center justify-center mx-5">
            <div className="max-w-[500px]">
              <Image src={Service} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroService;
