import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';


function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
