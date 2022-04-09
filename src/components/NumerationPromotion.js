import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NumerationPromotion.scss';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function NumerationPromotion({promotionalInfo, numPosition, handleNumPosition}) {

    return ( 
        <div className="numerationPromotion">
            <h4>00{numPosition + 1}</h4>
            <div className="numerationIcons">
                <FontAwesomeIcon icon={faAngleLeft} onClick={() => handleNumPosition(false)}/>
                <FontAwesomeIcon icon={faAngleRight} onClick={() => handleNumPosition(true)}/>
            </div>
            <p id="promotionalInfoP">{promotionalInfo.Info[numPosition]}</p>
            <p>${promotionalInfo.Price[numPosition]}.00<span>${promotionalInfo.PriceWithoutOffer[numPosition]}.00</span></p>
        </div>
     );
}

export default NumerationPromotion;