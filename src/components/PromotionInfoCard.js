import LogoAsus from '../imgs/brands-logos/ASUS_LOGO.png';
import './PromotionInfoCard.scss';

function PromotionInfoCard() {
    return ( 
        <div className="promotionInfoCard">
            <img src={LogoAsus} alt="Brand-Promotion" />
            <div className="promotionInfoCard-text">
                <h4>Asus zenbook 14</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ullam. Error provident tenetur vero perferendis consectetur. Esse, ipsam excepturi. Mollitia nihil consequatur quod nisi adipisci aliquam illo aut, optio ducimus!</p>
            </div>
        </div>
     );
}

export default PromotionInfoCard;