import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CircleProgress from './CircleProgress';
import TotalProgress from './TotalProgress';

export default function FloatingProgress({ knownCountries }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const actions = [
    { icon: <CircleProgress name="Africa" knownCountries={knownCountries} />, name: 'Africa' },
    { icon: <CircleProgress name="Asia" knownCountries={knownCountries} />, name: 'Asia' },
    { icon: <CircleProgress name="Central America" knownCountries={knownCountries} />, name: 'Central America' },
    { icon: <CircleProgress name="Europe" knownCountries={knownCountries} />, name: 'Europe' },
    { icon: <CircleProgress name="Middle East" knownCountries={knownCountries} />, name: 'Middle East' },
    { icon: <CircleProgress name="North America" knownCountries={knownCountries} />, name: 'North America' },
    { icon: <CircleProgress name="Oceania" knownCountries={knownCountries} />, name: 'Oceania' },
    { icon: <CircleProgress name="South America" knownCountries={knownCountries} />, name: 'South America' },
  ];

  const buttonStyling = {
    margin: 1,
    '& .MuiSpeedDialAction-fab': {
      width: '6vh',
      height: '6vh',
      overflow: 'hidden',
    },
    '& .MuiSpeedDialAction-staticTooltipLabel': {
      whiteSpace: 'nowrap',
      fontSize: '.8em',
      padding: '.3em .5em',
    },
  };

  const toggleStyling = {
    position: 'absolute',
    top: 24,
    right: 24,

    '& .MuiSpeedDial-fab': {
      height: '8vh',
      width: '8vh',
      backgroundColor: 'white',
      overflow: 'hidden',
    },
    '& .MuiSpeedDial-fab:hover': {
      backgroundColor: '#EBEBEB',
    },
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial tooltip example"
      icon={<TotalProgress knownCountries={knownCountries} open={open} />}
      onClick={handleClick}
      open={open}
      direction="down"
      sx={toggleStyling}
    >
      {actions.map((action) => (
        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} tooltipOpen onClick={handleClick} sx={buttonStyling} />
      ))}
    </SpeedDial>
  );
}
