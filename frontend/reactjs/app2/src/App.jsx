import React from 'react'

const App = () => {
  const heading = {
    color: "red",
    backgroundColor: "Yellow"
  }
  return (
    <div>
      Hello from ReactJs
      <small style={heading}>
        Small text
      </small>
      <h1 style={{backgroundColor: "tomato"}}>
        Main heading
      </h1>

      <div className='mt-3 p-3 text-white bg-teal-400'>
        Something is spooky | <button className='cursor-pointer hover:bg-gray-800 bg-gray-600 px-3 py-1 rounded shadow'>Click me</button>
      </div>
    </div>
  )
}

export default App

// Css type, tailwindcss
// components
// props
// children
// hooks (feature), third library
// global state management
