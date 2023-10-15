import { useState } from "react";
import { Link } from "react-router-dom";
import { Charity } from "../types/charity.types";

const CharityDetail = (charity: Charity) => {
  const favorites: Charity[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const [isFavorite, setIsFavorite] = useState(
    favorites.some((fav) => fav.ein === charity.ein)
  );

  const addFavoriteCharity = () => {
    console.log("addFavoriteCharity");
    favorites.push(charity);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const removeFavoriteCharity = () => {
    console.log("removeFavoriteCharity");
    const updatedFavorites = favorites.filter((fav) => fav.ein !== charity.ein);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleOnClickFavorite = () => {
    isFavorite ? removeFavoriteCharity() : addFavoriteCharity();
    setIsFavorite(!isFavorite);
  };

  const handleOnClickEveryOrg = () => {
    open(charity.profileUrl);
  };

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row gap-5 w-full md:px-12 sm:px-8 px-4 py-6">
      <div className="lg:col-span-2 xs:col-span-1 shadow-lg text-lg font-bold text-center rounded-lg">
        {charity.coverImageUrl && (
          <div className="w-full h-fit">
            <img
              src={charity.coverImageUrl.toString()}
              alt="cover image"
              className="w-full h-full object-cover rounded-t-lg"
            ></img>
          </div>
        )}

        <div className="p-8  space-y-4">
          <div className="flex flex-row items-center space-x-3">
            <div className="w-12">
              {charity.logoUrl === undefined ? (
                <svg
                  className="w-12 h-12 text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              ) : (
                <div
                  style={{ backgroundImage: `url(${charity.logoUrl})` }}
                  className="w-12 h-12 bg-black object-fill rounded-full"
                ></div>
              )}
            </div>
            <p className="text-left text-3xl font-medium">{charity.name}</p>
          </div>

          <div className="flex flex-row pt-1 space-x-2 items-center ml-2">
            <svg
              className="w-5 h-5 text-red-500 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            <p className="text-left font-light">{charity.location}</p>
          </div>

          <p className="text-left text-base font-normal ml-2">
            {charity.description}
          </p>
        </div>
      </div>

      <div className="col-span-1 w-full rounded-lg shadow-lg text-lg font-bold text-center px-6 py-8 space-y-4 h-max">
        <div className="flex lg:flex-col xs:flex-row flex-col w-full gap-2 justify-around items-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center space-x-2 w-full min-w-max max-w-xs"
            onClick={handleOnClickFavorite}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill={isFavorite ? "full" : "none"}
              viewBox="0 0 21 19"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
              />
            </svg>
            <span>
              {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
            </span>
          </button>

          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center space-x-2 w-full min-w-max max-w-xs"
            onClick={handleOnClickEveryOrg}
          >
            <svg
              className="w-5 h-5 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>Check in Every.org</span>
          </button>
        </div>
        {charity.tags && (
          <div className="space-y-1">
            <p className="text-left">Tag:</p>
            <ul className="flex flex-wrap gap-3">
              {charity.tags.map((cause, index) => (
                <Link key={index} to={`/search/${cause}`} state={{ cause }}>
                  <li className=" bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm px-4 py-2 rounded-full">
                    {cause}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharityDetail;
