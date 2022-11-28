import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "../../common/Loader";
import { useGetData } from "../../../hooks/DataApi";
import { FaRocket } from "react-icons/fa";

const BlogsSection = () => {
  const { data: list, isLoading } = useGetData("blogs", `/getAllBlogs`);

  if (isLoading) return <Loader />;

  const NewData = list.data.slice(0, 3);
  return (
    <main>
      <section>
        <div className="w-full grid grid-cols-1 justify-items-center content-center mb-20">
          <div className="flex flex-col items-center mx-auto mb-5">
            <FaRocket className="text-4xl text-[#EF1C26] font-bold mb-3" />
            <h3 className="text-lg text-[#211A56] text-center mx-28">
              From The Blog Post
            </h3>
            <h2 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
              News & Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-5 p-5">
            {NewData?.map((item) => {
              return (
                <div
                  key={item.blogId}
                  className="w-full bg-purple-100 flex flex-col justify-between items-center rounded-lg overflow-hidden h-full hover:drop-shadow-lg cursor-pointer "
                >
                  <Link href={`/blogs/${item.blogId}`}>
                    <div>
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          // src={`https://lh3.googleusercontent.com/d/${file}=s220?authuser=0`}
                          src={`https://drive.google.com/thumbnail?id=${item.img}`}
                          // src={`https://drive.google.com/uc?export=view&id=${item.img}`}
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

export default BlogsSection;
