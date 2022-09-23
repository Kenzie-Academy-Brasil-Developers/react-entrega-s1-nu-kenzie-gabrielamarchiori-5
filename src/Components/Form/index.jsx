import './style.css'
import { useState } from 'react'

function Form ({addTransactions}) {

    const [inputDesc, setInputDes] = useState("");
    const [inputVal, setInputVal] = useState("");
    const [inputTyp, setInputTyp] = useState("");
    

       
    return (
        <div className="form">
            
            <form onSubmit={(event) => {
            event.preventDefault();
            addTransactions(inputDesc,inputTyp,inputVal);
            }}>
                
                <div className="form-input">
                    <label htmlFor="">Descrição</label>
                    <input type="text" placeholder="Digite aqui sua descrição" 
                    value={inputDesc}
                    onChange={(event) => setInputDes(event.target.value)}/>
                    <p>Ex. Compras de roupa</p>
                </div>
                
                <div className="form-value">
                    <div className='value-value'>
                        <label htmlFor="">Valor</label>
                        <input type="number" placeholder="R$"
                        onChange={(event) => setInputVal(event.target.value)
                        } />
                    </div>
                    
                    <div className='value-type'>
                        <label htmlFor="">Tipo de Valor</label>
                        <select name="tipo" id=""
                            onChange={(event) => setInputTyp(event.target.value)}
                        >
                            <option value="selecao">Selecione um item</option>
                            <option value="Saída"
                            >Despesa</option>
                            <option value="Entrada"
                            >Entrada</option>
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


          