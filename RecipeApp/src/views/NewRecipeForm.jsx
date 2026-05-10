import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Repository from '../modules/Repository.jsx';
import { HeaderImage } from '../components/HeaderImage.jsx';
import { nanoid } from 'nanoid';
import "./NewRecipeForm.css";
import { useForm, useFieldArray }  from "react-hook-form";
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

    const {register, handleSubmit, formState: {errors}, control, reset} = useForm(
        {defaultValues: {
        //providing default image just in case user doesn't have one
        ingredients: [],
        directions: [],
        image: tomato
    }});
    const { fields, append, remove } = useFieldArray({
        name: 'ingredients',
        name2: 'directions',
        control
    })

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
                    {fields.map((field, index) => {
                        return (
                        <div key={field.id}>
                            <label htmlFor='ingredient'>Ingredient</label>
                            {/* selecting the field and then its value */}
                            <input {...register(`ingredients.${index}.value`)}/>
                            <button type='button' onClick={() => {
                                remove(index);
                            }}>Remove</button>
                        </div>
                        )
                    })}
                    <button type='button' onClick={() => {
                        append({value: ''});
                    }}>Add</button>
                </div>

                <h2>Directions</h2>
                <div className="form-group">
                    {fields.map((field, index) => {
                        return (
                        <div key={field.id}>
                            <label htmlFor='direction'>Direction</label>
                            {/* selecting the field and then its value */}
                            <input {...register(`directions.${index}.value`)}/>
                            <button type='button' onClick={() => {
                                remove(index);
                            }}>Remove</button>
                        </div>
                        )
                    })}
                    <button type='button' onClick={() => {
                        append({value: ''});
                    }}>Add</button>
                </div>

                <h2>Notes</h2>
                <div className="form-group">
                    {fields.map((field, index) => {
                        return (
                        <div key={field.id}>
                            <label htmlFor='note'>Note</label>
                            {/* selecting the field and then its value */}
                            <input {...register(`note.${index}.value`)}/>
                            <button type='button' onClick={() => {
                                remove(index);
                            }}>Remove</button>
                        </div>
                        )
                    })}
                    <button type='button' onClick={() => {
                        append({value: ''});
                    }}>Add</button>
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