import './App.css';
import { About } from './pages/AboutPage';
import {Home} from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Offers } from './pages/Offers';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Offers" element={<Offers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
