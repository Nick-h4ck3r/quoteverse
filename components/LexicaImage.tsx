import React from "react";

type Props = {
    quote?: string;
};


function LexicaImage({ quote }: Props) {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const searchImage = async () => {
    setIsLoading(true);
    const searchTerm =
      "In the business world, everyone is paid in two coins: cash and experience. Take the experience first; the cash will come later.";
    const response = await fetch(
      `https://lexica.art/api/v1/search?q=${quote}`
    );
    const data = await response.json();

    if (data.images && data.images.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.images.length);

      setImageUrl(data.images[randomIndex].src);
    } else {
      setImageUrl(null);
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-purple-300 py-7">
      <div className="text-center font-semibold">
        Show an AI generated cool image!
      </div>

      <div className="flex items-center justify-center mt-5">
        <button
          className="bg-purple-500 hover:bg-purple-800 text-white font-semibold px-3 py-2 rounded"
          onClick={searchImage}
        >
          Generate
        </button>
      </div>
      {isLoading ? (
        <div className="text-center mt-5">Loading...</div>
      ) : (
        <div className="rounded-md w-[450px] mx-auto mt-7">
          {imageUrl ? (
            <img
              className="rounded-md"
              src={imageUrl}
              alt="AI-generated image"
            />
          ) : (
            <div className="text-center">No image found.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default LexicaImage;
