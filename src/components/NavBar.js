import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.scss';
import { faAngleDown, faPalette } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import {changeToEn, changeToEsp, changeToBr} from '../actions/lenguageActions';
import texts from '../texts.json';
import Logo from './Logo';

function NavBar() {
    const lenguage = useSelector(state => state.lenguage);
    const dispatch = useDispatch();

    return ( 
        <nav id="navbar">
            <Logo />

            <ul>
                <li><a href="/shop">{texts.navbar[lenguage].shop} <FontAwesomeIcon icon={faAngleDown}/> </a></li>
            </ul>

            <ul id='extras-ul'>
                <li><a href="/contact">{texts.navbar[lenguage].contact}</a></li>
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