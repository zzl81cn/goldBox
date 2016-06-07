/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-13 15:32:26
 * @version $Id$
 */
'use strict';

import React, {
	Component,
	View,
	Text,
	StatusBar,
	StyleSheet
} from 'react-native';

import MainScreen from './MainScreen';
// import MainScreen from './views/BuyGold';

export default class SplashScreen extends Component {
	constructor(props) {
		super(props);
		var {navigator} = this.props;
		setTimeout(() => {
			navigator.replace({name: 'MainScreen', component: MainScreen})
		}, 500);
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar hidden translucent />
				<Text style={styles.text}>欢迎使用恒金宝！</Text>
				<Text style={styles.text}>...</Text>
			</View>
		)
	}
}

const styles=StyleSheet.create ({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#6ee'
	},
	text: {
		// flex: 1,
		marginTop: 30,
		fontSize: 20,
		textAlign: 'center',
	}
});