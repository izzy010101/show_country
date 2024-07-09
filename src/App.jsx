import { useState, useEffect } from 'react'
import './App.css'
import ShowCountry from './components/ShowCountry'


function App() {

  const [data, setData] = useState('')

  const [name, setName] = useState('')

  useEffect(() => {

  })

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => response.json())
      .then(data => console.log(data))

  }


  return (
    <>
      <div className='h-screen content-center'>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input name="name" onChange={e => setName(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a country..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>

        <h1 className='content-center'>{name}</h1>


        <ShowCountry />
      </div>
    </>
  )
}

export default App