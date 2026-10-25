import './header.css';
import mainLogo from '../../img/Rivo.svg'

export default function Header() {
  return (
    <header className='container main_header'>
      <div className="logo">
        <img src={mainLogo} alt="" />
      </div>
      <nav className='navigate'>
        <li>HOME</li>
        <li>SHOP</li>
        <li>FEATURES</li>
        <li>CONTACT</li>
      </nav>
      <button className="login">Login</button>
    </header>
  )
}
