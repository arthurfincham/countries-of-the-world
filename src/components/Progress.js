export default function Progress({ knownCountries }) {
  const percent = Math.round((knownCountries.length / 205) * 100);
  const progressWidth = {
    height: `${percent}%`,
    minHeight: '4%',
  };
  return (
    <div className="absolute h-[95%] right-4" data-testid="progressBar">
      <div className="relative w-8 h-full bg-gray-100 border-2 border-black rounded-lg">
        <div
          style={progressWidth}
          className="absolute bottom-0 block w-full pt-1 font-bold text-center text-white bg-orange-900 rounded-md"
          id="progressCount"
        >
          {knownCountries.length}
        </div>
      </div>
    </div>
  );
}
