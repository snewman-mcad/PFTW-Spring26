import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from '../assets/copy.png';
import trash from '../assets/trash.png';
import "./RecipeCard.css";

export default function RecipeCard({name, image, alt, id, deleteFn, duplicateFn}) {
    return(  
        <div className={'polaroid'}>
            <div className={"flex"} key={id}>
                <img src={image} alt={alt} />
                <h2>
                    <NavLink to={`${id}`}>{name}</NavLink>
                </h2>
            
                <div className='action'>
                    <a href="#" onClick={(evt) => {
                        /*prevents the reloading of the page*/
                        evt.preventDefault();
                        duplicateFn(id)
                    }}><img src={copy} className='small-button' alt="copy icon" /></a>
                    <a href="#" onClick={(evt) => {
                        evt.preventDefault();
                        deleteFn(id)
                    }}><img src={trash} className='small-button' alt="trash icon" /></a>
                </div>
            </div>
        </div>
    );
}

{/*prop types validation */}
RecipeCard.PropTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    weight: PropTypes.string,
    weightNumber: PropTypes.string,
    yardage: PropTypes.number,
    fiber: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
    odd: PropTypes.number,
    deleteFn: PropTypes.func,
    dulicateFn: PropTypes.func
}