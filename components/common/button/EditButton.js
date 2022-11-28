import React from "react";
import { BiEdit } from "react-icons/bi";
import { useRouter } from "next/router";

const EditButton = ({ path }) => {
  const router = useRouter();
  return (
    <button
      className="bg-sky-500 w-12 h-10 btn"
      onClick={() => router.push(path)}
    >
      <BiEdit size={24} />
    </button>
  );
};

export default EditButton;
