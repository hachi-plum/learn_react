import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import coffee from "./assets/coffee.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <h1>
          <FaHome style={{ color: "blue", marginRight: "10px" }} />
          Welcome to Our Website
        </h1>
        <p>
          <FaInfoCircle style={{ color: "green", marginRight: "10px" }} />
          This is a demo React application.
        </p>

        <img 
          src={coffee} 
          alt="Coffee" 
          style={{ width: "300px", borderRadius: "10px", marginTop: "20px" }} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
