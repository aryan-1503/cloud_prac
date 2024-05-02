import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [name,setName] = useState("")
    const [rollno,setRollno] = useState("")
    const [course,setCourse] = useState("")
  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          const response = await fetch("http://localhost:3000/api")
          const data = await response.json()
          console.log(data)
          setName(data.name)
          setRollno(data.rollno)
          setCourse(data.course)
      } catch (e) {
          const response = "Internal Server Error"
      }
  }
  return (
    <>
        <div className="name">Name : {name} </div>
        <div className="rollno">Roll no : {rollno}</div>
        <div className="course">Course : {course}</div>
        <form onSubmit={handleSubmit}>
            <button type="submit" >Get Data</button>
        </form>

    </>
  )
}

export default App
