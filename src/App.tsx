import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import OnePageDemo from './pages/OnePageDemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnePageDemo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </Router>
  );
}

export default App;
