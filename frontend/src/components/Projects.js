import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1746998202/o56hpqlsuischsvpepaf.png"
                alt="Project 1"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Youtube Clone
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              A full-stack youtube clone with user authentication and mongodb integration.
              Built with MERN stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://youtube-frontend-d3ou.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/youtube.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1752253392/Screenshot_20250711_223243_wo45kw.png"
                alt="Project 2"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                NETHOST
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              A full-stack web application designed for hosting and managing user-generated posts with authentication features.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://nethost.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/NETHOST.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>


          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1746998202/nux579zc214ygrge39b7.png"
                alt="Project 3"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Spotify Clone
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                A full-stack spotify clone with modern web interface for entertainment  news and podcast releases
                Built with React and Node.js.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://spotify-clone-hskh.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/spotify-clone.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1746998202/bszpuuqoyc1db2lshwl9.png"
                alt="Project 4"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Blog Website
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                A full-stack Blog website having modern web interface with user authentication and mongodb integration.
                Built with MERN stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://blog-website-pga1.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/blog_website.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1752652888/Screenshot_20250716_122600_ka9bsx.png"
                alt="Project 5"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                NEWZILLA
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                Newzilla is a simple web app that fetches and displays news from multiple sources, offering users a centralized place to read the latest headlines.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://newzilla.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/Newz-Aggregator.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1752651468/Screenshot_20250716_130329_ragzht.png"
                alt="Project 6"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Chatix
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                lightweight, real time chat application built with Node.js, Express, and Socket.io. It provides instant messaging with timestamps ,typing indicators, encryption and responsive web interface.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://chatix-s6ot.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/chating-room.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 7 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1747030554/brle6nvp1qkgyfatkabh.png"
                alt="Project 7"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Wheather 
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                It is a simple weather application. It allows users to search for weather information by city or grant location access to get local weather updates..
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://weather-analyzer-five.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/weather-analyzer.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* Project 8 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1747993550/w7s6kmx7wvw7g6srtq5e.png"
                alt="Project 8"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Real-Time Chat
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                It is a real time chat application built using React, Node.js, and Socket.io. It allows users to join chat rooms and exchange messages instantly through WebSocket connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://realtime-chatapp-3nwt.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/realtime-chatapp.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* Project 9 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1746998202/o6k37esd4jkbvk0kssz4.png"
                alt="Project 9"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Taskmanager
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                A backend only taskmanager with modern web interface for interactive UI with easy to use Built with Expree and Node.js.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://task-manager-3abx.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/task-manager.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* Project 10 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1747993550/ngp9poxumuox9ixcdjtc.png"
                alt="Project 8"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Racing Game
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                The site racing-game-rose.vercel.app hosts a simple browser-based racing game with basic controls and score tracking. It's likely a personal or demo project built using standard web technologies like HTML5 and JavaScript.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://racing-game-rose.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/Racing-game.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 11 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1747993551/yskiqllqkzj9bz5z4ufq.png"
                alt="Project 9"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                Razorpay UI Clone
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                This is a simple and interactive to-do list web application. It allows users to add tasks, helping them stay organized and track their activities. The application is built using HTML, CSS, and JavaScript.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://razor-pay-repo.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/razor_pay-repo.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          {/* Project 12 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1747993550/c1g4qjhnwwgxzk6k7yjs.png"
                alt="Project 10"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                TO-DO List
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                This is a simple and interactive to-do list web application. It allows users to add tasks, helping them stay organized and track their activities. The application is built using HTML, CSS, and JavaScript.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://rogshivam.github.io/TODO-LIST/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  View Demo
                </a>
                <a 
                  href="https://github.com/Rogshivam/TODO-LIST.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors duration-200"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Projects; 