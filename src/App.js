import Home from "./pages/Home.js";
import Resume from "./pages/Resume.js";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="hello">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
