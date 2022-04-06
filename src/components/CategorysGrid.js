import './CategorysGrid.scss';

function CategorysGrid() {
    return ( 
        <div className="collectionsGrid">
            <div className='collectionCell' id='consolesCell'>
                <a href='/hola'>
                    <div className='collectionTextBanner'>
                        CONSOLAS
                    </div>
                </a>
            </div>

            <div className='collectionCell'  id='accesoriesCell'>
                <a href='/hola'>
                    <div className='collectionTextBanner'>
                        ACCESORIOS
                    </div>
                </a>
            </div>

            <div className='collectionCell' id='collectionCell'>
                <a href='/hola'>
                    <div className='collectionTextBanner'>
                        COLECCION
                    </div>
                </a>
            </div>

            <div className='collectionCell' id='modeCell'>
                <a href='/hola'>
                    <div className='collectionTextBanner'>
                        MODA
                    </div>
                </a>
            </div>
            <div className='collectionCell' id='promotionCell'>
                <a href='/hola'>
                    <div className='collectionTextBanner'>
                        PROMOCIONES
                    </div>
                </a>
            </div>
            <div className='collectionCell' id='varietyCell'>
                <a href='/hola'>
                    <div className='collectionTextBanner'>
                        DIVERSOS
                    </div>
                </a>
            </div>
        </div>
     );
}

export default CategorysGrid;