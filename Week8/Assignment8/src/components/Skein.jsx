import PropTypes from 'prop-types';
import copy from '../assets/copy.png';
import trash from '../assets/trash.png';
import "./Skein.css";

export default function Skein({name, image, alt, weight, yardage, fiber, price, id, odd, deleteFn, duplicateFn}) {
    return(  
        <div className={odd ? "odd" : "even"}>
            <div className={"grid"} key={id}>
                <img src={image} alt={alt} />
                <div className={odd ? "odd-inner" : "even-inner"}>
                    <h2>{name}</h2>
                    <p>{"Yarn weight: " + weight}</p>
                    <p>{yardage + " yards per skein"}</p>
                    <p>{"Fiber content: " + fiber}</p>
                    <p className={price > 35 ? "expensive" : ""}>{"$" + price + " per skein"}</p>
                    <div className='action'>
                        <a href="#" ><img src={copy} alt="copy icon" /></a>
                        <a href="#" ><img src={trash} alt="trash icon" /></a>
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
    yardage: PropTypes.number,
    fiber: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
    odd: PropTypes.number,
    deleteFn: PropTypes.func,
    dulicateFn: PropTypes.func
}