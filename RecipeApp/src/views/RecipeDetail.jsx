import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { HeaderImage } from '../components/HeaderImage.jsx';
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
            <HeaderImage />
            {selectedRecipe !== undefined ? (
            <div>
                <NavLink to="/" className={"back-link"}>| Back to Home |</NavLink>
                <h1>{selectedRecipe.name}</h1>
                <div className="container">
                    <div className="top-block">
                        <div>
                            <h2 className='heading2'>Ingredients</h2>
                            <ul>
                                {/* mapping the array of ingredients objects to get their values */}
                                {selectedRecipe.ingredients.map((ingredient) => {
                                return (<li key={ingredient.value}>{ingredient.value}</li>)
                                })}
                            </ul>
                        </div>
                        <img src={selectedRecipe.image} alt={selectedRecipe.alt} />
                    </div>
                    <div>
                        <h2 className='heading2'>Directions</h2>
                        <ol>
                            {/* mapping the array of directions objects to get their values */}
                            {selectedRecipe.directions.map((direction) => {
                            return (<li key={direction.value}>{direction.value}</li>)
                            })}
                        </ol>
                    </div>
                    <h2 className='heading2'>Notes</h2>
                    {/* mapping the array of note objects to get their values */}
                    <div>{selectedRecipe.note.map((singleNote) =>{
                        return (<p key={singleNote.value} className='normal-text'>{singleNote.value}</p>)
                    })}</div>
                </div>
            </div>)
            : (
                // displaying the back to home link and below paragraph if the page isn't found
                <div>
                    <NavLink to="/" className={"back-link"}>| Back to Home |</NavLink>
                    <p className="recipe-error">The recipe could not be found.</p>
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