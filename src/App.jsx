import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import Hire from "./components/Hire";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Showcase />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/hire" element={<Hire />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
