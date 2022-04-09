import { useState } from "react";
import './ArticlesMainSection.scss';
import imagesImported from "../imagesImports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBook } from "@fortawesome/free-solid-svg-icons";
import articlesMain from '../articles.json';
import { useSelector } from "react-redux";
import texts from '../texts.json';

function ArticlesMainSection() {
    const [mixit, setMixit] = useState('featured');
    const lenguage = useSelector(state => state.lenguage);

    const handleMixit = (e) => {
        setMixit(e.target.id);
    }

    return ( 
        <div id="ArticlesMainSection">
            <div className="controlers-mixit">
                <button 
                onClick={(e) => handleMixit(e)} 
                id={'featured'} 
                sectiontoactive={1}
                className={mixit==='featured' ? 'active' : ''}
                >
                    {texts.ArticlesMainSection.buttons.featured[lenguage]}
                </button>

                <button 
                onClick={(e) => handleMixit(e)} 
                id={'promotions'} 
                sectiontoactive={2} 
                className={mixit==='promotions' ? 'active' : ''}
                >
                    {texts.ArticlesMainSection.buttons.promotions[lenguage]}
                </button>

                <button 
                onClick={(e) => handleMixit(e)} 
                id={'mostWanted'} 
                sectiontoactive={3} 
                className={mixit==='mostWanted' ? 'active' : ''}
                >
                    {texts.ArticlesMainSection.buttons.mostWanted[lenguage]}
                </button>
            </div>

            <div className="cards-container">
                {articlesMain.ArticlesMainSection[mixit].map(el => (
                    <div className="card" key={el.id}>
                        <div className="cardImage">
                            <img src={imagesImported.ArticlesMainSection[el.id]} alt={el.info}/>
                        </div>
                        
                        <div className="cardInfo">
                            <h3>{el.info[lenguage]}</h3>

                            <div className="cardSubInfo">
                                <div className="cardPrice">
                                    {el.priceWithoutOffer
                                    ? <p>${el.price}.99 <span>${el.priceWithoutOffer}.99</span></p>
                                    : '$' + el.price + '.00'}
                                </div>
                            </div>
                        </div>

                        <div className="cardOverlay">
                            <a href="#"><FontAwesomeIcon icon={faBook}/></a>
                        </div>  
                    </div>  
                ))}
            </div>
        </div>
     );
}

export default ArticlesMainSection;