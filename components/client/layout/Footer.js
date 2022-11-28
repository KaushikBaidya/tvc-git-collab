import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";
import logoPic from "../../../public/logo.png";
// import { useTranslation } from "react-i18next";

const Footer = () => {
  // const { t } = useTranslation(["common"]);
  return (
    <>
      <div className="w-full grid grid-cols-1 justify-items-center py-10 bg-white">
        <div className="flex justify-center items-center">
          <div className="w-20 mx-5 cursor-pointer ">
            <Image
              src={logoPic}
              width={60}
              height={60}
              objectFit="cover"
              alt=""
            />
          </div>
        </div>

        <div className="max-w-[1500px] grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-2 py-2 mt-2">
          <div className="pl-10">
            <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-left px-5 flex items-center gap-2 my-3">
              <span className="text-[20px] font-bold text-[#36B34B]">
                TVC VIET NAM INTERNATIONAL IMPORT EXPORT COMPANY LIMITED
              </span>
            </p>
            <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-left px-5 flex items-center gap-2 my-3">
              <FiMapPin size={36} />
              <span className="font-normal text-gray-700">
                No. 7/1 Pham Minh Duc street, May To wd, Ngo Quyen dist, Hai
                Phong city, Viet Nam
              </span>
            </p>
            <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-center px-5 flex items-center gap-2 my-3">
              <FiMail />
              <span className="text-lg text-gray-700">sale@tvcvietnam.com</span>
            </p>
            <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-center px-5 flex items-center gap-2 my-3">
              <FiPhoneCall />
              <span className="text-lg text-gray-700">+84 899775068</span>
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 font-semibold font-sans text-center px-5 mb-3">
              Quick Links
            </p>
            <div className="text-[#36B34B] grid grid-cols-1 justify-items-center">
              <p>
                <a href="#seeHero">HOME</a>
              </p>
              <p>
                <a href="#seeAbout">ABOUT</a>
              </p>
              <p>
                <a href="#seeProduct">PRODUCTS</a>
              </p>
              <p>
                <a href="#seeContact">CONTACT US</a>
              </p>
              <p>
                <Link href="/login">Login</Link>
              </p>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 justify-items-center">
              <h1 className="text-[12px] lg:text-[16px] text-gray-700 font-semibold sm:mt-2 text-center px-5 uppercase">
                STAY CONNECTED
              </h1>
              <hr className="h-[2px] w-[100px] bg-[#F5921E]" />
            </div>
            <div className="w-full flex flex-wrap gap-4 justify-center py-3">
              <div className="w-10 h-10 flex bg-[#36B34B] justify-center items-center drop-shadow-xl rounded-lg text-white hover:bg-[#F5921E]">
                <a href="#f">
                  <FiFacebook size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#36B34B] justify-center items-center drop-shadow-xl rounded-lg text-white hover:bg-[#F5921E]">
                <a href="#f">
                  <FiTwitter size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#36B34B] justify-center items-center drop-shadow-xl rounded-lg text-white hover:bg-[#F5921E]">
                <a href="#f">
                  <FiYoutube size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#36B34B] justify-center items-center drop-shadow-xl rounded-lg text-white hover:bg-[#F5921E]">
                <a href="#f">
                  <FiLinkedin size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm pb-16 md:pb-0 bg-[#36B34B] py-1">
        <p className="text-uppercase font-semibold text-gray-200">
          ©{new Date().getFullYear()}
          <span className="ml-2">TVC Vietnam All rights reserved</span>
        </p>
        <p className="text-uppercase text-gray-200">
          Developed By
          <a
            href="https://chimbukit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold ml-2"
          >
            <span className="">Chimbuk IT</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
