import React from "react";
import Biomass from "./Biomass";
import Mineral from "./Mineral";

const OurProducts = () => {
  return (
    <section className="h-full mt-14">
      <div className="grid grid-cols-1 content-center">
        <div className="max-w-2xl mx-auto py-5">
          <h2 className="text-[24px] text-[#F5921E] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
            Our Products
          </h2>
        </div>
        <div className="py-2">
          <Biomass />
          <Mineral />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
