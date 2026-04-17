import React from "react";
import { Link } from "react-router"; // Use "react-router-dom" if you are on v6

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-3xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-800">
        
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-400 text-sm ml-2 flex-1 text-center pr-10">
            bash - hypnotixstudio_root
          </span>
        </div>
        
        <div className="p-6 md:p-8 text-green-400 text-sm md:text-base leading-relaxed">
          <p className="mb-2">
            <span className="text-blue-400 font-bold">root@varendra-sys</span>:
            <span className="text-purple-400">/dev/workspace/025</span>$ ./locate_route.sh --path current
          </p>
          
          <p className="mb-2 text-yellow-300">
            [+] Initializing search protocols...
          </p>
          <p className="mb-2 text-yellow-300">
            [+] Scanning directories...
          </p>
          
          <p className="mb-2 mt-4 text-red-500 font-bold text-lg">
            FATAL ERROR: 404
          </p>
          <p className="mb-6 text-gray-300">
            System response: Exception caught. The requested URL was not found on this server. The matrix seems to be missing a node, or the route has been depreciated.
          </p>
          
          <div className="mb-8 border-l-2 border-gray-700 pl-4">
            <p className="mb-3 text-gray-500">/* Available Executable Commands */</p>
            <ul className="list-none space-y-3 text-green-300">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">&gt;</span> 
                <Link to="/" className="hover:text-white hover:underline transition-colors">
                  cd /home
                </Link>
                <span className="text-gray-600 text-xs ml-2">// Return to main dashboard</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">&gt;</span> 
                <button onClick={() => window.history.back()} className="hover:text-white hover:underline transition-colors text-left">
                  history | tail -n 1
                </button>
                <span className="text-gray-600 text-xs ml-2">// Go back to previous page</span>
              </li>
            </ul>
          </div>

          {/* Blinking Cursor Prompt */}
          <div className="flex items-center mt-4">
            <span className="text-blue-400 font-bold">root@varendra-sys</span>:
            <span className="text-purple-400">~</span>$ 
            <span className="w-2.5 h-5 bg-green-400 ml-2 animate-pulse inline-block align-middle"></span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFound;