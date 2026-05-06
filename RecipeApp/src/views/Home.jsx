import { useState } from 'react';
import RecipeCard from '../components/RecipeCard.jsx';
import { nanoid } from 'nanoid';
import { NewRecipeForm } from '../components/NewRecipeForm.jsx';
import recipeData from '../assets/recipeData.json';
import Repository from '../modules/Repository.jsx';
import '../App.css';

export function Home() {

    const repo = Repository();
    if(repo.getAllRecipes() === null) {
        repo.initialize(recipeData);
    }

    const [recipes, setRecipes] = useState(repo.getAllRecipes());

    function addNewRecipe(data) {
        //do stuff with data to add more recipes
        //taking existing recipes and spreading a new data to it
        console.log("this is the data", data);
        //creating a new id that is 6 characters long for the new recipe
        const newId = nanoid(6);
        //adds the new id to the set of data
        const newRecipeSet = {...data, id: newId};
        setRecipes([...recipes, newRecipeSet]);
        repo.addNewRecipe(newRecipeSet);
    }

    function deleteRecipe(id) {
        const updatedArray = recipes.filter((recipe) => {
        /*returns everything except for the recipe that was clicked on (and had the matching id)*/
        return recipe.id !== id;
        });
        repo.deleteRecipe(id);
        setRecipes(updatedArray);
    }

    function duplicateRecipe(id) {
        const matchingRecipe = recipes.find((recipe) => {
        /*returns the item/recipe with the matching id */
        return recipe.id === id
        });
        /*variable updatedArray is for the duplicated item/object that is the matchingRecipe; creating a unique id with the nanoid */
        const updatedArray = {...matchingRecipe, id: nanoid()};
        /*adding the updatedArray object to the array of recipes using state*/
        setRecipes([...recipes, updatedArray]);
        repo.addNewRecipe(updatedArray);
    }

    return (
        <div className='page'>
            {/* Replace the h1 with a masthead */}
            <h1>Recipes</h1>
            <div className='collection'>
                {recipes.map((recipe, index) => {
                return(
                    /*Calling the component RecipeCard and passing it the props of recipes */
                    <RecipeCard 
                    key={recipe.id}
                    odd={index % 2 === 0}
                    /*passing functions as props */
                    deleteFn={deleteRecipe}
                    duplicateFn={duplicateRecipe}
                    /*Using spread operator to create all of the props from the useState */
                    {...recipe}/>
                )
                })}
            </div>

            {/*passing the addNewRecipe function as a prop to the NewRecipeForm component*/}
            <NewRecipeForm addNewRecipe={addNewRecipe}/>

            <div className="reset-block">
                <p>To reset <br />the list:</p>
                <button className="reset" onClick={() => {
                    /*resets the list of yarns to the original set of recipes from recipeData*/
                    repo.initialize(recipeData);
                    setRecipes(repo.getAllRecipes());
                }}>Reset</button>
            </div>
        </div>
    )
}