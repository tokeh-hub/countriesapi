import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import axios from "axios";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [country, setCountry] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCountry = async (countryName) => {
    setLoading(true);
    const { data } = await axios.get(
      `https://restcountries.com/v2/name/${countryName}`
    );
    setCountry(data[0]);
    setLoading(false);
  };

  const getRegions = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://restcountries.com/v2/all`
    );
    setCountries(data);
    setLoading(false);
  };
  /* eslint-disable */
  useEffect(() => {
    getRegions();
  }, []);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="w-screen h-full mx-auto font-Nunito bg-gray-200 dark:bg-background-blue dark:text-white">
        <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Main
          countries={countries}
          loading={loading}
          setLoading={setLoading}
          getCountry={getCountry}
          country={country}
        />
      </div>
    </div>
  );
}

export default App;
