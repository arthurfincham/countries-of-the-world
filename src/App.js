import Map from './components/Map';
import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import FloatingProgress from './components/FloatingProgress';
import ReactTooltip from 'react-tooltip';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { permittedAnswers } from './components/permitted';
import { dummyAnswers } from './components/dummyKnownData';

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

  const theme = createTheme({
    palette: {
      primary: { main: '#FA8F02' },
    },
  });

  return (
    <div className="relative flex flex-row App">
      <ThemeProvider theme={theme}>
        <ReactTooltip className="tooltip" />
        <InputField knownCountries={knownCountries} setKnownCountries={setKnownCountries} />
        <Map />
        <FloatingProgress knownCountries={knownCountries} />
      </ThemeProvider>
    </div>
  );
}

export default App;
