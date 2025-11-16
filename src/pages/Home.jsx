import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to DraftHub</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your ultimate fantasy football draft assistant with real-time analytics and expert insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-3">Draft Strategy</h2>
            <p className="text-gray-300 mb-4">
              Get personalized draft recommendations based on your league settings and draft position.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Draft Prep
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-3">Player Rankings</h2>
            <p className="text-gray-300 mb-4">
              Updated expert rankings with positional breakdowns and trend analysis.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Rankings
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-3">Draft History</h2>
            <p className="text-gray-300 mb-4">
              Analyze your past drafts and track your performance over time.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View History
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Latest News & Updates</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold text-white">Injury Report Update</h3>
              <p className="text-gray-300">Key players to monitor ahead of draft day</p>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold text-white">Rookie Watch List</h3>
              <p className="text-gray-300">Top rookie prospects for 2025 fantasy drafts</p>
              <span className="text-sm text-gray-400">1 day ago</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Draft Strategy Guide</h3>
              <p className="text-gray-300">Essential tips for maximizing your draft value</p>
              <span className="text-sm text-gray-400">3 days ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;