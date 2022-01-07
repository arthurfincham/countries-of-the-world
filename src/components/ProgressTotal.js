import { permittedAnswers } from './permitted';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function ProgressTotal({ knownCountries }) {
  const maxVal = permittedAnswers.length;
  const normalise = (value) => ((value - 0) * 100) / (maxVal - 0);
  let currentVal = knownCountries.length;
  return (
    <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100px' }}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          size={70}
          variant="determinate"
          value={normalise(currentVal)}
          sx={{ color: '#FA8F02', zIndex: 2, strokeLinecap: 'round' }}
        />
        <CircularProgress size={70} variant="determinate" value={100} sx={{ position: 'absolute', left: '0', color: '#EBEBEB', zIndex: 1 }} />
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
        Total
      </Typography>
    </Paper>
  );
}
