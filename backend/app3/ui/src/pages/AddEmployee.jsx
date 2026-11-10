import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout.jsx'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ADD_EMPLOYEE_API } from '../utils/server_apis.js'
import { useForm } from 'react-hook-form'

const AddEmployee = () => {
  const [ loading, setLoading ] = useState(false)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const handleAddEmployee = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(ADD_EMPLOYEE_API, data)
      if (response.data.status == true) {
        toast.success(response.data.message)
        navigate("/employees", { replace: true })
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("Internal server error")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <WebLayout>
      <div className='px-6 py-10'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='text-xl font-bold'>Add new employee</div>
            <div className='text-gray-500 text-sm'>
              Fill the box to get new record
            </div>
          </div>

          <Link
            className='bg-blue-600 text-white shadow-sm rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200'
            to={"/employees"}>View all</Link>
        </div>

        {/* table */}
        <div className="mt-5 rounded-xl max-w-xl bg-white p-5 shadow-md">

          <div className="w-full overflow-x-auto">
            <form className='p-1' onSubmit={handleSubmit(handleAddEmployee)}>
              <div className='grid grid-cols-12 gap-5'>
                <div className="col-span-12">
                  <label htmlFor="">Full name</label>
                  <input { ...register("name") }
                  className='bg-gray-100 w-full px-5 py-3 rounded-full mt-1 focus:outline-blue-600'
                   type="text" placeholder='e.g: Carla clark' />
                </div>
                <div className="col-span-12">
                  <label htmlFor="">Email</label>
                  <input { ...register("email") }
                  className='bg-gray-100 w-full px-5 py-3 rounded-full mt-1 focus:outline-blue-600'
                   type="email" placeholder='e.g: cc@gmail.com' />
                </div>
                <div className="col-span-12">
                  <label htmlFor="">Designation</label>
                  <input { ...register("designation") }
                  className='bg-gray-100 w-full px-5 py-3 rounded-full mt-1 focus:outline-blue-600'
                   type="text" placeholder='Developer' />
                </div>
                <div className="col-span-12">
                  <button
                  disabled={loading}
                  className='disabled:cursor-not-allowed disabled:bg-blue-300 cursor-pointer hover:shadow bg-blue-600 text-white shadow-sm rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200'
                  >
                    { loading ? "Please wait, loading..." : "Create employee" }
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </WebLayout>
  )
}

export default AddEmployee