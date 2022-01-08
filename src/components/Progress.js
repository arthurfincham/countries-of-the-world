export default function Progress({ knownCountries }) {
  const percent = Math.round((knownCountries.length / 205) * 100);
  const progressWidth = {
    width: `${percent}%`,
    minWidth: '3%',
  };
  return (
    <div className="absolute bottom-0 w-full">
      <div className="h-7 shadow-md bg-gray-100 m-2  rounded-lg overflow-hidden relative border-2 border-black ">
        <div className="h-6 text-right bg-orange-900 rounded-r-lg " style={progressWidth}>
          <span className="text-white font-bold p-2 ">{`${knownCountries.length}`}</span>
        </div>
        <span className="absolute right-0 italic top-0 text-orange-900 font-bold mx-2">205</span>
      </div>
    </div>
  );
}
