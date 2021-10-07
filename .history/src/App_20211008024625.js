import { useEffect } from "react";
import { getCountries } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  useEffect(() => {
    getCountries().then((res) => console.log(res));
  }, []);

  return (
    <div>
      <CountrySelector />
      <Highlight />
      <Summary />
    </div>
  );
}

export default App;
