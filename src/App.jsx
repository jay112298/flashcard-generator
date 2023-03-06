import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import Navigation from './components/Navigation/Navigation'
import Flashcards from './pages/Flashcards/Flashcards'
import Create from './pages/Create/Create'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Title />
        <Navigation />
        <Routes>
          <Route path='/' element={<Create />}/>
          <Route path='/my-flashcards' element={<Flashcards />}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
