import { useState } from "react";
import "./style.css";
function List({ listTransactions, deleteTransaction }) {
  
const [filterTransaction, setFilterTransaction] = useState([])
  
function filterAll () {

      setFilterTransaction([])
}  


   function filterIns () {
      const inTransictions = listTransactions.filter((element) => {
        return element.type == "Entrada";
      });

      setFilterTransaction (inTransictions)

  }

  function filterOut () {

      const outTransictions = listTransactions.filter((element) => {
        return element.type == "Saída" || element.type == 'Despesa';
      });

      setFilterTransaction(outTransictions)
  }
 

 
  return (
    <div className="List">
      <div className="List-header">
        <h2>Resumo Financeiro</h2>
        <div className="header-btn">
          <button
            type="button"
            onClick={filterAll}
          >
            Todos
          </button>
          <button
            type="button"
            onClick={filterIns}
          >
            Entradas
          </button>
          <button
            type="button"
            onClick={filterOut}
          >
            Despesas
          </button>
        </div>
      </div>

      <div className="List-main">
        {listTransactions.length <= 0 ? (
          <div className="landing-page">
            <h2>Você ainda não possui nenhum lançamento</h2>
            <ul>
              <li>
                <img src="../src/assets/NoCard.png" alt="nocard" />
              </li>
              <li>
                <img src="../src/assets/NoCard.png" alt="nocard" />
              </li>
              <li>
                <img src="../src/assets/NoCard.png" alt="nocard" />
              </li>
            </ul>
          </div>
        ) : (
          <ul>
            {filterTransaction.length > 0 ? (
                
                filterTransaction.map((item, index) => (
                    <li key={index} className={item.type}>
                      <div className="List-descricao">
                        <h2>{item.description}</h2>
                        <p>{item.type}</p>
                      </div>
                      <div className="List-valor">
                        <p>R$ {item.value}, 00</p>
                        <div className="trash">
                          <button onClick={() => deleteTransaction(index)}>
                            <img src="../src/assets/trash.png" alt="trash" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
            ): (
                
                listTransactions.map((item, index) => (
                  <li key={index} className={item.type}>
                    <div className="List-descricao">
                      <h2>{item.description}</h2>
                      <p>{item.type}</p>
                    </div>
                    <div className="List-valor">
                      <p>R$ {item.value}, 00</p>
                      <div className="trash">
                        <button onClick={() => deleteTransaction(index)}>
                          <img src="../src/assets/trash.png" alt="trash" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default List;
