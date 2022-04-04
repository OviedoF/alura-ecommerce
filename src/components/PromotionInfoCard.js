import './PromotionInfoCard.scss';

function PromotionInfoCard({logos, descriptions, numPosition}) {
    return ( 
        <div className="promotionInfoCard">
            <div className="promotionalCard_logos">
                {logos.map(el => (
                    <img src={el}  key={el} alt={`brand_logo`} style={ {  right: `${numPosition}00%` } }/>
                ))}
            </div>

            <div className="promotionInfoCard-text">
                <h4>{descriptions[numPosition].h2}</h4>
                <p>{descriptions[numPosition].p}</p>
            </div>
        </div>
     );
}

export default PromotionInfoCard;