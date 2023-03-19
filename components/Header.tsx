import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-white bg-opacity-70 py-5 items-center justify-around flex text-indigo-600 backdrop-blur-sm w-full z-30 fixed">
      <div className="font-bold text-xl md:text-3xl">
        <a href="#" className="hover:cursor-default">
          quoteverse
        </a>
      </div>
      <div className="font-semibold text-normal md:text-lg text-purple-500">
        <ul className="flex gap-10">
          <li>
            <a
              href="https://twitter.com/NickK2305"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Nick-h4ck3r"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
