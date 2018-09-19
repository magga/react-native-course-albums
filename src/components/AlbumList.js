import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => {
            this.setState({
                data: response.data
            });
        })
        .catch((error) => {
            console.log('isi errornya adalah', error.message);
        });
    }

    _renderList() {
        return this.state.data.map((album, index) => {
            return (
                <AlbumDetail key={index} data={album} />
            );
        });
    }

    render() {
        console.log('data', this.state.data);

        return (
            <View>
                {this._renderList()}
            </View>
        );
    }
}

export default AlbumList;
