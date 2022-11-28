import React from "react";

const OurAchievements = () => {
  return (
    <section className="bg-white antialiased ">
      <div className="bg-sbanner bg-no-repeat bg-cover bg-fixed">
        <div className="bg-[#5e60eb2c] text-white backdrop-blur-none grid grid-cols-1 gap-y-3 px-10 py-28 justify-items-center content-center mx-auto">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 text-left gap-y-10 px-10 py-20 ">
            <div className="w-full lg:w-1/2 grid gap-y-5">
              <p className="text-2xl md:text-[2.5rem] px-3">
                Welcome to{" "}
                <span className="text-left text-[#F5921E] font-bold uppercase">
                  TVC VIETNAM
                </span>
              </p>
              <p className="text-left text-lg md:text-3xl px-3">
                Wood pellets can be used instead of charcoal, firewood, oil and
                gas in heating, cooking, boiler and power plants.
              </p>
              <p className="text-left text-lg px-3">
                An alternative use for wood pellets is animal bedding such as in
                horse stalls, and all of our pellets are excellent for this..
              </p>
              <a
                className="text-base lg:text-lg p-2 lg:p-3 m-2 lg:m-3 bg-[#F5921E] w-32 text-center rounded-lg"
                href="https://en.wikipedia.org/wiki/Pellet_fuel"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
