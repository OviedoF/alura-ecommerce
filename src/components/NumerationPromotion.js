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
            <p>{promotionalInfo.Info[numPosition]}</p>
        </div>
     );
}

export default NumerationPromotion;