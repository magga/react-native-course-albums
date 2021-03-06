// 1. Import
import React from 'react';
import { View, Text } from 'react-native';

import Header from './src/components/common/Header';
import AlbumList from './src/components/AlbumList';

// 2. Create
const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header headerText={'Album'} />
			<AlbumList />
		</View>
	);
};

// 3. Export
export default App;
