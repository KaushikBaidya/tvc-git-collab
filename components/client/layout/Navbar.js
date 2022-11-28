import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../../../public/logo.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="max-w-screen-3xl mx-auto">
      <div className="fixed w-full xl:max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between z-50 py-2 bg-[#ffffff] backdrop-blur-2xl text-black">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <div className="w-20 mx-5 cursor-pointer ">
              <Image
                src={logoPic}
                width={60}
                height={60}
                objectFit="cover"
                alt=""
              />
            </div>
          </Link>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars size={25} className="mr-3" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center " +
            (navbarOpen ? "flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="px-4 border-transparent border-b-4 hover:border-[#EF1C24] py-2 font-medium uppercase">
              <Link href="/">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>HOME</a>
              </Link>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#EF1C24] py-2 font-medium uppercase">
              <Link href="/aboutus">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>About Us</a>
              </Link>
            </li>
            {/* <li className="px-4 border-transparent border-b-4 hover:border-[#EF1C24] py-2 font-medium uppercase">
              <Link href="/ourproducts">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>Products</a>
              </Link>
            </li> */}
            <li className="px-4 border-transparent border-b-4 py-2 text-md ">
              <div className="group inline-block">
                <button
                  aria-haspopup="true"
                  aria-controls="menu"
                  className="outline-none focus:outline-none bg-white rounded-sm flex items-center w-32"
                >
                  <span className="pr-1 font-medium uppercase flex-1">
                    Products
                  </span>
                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul id="menu" aria-hidden="true" className="dropdown">
                  <Link href="/allProducts">
                    <li className="dropdown-menu ">All Products</li>
                  </Link>
                  <Link href="/allProducts">
                    <li className="dropdown-menu">Biomass</li>
                  </Link>
                  <Link href="/allProducts">
                    <li className="dropdown-menu">Mineral</li>
                  </Link>
                  <Link href="/allProducts">
                    <li className="dropdown-menu">Self-Biological Products</li>
                  </Link>
                  <Link href="/">
                    <li className="dropdown-menu">
                      Spoon/Plate/Chopsticks/Bowl
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#EF1C24] py-2 font-medium uppercase">
              <Link href="/contact">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
