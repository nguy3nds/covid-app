import { useEffect, useState } from "react";
import { getCountries } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getReportByCountry } from "./apis";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("vn");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    const country = countries.find(
      (country) => country.ISO2.toLowerCase() === selectedCountryId
    );
    if (country) {
      getReportByCountry(country.Slug).then((res) => {
        // xoa di gia tri cuoi cung
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  return (
    <div>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <Highlight report={report} />
      <Summary report={report} />
    </div>
  );
}

export default App;
