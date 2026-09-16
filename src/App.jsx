import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <SmoothScroll />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/work"
          element={<Work />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/services"
          element={<Services/>}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer/>

    </>
  );
}

export default App;