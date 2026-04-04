import {useState} from 'react';
import Skein from '../components/Skein.jsx';
import {nanoid} from 'nanoid';
import { NewYarnForm } from '../components/NewYarnForm.jsx';
import yarnData from '../assets/yarnData.json';
import '../App.css';

export function Home() {
    const allSkeins = yarnData;

    const [yarns, setYarns] = useState(allSkeins);

    function addNewYarn(data) {
        //do stuff with data to add more yarn
        //taking existing yarn skeins and spreading a new deck to it
        console.log("this is the data", data);
        //creating a new id that is 6 characters long for the new yarn
        const newId = nanoid(6);
        //adds the new id to the set of data
        const newYarnSet = {...data, id: newId};
        console.log(newYarnSet);
        setYarns([...yarns, newYarnSet]);
    }

    function deleteSkein(id) {
        const updatedArray = yarns.filter((yarn) => {
        /*returns everything except for the yarn that was clicked on (and had the matching id)*/
        return yarn.id !== id;
        });
        setYarns(updatedArray);
    }

    function duplicateSkein(id) {
        const matchingSkein = yarns.find((yarn) => {
        /*returns the item/yarn with the matching id */
        return yarn.id === id
        });
        /*variable updatedSkeins is for the duplicated item/object that is the matchingSkein; creating a unique id with the nanoid */
        const updatedSkeins = {...matchingSkein, id: nanoid()};
        /*adding the updatedSkeins object to the array of yarns using state*/
        setYarns([...yarns, updatedSkeins]);
    }

    return (
        <div className='page'>
            <h1 className='dark-background'>Yarn Wish List</h1>
            <div className='collection'>
                {yarns.map((yarn, index) => {
                return(
                    /*Calling the component Skein and passing it the props of allSkeins */
                    <Skein 
                    key={yarn.id}
                    odd={index % 2 === 0}
                    /*passing functions as props */
                    deleteFn={deleteSkein}
                    duplicateFn={duplicateSkein}
                    /*Using spread operator to create all of the props from the useState */
                    {...yarn}/>
                )
                })}
            </div>

            {/*passing the addNewYarn function as a prop to the NewYarnForm component*/}
            <NewYarnForm addNewYarn={addNewYarn}/>

            <div className='dark-background'>
                <p className='note'>Please note: If a yarn/skein is expensive, <span className={"expensive"}>above $35</span>, the price will be marked <span className={"expensive"}>green and italic</span>.</p>
                <div className="reset-block">
                    <p>To reset <br />the wish list:</p>
                    <button className="reset" onClick={() => {
                        /*resets the list of yarns to the original array allSkeins*/
                        setYarns(allSkeins);
                    }}>Reset</button>
                </div>
            </div>
        </div>
    )
}

    