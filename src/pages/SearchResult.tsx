import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getCharities from "../api/getCharities";
import CharityList from "../components/CharityList";
import { Charity } from "../types/charity.types";

const SearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cause = location.state ? location.state.cause : null;
  const [charities, setCharities] = useState<Charity[]>([]);

  const fetchCharities = async () => {
    try {
      const fetchedCharities = await getCharities(50, cause);
      setCharities(fetchedCharities);
    } catch (error) {
      console.error("Error fetching charities:", error);
    }
  };

  useEffect(() => {
    if (cause !== null) {
      fetchCharities();
    } else {
      navigate("/*");
    }
  }, [cause]);

  return (
    <div className="flex flex-col items-center space-y-5 h-max w-full md:px-10 px-5 py-10">
      <p className="md:text-3xl text-2xl font-semibold text-left text-gray-800 w-full">
        Search results for: {cause}
      </p>
      {charities && <CharityList charities={charities} />}
    </div>
  );
};

export default SearchResult;
