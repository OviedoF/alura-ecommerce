/*Import Components and React Things*/
import PromotionInfoCard from "./PromotionInfoCard";
import NumerationPromotion from "./NumerationPromotion";
import { useState } from 'react';

/*Import IMGS*/
import ClapOdyssey from '../imgs/promotions-products/001-clapOdyssey.png';
import horiPadZelda from '../imgs/promotions-products/002-horiPad Zelda Edition.png';
import Zenbook14 from '../imgs/promotions-products/003-Zenbook14.png';
import spideyPOP from '../imgs/promotions-products/004-spideyPOP.png';
import xboxSeriesX from '../imgs/promotions-products/005-xboxSeriesX.png';

import NintendoLogo from '../imgs/brands-logos/NintendoLogo.png';
import NintendoLogo2 from '../imgs/brands-logos/NintendoLogo.png';
import AsusLogo from '../imgs/brands-logos/ASUS_LOGO.png';
import FunkoLogo from '../imgs/brands-logos/FunkoLogo.png';
import microsoftLogo from '../imgs/brands-logos/microsoftLogo.png';

/*Import Styles*/
import './mainPage.scss';

const promotionalInfo = {
    Imgs: [ClapOdyssey, horiPadZelda, Zenbook14, spideyPOP, xboxSeriesX],
    logos: [NintendoLogo,NintendoLogo2, AsusLogo, FunkoLogo, microsoftLogo],
    Info: [
        'Gorrita Cappy Mario Odyssey original nintendo',
        'HoriPad Nintendo Switch Zelda Edition',
        'Lenovo Zenbook 14',
        'Funko POP spidey',
        'Microsoft Xbox series X 1TB Standard'
    ],
    Price: [
        11500,
        8000,
        150000,
        1500,
        140000
    ],
    largeInfo: [{
        h2: 'Gorra Mario Odyssey',
        p: 'Producto original certificado por nintendo (año 2020). Viene envasado y sellado con etiqueta original holográfica.'
    }, 
    {
        h2: 'Wireless HoriPad Zelda Edition',
        p: 'HORI ofrece lo mejor con el Nintendo Switch Wireless HORIPAD. La batería de iones de litio recargable incorporada y la tecnología inalámbrica Bluetooth le brindan libertad con un alcance de 10 mts y más de 15 horas de duración de la batería. Se carga con el cable USB-C incluido. Con licencia oficial de Nintendo'
    },
    {
        h2: 'Asus ZenBook 14 UX433FA',
        p: 'Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus ZenBook UX425EA. Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovechá la experiencia extraordinaria que la marca tiene para ofrecerte y optimizá la calidad de tus imágenes y videos.'
    },
    {
        h2: 'Figura Spiderman Tipo Funko Pop!',
        p: 'Spiderman pop! Colecciona a todos tus héroes y villanos favoritos de las mejores películas y series.'
    },
    {
        h2: 'Microsoft Xbox series X',
        p: 'Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.'
    }]
};


function MainPage() {
    const [numPosition, setNumPosition] = useState(0);

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