import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import Makro from './pages/Makro';
import Yaguar from './pages/Yaguar';
import MaxiCarrefour from './pages/MaxiCarrefour';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="text-left min-h-screen w-full overflow-x-hidden">
          <Header />
          <div className="pt-18 min-h-screen-minus-18">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/create-event" element={
                <ProtectedRoute>
                  <CreateEvent />
                </ProtectedRoute>
              } />
              <Route path="/makro" element={<Makro />} />
              <Route path="/yaguar" element={<Yaguar />} />
              <Route path="/maxi-carrefour" element={<MaxiCarrefour />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
