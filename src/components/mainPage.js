import PromotionInfoCard from "./PromotionInfoCard";
import ImagePromotion from './imagePromotion';

import './mainPage.scss';
import NumerationPromotion from "./NumerationPromotion";

function MainPage() {
    return ( 
        <header id="headerPromotion">
            <PromotionInfoCard />
            <ImagePromotion />
            <NumerationPromotion />
        </header>
     );
}

export default MainPage;