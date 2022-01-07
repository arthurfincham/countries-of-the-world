import { permittedAnswers } from './permitted';
import { inputStandard } from './inputFunctions/inputStandard';
import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

export default function InputForm({ knownCountries, setKnownCountries }) {
  useEffect(() => {
    knownCountries
      .filter((item) => item.picked === true)
      .map((item) => {
        if (document.querySelector(`[title="${item.country}"]`)) {
          document.querySelector(`[title="${item.country}"]`).style.fill = '#FA8F02';
        }
      });
  });

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
    <Paper sx={{ height: '550px', padding: '1em', width: '450px' }}>
      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '95%' }}>
        <InputBase sx={{ flex: 1 }} placeholder="Country" onChange={(e) => checkAnswer(e)} onKeyDown={(e) => checkKeyDown(e)} />
      </Paper>

      <Grid sx={{ marginTop: '20px', width: '100%', display: 'flex', flexWrap: 'wrap' }}>
        {knownCountries
          .filter((e) => e.picked === true)
          .sort()
          .map((item) => {
            return (
              <Chip
                label={item.country}
                variant="outlined"
                size="small"
                sx={{
                  margin: 0.3,
                  backgroundColor: 'white',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
                }}
              />
            );
          })}
      </Grid>
    </Paper>
  );
}
