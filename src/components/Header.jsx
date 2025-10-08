import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      {/* First row - Navigation */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-6">
          <a href="/" className="text-xl font-bold">DraftHub</a>
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/lineup" className="hover:text-blue-400">Lineup</a>
            <a href="/players" className="hover:text-blue-400">Players</a>
            <a href="/rankings" className="hover:text-blue-400">Rankings</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Second row - Conditional rendering based on page */}
      {!isHomePage && (
        <div className="flex flex-wrap items-center justify-between p-4 bg-gray-800">
          {/* Filters - Hidden on home page */}
          <div className="flex flex-wrap items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <label className="mr-2 text-sm">Position:</label>
              <select className="bg-gray-700 text-white rounded px-2 py-1">
                <option>All</option>
                <option>QB</option>
                <option>RB</option>
                <option>WR</option>
                <option>TE</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="mr-2 text-sm">Team:</label>
              <select className="bg-gray-700 text-white rounded px-2 py-1">
                <option>All</option>
                <option>Team A</option>
                <option>Team B</option>
              </select>
            </div>
          </div>
          
          {/* Positional/Lineup switcher - Hidden on home page */}
          <div className="flex items-center mb-2 md:mb-0">
            <button className="px-3 py-1 bg-blue-600 rounded-l">Positional</button>
            <button className="px-3 py-1 bg-gray-700 rounded-r">Lineup</button>
          </div>
        </div>
      )}
      
      {/* Home page specific row - Only shown on home page */}
      {isHomePage && (
        <div className="flex flex-wrap items-center justify-between p-4 bg-gray-800">
          {/* Username input and league selection - Always visible on home page */}
          <div className="flex flex-wrap items-center space-x-4 w-full md:w-auto">
            <div className="flex-1 min-w-[150px] md:min-w-[200px]">
              <label className="block text-sm mb-1">Username</label>
              <input 
                type="text" 
                placeholder="Enter username" 
                className="w-full bg-gray-700 text-white rounded px-3 py-2"
              />
            </div>
            <div className="flex-1 min-w-[150px] md:min-w-[200px]">
              <label className="block text-sm mb-1">League</label>
              <select className="w-full bg-gray-700 text-white rounded px-3 py-2">
                <option>League 1</option>
                <option>League 2</option>
                <option>League 3</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;