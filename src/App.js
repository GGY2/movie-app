import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cinema from './Cinema';
import React, { useState } from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';

function App() {
  
  const [watchList, setWatchlist] = useState([]);

  const addToWatchlist = (posterURL, description) => {
    setWatchlist([{url: posterURL, description: description}]);
};

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home 
        addToWatchlist={addToWatchlist}
        />} />
        <Route path="/cinema" element={<Cinema 
        watchList={watchList}
        />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
