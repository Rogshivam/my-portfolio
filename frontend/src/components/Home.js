import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8 sm:py-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://res.cloudinary.com/dn0bmsj49/image/upload/v1747996179/wkxus9cr05i2ncsvtb5d.jpg"
                alt="Profile"
                className="mx-auto h-48 w-48 sm:h-64 sm:w-64 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Hi, I'm Shivam Kumar</span>
              <span className="block text-indigo-600 dark:text-indigo-400 mt-2">Full Stack Developer</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 px-4">
              I build modern web applications using the latest frameworks and tools. I'm passionate about crafting clean, intuitive, and responsive user experiences that seamlessly combine performance with elegant design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-3 text-center bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3 text-center border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 