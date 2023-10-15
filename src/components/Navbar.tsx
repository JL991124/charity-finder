import { Link, Outlet } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <nav className="bg-gray-800 border-gray-200 text-white w-screen flex flex-col items-center">
        <div className="flex flex-wrap sm:justify-between justify-center gap-3 sm:px-12 px-6 py-6 w-screen max-w-screen-3xl">
          <div className="flex-none w-60">
            <Link to="/" className="flex space-x-1 items-center">
              <svg
                className="w-8 h-8 text-teal-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <h1 className="text-3xl font-semibold	antialiased">
                Charity Finder
              </h1>
            </Link>
          </div>
          <div className="flex-grow lg:max-w-md md:max-w-sm">
            <Search />
          </div>
          <div className="flex xl:w-60 justify-center">
            <Link to="/favorites">
              <div className=" bg-white w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-pink-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="max-w-screen-3xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
