import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../../assets/GaelCodeLogo.png'
import './style.css'
export function NavBar(){
  const navRef = useRef();
  function showNavbar(){
    navRef.current.classList.toggle("responsive_nav")
  }
  return(
   <header className='order-10'>
    <p><img  className='w-[150px] cursor-pointer' src={Logo} alt=""/></p>
    <nav ref={navRef}>
        <a href="#">Qui suis-je ?</a>
        <a href="#">Mes compétences</a>
        <a href="#">Mes projets</a>
        <a href="#">About me</a>
        <a href="#">Se connecter</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
    </nav>
    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
      <FaBars />
    </button>
   </header>
  );
}