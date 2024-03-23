import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myport from "./app/pages/myport";
import Secrete from "./app/pages/secrete";
import React from 'react'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Myport/>}/>
        <Route path="/secrete05090806" element={<Secrete/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App