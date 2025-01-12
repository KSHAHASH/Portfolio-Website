// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Home from './components/Home';
import Resume from './components/Resume';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} /> {/* Default route */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
