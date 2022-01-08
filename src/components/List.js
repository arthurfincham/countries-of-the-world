export default function List({ knownCountries }) {
  return (
    <ul>
      {knownCountries
        .filter((e) => e.picked === true)
        .sort()
        .map((item) => {
          return <li>{item.country}</li>;
        })}
    </ul>
  );
}
