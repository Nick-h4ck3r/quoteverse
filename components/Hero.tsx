import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="flex md:flex-row flex-col-reverse bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 px-10 pt-16 md:px-28">
      <div className="items-center justify-center flex flex-col md:max-w-6xl text-center md:mt-0 mb-16 md:mb-0">
        <h1 className="font-semibold text-lg md:text-5xl text-white md:leading-loose md:ml-20">
          a personalized image quote using
          <br />
          <span className="md:text-7xl text-3xl font-bold underline decoration-yellow-400">
            AI-generated artwork.
          </span>
          {/* <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute mx-auto h-[0.58em] w-42 fill-yellow-500"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg> */}
          {""}
          <br />
          inspired by your chosen quote.
        </h1>
        <div>
          <a href="#Quote">
            <button className="bg-white text-black font-bold py-2 px-4 rounded-full mt-10 text-sm md:text-base">
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
        <div className="rounded-md ml-0 md:ml-0">
          <img
            src="/final.png"
            className="object-cover opacity-90 rounded-md md:my-20 my-14 md:w-full h-[350px] md:h-[650px] w-[600px] drop-shadow-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
