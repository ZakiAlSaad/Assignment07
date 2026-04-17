import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 text-center">
      <div className="max-w-xl">
        {/* Large gradient text for the 404 */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          You've ventured into the unknown
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
          The link you clicked may be broken or the page may have been removed. Let's get you back to familiar territory.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-200 hover:scale-105 transition-all duration-200"
        >
          Take Me Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;