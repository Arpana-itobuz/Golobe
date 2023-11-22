import React from "react";
import "./InputWithLabel.scss";

export default function InputWithLabel({
  label,
  type,
}: {
  label: string;
  type: string;
}) {
  return (
    <div className="input-bx relative w-full ">
      <input
        type={type}
        autoComplete="off"
        className="border-[#79747E] rounded-md px-4 py-3 sm:text-md text-sm border w-full cursor-pointer address-input text-[hsl(0,0%,20%)]"
        id="input-field"
        required
      />
      <label
        className="absolute left-3 top-3 text-[#79747E] input-label sm:text-md text-sm"
        htmlFor="input-field"
      >
        {label}
      </label>
    </div>
  );
}
