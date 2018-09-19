import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Card from './common/Card';
import CardItem from './common/CardItem';

class AlbumDetail extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <View>
                        <Image 
                            source={{ uri: this.props.data.thumbnail_image }} 
                            style={{ height: 50, width: 50 }}
                        />
                    </View>

                    <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'space-evenly' }}>
                        <Text>{this.props.data.title}</Text>
                        <Text>{this.props.data.artist}</Text>
                    </View>
                </CardItem>

                <CardItem>
                    <Image source={{ uri: this.props.data.image }} style={{ flex: 1, aspectRatio: 1 }} />
                </CardItem>
            </Card>
        );
    }
}

export default AlbumDetail;
