import { useSelector } from 'react-redux';
import './CategorysGrid.scss';
import translations from '../texts.json';
import { Link } from 'react-router-dom';

function CategorysGrid() {
    const lenguage = useSelector(state => state.lenguage);

    return ( 
        <div className="collectionsGrid">
            <div className='collectionCell' id='consolesCell'>
                <Link to={'/products/consoles'}>
                    <div className='collectionTextBanner'>
                        {translations.categorysGrid[lenguage].consoles}
                    </div>
                </Link>
            </div>

            <div className='collectionCell'  id='accesoriesCell'>
                <Link to={'/products/accesories'}>
                    <div className='collectionTextBanner'>
                        {translations.categorysGrid[lenguage].accessories}
                    </div>
                </Link>
            </div>

            <div className='collectionCell' id='collectionCell'>
                <Link to={'/products/collection'}>
                    <div className='collectionTextBanner'>
                        {translations.categorysGrid[lenguage].collection}
                    </div>
                </Link>
            </div>

            <div className='collectionCell' id='modeCell'>
                <Link to={'/products/fashion'}>
                    <div className='collectionTextBanner'>
                        {translations.categorysGrid[lenguage].fashion}
                    </div>
                </Link>
            </div>
            <div className='collectionCell' id='promotionCell'>
                <Link to={'/products/promotions'}>
                    <div className='collectionTextBanner'>
                        {translations.categorysGrid[lenguage].promotions}
                    </div>
                </Link>
            </div>
            <div className='collectionCell' id='varietyCell'>
                <Link to={'/products/random'}>
                    <div className='collectionTextBanner'>
                        {translations.categorysGrid[lenguage].random}
                    </div>
                </Link>
            </div>
        </div>
     );
}

export default CategorysGrid;