"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}
