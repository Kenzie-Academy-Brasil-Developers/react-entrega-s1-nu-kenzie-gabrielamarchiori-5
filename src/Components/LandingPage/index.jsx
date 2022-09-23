import './style.css'

import illustration from '../../assets/illustration.png'
import nukenzieblack from '../../assets/NuKenzie - black.png'

function LandingPage ({Landing}) {
    return (
        <div className='container'>
        <div className='initialPage'>
            <div className='left-side'>
                <img src={nukenzieblack} alt="Logo" />
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                <button onClick={Landing}>Iniciar</button>
            </div>
            <div className='rigth-side'>
                <img src={illustration} alt="ilustracao" />
            </div>
        </div>

        </div>
    )
}

export default LandingPage