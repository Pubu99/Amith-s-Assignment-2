import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <div className="ml-64 flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
