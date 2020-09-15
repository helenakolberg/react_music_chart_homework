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
            <h2>Music Chart | Top 20</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Chart Position</th>
                        <th>Song</th>
                        <th>Artist</th>
                    </tr>
                    {songChart}
                </tbody>
            </table>
        </>
    )
}

export default SongList;