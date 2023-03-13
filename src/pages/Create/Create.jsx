import React from 'react'
import CreateGroup from '../../components/CreateGroup/CreateGroup'
import CreateCard from '../../components/CreateCard/CreateCard'
import CreateButton from '../../components/CreateButton/CreateButton'

const Create = () => {

  const [formData, setFormData] = React.useState([{
    group: "",
    description: "",
    cards: []
  },])

  var categoryData
  function getData(data) {
    console.log(data);
    categoryData = data
  }

  return (
    <div>
      <CreateGroup setFormData={setFormData}/>
      <CreateCard />
      <CreateButton formData={formData}/>
    </div>
  )
}

export default Create