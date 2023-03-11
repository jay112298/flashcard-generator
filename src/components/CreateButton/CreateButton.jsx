import React from 'react'
import { ButtonContainer } from './CreateButton.st'

const CreateButton = () => {

    function createCard() {
        console.log('Creating card')
    }
    
  return (
    <ButtonContainer>
        <button onClick={createCard}>Create</button>
    </ButtonContainer>
  )
}

export default CreateButton