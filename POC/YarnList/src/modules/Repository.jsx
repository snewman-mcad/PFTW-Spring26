const Repository = () => ({
    getAllYarns: () => {
        let stringYarnData = localStorage.getItem("skeinsArray");
        return JSON.parse(stringYarnData);
    },
    initialize: (yarnData) => {
        localStorage.setItem("skeinsArray", JSON.stringify(yarnData));
    },
    addNewYarn: (updatedSkeins) => {
        let stringYarnData = localStorage.getItem("skeinsArray");
        let allYarns = JSON.parse(stringYarnData);
        allYarns.push(updatedSkeins);
        localStorage.setItem("skeinsArray", JSON.stringify(allYarns));
    },
    deleteYarn: (yarnToDeleteID) => {
        let stringYarnData = localStorage.getItem("skeinsArray");
        let allYarns = JSON.parse(stringYarnData);
        let index = 0;
        let isFound = false;
        //iterating over the array of allYarns to find the index of the one to be deleted
        for(let i = 0; i < allYarns.length; i++) {
            if(allYarns[i].id === yarnToDeleteID) {
                index = i;
                isFound = true;
            }
        }
        //if we found the index, removing that object from the allYarns array
        if(isFound) {
            allYarns.splice(index, 1);
        }
        //updating localStorage with the updated array
        localStorage.setItem("skeinsArray", JSON.stringify(allYarns));
    }
});

export default Repository;