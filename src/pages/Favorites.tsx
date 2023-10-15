import { Charity } from "../types/charity.types";
import CharityList from "../components/CharityList";
import { useEffect } from "react";

const Favorites = () => {
  const charities: Charity[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  useEffect(() => {
    console.log(charities);
  });

  return (
    <div className="flex flex-col items-center space-y-5 h-max w-full md:px-10 px-5 py-10">
      <p className="md:text-3xl text-2xl font-semibold text-left text-gray-800 w-full">
        Favorite
      </p>
      {charities.length > 0 ? (
        <CharityList charities={charities} />
      ) : (
        <p className="text-xl font-medium text-center text-gray-400">
          No Favorites Yet
        </p>
      )}
    </div>
  );
};

export default Favorites;
