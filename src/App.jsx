import './App.css'
import Form from './Components/Form'
import List from './Components/List'
import TotalMoney from './Components/TotalMoney'


function App() {
  

  return (
    <div className="App">
      <header className='App-header'>
        <img src="../src/assets/Nu Kenzie.png" alt="" />
        <button>Início</button>
      </header>
      <main className='App-main'>
        <div className='main-form-soma'>
          <Form/>
          <TotalMoney/>
        </div>
        <div className='transacoes'>
          <List/>
        </div>
     
      </main>
      
    </div>
  )
}

export default App
