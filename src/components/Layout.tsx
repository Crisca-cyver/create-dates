import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen w-full max-w-full bg-white">
      <main className="min-h-screen w-full p-0 m-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 