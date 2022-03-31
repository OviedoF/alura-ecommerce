import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NumerationPromotion.scss';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function NumerationPromotion() {
    return ( 
        <div className="numerationPromotion">
            <h4>001</h4>
            <div className="numerationIcons">
                <FontAwesomeIcon icon={faAngleLeft} />
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <p>Lenovo Zenbook 14</p>
        </div>
     );
}

export default NumerationPromotion;