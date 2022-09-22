import './style.css'
function List () {

    return (
        <div className="List">
            <div className="List-header">
                <h2>Resumo Financeiro</h2>
                <div className="header-btn">
                    <button type="button">Todos</button>
                    <button type="button">Entradas</button>
                    <button type="button">Despesas</button>
                </div>
            </div>

            <div className="List-main">
                <ul>
                    <li>
                        <div className="List-descricao">
                            <h2>Salário - Mês Dezembro</h2>
                            <p>Entrada</p>
                        </div>
                        <div className="List-valor">
                            <p>R$ 6.000,00</p>
                            <div className='trash'>
                                <img src="../src/assets/trash.png" alt="" />
                            </div>
                           
                        </div>
                       
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default List