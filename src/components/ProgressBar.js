import ProgressCircle from './ProgressCircle';
import ProgressTotal from './ProgressTotal';
export default function ProgressBar({ knownCountries }) {
  return (
    <div className="progressBarWrapper">
      <div className="progressBar">
        <ProgressCircle name="Africa" knownCountries={knownCountries} />
        <ProgressCircle name="Asia" knownCountries={knownCountries} />
        <ProgressCircle name="Europe" knownCountries={knownCountries} />
        <ProgressCircle name="Middle East" knownCountries={knownCountries} />
      </div>
      <div className="progressBar">
        <ProgressCircle name="North America" knownCountries={knownCountries} />
        <ProgressCircle name="Oceania" knownCountries={knownCountries} />
        <ProgressCircle name="South America" knownCountries={knownCountries} />
        <ProgressTotal knownCountries={knownCountries} />
      </div>
    </div>
  );
}
