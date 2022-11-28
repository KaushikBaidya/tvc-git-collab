import React from "react";
import Image from "next/image";
import teacher from "../../../public/service/1.png";

const HowWeWork = () => {
  return (
    <main>
      <section className="w-full">
        <div className="max-w-2xl mx-auto pb-5">
          <h2 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
            How it works
          </h2>
        </div>
        <div className="max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 h-full pb-5 mx-auto z-10">
          <div className="max-w-[500px] mx-auto">
            <Image src={teacher} alt="" />
          </div>
          <div className="flex items-center justify-center mx-5">
            <div className="md:w-2/3 md:pr-2 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1E1A50] inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                    Your career coach will get to know you through a strengths
                    and weaknesses evaluation and a personality assessment.
                    Next, you will work with your career coach to explore
                    industries and identify companies and cultures that are best
                    fit for you.
                  </h2>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1E1A50] inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                    Your career coach will help you set goals and identify ideal
                    positions, locations, and compensation packages that match
                    your individual skill set and professional expertise.
                  </h2>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1E1A50] inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">
                    We create resumes and cover letters, customizing multiple
                    versions for each industry you target.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowWeWork;
