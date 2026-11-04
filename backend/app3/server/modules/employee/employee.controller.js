import Employee from "./employee.model.js"

export const allEmployees = async (req, res) => {
    const employees = await Employee.find({})
    return res.send({
        status: true,
        employees
    })
}

export const addEmployee = async (req, res) => {
    const { name, email, designation } = req.body

    if (!name || !email || !designation) {
        return res.send({
            status: false,
            message: "Provide all remaining fields"
        })
    }
    
    try {
        const emp = await Employee.findOne({ email })
        if (emp) {
            return res.send({
                status: false,
                message: "Employee already exist with this email"
            })
        }

        const newEmp = await Employee.create({ name, email, designation })
        if (newEmp) {
            return res.send({
                status: true,
                message: "Employee has been added"
            })
        } else {
            return res.send({
                status: false,
                message: "Failed to create employee"
            })
        }

    } catch (error) {
        console.log(error)
    }
}