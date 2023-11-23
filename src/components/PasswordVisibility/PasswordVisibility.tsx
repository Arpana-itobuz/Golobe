import React from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

export default function PasswordVisibility({
  show,
  handlePasswordVisibility,
}: {
  show: boolean;
  handlePasswordVisibility: () => void;
}) {
  return (
    <>
      {!show ? (
        <IoEyeOffSharp
          className="absolute top-4 right-4"
          onClick={handlePasswordVisibility}
        />
      ) : (
        <IoEyeSharp
          className="absolute top-4 right-4"
          onClick={handlePasswordVisibility}
        />
      )}
    </>
  );
}
