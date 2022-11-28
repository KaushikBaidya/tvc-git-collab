import React from "react";
import Image from "next/image";
import Link from "next/link";
import error from "../public/Error.gif";

const ErrorPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={error}
        />
        <div className="text-center lg:w-2/3 w-full">
          <div className="flex justify-center">
            <Link href="/">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <a>Go To Home </a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
