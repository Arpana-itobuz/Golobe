import React from "react";
import hotelPhoto from "../../assets/hotel.png";
import logo from "../../assets/logo.svg";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";

export default function SignUp() {
  const fieldValues = [
    {
      label: "First Name",
      type: "text",
    },
    {
      label: "Last Name",
      type: "text",
    },
    {
      label: "Email",
      type: "email",
    },
    {
      label: "Phone Number",
      type: "number",
    },
  ];

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
    <div className="grid grid-cols-2 gap-5 m-10">
      <div className="flex justify-center">
        <img src={hotelPhoto} alt="hotelPhoto" className="w-90" />
      </div>

      <div className="flex flex-col justify-start me-10">
        <div className="w-20 my-5">
          <img src={logo} alt="logo" />
        </div>
        <h2 className="text-3xl font-semibold">Sign Up</h2>
        <p className="my-2 text-gray-400">
          Lets get you all set up so you can access your personal account.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-10">
          {fieldValues.map((fields, id) => {
            return (
              <div key={id}>
                <InputWithLabel label={fields.label} type={fields.type} />
              </div>
            );
          })}
        </div>

        <div className="mt-5">
          <InputWithLabel label="Password" type="password" />
        </div>
        <div className="mt-5">
          <InputWithLabel label="Confirm Password" type="password" />
        </div>
        <div className="flex gap-2 items-center mt-10">
          <input type="checkbox" />
          <p>
            I agree to all the <span className="text-[#FF8682]">Terms</span> and{" "}
            <span className="text-[#FF8682]">Privacy Policies</span>
          </p>
        </div>
        <button className="bg-[#8DD3BB] p-2 rounded mt-10">
          Create Account
        </button>
        <p className="text-center mt-3">
          Already have an account? <span className="text-[#FF8682]">Login</span>
        </p>
        <div className="flex gap-5 items-center mt-10">
          <hr className="w-2/5 border-[#79747E]" />
          <p className="text-sm text-[#79747E]">Or Sign up with</p>
          <hr className="w-2/5 border-[#79747E]" />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {appLogos.map((src, id) => {
            return (
              <div
                key={id}
                className="border p-3 rounded flex items-center justify-center border-[#8DD3BB]"
              >
                <img src={src.src} alt="logo" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
