import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-1">
        <h2 className="text-3xl font-bold text-center mb-6 mt-4 text-gray-800 dark:text-white">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Bachelor of Technology in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-300">Maharshi Dayanand University, 2023 - present</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">HARAYANA,INDIA</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'Tailwind CSS','C','C++','Python','Linux','PHP','Nextjs','Mysql','prisma','Postman','PostgreSQL','DevOps','Docker','YAML','Kubernetes','Jenkins','CI/CD'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Download Resume</h3>
              <a
                href="https://drive.google.com/file/d/1A4FnDAQeEGMFl9EN2kEyThgEWqn-r7Jh/view?usp=sharing"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 