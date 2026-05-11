import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Repository from '../modules/Repository.jsx';
import { HeaderImage } from '../components/HeaderImage.jsx';
import { nanoid } from 'nanoid';
import "./NewRecipeForm.css";
import { useForm, useFieldArray }  from "react-hook-form";
import tomato from "/Tomato.png";

export function NewRecipeForm() {

    // Repository is used for interacting with the localStorage while the useState us used for the displaying of the items
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
        //providing defaults so that the initial fields will have at minimum empty strings
        name: '',
        ingredients: [{value: ''}],
        directions: [{value: ''}],
        note: [{value: ''}],
        //providing default image and alt just in case user doesn't have one
        image: tomato,
        alt: 'tomato'
    }});
    // need to have multiple useFieldArrays so that the append/remove functions can be used for individual sets of fields
    // example: appendIngredient will only add an additional field to the ingredient fields and none of the others
    const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({
        name: 'ingredients',
        control
    });
    const { fields: directionFields, append: appendDirection, remove: removeDirection } = useFieldArray({
        name: 'directions',
        control
    });
    const { fields: noteFields, append: appendNote, remove: removeNote } = useFieldArray({
        name: 'note',
        control
    });

    function submitAndClear(data) {
        addNewRecipe(data);
        reset();
        alert("Your recipe has been added to the home page!");
    }

    return (
        <div>
            <HeaderImage />
            <NavLink to="/" className={"back-link"}>| Back to Home |</NavLink>
            <form onSubmit={handleSubmit(submitAndClear)} className="form-area">
                <h1 className="h1-form">Add Another Recipe</h1>

                {/* Form area for recipe name */}
                <div className="form-group">
                    <label htmlFor="recipeName">Name of the recipe:</label>
                    {/* validation is requiring a name to be given that is at least 3 characters */}
                    <input id="recipeName" {...register("name", {required: true, minLength: 3})} />
                    {errors.name && (<p className="error">Recipe name is required. Also, name must be longer than three characters.</p>)}
                </div>

                {/* Form area for an image of the recipe */}
                <div className="form-group">
                    <label htmlFor="image">Add an image:</label>
                    <input id="image" {...register("image")} />
                </div>
                <div className="form-group">
                    <label htmlFor="imageAlt">Image description:</label>
                    <input id="imageAlt" {...register("alt")} />
                </div>

                {/* Form area for ingredients */}
                <h2>Ingredients</h2>
                <div className="form-group">
                    <div className='form-group--grid'>
                    {ingredientFields.map((field, index) => {
                        return (
                        <div key={field.id}>
                            <label htmlFor='ingredient'>Ingredient</label>
                            {/* selecting the field and then its value; requiring at least one ingredient */}
                            <input {...register(`ingredients.${index}.value`, {required: true})}/>
                            <button type='button' className='button button--remove' onClick={() => {
                                removeIngredient(index);
                            }}>Remove</button>
                            {errors.ingredients && (<p className="error">Please enter at least one ingredient.</p>)}
                        </div>
                        )
                    })}
                    </div>
                    <button type='button' className='button button--append' onClick={() => {
                        // adding a new field for ingredients and another object to the array
                        appendIngredient({value: ''});
                    }}>Add another ingredient</button>
                </div>

                {/* Form area for directions */}
                <h2>Directions</h2>
                <div className="form-group">
                    {directionFields.map((field, index) => {
                        return (
                        <div key={field.id}>
                            <label htmlFor='direction'>Direction</label>
                            <div className='textarea-block'>
                                <textarea {...register(`directions.${index}.value`)}/>
                                <button type='button' className='button button--remove' onClick={() => {
                                    removeDirection(index);
                                }}>Remove</button>
                            </div>
                        </div>
                        )
                    })}
                    <button type='button' className='button button--append' onClick={() => {
                        // adding a new field for directions and another object to the array
                        appendDirection({value: ''});
                    }}>Add another direction</button>
                </div>

                {/* Form area for notes */}
                <h2>Notes</h2>
                <div className="form-group">
                    {noteFields.map((field, index) => {
                        return (
                        <div key={field.id}>
                            <label htmlFor='note'>Note</label>
                            <div className='textarea-block'>
                                <textarea {...register(`note.${index}.value`)}/>
                                <button type='button' className='button button--remove' onClick={() => {
                                    removeNote(index);
                                }}>Remove</button>
                            </div>
                        </div>
                        )
                    })}
                    <button type='button' className='button button--append' onClick={() => {
                        // adding a new field for notes and another object to the array
                        appendNote({value: ''});
                    }}>Add another note</button>
                </div>

                <div className="form-buttons">
                <button type="submit" className='button'>Submit Recipe</button>
                <button className="button button--reset" onClick={() => {reset()}}>Reset Form</button>
            </div>
            </form>
        </div>
    )
}