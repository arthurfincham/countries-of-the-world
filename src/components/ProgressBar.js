import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { styled } from '@mui/material/styles';

export default function ProgressBar({ permittedAnswers }) {
  const normalise = (value) => ((value - 0) * 100) / (265 - 0);

  const Bar = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#FAD19C',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#FA8F02',
    },
  }));
  return (
    <Box sx={{ width: '80%' }}>
      <Bar variant="determinate" value={normalise(permittedAnswers.filter((e) => e.selected === true).length)} />
    </Box>
  );
}
