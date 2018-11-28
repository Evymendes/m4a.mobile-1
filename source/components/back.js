//Libs
import React from 'react';
import { TouchableOpacity, Text, Image} from 'react-native';

//Image
import Back from '../assets/back.png';

const ImageBack = props => {
	return (
		<TouchableOpacity
			onPress={() => props.navigation.goBack()}
			style={{flexDirection: 'row', alignItems: 'center'}}
		>
			<Image
				source={back}
				style={{width: 8, height: 14, marginLeft: 16}}
			/>
		</TouchableOpacity>
	);
};

export default ImageBack;