import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Repository from '../modules/Repository.jsx';
import { HeaderImage } from '../components/HeaderImage.jsx';
import { nanoid } from 'nanoid';
import "./NewRecipeForm.css";
import {useForm}  from "react-hook-form";

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
        image: '/tomato.png'
    }});

    function submitAndClear(data) {
        addNewRecipe(data);
        reset();
    }

    return (
        <div>
            <HeaderImage />
            <NavLink to="/" className={"back-link"}>| Back to Home |</NavLink>
            <form onSubmit={handleSubmit(submitAndClear)} className="dark-background dark-background--form">
                <h2 className="h2-form">Add Another Recipe</h2>

                {/*Form area for yarn name*/}
                <div className="form-group">
                    <label htmlFor="yarnName"><span className="blue-emphasis">Name</span> of the recipe:</label>
                    <input id="yarnName" {...register("name", {required: true})} />
                    {errors.name && (<p className="error">Recipe name is required</p>)}
                </div>

                <div className="form-buttons">
                <button type="submit">Submit Skein</button>
                {/*I wanted a button to reset fields without submitting and this does work but the errors show up*/}
                <button className="reset" onClick={() => reset()}>Reset Form</button>
            </div> 
            </form>
        </div>
    )
}