import React from "react";

type Props = {
  quote?: string;
};

function LexicaImage({ quote }: Props) {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const searchImage = async () => {
    setIsLoading(true);
    const response = await fetch(`https://lexica.art/api/v1/search?q=${quote}`);
    const data = await response.json();

    if (data.images && data.images.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.images.length);

      setImageUrl(data.images[randomIndex].src);
    } else {
      setImageUrl(null);
    }

    setIsLoading(false);
  };

  const handleDownload = () => {
    if (!imageUrl) return;

    const newTab = window.open(imageUrl, "_blank", "noopener,noreferrer");
    if (newTab) newTab.opener = null;
    newTab?.focus();
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400">
      {quote && (
        <div className="py-7">
          <div className="text-center text-gray-100 text-3xl font-bold px-1">
            Generate an image for this quote
          </div>

          <div className="flex flex-col items-center justify-center mt-5">
            <button
              className="bg-white hover:bg-purple-100 text-purple-500 font-semibold px-3 py-2 mt-5 rounded"
              onClick={searchImage}
            >
              Show an AI generated cool image!
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
            </button>

            <div className="text-center text-white text-xs mt-4 px-4">
              <span>P.S. Don't send too many requests, otherwise request will stuck.</span>
            </div>
          </div>
          {isLoading ? (
            <div className="text-center text-white mt-5">Loading...</div>
          ) : (
            <div className="rounded-md w-[350px] mx-auto mt-7">
              {imageUrl ? (
                <>
                  <img
                    className="rounded-md w-[350px] h-[500px] mx-auto md:w-[650px] md:h-full"
                    src={imageUrl}
                    alt="AI-generated image"
                  />
                  <div className="flex justify-center my-5">
                    <button
                      className="bg-purple-500 border border-white hover:bg-purple-800 text-white font-semibold px-3 py-2 rounded"
                      onClick={handleDownload}
                    >
                      Download
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center text-white mx-auto">No image found.</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LexicaImage;
