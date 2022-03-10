import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";
const Countries = ({ countries, loading }) => {
  const [val, setVal] = useState("");
  const [region, setRegion] = useState("Filter By Region");
  const [countriesList, setCountriesList] = useState(countries);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    const filteredCountries = countries?.filter((country) =>
      country.name.toLowerCase().includes(val.toLowerCase())
    );
    setCountriesList(filteredCountries);
  }, [countries, val]);

  useEffect(() => {
    const filteredRegion = countries?.filter(
      (country) => country.region === region
    );
    region === "Filter By Region"
      ? setCountriesList(countries)
      : setCountriesList(filteredRegion);
  }, [countries, region]);

  return loading ? (
    <Loading />
  ) : (
    <div className="lg:px-20 sm:px-15 px-5 py-5">
      <div className="lg:flex tablet:flex justify-between items-center mt-8 ">
        <div className="flex items-center dark:bg-my-blue bg-white w-auto px-4 h-9 text-gray-400 mb-3 tablet:mb-0">
          <AiOutlineSearch />
          <input
            className="hover:outline-none rounded-sm dark:bg-my-blue outline-none ml-3 placeholder:text-gray-400 placeholder:text-sm "
            placeholder="Search for a value..."
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="dark:bg-my-blue dark:text-white text-sm text-gray-400 rounded-sm outline-none px-4 h-9 w-100"
        >
          <option value="Filter By Region">Filter By Region</option>
          {regions.map((region) => (
            <option value={region} className="mt-4">
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
        {countriesList?.map(({ flag, name, population, capital, region }) => (
          <NavLink to={`/country/${name.toLowerCase()}`}>
            <div className="card dark:bg-my-blue border-transparent mx-5">
              <img
                src={flag}
                className="image object-cover rounded-t-md"
                alt={name}
              ></img>
              <div className="h-1/2 text-sm pb-5 pl-8 bg-white dark:bg-my-blue rounded-md">
                <p className="pb-3 pt-3 font-bold text-sm">{name}</p>
                <p className="font-medium">
                  Population: <span className="font-light">{population}</span>
                </p>
                <p className="font-medium">
                  Region: <span className="font-light">{region}</span>
                </p>
                <p className="font-medium">
                  Capital: <span className="font-light">{capital}</span>
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Countries;
