import { styled } from '@mui/material/styles';

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'space-evenly',
  backgroundColor: '#EBEBEB',
  maxWidth: '1200px',
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
