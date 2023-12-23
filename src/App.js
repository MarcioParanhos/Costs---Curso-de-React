import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/home";
import Company from "./components/pages/company";
import NewProject from "./components/pages/NewProject";
import Contact from "./components/pages/Contact";
import Container from "./components/layout/container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container><Home /></Container>}/>
          <Route path="/company" element={<Container><Company /></Container>}/>
          <Route path="/contact" element={<Container> <Contact /></Container>}/>
          <Route path="/newproject" element={<Container><NewProject /></Container> } />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
