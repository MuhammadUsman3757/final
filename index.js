require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require('./routes/authRoutes')

const App = express();
App.use(express.json());
App.use(cors("http://localhost:5000"));  // CORS settings can be customized if needed
App.use('/auth',authRoute)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
            App.listen(5000, () => {
                    console.log("Database connected and server is running on port 5000");
                });
            })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

// Global error handler
App.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});


// // server.js
// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const authRoute = require('./routes/authRoutes')
// // const productRoute = require('./routes/prouctRoutes')

// const app = express();
// app.use(express.json());
// app.use(cors("http://localhost:5000"));  // CORS settings can be customized if needed

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
// });

// const User = mongoose.model("User", userSchema);

// // Register API
// app.post("/api/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Error registering user", error });
//   }
// });

// // Login API
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, "secretkey");
//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     res.status(500).json({ message: "Error logging in", error });
//   }
// });

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         app.listen(5000, () => {
//             console.log("Database connected and server is running on port 5000");
//         });
//     })
//     .catch((error) => {
//         console.error("Database connection error:", error);
//     });

// // Global error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send("Something went wrong!");
// });
