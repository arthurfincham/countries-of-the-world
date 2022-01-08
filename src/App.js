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
      <div className="flex flex-col">
        <InputField knownCountries={knownCountries} setKnownCountries={setKnownCountries} />
        <div className="border-4 w-[820px] h-[550px] overflow-hidden">
          <Map />
        </div>
      </div>
      <div className="flex flex-col flex-wrap border-4 w-1/2 p-4 pr-0 h-full">
        <List knownCountries={knownCountries} />
      </div>
    </div>
  );
}

export default App;
