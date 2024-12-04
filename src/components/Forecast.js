export default function Forecast({ data }) {
  if (!data) return null;

  // Group forecast by day and get daily data
  const dailyData = data.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    if (!acc[date]) {
      acc[date] = {
        temp_max: item.main.temp_max,
        temp_min: item.main.temp_min,
        icon: item.weather[0].icon,
        description: item.weather[0].description
      };
    }
    return acc;
  }, {});

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mb-4">7-Day Forecast</h2>
        <div className="flex overflow-x-auto gap-4 pb-4">
          {Object.entries(dailyData).map(([date, data]) => (
            <div key={date} className="card bg-base-200 shadow-md min-w-[200px]">
              <div className="card-body p-4">
                <h3 className="card-title text-lg">{date}</h3>
                <div className="flex items-center gap-2">
                  <img 
                    src={`https://openweathermap.org/img/wn/${data.icon}.png`}
                    alt={data.description}
                    width="32"
                    height="32"
                  />
                  <span className="text-2xl font-bold">
                    {Math.round(data.temp_max)}°
                  </span>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span>High: {Math.round(data.temp_max)}°</span>
                  <span>Low: {Math.round(data.temp_min)}°</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 