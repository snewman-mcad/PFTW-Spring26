import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import copy from '../assets/copy.png';
import trash from '../assets/trash.png';
import "./Skein.css";

export default function Skein({name, image, alt, weight, weightNumber, yardage, fiber, price, id, odd, deleteFn, duplicateFn}) {
    return(  
        <div className={odd ? "odd" : "even"}>
            <div className={"grid"} key={id}>
                <img src={image} alt={alt} />
                <div className={odd ? "odd-inner" : "even-inner"}>
                    <h2>
                        <NavLink to={`${id}`}>{name}</NavLink>
                    </h2>
                    <h3>{"Yarn weight: " + weight}</h3>
                    {/*using clsx to dynamically use weightNumber to determine the class name and have the class of yarn-size */}
                    <div className={clsx(["yarn-size", weightNumber])}></div>
                    <p>{yardage + " yards per skein"}</p>
                    <p>{"Fiber content: " + fiber}</p>
                    <p className={price > 35 ? "expensive + cost" : "cost"}>{"$" + price + " per skein"}</p>
                    <div className='action'>
                        <a href="#" onClick={(evt) => {
                            /*prevents the reloading of the page*/
                            evt.preventDefault();
                            duplicateFn(id)
                        }}><img src={copy} alt="copy icon" /></a>
                        <a href="#" onClick={(evt) => {
                            evt.preventDefault();
                            deleteFn(id)
                        }}><img src={trash} alt="trash icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

{/*prop types validation */}
Skein.PropTypes = {
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