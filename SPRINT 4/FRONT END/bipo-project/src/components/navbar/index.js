import React, {useState} from 'react';
import logo from '../../imagens/bipo.png';
import { Nav, NavLink, Bars, NavMenu, NavBtnLink} from './styled';

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {setIsOpen(!isOpen);};
    const changeTheme = () => {
        props.switchTheme();
    } 
  return (
    <>
        <Nav>
            <NavLink to='/'>
                <img src={logo} alt='logo corujinha bipo' style={{height: 50}}/>
            </NavLink>
            <Bars onClick={toggleMenu} />
            <NavMenu isOpen={isOpen}>
                <NavLink to='/sobre' activeStyle onClick={toggleMenu}>
                    Sobre IPO
                </NavLink>
                <NavLink to='/noticias' activeStyle onClick={toggleMenu}>
                    Newsletter
                </NavLink>
                <NavLink to='/cursos' activeStyle onClick={toggleMenu}>
                    Aprenda!
                </NavLink>
                <NavLink to='/acessibilidade' activeStyle onClick={toggleMenu}>
                    Acessibilidade
                </NavLink>
                <NavBtnLink to='/signin'> Cadastro | Login </NavBtnLink> 
                <NavLink to='#' activeStyle onClick={changeTheme}>
                    <div className="toggle-wrapper yellow">  
                        <input className="toggle-checkbox" type="checkbox"/>
                        <div className="toggle-container">
                            <div className="toggle-ball"></div>
                        </div>
                    </div>
                     Mudar tema
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}
export default Navbar;