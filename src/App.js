import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/home";
import Company from "./components/pages/company";
import NewProject from "./components/pages/NewProject";
import Contact from "./components/pages/Contact";
import Container from "./components/layout/container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Routes>
        <Route path="/" element={<Container><Home /></Container>}/>
        <Route path="/company" element={<Container><Company /></Container>}/>
        <Route path="/contact" element={<Container> <Contact /></Container>}/>
        <Route path="/newproject" element={<Container><NewProject /></Container> } />
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
