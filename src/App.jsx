import './App.css'
import { useState } from 'react'
import Form from './Components/Form'
import List from './Components/List'
import TotalMoney from './Components/TotalMoney'


function App() {

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: -150 }
])

function addTransactions (description, type, value) {
    
    if (type == 'Saída' || type == 'saída') {
      value = -value
      type = 'Despesa'
    }

    if(type == 'selecao' || type == '') {
      alert ('Escolha um tipo de transação')
    } else {
     
      setListTransactions([...listTransactions, {description, type, value}]) 
    }
    console.log(listTransactions)
  }

  function deleteTransaction (index) {
    const filterTransaction = listTransactions.filter((item, innerIndex) => {
      return innerIndex !== index;
    });

    setListTransactions(filterTransaction);
  }
  
  return (
    <div className="App">
      <header className='App-header'>
        <img src="../src/assets/Nu Kenzie.png" alt="" />
        <button>Início</button>
      </header>
      <main className='App-main'>
        <div className='main-form-soma'>
          <Form addTransactions={addTransactions}/>
          <TotalMoney listTransactions={listTransactions}/>
        </div>
        <div className='transacoes'>
          <List listTransactions={listTransactions} setListTransactions={setListTransactions} deleteTransaction={deleteTransaction}/>
        </div>
     
      </main>
      
    </div>
  )
}

export default App
