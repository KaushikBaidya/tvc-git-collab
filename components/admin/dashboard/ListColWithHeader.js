import React from "react";

export const ListHeader = ({ label, className = "flex justify-start" }) => {
  return (
    <div className={className}>
      <span className="font-semibold text-center">{label}</span>
    </div>
  );
};

export const ListCol = ({ label, value, className = "" }) => {
  return (
    <div className={className}>
      <span className="inline-block md:hidden font-semibold">{label}</span>
      <span className="break-words">{value}</span>
    </div>
  );
};

export const ListColDetails = ({ label, value, className = "" }) => {
  return (
    <div className={className}>
      <span className="inline-block font-semibold">{label}</span>
      <span className="break-words">{value}</span>
    </div>
  );
};