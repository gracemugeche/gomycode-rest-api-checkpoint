# 🧩 REST API with Express & Mongoose

## 📚 Overview

This project demonstrates the creation of a simple RESTful API using **Node.js**, **Express**, **Mongoose**, and **MongoDB**. It allows full CRUD (Create, Read, Update, Delete) operations on user data stored in a MongoDB database. The API is structured for clarity and maintainability, following standard best practices in backend development.

This is a checkpoint project for the GoMyCode Full-Stack program.

---

## 🚀 Features

- 🌐 Express server with environment-based configuration using `.env`
- 🗃️ Mongoose schema and model setup (`User`)
- 🔁 CRUD API endpoints:
  - `GET /users` → Get all users
  - `POST /users` → Add a new user
  - `PUT /users/:id` → Update a user by ID
  - `DELETE /users/:id` → Delete a user by ID
- 🧪 API tested using **Thunder Client** inside VS Code
- 📦 MongoDB connection using **Mongoose**

---

## 📁 Project Structure

```

rest-api-checkpoint/
│
├── config/
│   └── .env             # Environment variables (Mongo URI, Port)
│
├── models/
│   └── User.js          # Mongoose schema and model
│
├── server.js            # Main server file with route logic
├── package.json         # Project dependencies and scripts

````

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/gracemugeche/gomycode-rest-API-checkpoint.git
   cd gomycode-rest-API-checkpoint
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your environment variables in `.env` (at the project root):

   ```env
   MONGODB_URI=mongodb://localhost:27017/rest-api-db
   PORT=5000
   ```

4. Run the server:

   ```bash
   npm run dev
   ```

5. Test endpoints using **Thunder Client** or Postman.

---

## 🧪 Example Request (POST /users)

```json
{
  "name": "Grace",
  "email": "grace@example.com",
  "age": 24
}
```

---

## 👩‍💻 Author

**Grace Wambui Mugeche**
📧 [gracemugeche@gmail.com](mailto:gracemugeche@gmail.com)
🌐 [GitHub - @gracemugeche](https://github.com/gracemugeche)

---

## 🏁 Conclusion

This project provides a solid foundation for building scalable REST APIs using Express and MongoDB with Mongoose. It covers environment configuration, structured folder setup, database interaction, and practical testing methods using Thunder Client. It’s an essential step toward building full-stack web applications.

