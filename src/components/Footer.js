import './Footer.scss';
import texts from '../texts.json';
import { useSelector } from 'react-redux';
 
function Footer() {
    const lenguage = useSelector(state => state.lenguage);

    return ( 
        <footer>
            <p>{texts.Footer.Developed[lenguage]} Oviedo, Federico</p>
            <p>2022 
                <a href="https://www.linkedin.com/in/federico-oviedo-98663221a/" target='_blank' rel='noreferrer'>LinkedIn</a> 
                <a href="https://oviedof.github.io/portafolio" target='_blank' rel='noreferrer'>Portfolio</a>
            </p>
        </footer>
     );
}

export default Footer;