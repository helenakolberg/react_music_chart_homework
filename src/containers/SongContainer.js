import React, { Component } from 'react';

class SongContainer extends Component {
    constructor() {
        super();

        this.state = {
            songs: []
        };
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ songs: data.feed.entry }))
            .catch(err => console.log(err));

    }

    render() {
        return (
            <>
                <SongList songs={this.state.songs} />
            </>
        );
    }
}

export default SongContainer;