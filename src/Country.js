import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";
const Country = ({ country, getCountry, countries, loading, setLoading }) => {
  const { countryName } = useParams();
  const objects = {};
  const langus = Object.values(
    country?.languages ? country.languages : ""
  ).join(",");
  const currency = Object.keys(
    country?.currencies ? country.currencies : ""
  )[0];

  countries?.map(({ cioc, name }) => {
    return (objects[cioc ? cioc : ""] = name);
  });
  /* eslint-disable */
  useEffect(() => {
    getCountry(countryName);
  }, [countryName]);
  console.log({ loading, countryName });
  return loading ? (
    <Loading />
  ) : (
    <div className="lg:px-20 sm:px-15 px-8 py-5 h-full sm:h-screen bg-white dark:bg-background-blue shadow-4xl">
      <NavLink to="/">
        <button className="outline-white dark:bg-my-blue border-white bg-white rounded-md w-20 shadow-5xl">
          Back
        </button>
      </NavLink>
      <div className="flex flex-col sm:flex-row mt-12">
        <div className="h-96 sm:basis-2/5 sm:pr-10 pr-0">
          <img
            src={country?.flags?.png}
            className="max-w-full object-cover h-full"
            alt="flag"
          ></img>
        </div>
        <div className="flex-col w-full pb-14 sm:basis-3/5">
          <header className="mt-14">
            <h3 className="text-3xl font-medium mb-5">
              {country?.name?.common}
            </h3>
          </header>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="basis-1/2">
              <p className="pb-2 font-medium">
                Native Name:{" "}
                <span className="font-light">{country?.name?.common}</span>
              </p>
              <p className="pb-2 font-medium">
                Population:{" "}
                <span className="font-light">
                  {country?.population
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </p>
              <p className="pb-2 font-medium">
                Region: <span className="font-light">{country?.region}</span>
              </p>
              <p className="pb-2 font-medium">
                Sub Region:{" "}
                <span className="font-light">{country?.subregion}</span>
              </p>
              <p className="pb-2 font-medium">
                Capital:{" "}
                <span className="font-light">
                  {country?.capital ? country.capital[0] : ""}
                </span>
              </p>
            </div>
            <div className="basis-1/2">
              <p className="pb-2 pt-5 sm:pt-0 font-medium">
                Top Level Domain:{" "}
                <span className="font-light">
                  {country?.tld ? country.tld[0] : ""}
                </span>
              </p>
              <p className="pb-2 font-medium">
                Currencies:{" "}
                <span className="font-light">
                  {country?.currencies?.[currency]?.name}
                </span>
              </p>
              <p className="pb-2 font-medium">
                Languages: <span className="font-light">{langus}</span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row pt-10">
              <p className="font-medium pb-2 sm:pb-0">
                Border Countries:&nbsp;
              </p>
              <div className="flex">
                {country?.borders?.map((border) => {
                  var foundCountry = border;
                  var countryName = objects[foundCountry];
                  return (
                    <span className="outline-white font-light border-white dark:bg-my-blue bg-white rounded-sm w-auto shadow-5xl flex justify-between items-center mr-2 text-sm px-2">
                      {countryName}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
