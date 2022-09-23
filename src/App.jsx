import './App.css'
import Dashboard from './Components/Dashboard'
import LandingPage from './Components/LandingPage'
import { useState } from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  function Landing () {
    setIsLoggedIn(false) //clica no inicio da landing para entrar na dash
  }
  
  function Dash  () {
    setIsLoggedIn(true) //clica para sair e vai para a dash
  }
  
    return (
    <div className="Control">
      {isLoggedIn? (
        <LandingPage Landing={Landing}/>

      ): (
        
        <Dashboard Dash={Dash}/>
      )}
    </div>
    
  )
}

export default App
