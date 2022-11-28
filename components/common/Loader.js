import React from "react";
import { PuffLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-primary h-screen">
      <PuffLoader height={50} width={10} color="#221a55f2" />
    </div>
  );
};
