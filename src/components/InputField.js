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

  return (
    <div className="absolute z-10 w-1/6  rounded-lg shadow-lg inputWrapper shadow-gray-500/40 top-6 left-5 min-w-[300px] border-4 border-orange-900">
      <input
        type="text"
        placeholder="Country"
        onChange={(e) => checkAnswer(e)}
        onKeyDown={(e) => checkKeyDown(e)}
        className=" outline-white  z-10 bg-white  h-[50px] p-4 rounded-lg focus:outline-none  w-full  "
      />
    </div>
  );
}
