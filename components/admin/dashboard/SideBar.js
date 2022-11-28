import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillAppstore,
  AiFillDashboard,
  AiFillFileAdd,
  AiOutlineLogin,
} from "react-icons/ai";
import { useGlobalContext } from "../../../context/context";

import logoPic from "../../../public/logo.png";

function SideBar({ action }) {
  const value = useGlobalContext();

  return (
    <div className="fixed w-[200px] h-full bg-gray-100 drop-shadow-md">
      <div className="flex justify-center p-3">
        <Image src={logoPic} width={80} height={80} objectFit="cover" alt="" />
      </div>
      <div className="p-3 z-[1] relative ">
        <div className="h-full overflow-y-auto">
          <ul className="mt-5  text-left pl-3 flex flex-col gap-4 text-lg font-semibold ">
            <li onClick={() => action()} className="flex items-center gap-1">
              <AiFillDashboard className="text-red-500 mb-1" />
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiFillFileAdd className="text-red-500 mb-1" />
              <Link href="/dashboard/products">
                <a>Products</a>
              </Link>
            </li>

            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiFillAppstore className="text-red-500 mb-1" />
              <Link href="/dashboard/categories">
                <a>Categories</a>
              </Link>
            </li>

            <li className="flex items-center gap-1 ">
              <AiOutlineLogin className="text-red-500 mb-1" />
              <button onClick={value.signOut}>
                <Link href="/">
                  <a>Sign Out</a>
                </Link>
              </button>
            </li>
          </ul>
        </div>

        <div className="fixed bottom-1">
          <p className="text-uppercase text-[#182b31] text-sm">
            Developed By
            <a
              href="https://chimbukit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold ml-2"
            >
              <span className="">Chimbuk IT</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
