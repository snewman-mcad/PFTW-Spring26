import peppers from '/PeppersOnSlate.jpg';
import './Masthead.css';

export function Masthead() {
    return (
        <div className='masthead-grid'>
            <img src={peppers} className='masthead-photo' alt='some peppers on a slate slab'></img>
            <h1>Recipes</h1>
        </div>
    )
}