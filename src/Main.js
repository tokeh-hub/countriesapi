import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Countries from "./Countries";
import Country from "./Country";
const Main = ({
  countries,
  setValue,
  value,
  country,
  getCountry,
  setCountries,
}) => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Countries
              countries={countries}
              setValue={setValue}
              value={value}
            />
          }
        />
        <Route
          exact
          path="/countries"
          element={
            <Countries
              countries={countries}
              setValue={setValue}
              value={value}
              setCountries={setCountries}
            />
          }
        />
        <Route
          exact
          path="/country/:countryName"
          element={
            <Country
              countries={countries}
              country={country}
              getCountry={getCountry}
              setValue={setValue}
              value={value}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default Main;
