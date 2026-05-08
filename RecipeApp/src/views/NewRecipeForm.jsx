import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Repository from '../modules/Repository.jsx';
import { HeaderImage } from '../components/HeaderImage.jsx';
import { nanoid } from 'nanoid';
import "./NewRecipeForm.css";
import { useForm }  from "react-hook-form";
import tomato from "/Tomato.png";

export function NewRecipeForm() {
    const repo = Repository();

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

    const {register, handleSubmit, formState: {errors}, reset} = useForm({defaultValues: {
        //providing default image just in case user doesn't have one
        image: tomato
    }});

    function submitAndClear(data) {
        addNewRecipe(data);
        reset();
    }

    return (
        <div>
            <HeaderImage />
            <NavLink to="/" className={"back-link"}>| Back to Home |</NavLink>
            <form onSubmit={handleSubmit(submitAndClear)} className="form-area">
                <h1 className="h1-form">Add Another Recipe</h1>

                {/*Form area for recipe name*/}
                <div className="form-group">
                    <label htmlFor="recipeName">Name of the recipe:</label>
                    <input id="recipeName" {...register("name", {required: true})} />
                    {errors.name && (<p className="error">Recipe name is required</p>)}
                </div>

                {/*Form area for an image of the recipe*/}
                <div className="form-group">
                    <label htmlFor="image">Add an image:</label>
                    <input id="image" {...register("image")} />
                </div>

                <h2>Ingredients</h2>
                <div className="form-group">
                    <label htmlFor="ingredients">Add ingredients:</label>
                    <input id="ingredients" {...register("ingredients")} />
                </div>

                <h2>Directions</h2>
                <div className="form-group">
                    <label htmlFor="directions">Add directions:</label>
                    <input id="directions" {...register("directions")} />
                </div>

                <h2>Notes</h2>
                <div className="form-group">
                    <label htmlFor="note">Add notes:</label>
                    <input id="note" {...register("note")} />
                </div>

                <div className="form-buttons">
                <button type="submit" className='button'>Submit Recipe</button>
                {/*I wanted a button to reset fields without submitting and this does work but the errors show up*/}
                <button className="button button--reset" onClick={() => reset()}>Reset Form</button>
            </div> 
            </form>
        </div>
    )
}