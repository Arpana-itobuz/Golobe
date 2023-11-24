import React from "react";
import "./SelectInput.scss";

export default function SelectInput({ label }: { label: string }) {
  return (
    <div className="input-bx relative w-full ">
      <input
        autoComplete="off"
        className="border-[#79747E] rounded-md px-4 py-3 sm:text-md text-sm border w-full cursor-pointer form-input text-[hsl(0,0%,20%)]"
        id={label}
        required
      />
      <label
        className="absolute left-3 top-3 text-[#79747E] input-label sm:text-md text-sm"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
}
