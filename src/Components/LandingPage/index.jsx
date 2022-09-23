import './style.css'

function LandingPage ({Landing}) {
    return (
        <div className='container'>
        <div className='initialPage'>
            <div className='left-side'>
                <img src="../src/assets/NuKenzie - black.png" alt="" />
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                <button onClick={Landing}>Iniciar</button>
            </div>
            <div className='rigth-side'>
                <img src="../src/assets/illustration.png" alt="" />
            </div>
        </div>

        </div>
    )
}

export default LandingPage