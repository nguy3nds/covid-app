import { useEffect, useState } from "react";
import { getCountries } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getReportByCountry } from "./apis";
import { Container, Typography } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
    setSelectedCountryId("vn");
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
    <Container>
      <Typography component="h1" variant="h2" className={{ marginTop: 30 }}>
        Thống kê covid
      </Typography>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />
      <Highlight report={report} />
      <Summary countryId={selectedCountryId} report={report} />
    </Container>
  );
}

export default App;
