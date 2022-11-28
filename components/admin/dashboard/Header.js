import React from "react";
import { useGlobalContext } from "../../../context/context";
import MobileSidebar from "./MobileSidebar";

function Header() {
  const value = useGlobalContext();

  return (
    <div className="p-4 h-20 bg-purple-100 lg:ml-[200px]">
      <div className="flex justify-between">
        <div className="block lg:hidden">
          <MobileSidebar />
        </div>
        <div>
          <h2 className="text-xl">
            Hello, <span>{value?.user}</span>
          </h2>
          <p>welcome to the board.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
