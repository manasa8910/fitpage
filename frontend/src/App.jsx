import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scan from "./pages/Scan";
import Sub from "./pages/Sub";
import { dataTemp } from "./data";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataTemp);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scan data={data} />}></Route>
        <Route path="/:id" element={<Sub data={data} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
