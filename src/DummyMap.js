import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';

export default function DummyMap() {
  new svgMap({
    targetElementID: 'svgMap',
    data: {
      data: {
        gdp: {
          name: 'GDP per capita',
          format: '{0} USD',
          thousandSeparator: ',',
          thresholdMax: 50000,
          thresholdMin: 1000,
        },
        change: {
          name: 'Change to year before',
          format: '{0} %',
        },
      },
      applyData: 'gdp',
      values: {
        AF: { gdp: 587, change: 4.73 },
        AL: { gdp: 4583, change: 11.09 },
        DZ: { gdp: 4293, change: 10.01 },
        // ...
      },
    },
  });

  return (
    <div id="svgMap">
      <h1>hello</h1>
    </div>
  );
}
