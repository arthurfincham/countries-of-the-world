import Map from './components/Map';
import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import Progress from './components/Progress';
import ReactTooltip from 'react-tooltip';

function App() {
  const [knownCountries, setKnownCountries] = useState([]);

  useEffect(() => {
    knownCountries
      .filter((item) => item.picked === true)
      .map((item) => {
        if (document.querySelector(`[title="${item.country}"]`)) {
          document.querySelector(`[title="${item.country}"]`).style.fill = '#FA8F02';
          const country = document.querySelector(`[title="${item.country}"]`);
          country.setAttribute('data-tip', item.country);
          ReactTooltip.rebuild();
        }
      });
  });

  return (
    <div className="relative flex flex-row App">
      <ReactTooltip className="tooltip" />

      <InputField knownCountries={knownCountries} setKnownCountries={setKnownCountries} />
      <Map />
      <Progress knownCountries={knownCountries} />
    </div>
  );
}

export default App;
