import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { permittedAnswers } from './permitted';

export default function ProgressBar({ name, knownCountries }) {
  const maxVal = permittedAnswers.filter((e) => e.continent === name).length;
  const normalise = (value) => ((value - 0) * 100) / (maxVal - 0);
  let currentVal = knownCountries.filter((e) => e.continent === name).length;
  return (
    <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100px' }}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={normalise(currentVal)} />
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
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${currentVal}/${maxVal}`}
          </Typography>
        </Box>
      </Box>
      <Typography variant="caption" component="div" color="text.secondary">
        {name}
      </Typography>
    </Paper>
  );
}
