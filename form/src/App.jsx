import { useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [phone, setPhone] = useState("")


  const call = () => {
    axios.post("http://localhost:4000/new", {
      name: name,
      age: age,
      phone: phone
    })
      .then((result) => {
        console.log(result)
      })
  }

  return (

    <form onSubmit={(e)=>{
      e.preventDefault()
      call()
    }}>
      <div>

        <label htmlFor="Firstname" >name  </label>
        <input type="text" placeholder="enter your first name" onChange={(e) => { setName(e.target.value) }} value={name} /><br />

        <label htmlFor="Age" >Age</label>
        <input type="age" placeholder="enter your Age" onChange={(e) => { setAge(e.target.value) }} value={age} /><br />


        <label htmlFor="Phone" >Phone</label>
        <input type="phone" placeholder="enter your phonenumber" onChange={(e) => { setPhone(e.target.value) }} value={phone} /><br />
        <button className='btn'>submit</button>
      </div>
    </form>
  )
}

export default App
