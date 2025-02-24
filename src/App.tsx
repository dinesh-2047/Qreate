import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Scanner from "./pages/Scanner";
import Report from "./pages/Report";
import QrCodes  from "./components/ui/QrCodes ";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative transition-all duration-300">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/report" element={<Report />} />
            <Route path="/qrcode" element={<QrCodes />} />
          </Routes>
        </main>
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
