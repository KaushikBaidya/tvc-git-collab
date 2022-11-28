import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const ServiceSuccess = () => {
  const data = [
    { id: "0", img: "/schools/Berkeley.png" },
    { id: "1", img: "/schools/Columbia.png" },
    { id: "2", img: "/schools/Duke.png" },
    { id: "3", img: "/schools/Harvard.png" },
    { id: "4", img: "/schools/NYU.png" },
    { id: "5", img: "/schools/Penn.png" },
    { id: "6", img: "/schools/Stanford.png" },
    { id: "7", img: "/schools/UCLA-1.png" },
    { id: "8", img: "/schools/USC.png" },
    { id: "9", img: "/schools/Yale.png" },
  ];
  return (
    <main>
      <section className="min-h-full py-14">
        <div className="h-full grid grid-cols-1 content-center">
          <div className="max-w-2xl mx-auto pb-5">
            <h1 className="text-[24px] text-[#211A56] font-semibold lg:text-[36px] text-center px-5 uppercase tracking-wider">
              “our success stories”
            </h1>
            <h3 className="text-lg text-[#EF1C26] text-center mx-5 md:mx-28">
              Rocket Ship students got admitted admission to these schools
            </h3>
          </div>
          <div className="py-2">
            <div className="max-w-[1300px] mx-auto px-10">
              <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  540: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="grid grid-cols-1 content-center justify-items-center w-full h-56 bg-cover gap-y-10">
                      <div className="px-5">
                        <Image src={item.img} width={110} height={75} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceSuccess;
