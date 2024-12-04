export default function CurrentWeather({ data }) {
  if (!data) return null;

  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity },
    weather: [{ description, icon }],
    wind: { speed }
  } = data;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="card-title text-2xl">{name}, {country}</h2>
            <div className="flex items-center gap-4">
              <img 
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
                width="64"
                height="64"
              />
              <div className="text-5xl font-bold">{Math.round(temp)}°C</div>
            </div>
            <div className="text-xl capitalize">{description}</div>
          </div>
          
          <div className="stats stats-vertical shadow">
            <div className="stat">
              <div className="stat-title">Humidity</div>
              <div className="stat-value">{humidity}%</div>
            </div>
            <div className="stat">
              <div className="stat-title">Wind</div>
              <div className="stat-value">{Math.round(speed)} km/h</div>
            </div>
            <div className="stat">
              <div className="stat-title">Feels Like</div>
              <div className="stat-value">{Math.round(feels_like)}°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 