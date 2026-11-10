import express from 'express'
import { allEmployees, addEmployee, deleteEmployee } from './employee.controller.js'

const employeeRouter = express.Router()

// http://localhost:3000/api/v1/employees
employeeRouter.get("/employees", allEmployees)
employeeRouter.post("/employees/add", addEmployee)
employeeRouter.delete("/employees/delete/:id", deleteEmployee)

export default employeeRouter