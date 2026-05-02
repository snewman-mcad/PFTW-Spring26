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
    }
});

export default Repository;