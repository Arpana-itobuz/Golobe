import React from "react";
import footerLogo from "../../assets/footer.svg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from "../../assets/logoBlack.svg";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-40 bg-[#8DD3BB]">
      <div className="bg-[#CDEAE1] flex w-[90%] justify-between p-5 rounded-lg mt-[-5%]">
        <div className="flex gap-3 flex-col">
          <p className="text-5xl font-semibold">
            Subscribe <br /> Newsletter
          </p>
          <p>The Travel</p>
          <p>
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3"
            />
            <button className="bg-[#112211] text-white p-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
        <img src={footerLogo} />
      </div>

      <div className="w-[90%] grid grid-cols-6 gap-10 m-10">
        <div className="flex flex-col gap-3 px-4">
          <img src={logo} alt="logo" />
          <div className="flex text-xl justify-between">
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <RiInstagramFill />
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Our Destinations</p>
          <p>Canada</p>
          <p>Alaska</p>
          <p>France</p>
          <p>Iceland</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Our Activities</p>
          <p>Northern Lights</p>
          <p>Cruising & sailing</p>
          <p>Multi-activities</p>
          <p>Kayaing</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Travel Blogs</p>
          <p>Bali Travel Guide</p>
          <p>Sri Lanka Travel Guide</p>
          <p>Peru Travel Guide</p>
          <p>Bali Travel Guide</p>
        </div>
        <div>
          <p className="text-lg font-semibold">About Us</p>
          <p>Our Story</p>
          <p>Work with us</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Contact Us</p>
          <p>Our Story</p>
          <p>Work with us</p>
        </div>
      </div>
    </div>
  );
}
