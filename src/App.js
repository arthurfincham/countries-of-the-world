import Map from './components/Map';
import InputForm from './components/InputForm';
import ProgressBar from './components/ProgressBar';
import AppWrapper from './components/AppWrapper';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

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
      <AppWrapper setKnownCountries={setKnownCountries} knownCountries={knownCountries}>
        <Paper>
          <Map />
        </Paper>
        <ProgressBar knownCountries={knownCountries} />
      </AppWrapper>
    </div>
  );
}

export default App;
