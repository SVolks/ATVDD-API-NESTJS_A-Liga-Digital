import {useHistory} from 'react-router-dom'
import './styles.css'
import logo from '../assets/logo.jpg'

export default function Inicio(){
    const history = useHistory()

    async function listarProdutos(event){
        event.preventDefault();
        history.push('/produtos')
    }

    return(
        <div className='inicio_container'>
            <section>
                <button className='center' onClick={listarProdutos}>
                    <img src={logo} alt='logo' title='Coloque suas compras na cestinha!' className='center'/>
                    <br/>
                </button>
            </section>
        </div>
    )
}