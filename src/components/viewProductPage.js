import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import articles from '../articles.json';
import SimilarProducts from "./SimilarProducts";
import './ViewProductPage.scss';

function ViewProductPage() {
    const params = useParams();
    const lenguage = useSelector(state => state.lenguage);
    let product = articles.Articles[params.category].find(el => el.id === parseInt(params.id));

    return ( 
        <div id="viewProduct">

            <div className="view">
            <img src={product.urlImg} alt={product.name.en + 'view'} />

            <div className="viewProduct-text">
                <h1>{product.name[lenguage]}</h1>
                <div className="cardPrice">
                    {product.priceWithoutOffer
                    ? <p>${product.price}.99 <span>${product.priceWithoutOffer}.99</span></p>
                    : '$' + product.price + '.00'}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sunt accusantium reprehenderit magnam fugiat consequatur veniam labore qui quae autem officia sapiente quas eaque enim nihil numquam fuga, dicta atque.
                Amet veritatis, aliquid dolores qui velit quae optio nam explicabo suscipit ipsam nobis laborum! Obcaecati quaerat sed odit hic aperiam temporibus, quasi vero, at illum ex suscipit, fuga incidunt quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, molestiae atque? Temporibus, eos accusantium? Possimus sed sunt assumenda, illo iure veniam obcaecati, eaque atque placeat iste, aliquid enim est quisquam.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae culpa optio illum dolores sunt molestias maiores non. Culpa, voluptates maxime tempore aut suscipit blanditiis deleniti aperiam veniam at dolorem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure architecto nobis commodi sunt, provident vel sit esse excepturi, minus aspernatur nemo quod officiis beatae, expedita quia voluptates facere numquam. Quia.</p>
            </div>
            </div>

            <SimilarProducts category={params.category} ignore={parseInt(params.id)}/>
        </div>
     );
}

export default ViewProductPage;