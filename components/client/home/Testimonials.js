import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";
import { Loader } from "../../common/Loader";
import { Error } from "../../common/Error";
import { useGetData } from "../../../hooks/DataApi";

SwiperCore.use([Pagination, Autoplay]);

const Testimonials = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("testimonials", `/getAllTestimonials`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const NewData = list.data;

  return (
    <section>
      <div className="w-full grid grid-cols-1 justify-items-center content-center my-14">
        <h2 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
          Testimonials
        </h2>
        <FaQuoteRight className="text-3xl text-[#EF1C26] font-bold my-3" />
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
          >
            {NewData.map((item) => {
              return (
                <SwiperSlide key={item.testimonialId}>
                  <div className="w-[250px] md:w-[500px] lg:w-[1000px] flex flex-col items-center mx-auto my-5">
                    <div className="rounded-full overflow-hidden m-3">
                      <Image
                        src={`https://drive.google.com/thumbnail?id=${item.img}`}
                        width={100}
                        height={100}
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <h3 className="text-xl lg:text-3xl text-gray-800 font-bold my-3 mx-5">
                      {item.title}
                    </h3>
                    <div className="w-20 h-1 bg-red-500"></div>
                    <br />
                    <p className="text-base lg:text-xl text-gray-700 text-center my-3 mx-2">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
