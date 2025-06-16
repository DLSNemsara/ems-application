import React, { useEffect, useState } from "react";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    deleteEmployee(id)
      .then(() => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="min-h-[calc(100vh-8rem)] w-full bg-gray-50 p-4 sm:p-6">
      <div className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
        <header className="px-4 sm:px-6 py-5 border-b border-gray-200 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Employee Directory
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                List of all registered employees in the system
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button
                onClick={addNewEmployee}
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Add Employee
              </Button>
            </div>
          </div>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Employee ID
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  First Name
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Name
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employees.map((employee, index) => (
                <tr
                  key={employee.id}
                  className={`hover:bg-gray-50 transition-colors duration-150 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.id}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.firstName}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {employee.lastName}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                    <a
                      href={`mailto:${employee.email}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {employee.email}
                    </a>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2">
                      <Button
                        className="bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-sm"
                        onClick={() => updateEmployee(employee.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Update
                      </Button>
                      <Button
                        className="bg-red-500 text-white hover:bg-red-600 transition-colors shadow-sm"
                        onClick={() => removeEmployee(employee.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
