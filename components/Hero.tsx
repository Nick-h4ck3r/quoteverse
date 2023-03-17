import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 px-28">
      <div className="items-center justify-center flex flex-col max-w-6xl text-center">
        <h1 className="font-medium text-3xl text-white leading-loose">
          create a{" "}
          <span className="text-6xl font-bold">Personalized image quote</span>{" "}
          using <br />{" "}
          <span className="text-7xl font-bold underline decoration-yellow-400">
            {" "}
            AI-generated artwork<span className="text-yellow-300">.</span>
          </span>
          {""}
          <br />
          inspired by your chosen quote.
        </h1>
        <div>
          <a href="#Quote">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full mt-10">
              Try it yourself{" "}
              <img
                src="https://img.icons8.com/material-outlined/18/null/sparkling.png"
                className="inline-block pb-0.5 ml-1"
              />
            </button>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto rounded-md">
        <div className="rounded-md ml-0">
          <img
            src="/final.png"
            className="object-cover opacity-90 rounded-md my-20 w-full h-[650px] drop-shadow-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
