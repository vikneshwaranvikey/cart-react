
import React from 'react'
import ListingProducts from './Components/ListingProducts'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddCart from "./Components/addCart";
import Navbars from './Components/NavBar/Navbars'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<ListingProducts />} />
          <Route path="/cart-react/" element={<ListingProducts />} />
          <Route path="/AddCart" element={<AddCart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;