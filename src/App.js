import Map from './components/Map';
import InputForm from './components/InputForm';
import ProgressBar from './components/ProgressBar';
import ProgressCircle from './components/ProgressCircle';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

function App() {
  const [knownCountries, setKnownCountries] = useState([]);

  return (
    <div className="App">
      <Paper sx={{ display: 'flex' }}>
        <ProgressCircle name="Europe" knownCountries={knownCountries} />
        <ProgressCircle name="Africa" knownCountries={knownCountries} />
        <ProgressCircle name="North America" knownCountries={knownCountries} />
        <ProgressCircle name="South America" knownCountries={knownCountries} />
        <ProgressCircle name="Asia" knownCountries={knownCountries} />
        <ProgressCircle name="Oceania" knownCountries={knownCountries} />
        <ProgressCircle name="Middle East" knownCountries={knownCountries} />
      </Paper>
      <div className="flex-row">
        <Paper>
          <Map />
        </Paper>
        <InputForm knownCountries={knownCountries} setKnownCountries={setKnownCountries} />
      </div>
      <ProgressBar knownCountries={knownCountries} />
    </div>
  );
}

export default App;
