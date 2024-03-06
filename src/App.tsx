import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App:React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio-fe-service' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
