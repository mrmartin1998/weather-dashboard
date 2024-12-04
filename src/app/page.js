'use client';
import { useWeather } from '@/hooks/useWeather';
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import CurrentWeather from '@/components/CurrentWeather'
import Forecast from '@/components/Forecast'
export default function Home() {
  const { weather, forecast, loading, error, fetchWeatherData } = useWeather();

  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <main className="p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <SearchBar onSearch={fetchWeatherData} loading={loading} />
          {error && (
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}
          {weather && <CurrentWeather data={weather} />}
          {forecast && <Forecast data={forecast} />}
        </div>
      </main>
    </div>
  )
}
