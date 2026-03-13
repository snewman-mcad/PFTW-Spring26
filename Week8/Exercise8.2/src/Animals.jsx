export default function Animals({animalType, deleteFn, focusFn}) {
    return (
        <div>
            <h2>{animalType}</h2>
            <div>
                <button onClick={() => {
                    focusFn(animalType);
                }}>Focus</button>
                <button onClick={() => {
                    deleteFn(animalType);
                }}>Delete</button>
            </div>
        </div>
    )
}