import { Link } from "react-router-dom";
import { Charity } from "../types/charity.types";

interface CharityListProps {
  charities: Charity[];
}

const CharityList: React.FC<CharityListProps> = ({ charities }) => {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-4">
      {charities.map((charity, index) => (
        <Link key={index} to={`/charity/${charity.name}`} state={{ charity }}>
          <li className="shadow-lg text-lg font-bold text-center p-5 h-full rounded-lg cursor-pointer">
            <div className="flex flex-col divide-solid divide-y">
              <div className="flex flex-row p-1 space-x-2">
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

                <p className="text-left">{charity.name}</p>
              </div>
              <div className="flex flex-row pt-1 space-x-2 items-center">
                <svg
                  className="w-5 h-5 text-red-500 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                <p className="font-light">{charity.location}</p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default CharityList;
