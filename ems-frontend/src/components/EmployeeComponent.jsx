import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "@/services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = {
      ...errors,
    };
    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle() {
    if (id) {
      return (
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Update Employee
        </h2>
      );
    } else {
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Add Employee
      </h2>;
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {pageTitle()}

        <form className="space-y-6" onSubmit={saveOrUpdateEmployee}>
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={
                errors.firstName ? "border-red-500 focus:ring-red-500" : ""
              }
            />
            {errors.firstName && (
              <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={
                errors.lastName ? "border-red-500 focus:ring-red-500" : ""
              }
            />
            {errors.lastName && (
              <p className="text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                errors.email ? "border-red-500 focus:ring-red-500" : ""
              }
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeComponent;
