import Map from './components/Map';
import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import List from './components/List';

function App() {
  const [knownCountries, setKnownCountries] = useState([]);

  useEffect(() => {
    knownCountries
      .filter((item) => item.picked === true)
      .map((item) => {
        if (document.querySelector(`[title="${item.country}"]`)) {
          document.querySelector(`[title="${item.country}"]`).style.fill = '#FA8F02';
        }
      });
  });

  return (
    <div className="App">
      <InputField knownCountries={knownCountries} setKnownCountries={setKnownCountries} />
      <List knownCountries={knownCountries} />
      <Map />
    </div>
  );
}

export default App;
