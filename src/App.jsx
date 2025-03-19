import "./App.css";
import MovieRecommendation from "./Components/MovieReommendations";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import { useState } from "react";
function App() {

  const [watchList , setWatchList] = useState([])


  function handleAddToWatchList(movieObj){
    const updatedWatchlist = [...watchList , movieObj]
    setWatchList(updatedWatchlist)
    console.log(updatedWatchlist)
  }  

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies handleAddtoWatchList={handleAddToWatchList} watchlist={watchList}/>
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/recommend" element={<MovieRecommendation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;