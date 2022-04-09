import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.scss';
import { faAngleDown, faPalette } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import {changeToEn, changeToEsp, changeToBr} from '../actions/lenguageActions';
import texts from '../texts.json';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function NavBar() {
    const lenguage = useSelector(state => state.lenguage);
    const dispatch = useDispatch();

    return ( 
        <nav id="navbar">
            <Logo />

            <ul>
                <li><Link to={'/shop'}>{texts.navbar[lenguage].shop} <FontAwesomeIcon icon={faAngleDown}/> </Link></li>
            </ul>

            <ul id='extras-ul'>
                <li><Link to={'/login'}>{texts.Login.login[lenguage]}</Link></li>

                <li><Link to={'/contact'}>{texts.navbar[lenguage].contact}</Link></li>
                <li>
                    <span onClick={() => dispatch( changeToEn() )}>ENG</span>/
                    <span onClick={() => dispatch( changeToEsp() )}>ESP</span>/
                    <span onClick={() => dispatch( changeToBr() )}>PORT</span>
                </li>
                <li id="palettes"><FontAwesomeIcon icon={faPalette}/></li>
            </ul>
        </nav>
     );
}

export default NavBar;