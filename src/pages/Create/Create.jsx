import React from 'react'
import CreateGroup from '../../components/CreateGroup/CreateGroup'
import CreateCard from '../../components/CreateCard/CreateCard'
import CreateButton from '../../components/CreateButton/CreateButton'

const Create = () => {



  return (
    <div>
      <CreateGroup formData={formData}/>
      <CreateCard />
      <CreateButton />
    </div>
  )
}

export default Create