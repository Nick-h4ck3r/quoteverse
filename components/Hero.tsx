import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-[610px] flex">
      <div className="w-[595px] items-center justify-center flex bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400">
        <h1 className="px-3 font-bold text-5xl text-white pl-6">
          Create a personalized image quote using AI-generated artwork inspired
          by your chosen quote.
        </h1>
      </div>

      <div className="h-full">
        <div className="flex-col flex absolute font-bold text-2xl px-4 text-yellow-300 bottom-40 z-20">
          <span className="drop-shadow-2xl">
            "It is through science that we prove, but through intuition that we
            discover."
          </span>
          <span className="text-white font-normal text-lg italic text-end pr-5">
            - Henri Poincaré
          </span>
        </div>
        <div className="bg-gray-800">
          <img
            src="/heroImage.jpg"
            className="object-contain h-full opacity-80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
