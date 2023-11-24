import React, { useContext, useEffect } from "react";
import { FaPlane } from "react-icons/fa6";
import { MdKingBed } from "react-icons/md";
import logo from "../../assets/logoDashboard.svg";
import { FaPaperPlane, FaHeart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import SelectInput from "../../components/SelectInput/SelectInput";
import PopularTrips from "../../components/PopularTrips/PopularTrips";
import istanbul from "../../assets/istanbul.png";
import sydney from "../../assets/sydney.png";
import bazu from "../../assets/baku.png";
import male from "../../assets/male.png";
import paris from "../../assets/paris.png";
import newYork from "../../assets/newyork.png";
import london from "../../assets/london.png";
import tokyo from "../../assets/tokyo.png";
import dubai from "../../assets/dubai.png";
import dp from "../../assets/dp.svg";
import { getProfile } from "../../helperFunctions/apiCalls";
import { GlobalContext } from "../../context/GlobalContext";
import { Token } from "../../interfaces/enums";

export default function Dashboard() {
  const popularTrips = [
    {
      image: istanbul,
      name: "Istanbul , Turkey",
    },
    {
      image: sydney,
      name: "Sydney , Australia",
    },
    {
      image: bazu,
      name: "Bazu , Azerbaijan",
    },
    {
      image: male,
      name: "Male , Maldives",
    },
    {
      image: paris,
      name: "Paris , France",
    },
    {
      image: newYork,
      name: "New York , Us",
    },
    {
      image: london,
      name: "London , UK",
    },
    {
      image: tokyo,
      name: "Tokyo , Japan",
    },
    {
      image: dubai,
      name: "Dubai , UAE",
    },
  ];
  const { userDetails, setUserDetails } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails && localStorage.getItem(Token.ACCESS_TOKEN)) {
      getProfile().then((res) => {
        if (res.error) {
          localStorage.clear();
          navigate("/sign-up");
        }
        if (res.success) {
          setUserDetails(res.data);
          console.log(userDetails);
        }
      });
    }
  }, [setUserDetails]);

  return (
    <div className="flex flex-col items-center m-10">
      <div className="bg-[url('/Users/it052312/Desktop/Golobe/app/src/assets/dashboardBg.png')] bg-no-repeat bg-center flex flex-col items-center w-full bg-cover rounded-xl">
        <div className="flex justify-between items-center w-full py-5 px-10">
          <div className="flex justify-between items-center gap-3">
            <div className="flex text-white items-center gap-1">
              <FaPlane className="text-xl" />
              <p>Find Flight</p>
            </div>
            <div className="flex text-white items-center gap-1">
              <MdKingBed className="text-2xl" />
              <p>Find Stays</p>
            </div>
          </div>
          <img src={logo} alt="logo" />
          <div className="flex gap-2 text-white">
            {!localStorage.getItem("accessToken") ? (
              <>
                <Link
                  to={"/log-in"}
                  className="hover:bg-white hover:text-black py-2 px-5 rounded-xl font-medium"
                >
                  Login
                </Link>
                <Link
                  className="hover:bg-white hover:text-black py-2 px-5 rounded-xl font-medium"
                  to={"/sign-up"}
                >
                  Sign up
                </Link>
              </>
            ) : (
              <div className="flex items-center">
                <Link className="py-2 px-5 font-medium flex text-white items-center gap-2">
                  <FaHeart />
                  <p>Favourites</p>
                </Link>
                <hr className="w-4 rotate-90" />
                <div className="py-2 px-5 font-medium flex text-white items-center gap-2">
                  <img src={dp} alt="dp" />
                  {/* <p>{userDetails.firstName}</p> */}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-white my-20">
          <p className="text-4xl font-bold pt-10">Helping Others</p>
          <p className="text-8xl font-semibold pt-10">LIVE & TRAVEL</p>
          <p className="text-xl py-10">Special offers to suit your plan</p>
        </div>
      </div>
      <div className="flex-col flex gap-3 w-[90%] shadow-lg p-5 bg-white z-100 my-[-4%] rounded-xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 hover:border-b-2 hover:border-[#8DD3BB] border-b-2 border-white pb-1">
            <FaPlane className="text-xl" />
            <p>Find Flight</p>
          </div>
          <hr className="w-6 rotate-90" />
          <div className="flex items-center gap-1 hover:border-b-2 hover:border-[#8DD3BB] border-b-2 border-white pb-1">
            <MdKingBed className="text-2xl" />
            <p>Find Stays</p>
          </div>
        </div>
        <div className="gap-3 grid grid-cols-4 p-3 mt-3">
          <SelectInput label="From - To" />
          <SelectInput label="Trip" />
          <SelectInput label="Depart - Return" />
          <SelectInput label="Passenger - Class" />
        </div>
        <div className="flex justify-end gap-2 p-3">
          <div className="p-2 flex items-center gap-2">
            <IoMdAdd />
            <p className="text-sm">Add Promo Code</p>
          </div>
          <div className="bg-[#8DD3BB] p-2 rounded-lg flex items-center gap-2">
            <FaPaperPlane />
            <p className="text-sm">Show Flights</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-40 w-[90%] py-3 items-center">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-semibold">Plan your perfect trip</p>
          <p className="text-[#1128]">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <button className="border-[#8DD3BB] border p-2 rounded-lg">
          See more places
        </button>
      </div>
      <div className="w-[90%] grid grid-cols-3 grid-rows-3 gap-20 mt-10">
        {popularTrips.map((value, index) => {
          return (
            <div key={index}>
              <PopularTrips name={value.name} image={value.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
