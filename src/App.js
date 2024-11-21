import Home from "./pages/Home.js";
import Resume from "./pages/Experience.js";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Article from "./pages/article.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import NarrativeTheology from "./pages/NarrativeTheology";
import ApproachToSalvation from "./pages/ApproachToSalvation.js";
import NonInferentialRichness from "./pages/NonInferentialRichness.js";
import DivineHiddenness from "./pages/DivineHiddenness.js";
import SystematicTheology from "./pages/SystematicTheology.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="hello">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:fileName" element={<Article />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/narrative-theology" element={<NarrativeTheology />} />
          <Route
            path="/narrative-theology/approach-to-salvation"
            element={<ApproachToSalvation />}
          />
          <Route
            path="/narrative-theology/non-inferential-richness"
            element={<NonInferentialRichness />}
          />
          <Route
            path="/narrative-theology/divine-hiddenness"
            element={<DivineHiddenness />}
          />
          <Route
            path="/narrative-theology/systematic-theology"
            element={<SystematicTheology />}
          />
          <Route
            path="/narrative-theology/*"
            element={<Navigate replace to="/narrative-theology" />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
