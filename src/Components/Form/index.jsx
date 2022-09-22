import './style.css'

function Form () {

    return (
        <div className="form">
            <form>
                <div className="form-input">
                    <label htmlFor="">Descrição</label>
                    <input type="text" placeholder="Digite aqui sua descrição" />
                    <p>Ex. Compras de roupa</p>
                </div>
                <div className="form-value">
                    <div className='value-value'>
                        <label htmlFor="">Valor</label>
                        <input type="number" placeholder="R$" />
                    </div>
                    
                    <div className='value-type'>
                        <label htmlFor="">Tipo de Valor</label>
                        <select name="" id="">
                            <option value="despesa">Despesa</option>
                            <option value="entrada">Entrada</option>
                        </select>
                    </div>
                    
                    
                </div>
                <div className="form-btn">
                    <button>Inserir Valor</button>
                </div>
            </form>
        </div>
    )
}

export default Form