import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceWebDevelopment from "./pages/ServiceWebDevelopment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/servicewebdevelopment"
        element={<ServiceWebDevelopment />}
      />
    </Routes>
  );
}

export default App;
