import { useEffect, useState } from "react";
import { getCountries } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getReportByCountry } from "./apis";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleOnChange = (e) => {
    // call api
    console.log({ e });
    const { Slug } = countries.find(
      (country) => country.IS02 === e.target.value
    );
    getReportByCountry(Slug);
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
