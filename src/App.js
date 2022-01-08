import Map from './components/Map';
import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import List from './components/List';
import Progress from './components/Progress';

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
      <div className="flex flex-col justify-evenly h-full py-2 border-4">
        <div className="border-2 border-black m-2 rounded-xl w-[820px] h-[550px] overflow-hidden shadow-md relative bg-orange-50 ">
          <InputField knownCountries={knownCountries} setKnownCountries={setKnownCountries} />
          <Map />
          <Progress knownCountries={knownCountries} />
        </div>
      </div>
      <div className="flex flex-col flex-wrap  w-1/2 pl-2 h-full ">
        <List knownCountries={knownCountries} />
      </div>
    </div>
  );
}

export default App;
