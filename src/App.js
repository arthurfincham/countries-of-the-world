import Map from './components/Map';
import InputForm from './components/InputForm';
import ProgressBar from './components/ProgressBar';
import AppWrapper from './components/AppWrapper';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { permittedAnswers } from './components/permitted';
import { Main } from './components/muiStyled/styledMain';
import { inputStandard } from './components/inputFunctions/inputStandard';
import InputBase from '@mui/material/InputBase';
import DrawerContent from './components/DrawerContent';

function App() {
  const [knownCountries, setKnownCountries] = useState([]);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const drawerWidth = 500;

  const checkAnswer = (e) => {
    if (e.target.value.length > 1) {
      const string = inputStandard(e.target.value);
      if (permittedAnswers.some((e) => e.country === string)) {
        e.preventDefault();
        const selectedCountry = permittedAnswers.filter((e) => e.country === string)[0];
        if (selectedCountry.picked === false) {
          selectedCountry.picked = true;
          setKnownCountries([...knownCountries, selectedCountry]);
        }
        e.target.value = '';
      }
    }
  };

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  };
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
      <AppWrapper>
        <NavBar open={open} handleDrawerOpen={handleDrawerOpen} drawerWidth={drawerWidth}>
          <InputBase
            sx={{ flex: 1 }}
            placeholder="Country"
            onChange={(e) => checkAnswer(e)}
            onKeyDown={(e) => checkKeyDown(e)}
            sx={{ backgroundColor: 'white', width: '400px', padding: '.3em .5em', borderRadius: '5px' }}
          />
        </NavBar>
        <DrawerContent handleDrawerClose={handleDrawerClose} drawerWidth={drawerWidth} open={open} knownCountries={knownCountries} />
        <Main open={open} drawerWidth={drawerWidth}>
          <Map />
          <ProgressBar knownCountries={knownCountries} />
        </Main>
      </AppWrapper>
    </div>
  );
}

export default App;
