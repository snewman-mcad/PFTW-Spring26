const Repository = () => ({
    getAllRecipes: () => {
        let stringRecipeData = localStorage.getItem("recipeArray");
        return JSON.parse(stringRecipeData);
    },
    initialize: (recipeData) => {
        localStorage.setItem("recipeArray", JSON.stringify(recipeData));
    },
    addNewRecipe: (updatedSkeins) => {
        let stringRecipeData = localStorage.getItem("recipeArray");
        let allYarns = JSON.parse(stringRecipeData);
        allYarns.push(updatedSkeins);
        localStorage.setItem("recipeArray", JSON.stringify(allYarns));
    },
    deleteRecipe: (recipeToDeleteID) => {
        let stringRecipeData = localStorage.getItem("recipeArray");
        let allYarns = JSON.parse(stringRecipeData);
        let index = 0;
        let isFound = false;
        //iterating over the array of allYarns to find the index of the one to be deleted
        for(let i = 0; i < allYarns.length; i++) {
            if(allYarns[i].id === recipeToDeleteID) {
                index = i;
                isFound = true;
            }
        }
        //if we found the index, removing that object from the allYarns array
        if(isFound) {
            allYarns.splice(index, 1);
        }
        //updating localStorage with the updated array
        localStorage.setItem("recipeArray", JSON.stringify(allYarns));
    },
    getRecipeByID: (id) => {
        let stringRecipeData = localStorage.getItem("recipeArray");
        let allRecipes = JSON.parse(stringRecipeData);
        let index = 0;
        let isFound = false;
        //iterating over the array of allYarns to find the index of the one to be deleted
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