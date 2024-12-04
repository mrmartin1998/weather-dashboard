export default function SearchBar() {
  return (
    <div className="form-control w-full max-w-xl mx-auto">
      <div className="join w-full">
        <input 
          type="text" 
          placeholder="Enter city name..." 
          className="input input-bordered join-item flex-1" 
        />
        <button className="btn btn-primary join-item">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
            />
          </svg>
          Search
        </button>
      </div>
    </div>
  )
} 