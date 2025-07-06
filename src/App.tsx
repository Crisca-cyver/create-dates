import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import Makro from './pages/Makro';

function App() {
  return (
    <Router>
      <div className="text-left min-h-screen w-full overflow-x-hidden">
        <Header />
        <div className="pt-18 min-h-screen-minus-18">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/makro" element={<Makro />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
