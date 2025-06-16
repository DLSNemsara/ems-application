# EMS Application

> A full-stack **Employee Management System** built with **Spring Boot**, **React**, **MySQL**, and **TailwindCSS**.

This monorepo project allows you to manage employees, roles, and related HR operations through a modern frontend and robust backend API. Designed for modularity, scalability, and clarity.

---

## 🧱 Tech Stack

| Layer      | Technology              |
|------------|------------------------|
| Frontend   | React + TailwindCSS    |
| Backend    | Spring Boot (Java)     |
| Database   | MySQL                  |
| Styling    | TailwindCSS            |
| Build Tool | Maven                  |

---

## 📁 Project Structure

```
ems-application/
├── ems-backend/       # Spring Boot backend (REST API)
├── ems-frontend/      # React frontend (UI)
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/DLSNemsara/ems-application.git
cd ems-application
```

---

### 2️⃣ Backend Setup (`ems-backend`)

**Requirements:**

* Java 17+
* Maven
* MySQL server running

**Steps:**

1. Create a MySQL database:

   ```sql
   CREATE DATABASE ems_db;
   ```

2. Configure your DB credentials in `ems-backend/src/main/resources/application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ems_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```

3. Run the backend:

   ```bash
   cd ems-backend
   ./mvnw spring-boot:run
   ```

---

### 3️⃣ Frontend Setup (`ems-frontend`)

**Requirements:**

* Node.js + npm

**Steps:**

```bash
cd ems-frontend
npm install
npm run dev
```

Frontend will run by default at: `http://localhost:5173`

---

## 📡 API Overview

Spring Boot exposes a RESTful API. Example base endpoints:

Base URL: `/api/employees`

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | `/api/employees`   | Get all employees         |
| GET    | `/api/employees/{id}` | Get employee by ID    |
| POST   | `/api/employees`   | Create new employee       |
| PUT    | `/api/employees/{id}` | Update employee by ID |
| DELETE | `/api/employees/{id}` | Delete employee by ID |

---

## 🧪 API Testing

The backend API has been manually tested using:

- [Postman](https://www.postman.com/)

Test coverage includes:

- All CRUD endpoints
- Proper HTTP status codes
- Valid request/response JSON payloads

> ⚙️ Future enhancement: Add automated tests using JUnit and Spring Boot Test.

---

## 🎨 UI Features

* Dashboard-style layout
* Responsive design with TailwindCSS
* Employee CRUD operations
* Modern component structure

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Sinel Nemsara**  
GitHub: [@DLSNemsara](https://github.com/DLSNemsara)

---

## 🧭 Future Improvements

* JWT Authentication (Spring Security)
* Docker support for full-stack containerization
* Role-based access control
* Pagination & search functionality


If you want to verify or expand on any specific section (like API endpoints or setup), let me know!  
You can review the backend structure here: [ems-backend](https://github.com/DLSNemsara/ems-application/tree/main/ems-backend) and the frontend here: [ems-frontend](https://github.com/DLSNemsara/ems-application/tree/main/ems-frontend).
