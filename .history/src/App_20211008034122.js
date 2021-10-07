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

  const handleOnChange = (e) => {
    // call api
    const { Slug } = countries.find(
      (country) => country.ISO2.toLowerCase() === e.target.value
    );
    console.log({ e, Slug });
    getReportByCountry(Slug).then((res) =>
      console.log("getReportByCountry", res)
    );
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
