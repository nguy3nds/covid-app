import { useEffect, useState } from "react";
import { getCountries } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getReportByCountry } from "./apis";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    const { Slug } = countries.find(
      (country) => country.ISO2.toLowerCase() === selectedCountryId
    );
    console.log({ e, Slug });
    getReportByCountry(Slug).then((res) =>
      console.log("getReportByCountry", res)
    );
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  return (
    <div>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <Highlight />
      <Summary />
    </div>
  );
}

export default App;
