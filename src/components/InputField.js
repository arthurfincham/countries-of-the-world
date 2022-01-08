import { useState, useEffect } from 'react';
import { permittedAnswers } from './permitted';
import { inputStandard } from './inputFunctions/inputStandard';
export default function InputField({ knownCountries, setKnownCountries }) {
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

  return <input type="text" placeholder="Country" onChange={(e) => checkAnswer(e)} onKeyDown={(e) => checkKeyDown(e)} />;
}
