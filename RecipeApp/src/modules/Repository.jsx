const Repository = () => ({
    getAllRecipes: () => {
        // getting the recipes that are currently in the localStorage
        let stringRecipeData = localStorage.getItem("recipeArray");
        return JSON.parse(stringRecipeData);
    },
    initialize: (recipeData) => {
        // setting the recipe data in localStorage to the original recipeData.json file
        localStorage.setItem("recipeArray", JSON.stringify(recipeData));
    },
    addNewRecipe: (updatedRecipes) => {
        // getting the recipes that are currently in the localStorage
        let stringRecipeData = localStorage.getItem("recipeArray");
        let allRecipes = JSON.parse(stringRecipeData);
        // adding the new recipe to the array in localStorage
        allRecipes.push(updatedRecipes);
        // setting the new array that has the new recipe to localStorage
        localStorage.setItem("recipeArray", JSON.stringify(allRecipes));
    },
    deleteRecipe: (recipeToDeleteID) => {
        // getting the recipes that are currently in the localStorage
        let stringRecipeData = localStorage.getItem("recipeArray");
        let allRecipes = JSON.parse(stringRecipeData);
        let index = 0;
        let isFound = false;
        //iterating over the array of allRecipes to find the index of the one to be deleted
        for(let i = 0; i < allRecipes.length; i++) {
            if(allRecipes[i].id === recipeToDeleteID) {
                index = i;
                isFound = true;
            }
        }
        //if we found the index, removing that object from the allRecipes array
        if(isFound) {
            allRecipes.splice(index, 1);
        }
        //updating localStorage with the updated array
        localStorage.setItem("recipeArray", JSON.stringify(allRecipes));
    },
    getRecipeByID: (id) => {
        // getting the recipes that are currently in the localStorage
        let stringRecipeData = localStorage.getItem("recipeArray");
        let allRecipes = JSON.parse(stringRecipeData);
        let index = 0;
        let isFound = false;
        //iterating over the array of allRecipes to find the index of the recipe to be displayed
        for(let i = 0; i < allRecipes.length; i++) {
            if(allRecipes[i].id === id) {
                index = i;
                isFound = true;
            }
        }
        if(isFound) {
            return allRecipes[index];
        } else {
            return undefined;
        }
    }
});

export default Repository;