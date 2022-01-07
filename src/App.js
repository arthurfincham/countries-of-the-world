import Map from './components/Map';
import InputForm from './components/InputForm';
import ProgressBar from './components/ProgressBar';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
function App() {
  const [knownCountries, setKnownCountries] = useState([]);

  return (
    <div className="App">
      <div className="flex-row">
        <Paper>
          <Map />
        </Paper>
        <InputForm knownCountries={knownCountries} setKnownCountries={setKnownCountries} />
      </div>
      {/* <ProgressBar knownCountries={knownCountries} /> */}
    </div>
  );
}

export default App;
