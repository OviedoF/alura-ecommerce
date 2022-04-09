import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './SimilarProductsCard.scss';

function SimilarProductsCard({product, isSimilar, ProductCategory}) {
    const lenguage = useSelector(state => state.lenguage);

    return ( 
        <div className="productCard" key={product.id}>
            <img src={product.urlImg} alt={product.id} />
            <p>{product.name[lenguage]}</p>

            <div className="cardPrice">
                {product.priceWithoutOffer
                ? <p>${product.price}.99 <span>${product.priceWithoutOffer}.99</span></p>
                : '$' + product.price + '.00'}
            </div>
            
            <Link to={`/products/${ProductCategory}/${product.id}`}><p>Leer Más</p></Link>
        </div>
     );
}

export default SimilarProductsCard;