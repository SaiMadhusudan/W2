import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Connect from './components/Connect';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/connect" element={<Connect/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
