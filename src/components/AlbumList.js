import React from 'react';
import { View, Text } from 'react-native';

class AlbumList extends React.Component {
    componentWillMount() {
        // 1
        console.log('ini component will mount');
    }

    componentDidMount() {
        // 2
        console.log('ini component did mount');
    }

    render() {
        // 3
        console.log('ini render');

        return (
            <View>
                <Text>AlbumList</Text>
            </View>
        );
    }
}

// const AlbumList = () => {
//     return (
//         <View>
//             <Text>AlbumList</Text>
//         </View>
//     );
// };

export default AlbumList;
