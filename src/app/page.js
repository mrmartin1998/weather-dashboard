import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import CurrentWeather from '@/components/CurrentWeather'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <main className="p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <SearchBar />
          <CurrentWeather />
          {/* Forecast component will go here */}
        </div>
      </main>
    </div>
  )
}
