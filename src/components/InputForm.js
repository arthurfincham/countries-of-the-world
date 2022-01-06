import { permittedAnswers } from './permitted';
import { inputStandard } from './inputFunctions/inputStandard';
import { useState, useEffect } from 'react';

export default function InputForm() {
  const [knownCountries, setKnownCountries] = useState([]);

  const checkAnswer = (e) => {
    const string = inputStandard(e.target.value);
    if (permittedAnswers.includes(string)) {
      e.preventDefault();
      setKnownCountries([...knownCountries, string]);
      permittedAnswers.splice(permittedAnswers.indexOf(string), 1);
      e.target.value = '';
    }
  };

  useEffect(() => {
    knownCountries.map((item) => {
      document.querySelector(`[title="${item}"]`).style.fill = '#FA8F02';
    });
  });

  return (
    <div className="formArea">
      <div className="flex-row">
        <input type="text" placeholder="Country" onChange={(e) => checkAnswer(e)} />
        <span>{knownCountries.length} / 256</span>
      </div>

      <ul className="countriesList">
        {knownCountries.map((country) => {
          return <li>{country}</li>;
        })}
      </ul>
    </div>
  );
}
