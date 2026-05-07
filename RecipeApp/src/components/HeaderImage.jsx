import peppers from '/PeppersOnSlate.jpg';
import currant from '/CurrantTart.jpg';
import oranges from '/Oranges.jpg';
import './Masthead.css';

export function HeaderImage() {
    const allPhotos = [peppers, currant, oranges];
    let randomIndex = Math.floor(Math.random() * allPhotos.length);
    let randomPhoto = allPhotos[randomIndex];
    return (
        <div className='masthead-grid'>
            <img src={randomPhoto} className='header-image' alt='some peppers on a slate slab'></img>
        </div>
    )
}