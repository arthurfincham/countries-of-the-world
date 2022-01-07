import ProgressCircle from './ProgressCircle';
import ProgressTotal from './ProgressTotal';
export default function ProgressBar({ knownCountries }) {
  return (
    <div className="progressBarWrapper">
      <ProgressCircle name="Africa" knownCountries={knownCountries} />
      <ProgressCircle name="Asia" knownCountries={knownCountries} />
      <ProgressCircle name="Europe" knownCountries={knownCountries} />
      <ProgressCircle name="Middle East" knownCountries={knownCountries} />

      <ProgressCircle name="North America" knownCountries={knownCountries} />
      <ProgressCircle name="Oceania" knownCountries={knownCountries} />
      <ProgressCircle name="South America" knownCountries={knownCountries} />
      <ProgressTotal knownCountries={knownCountries} />
    </div>
  );
}
