import React from "react";
import { FaStar } from "react-icons/fa";
import google from "../../assets/google.svg";
import review from "../../assets/review.svg";

export default function ReviewCard() {
  return (
    <div className="flex flex-col gap-2 p-5 shadow-[rgba(141,211,187,0.4)_20px_20px_0px,rgba(17,17,26,0.05)_0px_4px_16px,rgba(17,17,26,0.05)0px_8px_32px] rounded-lg">
      <p className="text-3xl font-semibold mb-5">
        “A real sense of community, nurtured”
      </p>
      <p className="w-90 h-12 text-ellipsis overflow-hidden text-overflow-[ellipsis ' [..]']">
        Really appreciate the help and support from the staff during these tough
        times. Shoutout to Katie for helping me always, even when I was out of
        the country. And always available when needed.
      </p>
      <button className="flex justify-end font-semibold">View more</button>
      <div className="flex text-yellow-400">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="font-semibold">Olga</p>
      <p>Weave Studios - Kai Tak</p>
      <div className="flex items-center gap-1">
        <img src={google} alt="google" />
        <p>Google</p>
      </div>
      <img src={review} alt="review" />
    </div>
  );
}
