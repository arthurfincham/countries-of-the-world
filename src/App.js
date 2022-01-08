import Map from './components/Map';
import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import List from './components/List';
import DummyMap from './DummyMap';
import Progress from './components/Progress';
import { permittedAnswers } from './components/permitted';
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
    <div className="flex flex-row App">
      <div className="flex-1 h-full bg-red-200"></div>
      <div className="flex flex-col h-full">
        <div className="flex-1 w-full bg-red-300"></div>
        <div className="border-2 border-black m-2 rounded-xl w-[820px] h-[550px] overflow-hidden shadow-md relative bg-orange-50">
          <InputField knownCountries={knownCountries} setKnownCountries={setKnownCountries} />
          <Map />
          <Progress knownCountries={knownCountries} />
        </div>
        <div className="flex-1 w-full bg-red-400"></div>
      </div>
      <div className="flex-1 h-full bg-red-100"></div>

      {/* {permittedAnswers
        // .filter((e) => e.picked === true)
        .sort()
        .map((item) => {
          return (
            <span className="border-[.005em] border-black m-1 text-xs  text-center block p-1 rounded-lg shadow-md absolute top-0 m-4">
              {item.country.replace(' and ', ' & ')}
            </span>
          );
        })} */}
    </div>
  );
}

export default App;
