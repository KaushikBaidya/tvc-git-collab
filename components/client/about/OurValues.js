import React from "react";

const OurValues = () => {
  return (
    <main>
      <section className="min-h-full pb-14">
        <div className="h-full grid grid-cols-1 content-center">
          <div className="max-w-2xl mx-auto pb-5">
            <h2 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
              Our Values
            </h2>
          </div>

          <div className="py-2">
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 mx-auto px-5 gap-5">
              <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg  ">
                <h2 className="text-center text-[#211A56] font-bold text-xl ">
                  Excellence
                </h2>
                <p className="text-justify p-4">
                  Excellence is a pursuit, not a destination. We strive to do
                  our best work and reach new heights, every day.
                </p>
              </div>
              <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg ">
                <h2 className="text-center text-[#211A56] font-bold text-xl">
                  Professionalism
                </h2>
                <p className="text-justify p-4">
                  We honor our commitments, value learning over having all the
                  answers, and hold ourselves accountable.
                </p>
              </div>
              <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg ">
                <h2 className="text-center text-[#211A56] font-bold text-xl">
                  Client centricity
                </h2>
                <p className="text-justify p-4">
                  We exist to help our clients. At the heart of our programs,
                  people, and technology is a client-centered ethos.
                </p>
              </div>
              <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg ">
                <h2 className="text-center text-[#211A56] font-bold text-xl">
                  Under-promise and over-deliver
                </h2>
                <p className="text-justify p-4">
                  We go the extra mile to deliver an exceptional and white-glove
                  service to every client.
                </p>
              </div>
              <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg">
                <h2 className="text-center text-[#211A56] font-bold text-xl">
                  Positivity
                </h2>
                <p className="text-justify p-4">
                  We’re relational and optimistic in our approach to guiding
                  people to where they should be.
                </p>
              </div>
              <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg">
                <h2 className="text-center text-[#211A56] font-bold text-xl">
                  Positivity
                </h2>
                <p className="text-justify p-4">
                  We’re relational and optimistic in our approach to guiding
                  people to where they should be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurValues;
