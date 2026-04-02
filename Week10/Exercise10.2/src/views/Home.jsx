import { NavLink } from 'react-router-dom';
import musicData from '../assets/music.json';

export function Home () {
        console.log(musicData);
        //destructured because the variable name matches with the property name that is on the data
        const {songs} = musicData;

    return (
        <>
        <h1>Top 50 Songs</h1>
            {songs.map((song) => {
                return (
                    <div key={song.rank}>
                        <NavLink to={`/songs/${song.slug}`}>{song.title}</NavLink>
                    </div>
                );
            })}
        </>
    )
}