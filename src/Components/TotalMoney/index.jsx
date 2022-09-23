import './style.css'

function TotalMoney ({listTransactions}) {

    const soma = listTransactions.reduce((valorAnterior, valorAtual) => {
        return valorAnterior + Number(valorAtual.value)
      },0)

    return (
        <div className='soma'>
            <div className='soma-text'>
                <h2>Valor total:</h2>
                <p>O valor se refere ao saldo</p>
            </div>
            <div className='soma-number'>
                <p>R$ {soma},00</p>
            </div>
        </div>
    )
}

export default TotalMoney
