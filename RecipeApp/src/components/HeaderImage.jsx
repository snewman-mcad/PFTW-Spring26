import currant from '/CurrantTart.jpg';
import './Masthead.css';

export function HeaderImage() {

    return (
        <div className='masthead-grid'>
            <img src={currant} className='header-image' alt='some peppers on a slate slab'></img>
        </div>
    )
}