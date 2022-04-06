/*Import Components and React Things*/
import PromotionInfoCard from "./PromotionInfoCard";
import NumerationPromotion from "./NumerationPromotion";
import { useState } from 'react';
import texts from '../texts.json';

/*Import IMGS*/
import ClapOdyssey from '../imgs/promotions-products/001-clapOdyssey.png';
import horiPadZelda from '../imgs/promotions-products/002-horiPad Zelda Edition.png';
import Zenbook14 from '../imgs/promotions-products/003-Zenbook14.png';
import spideyPOP from '../imgs/promotions-products/004-spideyPOP.png';
import xboxSeriesX from '../imgs/promotions-products/005-xboxSeriesX.png';
import NintendoLogo from '../imgs/brands-logos/NintendoLogo.png';
import NintendoLogo2 from '../imgs/brands-logos/NintendoLogo2.png';
import AsusLogo from '../imgs/brands-logos/ASUS_LOGO.png';
import FunkoLogo from '../imgs/brands-logos/FunkoLogo.png';
import microsoftLogo from '../imgs/brands-logos/microsoftLogo.png';

/*Import Styles*/
import './mainPage.scss';
import { useSelector } from "react-redux";

function MainPage() {
    const [numPosition, setNumPosition] = useState(0);
    const lenguage = useSelector(state => state.lenguage);

    const promotionalInfo = {
        Imgs: [ClapOdyssey, horiPadZelda, Zenbook14, spideyPOP, xboxSeriesX],
        logos: [NintendoLogo, NintendoLogo2, AsusLogo, FunkoLogo, microsoftLogo],
        Info: texts.promotionals[lenguage].info,
        Price: [
            11500,
            8000,
            150000,
            1500,
            140000
        ],
        Discount: [
            20,
            33,
            15,
            25,
            35
        ],
        largeInfo: texts.promotionals[lenguage].largeInfo
    };

    const handleNumPosition = (isAdding) => {
        if (isAdding){
            if(numPosition === 4){
                setNumPosition(0);
            } else {
                setNumPosition(numPosition + 1);
            }
        } else {
            if(numPosition === 0){
                setNumPosition(4)
            } else {
                setNumPosition(numPosition - 1);
            }
        }
    }

    return ( 
        <header id="headerPromotion">
            <PromotionInfoCard 
                logos={promotionalInfo.logos} 
                descriptions={promotionalInfo.largeInfo} 
                numPosition={numPosition}
            />

            <div className="slider-promotionalImgs">
                {promotionalInfo.Imgs.map(el => (
                    <img 
                        src={el} 
                        key={`${el}`}
                        style={{  right: `${numPosition}00%` }}
                        alt={`promotional-${el}`} 
                        id="Image-Promotion"
                    />
                ))}
            </div>

            <NumerationPromotion 
                promotionalInfo={promotionalInfo}
                numPosition={numPosition}
                handleNumPosition={handleNumPosition}
            />
        </header>
     );
}

export default MainPage;