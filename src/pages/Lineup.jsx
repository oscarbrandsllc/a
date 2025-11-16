import React from 'react';
import Header from '../components/Header';

const Lineup = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">My Lineup</h1>
          <p className="text-gray-300">Manage your starting lineup and bench players</p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Starting Lineup</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Save Lineup
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">
                Reset
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['QB', 'RB1', 'RB2', 'WR1', 'WR2', 'TE', 'FLEX', 'K', 'DEF'].map((position) => (
              <div key={position} className="bg-gray-700 rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white">{position}</span>
                  <button className="text-blue-400 hover:text-blue-300 text-sm">
                    Edit
                  </button>
                </div>
                <div className="h-16 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-gray-400">Player Name</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Bench Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((player) => (
              <div key={player} className="bg-gray-700 rounded p-3 flex items-center">
                <div className="bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-gray-400">P</span>
                </div>
                <div>
                  <div className="font-medium text-white">Player {player}</div>
                  <div className="text-sm text-gray-400">Position - Team</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lineup;