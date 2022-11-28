import React from "react";
import Image from "next/image";
import Fire from "../../../public/burning.jpg";
import Wood from "../../../public/woodpellets.jpg";

const AboutUs = () => {
  return (
    <section
      id="seeAbout"
      className="grid grid-cols-1 px-6 justify-items-center pt-20 h-full"
    >
      <h1 className="text-2xl lg:text-5xl font-semibold mb-5">
        <span className="text-[#36B34B] uppercase">ABOUT </span>
        <span className="text-[#F5921E] uppercase">US</span>
      </h1>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center md:gap-5 my-5">
        <div className="h-56 rounded-lg overflow-hidden mx-5">
          <Image src={Fire} objectFit="contain" alt="" />
        </div>
        <div className="col-span-2 flex flex-col text-lg lg:text-2xl lg:pr-10">
          <p className="text-justify my-2">
            TVC VIETNAM is a leading company in the field of manufacturing and
            exporting minerals (quick lime, burnt dolomite, hydrated lime, white
            limestone, clay/kaolin), biomass (wood pellets, wooden pallets, chip
            block/ wooden chip block pallet foot, charcoal, wood chip…){" "}
          </p>
          <p className="text-justify mb-2">
            And self-biological products (straws, box from sugar-cane, wooden
            spoon/plate/chopsticks/bowl…...), our plant is invested in ha nam,
            ninh binh, bac ninh and nghe an province.
          </p>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center md:gap-5 my-5">
        <div className="col-span-2 flex flex-col text-lg lg:text-2xl lg:pl-10">
          <p className="text-justify my-2">
            We have lot of experience in exporting products to other countries
            on the world as taiwan, china, bangladesh, india, philippines,
            chile, mauritius, korea, japan, indonesia, ghana…... with the motto
            “prestige and quality always put on the top”. every single day, we
            are constantly improving quality of proucts, give customers best
            service as well as price.
          </p>
          <p className="text-justify mb-2">
            We believe that the growth of our business is dependent on the
            support of the people around us: partners, employees, communities,
            and you. together, we are growing our tomorrow.
          </p>
        </div>
        <div className="h-56 rounded-lg overflow-hidden mx-5">
          <Image src={Wood} objectFit="contain" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
