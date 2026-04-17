import React from "react";
import { Link } from "react-router"; // Use "react-router-dom" if you are on v6

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="mb-8 max-w-md w-full">
        <img
          src="https://i.ibb.co.com/1VyvRsS/986fdadf-8dc2-4a46-aea7-8f9002ebaed0.gif"
          alt="404 Not Found"
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Oops! Page Not Found
      </h1>
      
      <p className="text-lg text-gray-600 mb-8 max-w-lg">
        We can't seem to find the page you're looking for. It might have been removed, renamed, or didn't exist in the first place.
      </p>
      
      <Link
        to="/"
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition-colors duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;