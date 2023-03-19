import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-white bg-opacity-70 py-5 items-center justify-around flex text-indigo-600 backdrop-blur-sm w-full z-30 fixed">
      <div className="font-bold text-xl md:text-3xl">quoteverse</div>
      <div className="font-semibold text-normal md:text-lg text-purple-500">
        <ul className="flex gap-10">
          <li>twitter</li>
          <li>instagram</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
