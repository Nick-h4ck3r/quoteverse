import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-purple-700 py-5 items-center justify-around flex text-white">
      <div className="font-bold text-3xl">quoteverse</div>
      <div className="font-semibold text-lg">
        <ul className="flex gap-10">
          <li>twitter</li>
          <li>instagram</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
