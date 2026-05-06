import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Repository from '../modules/Repository.jsx';
import "../components/RecipeCard.css";
import "./RecipeDetail.css";

export function RecipeDetail() {
    const repo = Repository();

    // destructuring the variable id since it matches the key
    const {id} = useParams();

    const selectedRecipe = repo.getRecipeByID(id);

    console.log("selected recipe: ", selectedRecipe);

    return (
        <div>
            {selectedRecipe !== undefined ? (
            <div>
                <NavLink to="/">| Back to Home |</NavLink>
                <h1>{selectedRecipe.name}</h1>
                <div className="container">
                    <div className="top-block">
                        <div>
                            <h2>Ingredients</h2>
                            <ul>
                                {selectedRecipe.ingredients.map((ingredient) => {
                                return (<li key={ingredient}>{ingredient}</li>)
                                })}
                            </ul>
                        </div>
                        <img src={selectedRecipe.image} alt={selectedRecipe.name} />
                    </div>
                    <div>
                        <h2>Directions</h2>
                        <ol>
                            {selectedRecipe.directions.map((direction) => {
                            return (<li key={direction}>{direction}</li>)
                            })}
                        </ol>
                    </div>
                    <h2>Notes</h2>
                    <div>{selectedRecipe.note.map((singleNote) =>{
                        return (<p key={selectedRecipe.id}>{singleNote}</p>)
                    })}</div>
                </div>
            </div>)
            : (
                <div>
                    <NavLink to="/">| Back to Home |</NavLink>
                    <p className="yarn-error">The recipe could not be found.</p>
                </div>
            )}
        </div>
    )
}

{/*prop types validation */}
RecipeDetail.PropTypes = {
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