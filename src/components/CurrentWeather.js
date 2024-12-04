export default function CurrentWeather() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left side - Main weather info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="card-title text-2xl">London, UK</h2>
            <div className="text-5xl font-bold">21°C</div>
            <div className="text-xl">Partly Cloudy</div>
          </div>
          
          {/* Right side - Weather details */}
          <div className="stats stats-vertical shadow">
            <div className="stat">
              <div className="stat-title">Humidity</div>
              <div className="stat-value">65%</div>
            </div>
            <div className="stat">
              <div className="stat-title">Wind</div>
              <div className="stat-value">12 km/h</div>
            </div>
            <div className="stat">
              <div className="stat-title">Feels Like</div>
              <div className="stat-value">19°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 