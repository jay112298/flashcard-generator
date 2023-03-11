import React from 'react'
import { Card } from './CreateGroup.st'

const CreateGroup = () => {

  const [formData, setFormData] = React.useState({
    group: "",
    description: "",
  })

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    })
  } 

  console.log(formData)

  return (
    <Card>
      <div className="heading">Create Group*</div>
      <input type="text" name='group' list="cars" onChange={handleChange}/>
      <datalist id="cars">
        <option>Volvo</option>
        <option>Saab</option>
        <option>Mercedes</option>
        <option>Audi</option>
      </datalist>
      <div className="heading">Add Description</div>
      <input type="text" name='description' className='description' onChange={handleChange} placeholder='Please describe a bit about the category.'/>
    </Card>
  )
}

export default CreateGroup