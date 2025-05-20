# Minor Project: OutPass Management System

A full-stack web application to manage hostel outing requests with role-based access for Students, Parents, and Wardens.

---

## Project Structure

- **frontend/** — React.js frontend application (user interface)
- **backend/** — Node.js + Express backend API server

---

## Features

- Students can submit outing requests.
- Parents can approve or reject requests.
- Wardens (employees) can view pending requests and approve or reject them.
- JWT-based Authentication & Authorization.
- Real-time notifications via SMS, Email, and WhatsApp (planned).
- QR Code and OTP verification for check-in/out (planned).

---

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm (comes with Node.js)
- MongoDB or PostgreSQL database (depending on your backend configuration)

---

### Setup Backend

1.Navigate to backend folder:
   cd backend
   
2.Install dependencies 
   npm install
   
3.Create a .env file with the following environment variables (example):
  PORT=5000
  DB_URI=your_database_connection_string
  JWT_SECRET=your_jwt_secret_key
  
4.Start the backend server:
   npm start

 ---

 ### Setup Frontend

 1.Navigate to frontend folder:
   cd frontend

 2.Install dependencies:
   npm install  

 3.Start the React development server:
   npm start

 4. Open your browser and go to http://localhost:3000

---

### How to Use

Login as Student, Parent, or Employee.
Students submit outpass requests.
Parents approve or reject their child's requests.
wardens approve or reject pending requests from students.
Logout when done.

---

### Notes

node_modules/ folders are excluded from the Git repository (tracked via .gitignore).
Make sure to configure your database connection string correctly in the backend .env file.
You can expand the project by adding notification services and QR code verification.

---

### License

This project is licensed under the MIT License.

---

### Contact

Created by sprushikareddy.
Feel free to open issues or submit pull requests on GitHub.


   
