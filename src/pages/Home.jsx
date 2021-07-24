import { Link } from "react-router-dom";
import './home.css';
import hero from '../assets/hero.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'

export const Home = () => {
    return (
    <div className="container">
        <div className="space"></div>
        <div className="flex">
            <img className="hero" src={hero} alt="principal"></img>
            <img className="hero adicional" src={hero2} alt="principal"></img>
            <img className="hero adicional" src={hero3} alt="principal"></img>
        </div>
        <h1>O amor está no ar!</h1>
        <Link className="button1" to="/duck">Aniversário do Thiago no Duck and Duck, 2018</Link><br />
        <Link className="button1" to="/buzios">Primeira viagem do casal, para Búzios</Link><br />
        <Link className="button1" to="/nachuva">Show do Sepultura que não teve, na chuva</Link><br />
        <Link className="button1" to="/zecabaleiro">Show do Zeca Baleiro</Link><br />
        <Link className="button1" to="/paisagens">Paisagens</Link><br />
        <Link className="button1" to="/outback">Outback</Link><br />
        <Link className="button1" to="/paris6">Paris 6</Link><br />
        <Link className="button1" to="/parapente">Parapente</Link><br />
        <Link className="button1" to="/ouropreto">Ouro Preto</Link><br />
        <Link className="button1" to="/ourobranco">Ouro Branco</Link><br />
        <Link className="button1" to="/montagens">Montagens</Link><br />
        <Link className="button1" to="/gatos">Gatos</Link><br />
        <Link className="button1" to="/guanabara">Guanabara</Link><br />
        <Link className="button1" to="/foz">Foz do Iguaçu</Link><br />
        <Link className="button1" to="/deadfish">Show do Dead Fish</Link><br />
    </div>
    )
}