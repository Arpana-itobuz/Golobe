import React, { InputHTMLAttributes } from "react";
import "./InputWithLabel.scss";
import { useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputWithLabel({ label, ...inputProps }: Props) {
  const { register } = useFormContext();

  return (
    <div className="input-bx relative w-full ">
      <input
        autoComplete="off"
        className="border-[#79747E] rounded-md px-4 py-3 sm:text-md text-sm border w-full cursor-pointer form-input text-[hsl(0,0%,20%)]"
        id={inputProps.name}
        required
        {...inputProps}
        {...register(inputProps.name as string)}
      />
      <label
        className="absolute left-3 top-3 text-[#79747E] input-label sm:text-md text-sm"
        htmlFor={inputProps.name}
      >
        {label}
      </label>
    </div>
  );
}
