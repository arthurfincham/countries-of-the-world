import { permittedAnswers } from './permitted';

export default function List({ knownCountries }) {
  return (
    <div className="flex flex-wrap overflow-y-scroll scrollbar scrollbar-thumb-orange-200 scrollbar-track-gray-100 pr-2">
      {permittedAnswers
        // .filter((e) => e.picked === true)
        .sort()
        .map((item) => {
          return <span className="border-2 m-1 text-xs  text-center block p-1 rounded-lg shadow-md">{item.country.replace(' and ', ' & ')}</span>;
        })}
    </div>
  );
}
