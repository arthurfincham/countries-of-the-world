import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DrawerContent from './DrawerContent';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './NavBar';
import { permittedAnswers } from './permitted';
import { inputStandard } from './inputFunctions/inputStandard';
import InputBase from '@mui/material/InputBase';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'space-evenly',
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function AppWrapper({ children, knownCountries, setKnownCountries }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', marginTop: '40px' }}>
      <CssBaseline />
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
      <Main open={open}>{children}</Main>
    </Box>
  );
}
