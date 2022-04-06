import { useState } from "react";
import './ArticlesMainSection.scss';
import imagesImported from "../imagesImports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBook } from "@fortawesome/free-solid-svg-icons";
import articlesMain from '../articles.json';

function ArticlesMainSection() {
    const [mixit, setMixit] = useState('featured');

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
                className={mixit==='featured' && 'active'}
                >
                    DESTACADOS
                </button>

                <button 
                onClick={(e) => handleMixit(e)} 
                id={'promotions'} 
                sectiontoactive={2} 
                className={mixit==='promotions' && 'active'}
                >
                    PROMOCIONES
                </button>

                <button 
                onClick={(e) => handleMixit(e)} 
                id={'mostWanted'} 
                sectiontoactive={3} 
                className={mixit==='mostWanted' && 'active'}
                >
                    MÁS PEDIDOS
                </button>
            </div>

            <div className="cards-container">
                {articlesMain.ArticlesMainSection[mixit].map(el => (
                    <div className="card" key={el.id}>
                        <div className="cardImage">
                            <img src={imagesImported.ArticlesMainSection[el.id]} alt={el.info}/>
                        </div>
                        
                        <div className="cardInfo">
                            <h3>{el.info}</h3>

                            <div className="cardSubInfo">
                                <div className="cardPrice">
                                    ${el.price}.00
                                </div>
                            </div>
                        </div>

                        <div className="cardOverlay">
                            <a href="#"><FontAwesomeIcon icon={faShoppingCart}/></a>
                            <a href="#"><FontAwesomeIcon icon={faBook}/></a>
                        </div>  
                    </div>  
                ))}
            </div>
        </div>
     );
}

export default ArticlesMainSection;