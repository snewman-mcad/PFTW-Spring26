import { useParams } from 'react-router-dom';
import yarnData from '../assets/yarnData.json';

export function SkeinDetail() {
    const {id} = useParams();
    console.log("params: ", id);
    console.log("yarn data: ", yarnData);
    const selectedSkein = yarnData.find((yarn) => {
        // using +symbol/operator to convert the string of id to a number, yarn.id is a number 
        return yarn.id === +id
    })
    console.log("selected yarn: ", selectedSkein);

    return (
        <div>
            {selectedSkein !== undefined ? (
            <div>
                <h1>Skein Details</h1>
                <h2>{selectedSkein.name}</h2>
            </div>)
            : (<p>The skein in not found.</p>)}
        </div>
    )
}