import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Loader } from "../components/common/Loader";
import { Error } from "../components/common/Error";
import { useGetData } from "../hooks/DataApi";

const AllBlogs = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("blogs", "/getAllBlogs");

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data;
  return (
    <main>
      <section className="pt-28">
        <Head>
          <title>Our Blogs </title>
        </Head>
        <div className="w-full grid grid-cols-1 justify-items-center content-center mb-20">
          <div className="flex flex-col items-center mx-auto mb-5">
            <h2 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
              News & Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-5 p-5">
            {data.map((item) => {
              return (
                <div
                  key={item.blogId}
                  className="w-full bg-purple-100 flex flex-col justify-between items-center rounded-lg overflow-hidden h-full hover:drop-shadow-lg cursor-pointer "
                >
                  <Link href={`/blogs/${item.blogId}`}>
                    <div>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={`https://drive.google.com/thumbnail?id=${item.img}`}
                          alt="PHOTO"
                          height={210}
                          width={359}
                          objectFit="cover"
                        />
                      </div>
                      <div className="bg-purple-100 flex flex-col items-start ">
                        <p className="bg-[#EF1C26] text-sm lg:text-xl text-center w-36 p-3 mt-5 ml-5 text-white">
                          {item.date?.split("T")[0]}
                        </p>
                        <h2 className="text-[#211A56] font-bold text-base lg:text-2xl p-5">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllBlogs;
