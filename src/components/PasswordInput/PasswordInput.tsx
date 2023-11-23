import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import PasswordVisibility from "../PasswordVisibility/PasswordVisibility";

export default function PasswordInput({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const [show, setShow] = useState(false);
  const handlePasswordVisibility = () => {
    setShow(!show);
  };
  return (
    <div className="mt-5 relative">
      <InputWithLabel
        label={label}
        type={show ? "text" : "password"}
        name={name}
      />
      <PasswordVisibility
        show={show}
        handlePasswordVisibility={handlePasswordVisibility}
      />
    </div>
  );
}
