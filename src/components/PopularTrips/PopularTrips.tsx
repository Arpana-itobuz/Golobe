import React from "react";

export default function PopularTrips({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div className="shadow-[rgba(17,17,26,0.05)_0px_4px_16px,rgba(17,17,26,0.05)0px_8px_32px] flex items-center gap-5 p-5 rounded-lg">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-[#1129] text-lg">{name}</p>
        <p>Flights . Hotels . Resorts</p>
      </div>
    </div>
  );
}
