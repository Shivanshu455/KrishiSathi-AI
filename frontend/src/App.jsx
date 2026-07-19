import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ComponentsDemo from "./pages/ComponentsDemo";
import FarmAnalysis from "./pages/FarmAnalysis";
import CropPlanner from "./pages/CropPlanner";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/components"
          element={<ComponentsDemo />}
        />

        <Route
          path="/analysis"
          element={<FarmAnalysis />}
        />
        <Route
          path="/crop-planner"
          element={<CropPlanner />}
        />  
      </Routes>

      <Footer />
    </>
  );
}

export default App;