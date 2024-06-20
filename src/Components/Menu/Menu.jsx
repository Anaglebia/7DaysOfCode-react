import './StyleMenu.css';
import Logo from '../../assets/logo.png';

export default function Menu() {

    return (

        <header className='menu'>
            <div><img src={Logo} /></div>
            <nav>
                <li><a href="/">Como fazer</a> /</li>
                <li><a href="/">Ofertas</a> /</li>
                <li><a href="/">Depoimentos</a>/</li>
                <li><a href="/">Vídeos</a> /</li>
                <li> <a href="/">Meu Carrinho</a></li>
            </nav>
        </header>
    );
}