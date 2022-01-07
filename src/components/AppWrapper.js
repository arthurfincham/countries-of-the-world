import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

export default function AppWrapper({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: '40px',
        backgroundColor: '#EBEBEB',
        justifyContent: 'center',
      }}
    >
      <CssBaseline />
      {children}
    </Box>
  );
}
