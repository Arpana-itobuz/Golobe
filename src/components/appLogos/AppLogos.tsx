import React from "react";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";

export default function AppLogos() {
  const appLogos = [
    {
      src: `${facebook}`,
    },
    {
      src: `${google}`,
    },
    { src: `${apple}` },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      {appLogos.map((field, id) => {
        return (
          <div
            key={id}
            className="border p-3 rounded flex items-center justify-center border-[#8DD3BB]"
          >
            <img src={field.src} alt={`${field.src}`} />
          </div>
        );
      })}
    </div>
  );
}
