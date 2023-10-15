import { useState, useEffect } from "react";
import { Charity } from "../types/charity.types";
import getCharities from "../api/getCharities";
import CausesListJson from "../assets/CausesList.json";
import CharityList from "../components/CharityList";

const Home = () => {
  const [charities, setCharities] = useState<Charity[]>([]);

  const getRandomCause = () => {
    return CausesListJson.causes[
      Math.floor(Math.random() * CausesListJson.causes.length)
    ];
  };

  const fetchCharities = async () => {
    try {
      const fetchedCharities = await getCharities(9, getRandomCause());
      setCharities(fetchedCharities);
    } catch (error) {
      console.error("Error fetching charities:", error);
    }
  };

  useEffect(() => {
    fetchCharities();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-10 pb-10 h-full">
      <div
        className="bg-cover"
        style={{
          backgroundImage: `url(https://picsum.photos/id/443/2400/400)`,
          height: "400px",
          width: "100vw",
        }}
      ></div>
      <p className="text-3xl font-semibold text-gray-800 ">
        You May interested
      </p>
      <div className="md:px-10 px-5">
        <CharityList charities={charities} />
      </div>
    </div>
  );
};

export default Home;
