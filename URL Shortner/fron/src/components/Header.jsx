import React from 'react';
import Logout from '../buttons/Logout';
import { useSelector } from 'react-redux';

function Header() {
  const isAuthenticated = useSelector((state) => state.UserAuth.isAuthenticated);

  return (
    <header className="w-full flex items-center justify-between bg-amber-400 p-4 rounded-full">
      {/* Title Section */}
      <div className="flex-1 flex justify-center">
        <h1 className="text-2xl text-white font-semibold">URL Shortener</h1>
      </div>

      {/* Logout Section */}
      {isAuthenticated && (
        <div className="flex items-center">
          <Logout />
        </div>
      )}
    </header>
  );
}

export default Header;
