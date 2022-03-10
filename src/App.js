import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Loading from "./Loading";
import axios from "axios";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [country, setCountry] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading,setLoading] = (false)
  const getCountry = async (countryName) => {
    const { data } = await axios.get(
      setLoading(true)
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    setCountry(data[0]);
    setLoading(false)
  };

  const getRegions = async () => {
    setLoading(true)
    const { data } = await axios.get(
      `https://restcountries.com/v2/all?fields=name,capital,flag,population,region,cioc`
    );
    setCountries(data);
    setLoading(false)
  };
  /* eslint-disable */
  useEffect(() => {
    getRegions();
  }, []);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="w-screen h-full mx-auto font-Nunito bg-gray-200 dark:bg-background-blue dark:text-white">
        <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        {loading? <Loading/> : <Main countries={countries} getCountry={getCountry} country={country} />}
      </div>
    </div>
  );
}

export default App;
