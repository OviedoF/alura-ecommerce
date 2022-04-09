import { useParams } from "react-router-dom";
import './CategoryPage.scss';
import { Link } from "react-router-dom";
import products from '../articles.json';
import { useSelector } from "react-redux";
import SimilarProductsCard from "./SimilarProductsCard";

function CategoryPage() {
    const params = useParams();
    const lenguage = useSelector(state => state.lenguage);

    return ( 
        <main>
            <div className="productCardsContainer">

                {products.Articles[params.category].map(product => (
                    <SimilarProductsCard product={product} ProductCategory={params.category}/>
                ))}        

            </div>
        </main>
     );
}

export default CategoryPage;