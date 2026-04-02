import { Link } from 'react-router-dom';
import musicData from '../assets/music.json';

export function Home () {
        console.log(musicData);
        //destructured because the variable name matches with the property name that is on the data
        const {songs} = musicData;

    return (
        <>
            <h1>Top 50 Songs</h1>
            <div>
                {songs.map((song) => {
                    return (
                        <div key={song.rank}>
                            {song.title}
                        </div>
                    );
                })}
            </div>
            {/* following along with exercise 10.2 video this didn't work quite right
                {musicData.map ((song) => {
                return (
                    <div key={song.slug}>
                        <img src={song.cover} alt={song.title} />
                        <p><Link to={`${song.slug}`}>{song.title} by {song.artist}</Link></p>
                    </div>
                )
            })} */}
        </>
    )
}