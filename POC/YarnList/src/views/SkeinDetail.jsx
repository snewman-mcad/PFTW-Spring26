import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import yarnData from '../assets/yarnData.json';
import "../components/Skein.css";
import "./SkeinDetail.css";

export function SkeinDetail() {
    // destructuring the variable id since it matches the key
    const {id} = useParams();

    const selectedSkein = yarnData.find((yarn) => {
        // using +symbol/operator to convert the string of id to a number, yarn.id is a number 
        return yarn.id === +id
    })
    console.log("selected yarn: ", selectedSkein);

    return (
        <div>
            {selectedSkein !== undefined ? (
            <div>
                <NavLink to="/">| Back to Home |</NavLink>
                <h1>{selectedSkein.name}</h1>
                <div className="dark-background">
                    <div className="color-block">
                        <img src={selectedSkein.image} alt={selectedSkein.name} />
                        <div>
                            <h3>These are the main colors in this yarn:</h3>
                            <div className="color-block">
                            {selectedSkein.colors.map((color) => {
                                return (<div key={color} className={clsx(["color-square", color])} alt={color}></div>)
                            })}
                            </div>
                            <h3>{"Yarn weight: " + selectedSkein.weight}</h3>
                            {/*using clsx to dynamically use weightNumber to determine the class name and have the class of yarn-size */}
                            <div className={clsx(["yarn-size", selectedSkein.weightNumber])}></div>
                            <p>{selectedSkein.yardage + " yards per skein"}</p>
                            <p>{"Fiber content: " + selectedSkein.fiber}</p>
                            <p className={selectedSkein.price > 35 ? "expensive + cost" : "cost"}>{"$" + selectedSkein.price + " per skein"}</p>
                        </div>
                    </div>
                    <h3>Description</h3>
                    <p>{selectedSkein.moreInfo}</p>
                </div>
            </div>)
            : (
                <div>
                    <NavLink to="/">| Back to Home |</NavLink>
                    <p className="yarn-error">The skein in not found.</p>
                </div>
            )}
        </div>
    )
}

{/*prop types validation */}
SkeinDetail.PropTypes = {
    yarnData: PropTypes.array,
    name: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    weight: PropTypes.string,
    weightNumber: PropTypes.string,
    yardage: PropTypes.number,
    fiber: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number
}