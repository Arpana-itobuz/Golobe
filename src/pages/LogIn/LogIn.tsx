import React from "react";
import logo from "../../assets/logo.svg";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../helperFunctions/apiCalls";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const LogIn = () => {
  const navigate = useNavigate();

  type FormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    password: string;
    confirmPassword: string;
  };

  const methods = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (formdetails) => {
    const { success } = await login(formdetails);

    if (success) {
      navigate("/");
      console.log(formdetails);
    }
  };

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
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 sm:m-10 m-5">
      <div className="flex flex-col justify-start md:me-10 sm:w-4/5 w-full">
        <div className="w-20 my-5">
          <img src={logo} alt="logo" />
        </div>
        <h2 className="text-3xl font-semibold">Login</h2>
        <p className="my-2 text-gray-400 mt-5">
          Login to access your Golobe account
        </p>
        <FormProvider {...methods}>
          <form action="" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mt-6">
              <InputWithLabel label="Email" type="email" name="email" />
            </div>

            <PasswordInput label="Password" name="password" />

            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-2 items-center ">
                <input type="checkbox" id="checkbox" />
                <p className="text-xs sm:text-md font-medium">Remember me</p>
              </div>
              <p className="text-xs sm:text-md text-[#FF8682]">
                Forgot Password ?
              </p>
            </div>
            <button
              className="bg-[#8DD3BB] p-2 rounded my-10 w-full"
              type="submit"
            >
              Login
            </button>
          </form>
        </FormProvider>

        <p className="text-center mt-3">
          Don&apos;t have an account?{" "}
          <Link to={"/sign-up"} className="text-[#FF8682]">
            Sign Up
          </Link>
        </p>
        <div className="flex sm:gap-5 gap-2 items-center mt-10">
          <hr className="sm:w-2/5 w-28 border-[#79747E]" />
          <p className="text-xs text-[#79747E]">Or Login with</p>
          <hr className="sm:w-2/5 w-32 border-[#79747E]" />
        </div>
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
      </div>
      <div className="md:flex justify-center hidden">
        <ImageSlider />
      </div>
    </div>
  );
};

export default LogIn;
