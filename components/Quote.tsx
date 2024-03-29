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
    <div
      id="Quote"
      className="h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 md:pt-16 pt-12"
    >
      <div className="bg-purple-200 bg-opacity-20 md:mt-3 py-4 pb-7">
        <div className="text-white text-center font-bold md:text-6xl px-2 text-4xl py-10">
          Generate a cool quote!
        </div>

        {/* Searchbar for quote */}
        <div className="flex items-center justify-center mt-3 md:mx-auto max-w-3xl lg:max-w-5xl mx-5 flex-col md:flex-row">
          {/* <input
            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Search for a quote"
          /> */}

          <div className="md:pt-4 text-lg mx-2 md:mb-5">
            <span className="text-white/95 font-medium md:text-2xl">
              Click on any{" "}
              <span className="bg-white text-sm font-medium text-purple-600 rounded px-2 py-1 mx-1">
                #tag
              </span>{" "}
              to get a quote with that tag, or generate...
            </span>
          </div>

          <button
            className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded ml-3 md:mt-0 mt-7"
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
              className={`w-4 h-4 inline-block ml-2 ${
                isLoading ? "animate-spin" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17 0H3C1.9 0 1.01.9 1.01 2L1 18c0 1.1.89 2 1.99 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-7 17.5c-2.49 0-4.5-2.01-4.5-4.5S7.51 8.5 10 8.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm4.9-9.09c-.35-.14-.76-.01-1.02.3l-1.53 1.82-.37-.31c-.29-.23-.7-.2-1 .07l-1.55 1.24V9.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.63l-1.55-1.24c-.3-.27-.71-.3-1-.07l-.37.31-1.53-1.82c-.26-.31-.67-.44-1.02-.3-.35.14-.57.48-.54.85l.28 2.27c.03.26.24.48.5.48h2.45c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.45l1.15-.92 1.43 1.71c.2.24.52.24.72 0l1.43-1.71 1.15.92h-1.45c-.28 0-.5.22-.5.5s.22.5.5.5h2.45c.26 0 .47-.22.5-.48l.28-2.27c.03-.37-.19-.71-.54-.85z" />
            </svg>

            {/* random icon svg here */}
          </button>
        </div>

        <div className="flex items-center md:text-xl justify-center md:mt-10 mt-7 max-w-7xl md:max-w-full md:mx-28 mx-4">
          <h1 className="mx-2 text-white font-semibold underline underline-offset-2">
            Tags:
          </h1>
          <ul className="flex text-white overflow-scroll scrollbar-none">
            {tags.map((tag) => (
              <li
                key={tag._id}
                className="bg-white text-purple-600 text-sm md:text-lg mx-1 px-3 py-2 font-medium rounded my-1 flex-shrink-0 hover:bg-purple-100 hover:cursor-pointer"
                onClick={() => fetchQuoteByTag(tag.slug)}
              >
                <span>#{tag.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quote */}
        {quote && (
          <div className="text-center mx-10 md:max-w-4xl md:mx-auto mt-12 mb-7 backdrop-blur-md bg-white/40 rounded py-4 px-4 md:py-6 md:px-8">
            <p className="font-semibold md:text-2xl">{quote.text}</p>
            <p className="text-gray-700 text-sm mt-1 md:mt-3 md:text-right md:mr-5 italic">
              - {quote.author}
            </p>
          </div>
        )}
      </div>

      <LexicaImage quote={quote?.text} />
    </div>
  );
}

export default Quote;
