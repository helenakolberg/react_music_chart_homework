import React from 'react';

const SongList = (props) => {

    const songChart = props.songs.map((song) => {
        let chartPosition = props.songs.indexOf(song) + 1;
        return (
            <tr key={song.id.attributes['im:id']}>
                <td>{chartPosition}</td>
                <td>{song['im:name'].label}</td>
                <td>{song['im:artist'].label}</td>
            </tr>
        )
    });

    return (
        <>
            <table>
                <tr>
                    <th>Chart Position</th>
                    <th>Song</th>
                    <th>Artist</th>
                </tr>
                {songChart}
            </table>
        </>
    )
}

export default SongList;