import React from 'react'
import { ButtonContainer } from './CreateButton.st'

const CreateButton = (props) => {

    function createCard() {
      let categoryData = JSON.stringify(props.formData)
      if(!localStorage.getItem('categories')){
        localStorage.setItem('categories', categoryData)
        console.log('Item did not exist in local, one Created')
      }
      else{
        let catData = localStorage.getItem('categories')
        catData = JSON.parse(catData)
        console.log('Item did exist in local, here is category')
        
        console.log(catData)
      }
    }
    
  return (
    <ButtonContainer>
        <button onClick={createCard}>Create</button>
    </ButtonContainer>
  )
}

export default CreateButton