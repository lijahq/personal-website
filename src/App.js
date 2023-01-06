import Home from "./pages/Home.js";
import Resume from "./pages/Experience.js";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Article from "./pages/article.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";

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
          {/* <Route
            exact
            path="/blog/:id"
            render={(props) => <Article {...props} />}
          /> */}
          <Route path="/blog/:fileName" element={<Article />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
