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

  return (
    <>
      <div className="bg-purple-200 py-4">
        <div className="text-center font-semibold">Generate a cool quote!</div>
        <div className="flex items-center justify-center mt-3">
          <h1 className="mx-2">Tags:</h1>
          <ul className="flex text-white overflow-scroll scrollbar-none">
            {tags.map((tag) => (
              <li
                key={tag._id}
                className="bg-purple-600 text-sm mx-1 px-3 py-2 rounded-md my-1 flex-shrink-0"
              >
                <span>#{tag.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Searchbar for quote */}
        <div className="flex items-center justify-center mt-3 mx-auto max-w-3xl lg:max-w-5xl">
          <input
            className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Search for a quote"
          />

          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-3"
            onClick={fetchQuote}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Random"}
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
    </>
  );
}

export default Quote;
