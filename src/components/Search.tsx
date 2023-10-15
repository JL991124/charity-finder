import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import CausesListJson from "../assets/CausesList.json";

const Search = () => {
  const allCauses = CausesListJson.causes;
  const [searchInput, setSearchInput] = useState("");
  const [filtedCauses, setFiltedCauses] = useState(allCauses);
  const [showSearchOpton, setShowSearchOption] = useState(false);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleOnFocusInput = () => {
    setShowSearchOption(true);
  };
  const handleOnBlurInput = () => {
    setTimeout(() => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(document.activeElement)
      ) {
        setShowSearchOption(false);
      }
    }, 200);
  };

  const handleOnClickCause = () => {
    setShowSearchOption(false);
  };

  useEffect(() => {
    setFiltedCauses(
      allCauses.filter((cause) =>
        cause.includes(searchInput.toLocaleLowerCase())
      )
    );
  }, [searchInput]);

  return (
    <div className=" items-center">
      <div className="relative flex-auto space-y-1">
        <div className="relative flex flex-wrap w-full min-w-max items-stretch rounded border-solid hover:bg-gray-300">
          <button
            className="relative z-[2] bg-white rounded-l-lg  px-2 py-2 transition duration-150 ease-in-out focus:outline-none focus:ring-0"
            type="button"
            id="button-addon3"
            data-te-ripple-init
          >
            <svg
              className="w-6 h-6 text-neutral-500"
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
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <input
            type="search"
            ref={searchInputRef}
            className="relative flex-auto px-3 rounded-r-lg text-black placeholder:text-neutral-200 outline-none"
            placeholder="Find a charity"
            aria-label="Search"
            aria-describedby="button-addon3"
            onFocus={handleOnFocusInput}
            onBlur={handleOnBlurInput}
            onChange={(e) => setSearchInput(e.target.value.toLocaleLowerCase())}
          />
        </div>
        {showSearchOpton && (
          <ul className="absolute float-none flex flex-wrap mt-10 max-h-40 overflow-y-scroll w-full bg-white rounded border p-2 gap-y-1 gap-x-2">
            {filtedCauses.map((cause, index) => (
              <Link key={index} to={`/search/${cause}`} state={{ cause }}>
                <li
                  className="bg-gray-200 hover:bg-gray-300 text-black text-sm w-max px-2 py-1 rounded-full block"
                  onClick={handleOnClickCause}
                >
                  {cause}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
