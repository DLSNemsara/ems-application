import { useState } from "react";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import { HeaderComponent } from "./components/HeaderComponent.jsx";
import { FooterComponent } from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";
import AboutComponent from "./components/AboutComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <HeaderComponent />
        <main className="flex-grow">
          <Routes>
            {/* // http://localhost:5173 */}
            <Route path="/" element={<ListEmployeeComponent />} />
            {/* // http://localhost:5173/employees */}
            <Route path="/employees" element={<ListEmployeeComponent />} />
            {/* // http://localhost:5173/add-employee */}
            <Route path="/add-employee" element={<EmployeeComponent />} />
            {/* // http://localhost:5173/edit-employee/1 */}
            <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
