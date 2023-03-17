import React, { useEffect, useState } from "react";
import LexicaImage from "./LexicaImage";

type Props = {};

interface Quote {
  text: string;
  author: string;
}

interface Tag {
  _id: string;
  name: string;
  slug: string;
  quoteCount: number;
  dateAdded: string;
  dateModified: string;
}

function Quote({}: Props) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const res = await fetch("https://api.quotable.io/tags");
      const data = await res.json();
      setTags(data);
    };
    fetchTags();
  }, []);

  const fetchQuote = async () => {
    setIsLoading(true);
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote({ text: data.content, author: data.author });
    setIsLoading(false);
  };

  const fetchQuoteByTag = async (tag: string) => {
    setIsLoading(true);
    const res = await fetch(`https://api.quotable.io/random?tags=${tag}`);
    const data = await res.json();
    setQuote({ text: data.content, author: data.author });
    setIsLoading(false);
  };

  return (
    <div id="Quote" className="h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400">
      <div className="bg-purple-200 bg-opacity-40 py-4">
        <div className="text-center font-bold text-6xl py-10">Generate a cool quote!</div>
        <div className="flex items-center justify-center mt-3 max-w-7xl mx-auto">
          <h1 className="mx-2 font-semibold">Tags:</h1>
          <ul className="flex text-white overflow-scroll scrollbar-none">
            {tags.map((tag) => (
              <li
                key={tag._id}
                className="bg-purple-600 text-sm mx-1 px-3 py-2 rounded-md my-1 flex-shrink-0 hover:bg-purple-800 hover:cursor-pointer"
                onClick={() => fetchQuoteByTag(tag.slug)}
              >
                <span>#{tag.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Searchbar for quote */}
        <div className="flex items-center justify-center mt-3 mx-auto max-w-3xl lg:max-w-5xl">
          {/* <input
            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Search for a quote"
          /> */}

          <div className="pt-1">
            <span className="text-black font-semibold">
              Click on a{" "}
              <span className="bg-purple-600 font-normal text-white rounded px-2 py-1 mx-1">
                #tag
              </span>{" "}
              to get a quote with that tag, or get a
            </span>
          </div>

          <button
            className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded ml-3"
            onClick={fetchQuote}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Random"}

            {/* {isLoading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 inline-block ml-1 animate-spin"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17 0H3C1.9 0 1.01.9 1.01 2L1 18c0 1.1.89 2 1.99 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-7 17.5c-2.49 0-4.5-2.01-4.5-4.5S7.51 8.5 10 8.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm4.9-9.09c-.35-.14-.76-.01-1.02.3l-1.53 1.82-.37-.31c-.29-.23-.7-.2-1 .07l-1.55 1.24V9.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.63l-1.55-1.24c-.3-.27-.71-.3-1-.07l-.37.31-1.53-1.82c-.26-.31-.67-.44-1.02-.3-.35.14-.57.48-.54.85l.28 2.27c.03.26.24.48.5.48h2.45c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.45l1.15-.92 1.43 1.71c.2.24.52.24.72 0l1.43-1.71 1.15.92h-1.45c-.28 0-.5.22-.5.5s.22.5.5.5h2.45c.26 0 .47-.22.5-.48l.28-2.27c.03-.37-.19-.71-.54-.85z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 inline-block ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17 0H3C1.9 0 1.01.9 1.01 2L1 18c0 1.1.89 2 1.99 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-7 17.5c-2.49 0-4.5-2.01-4.5-4.5S7.51 8.5 10 8.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm4.9-9.09c-.35-.14-.76-.01-1.02.3l-1.53 1.82-.37-.31c-.29-.23-.7-.2-1 .07l-1.55 1.24V9.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.63l-1.55-1.24c-.3-.27-.71-.3-1-.07l-.37.31-1.53-1.82c-.26-.31-.67-.44-1.02-.3-.35.14-.57.48-.54.85l.28 2.27c.03.26.24.48.5.48h2.45c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.45l1.15-.92 1.43 1.71c.2.24.52.24.72 0l1.43-1.71 1.15.92h-1.45c-.28 0-.5.22-.5.5s.22.5.5.5h2.45c.26 0 .47-.22.5-.48l.28-2.27c.03-.37-.19-.71-.54-.85z" />
              </svg>
            )} */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 inline-block ml-2 ${isLoading ? "animate-spin" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17 0H3C1.9 0 1.01.9 1.01 2L1 18c0 1.1.89 2 1.99 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-7 17.5c-2.49 0-4.5-2.01-4.5-4.5S7.51 8.5 10 8.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm4.9-9.09c-.35-.14-.76-.01-1.02.3l-1.53 1.82-.37-.31c-.29-.23-.7-.2-1 .07l-1.55 1.24V9.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.63l-1.55-1.24c-.3-.27-.71-.3-1-.07l-.37.31-1.53-1.82c-.26-.31-.67-.44-1.02-.3-.35.14-.57.48-.54.85l.28 2.27c.03.26.24.48.5.48h2.45c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.45l1.15-.92 1.43 1.71c.2.24.52.24.72 0l1.43-1.71 1.15.92h-1.45c-.28 0-.5.22-.5.5s.22.5.5.5h2.45c.26 0 .47-.22.5-.48l.28-2.27c.03-.37-.19-.71-.54-.85z" />
            </svg>

            {/* random icon svg here */}
          </button>
        </div>

        {/* Quote */}
        {quote && (
          <div className="text-center pt-5">
            <p className="font-semibold">{quote.text}</p>
            <p className="text-gray-600">- {quote.author}</p>
          </div>
        )}
      </div>

      <LexicaImage quote={quote?.text} />
    </div>
  );
}

export default Quote;
