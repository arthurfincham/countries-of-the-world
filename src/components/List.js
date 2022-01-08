export default function List({ knownCountries }) {
  return (
    <div className="flex flex-wrap overflow-y-scroll scrollbar scrollbar-thumb-orange-900 scrollbar-thin scrollbar-track-orange-50 pr-2 py-2">
      {knownCountries
        .filter((e) => e.picked === true)
        .sort()
        .map((item) => {
          return (
            <span className="border-[.005em] border-black m-1 text-xs  text-center block p-1 rounded-lg shadow-md ">
              {item.country.replace(' and ', ' & ')}
            </span>
          );
        })}
    </div>
  );
}
