import React from "react";
import Image from "next/image";
import teacher from "../../../public/student1.jpg";
import essay from "../../../public/student2.jpg";
import finance from "../../../public/student3.jpg";

const OurTeam = () => {
  return (
    <main>
      <section className="min-h-full pb-14">
        <div className="h-full grid grid-cols-1 content-center">
          <div className="max-w-2xl mx-auto pb-5">
            <h2 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
              Meet Our Leadership Team
            </h2>
          </div>
          <div className="py-2">
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 mx-auto px-5 gap-5">
              <div className=" flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between ">
                <div className="rounded-full overflow-hidden m-3">
                  <Image src={teacher} width={200} height={200} alt="" />
                </div>
                <h2 className="text-center text-[#211A56] font-bold text-xl p-5">
                  Daniel E. Santos
                </h2>
                <p>Chief Executive Officer</p>
              </div>
              <div className=" flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between ">
                <div className="rounded-full overflow-hidden m-3">
                  <Image src={essay} width={200} height={200} alt="" />
                </div>
                <h2 className="text-center text-[#211A56] font-bold text-xl p-3">
                  Sarah Skillen, Ph.D.
                </h2>
                <p>Program Director</p>
              </div>
              <div className=" flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between">
                <div className="rounded-full overflow-hidden m-3">
                  <Image src={finance} width={200} height={200} alt="" />
                </div>
                <h2 className="text-center text-[#211A56] font-bold text-xl p-5">
                  Kyle Stein
                </h2>
                <p>Client Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurTeam;
