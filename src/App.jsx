import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myport from "./app/pages/myport";
import React from 'react'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Myport/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App