import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { permittedAnswers } from './permitted';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function TotalProgress({ knownCountries }) {
  const max = permittedAnswers.length;

  const normalise = (value) => ((value - 0) * 100) / (max - 0);

  const current = knownCountries.length;

  const complete = current === max;

  const counter = (
    <Typography variant="caption" component="div" color="text.secondary" sx={{ fontSize: '.8em', letterSpacing: '.1em' }}>
      {`${current}/${max}`}
    </Typography>
  );

  const finishIcon = <CheckCircleOutlineIcon color="white" />;

  const bgCol = complete ? '#FA8F02' : 'none';

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={normalise(current)} size={71} thickness={5} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bgCol,
        }}
      >
        {complete ? finishIcon : counter}
      </Box>
    </Box>
  );
}
