import { useParams, NavLink } from 'react-router-dom';
import musicData from '../assets/music.json';
import './SongDetails.css';
import genericMusic from '../assets/musicNote.webp';

export function SongDetails () {
    const params = useParams();
    // destructuring songs from musicData
    const {songs} = musicData;
    // finding the current song from the current route by using params
    // useParams returns an object from key/value pairs of dynamic params from the current url that were matched by routes
    const selectedSong = songs.find((song) => {
        return song.slug === params.slug;
    })

    return (
        <div>
            {selectedSong !== undefined ? (
            <div>
                <NavLink to="/">Home</NavLink>
                <h1>Title: {selectedSong.title}</h1>
                <h2>Artist: {selectedSong.artist}</h2>
                {/* added ternary for album cover. if the value is undefined/null the image will be of the genericMusic image */}
                <img src={(selectedSong.cover) ? (selectedSong.cover) : (genericMusic) } alt={selectedSong.title} />
                <h2>Current Rank: {selectedSong.rank}</h2>
                <h3>Other Positions:</h3>
                <p>Peak Position: {selectedSong.position.peakPosition}</p>
                <p>Position Last Week: {selectedSong.position.positionLastWeek}</p>
                <p>Weeks on Chart: {selectedSong.position.weeksOnChart}</p>
            </div>)
            : ( <p>No song matched your url.</p>)}
        </div>
    )
}