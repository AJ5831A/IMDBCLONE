import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Movies from './Movies'
import MovieReommendations from './MovieReommendations'
import WatchList from './WatchList'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/watchlist' element={<WatchList />}/>
          <Route path='/recommendations' element={<MovieReommendations />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
