# Student & Course Management System

This is a backend system developed for the SCIQUS assessment. It manages students and courses using **Node.js**, **Express**, and **SQLite** (via Sequelize ORM). The system supports full CRUD (Create, Read, Update, Delete) operations.

## 🚀 Features
* **Database Design:** Relational Schema with Foreign Keys (Student -> Course).
* **Validation:** Prevents assigning students to non-existent courses.
* **Data Retrieval:** Fetches students along with their associated course details (SQL Join).
* **Role-Based Structure:** Includes logic for Admin/Student roles.
* **Zero-Config:** Uses SQLite for an instant, serverless database setup.

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** SQLite (SQL-based)
* **ORM:** Sequelize
* **Language:** JavaScript

## ⚙️ How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/sciqus-backend-task.git](https://github.com/YOUR_USERNAME/sciqus-backend-task.git)
    cd sciqus-backend-task
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start the Server**
    ```bash
    npm run dev
    ```
    * The server will run at `http://localhost:3000`.
    * The database file `database.sqlite` will be created automatically.

## 🗄️ Database Schema

**1. Courses Table**
| Column | Type | Description |
| :--- | :--- | :--- |
| `course_id` | Integer (PK) | Auto-increment ID |
| `course_name` | String | Name of the course |
| `course_code` | String (Unique)| Unique code (e.g., FS-101) |
| `course_duration`| Integer | Duration in months |

**2. Students Table**
| Column | Type | Description |
| :--- | :--- | :--- |
| `student_id` | Integer (PK) | Auto-increment ID |
| `name` | String | Student Name |
| `email` | String (Unique)| Login Email |
| `role` | Enum | 'admin' or 'student' |
| `course_id` | Integer (FK) | Links to `Courses` table |

## 🧪 API Endpoints

### 1. Courses
* **Create Course**
    * `POST /api/courses`
    * Body: `{ "course_name": "DevOps", "course_code": "DO-101", "course_duration": 6 }`
* **Get All Courses**
    * `GET /api/courses`

### 2. Students
* **Register Student**
    * `POST /api/students/register`
    * Body: `{ "name": "Rahul", "email": "rahul@test.com", "password": "123", "course_id": 1 }`
* **Get All Students (with Course info)**
    * `GET /api/students`
* **Update Student Details**
    * `PUT /api/students/:id`
    * Body: `{ "name": "Rahul Updated", "course_id": 2 }`
* **Delete Student**
    * `DELETE /api/students/:id`

## 📸 Testing
All endpoints have been tested using **Postman**.
* **Create/Read:** Verified correct data storage and retrieval.
* **Update/Delete:** Verified correct modification and removal of records.
* **Validation:** Confirmed that assigning a student to an invalid `course_id` returns an error.

---
**Author:** Diya Tank
