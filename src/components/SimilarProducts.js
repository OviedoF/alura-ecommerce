import articles from '../articles.json';
import SimilarProductsCard from './SimilarProductsCard';
import './SimilarProducts.scss';

function SimilarProducts({category, ignore}) {
    const similarProductsArray = articles.Articles[category].filter(el => el.id != ignore);

    const randomNumber = () => {
        return parseInt(Math.random() * similarProductsArray.length);
    }

    return ( 
        <div className="SimilarProducts">
            <h2>Productos similares</h2>
            
            <div className="similarProductsCardsContainer">
                <SimilarProductsCard product={similarProductsArray[randomNumber()]} isSimilar={true} ProductCategory={category}/>
                <SimilarProductsCard product={similarProductsArray[randomNumber()]} isSimilar={true} ProductCategory={category}/>
                <SimilarProductsCard product={similarProductsArray[randomNumber()]} isSimilar={true} ProductCategory={category}/>
                <SimilarProductsCard product={similarProductsArray[randomNumber()]} isSimilar={true} ProductCategory={category}/>
                <SimilarProductsCard product={similarProductsArray[randomNumber()]} isSimilar={true} ProductCategory={category}/>
            </div>
        </div>
     );
}

export default SimilarProducts;