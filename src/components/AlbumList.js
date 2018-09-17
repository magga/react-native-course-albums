import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
    state = {
        panjangData: 0,
        data: []
    };

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => {
            // this.state.panjangData = response.data.length;
            this.setState({ panjangData: response.data.length });
            console.log('panjangData sekarang adalah', this.state.panjangData);
        })
        .catch((error) => {
            console.log('isi errornya adalah', error.message);
        });
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 72 }}>{this.state.panjangData}</Text>
            </View>
        );
    }
}

export default AlbumList;
