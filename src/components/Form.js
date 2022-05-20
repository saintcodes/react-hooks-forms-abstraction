import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admine: false,
  })

  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  function handleChange(e) {
    e.preventDefault()
    const name = e.target.name
    let value = e.target.value
    
    if (e.target.type === "checkbox") {
      value = e.target.checked
    }  

    setFormData({
      ...formData,
      [name]: value,
    })


  }
  console.log(formData)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  // function handleFirstNameChange(e) {
  //   setFormData({
  //     ...formData,
  //     firstName: e.target.value, 
  //   })
  // }

  // function handleLastNameChange(e) {
  //   setFormData({
  //     ...formData,
  //     lastName: e.target.value,
  //   })
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName"
        value={formData.firstName} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name="lastName"
        value={formData.lastName} 
        onChange={handleChange} 
      />
      <input
        type="checkbox"
        name="admin"
        checked={formData.admin}
        onChange={handleChange}
        />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;