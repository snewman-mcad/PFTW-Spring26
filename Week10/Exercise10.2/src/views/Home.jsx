import { NavLink } from 'react-router-dom';
import musicData from '../assets/music.json';
import './Home.css';

export function Home () {
        //destructured because the variable name matches with the property name that is on the data
        const {songs} = musicData;

    return (
        <>
        <h1>Top 50 Songs</h1>
            {songs.map((song) => {
                return (
                    <div className='song-spacing' key={song.rank}>
                        {/* dynamic link is a strink literal */}
                        <NavLink to={`/songs/${song.slug}`}>{song.rank}. {song.title}</NavLink>
                    </div>
                );
            })}
        </>
    )
}