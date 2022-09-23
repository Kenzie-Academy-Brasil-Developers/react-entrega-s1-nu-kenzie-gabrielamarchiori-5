import './style.css'
function List ({listTransactions, setListTransactions, deleteTransaction}) {

    const allTransictions = listTransactions.filter((element) => {
        return element.type == "Entrada" || element.type == "Saída"
      })
    
      const inTransictions = listTransactions.filter((element) => {
        return element.type == "Entrada"
      })
    
      const outTransictions = listTransactions.filter((element) => {
        return element.type == "Saída"
      })

    return (
        <div className="List">
            <div className="List-header">
                <h2>Resumo Financeiro</h2>
                <div className="header-btn">
                    <button type="button" onClick={() => setListTransactions (allTransictions)}>Todos</button>
                    <button type="button" onClick={() => setListTransactions (inTransictions)}>Entradas</button>
                    <button type="button" onClick={() => setListTransactions (outTransictions)}>Despesas</button>
                </div>
            </div>

            <div className="List-main">

                {listTransactions.length <= 0 ? (
                    <div className='landing-page'>
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
                    
                ): (
                    <ul>
                    {listTransactions.map((item, index) => (
                        <li key={index} className={item.type}>
                        <div className="List-descricao">
                            <h2>{item.description}</h2>
                            <p>{item.type}</p>
                        </div>
                        <div className="List-valor">
                            <p>R$ {item.value}, 00</p>
                            <div className='trash'>
                            <button onClick={ () => deleteTransaction(index)} >
                                <img src="../src/assets/trash.png" alt="trash" />
                            </button>
                            </div>
                            
                           
                        </div>
                       
                    </li>
                    ))}
                    
                </ul>    
                )}
                
            </div>
        </div>
    )
}

export default List