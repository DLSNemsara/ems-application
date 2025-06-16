import React from "react";

const AboutComponent = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] w-full bg-gray-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden">
        <header className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800">About</h2>
          <p className="mt-1 text-sm text-gray-500">
            Learn more about our Employee Management System
          </p>
        </header>

        <div className="p-4 sm:p-6 space-y-6">
          {/* Overview Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Overview</h3>
            <p className="text-gray-600 leading-relaxed">
              The Employee Management System is a modern web application designed to streamline
              the process of managing employee information. Built with React and Spring Boot,
              it provides a robust and user-friendly interface for handling employee data
              efficiently.
            </p>
          </section>

          {/* Features Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <h4 className="font-medium text-gray-800">Employee Management</h4>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Add, update, and remove employee records with ease. Maintain a comprehensive
                  database of employee information.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <h4 className="font-medium text-gray-800">Data Organization</h4>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Efficiently organize and display employee data in a clean, sortable table
                  format with quick access to all information.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h4 className="font-medium text-gray-800">Email Integration</h4>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Direct email access to employee contacts with a single click, making
                  communication more efficient.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <h4 className="font-medium text-gray-800">Secure Access</h4>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Built with security in mind, ensuring that employee data is protected and
                  accessible only to authorized personnel.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Technology Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-medium text-gray-800">React</h4>
                <p className="text-sm text-gray-600">Frontend Framework</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-medium text-gray-800">Spring Boot</h4>
                <p className="text-sm text-gray-600">Backend Framework</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-medium text-gray-800">Tailwind CSS</h4>
                <p className="text-sm text-gray-600">Styling Framework</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <h4 className="font-medium text-gray-800">REST API</h4>
                <p className="text-sm text-gray-600">API Architecture</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                For any inquiries or support, please visit our{" "}
                <a
                  href="https://github.com/DLSNemsara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  GitHub repository
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent; 