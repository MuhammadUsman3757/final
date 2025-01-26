const express = require('express')
const Route = express.Router()
const AuthController = require('../controller/authController')


Route.post("/api/login", AuthController.login)
Route.post("/api/register", AuthController.register)

module.exports = Route;