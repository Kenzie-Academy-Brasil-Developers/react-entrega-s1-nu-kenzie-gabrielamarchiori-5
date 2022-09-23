import './style.css'
import nukenziewhite from '../../assets/Nu Kenzie.png'

import { useState } from 'react'
import Form from '../Form'
import TotalMoney from '../TotalMoney'
import List from '../List'



function Dashboard({Dash}) {

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: -150 }
])

function addTransactions (description, type, value) {
    
    if (type == 'Saída' || type == 'Despesa') {
      value = -value
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
        <img src={nukenziewhite} alt="Logo" />
        <button onClick={Dash}>Início</button>
      </header>
      <main className='App-main'>
        <div className='main-form-soma'>
          <Form addTransactions={addTransactions}/>
          <TotalMoney listTransactions={listTransactions}/>
        </div>
        <div className='transacoes'>
          <List listTransactions={listTransactions} deleteTransaction={deleteTransaction}/>
        </div>
     
      </main>
      
    </div>
  )
}

export default Dashboard