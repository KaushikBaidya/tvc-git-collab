import React from "react";
import BuyForm from "../../common/BuyForm";

const ContactUs = () => {
  return (
    <section id="seeContact" className="border-b py-20 h-full">
      <div className="text-center font-semibold text-4xl text-[#36B34B]">
        Get In Touch With Us
      </div>
      <div className="container max-w-4xl mx-auto overflow-hidden flex flex-col px-5">
        <BuyForm />
      </div>
    </section>
  );
};

export default ContactUs;
