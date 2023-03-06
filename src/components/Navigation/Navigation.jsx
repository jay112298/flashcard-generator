import React from 'react'
import { Link } from 'react-router-dom'
// import Routes from '../../Routes'
import { Navtab } from './Navigation.st'


const Navigation = () => {
  return (
    <Navtab>
        <div className="create"><Link to="/">Create New</Link></div>
        <div className="display"><Link to="/my-flashcards">My Flashcards</Link></div>
    </Navtab>
  )
}

export default Navigation