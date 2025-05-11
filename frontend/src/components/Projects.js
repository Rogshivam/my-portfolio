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
                  href="youtube-frontend-d3ou.onrender.com/" 
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
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1746998202/nux579zc214ygrge39b7.png"
                alt="Project 2"
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
          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1746998202/bszpuuqoyc1db2lshwl9.png"
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
          {/* Project 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1746998202/o6k37esd4jkbvk0kssz4.png"
                alt="Project 4"
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
          
        </div>
      </div>
    </div>
  );
};

export default Projects; 