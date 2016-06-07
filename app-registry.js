/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Author: zzl81cn
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  BackAndroid,
  Navigator
} from 'react-native';

// import MainScreen from './MainScreen';
import SplashScreen from './splash';

class goldBox extends Component {
  constructor (props) {
    super(props);
    this.handleBack = this._handleBack.bind(this);
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
  }

  _handleBack () {
    var navigator = this.navigator;
    if(navigator && navigator.getCurrentRoutes().length > 1){
      navigator.pop();
      return true;
    }
    return false;
  }

  render() {
    let defaultName = 'SplashScreen';
    let defaultComponent = SplashScreen;

    return (
      <Navigator
      	initialRoute={{name: defaultName, component: defaultComponent}}
      	renderScene={(route, navigator) => {
      		let Component = route.component;
      		return <Component {...route.params} navigator={navigator} />
      	}}
      	configureScene={(route) => {
          if(route.sceneConfig) {
            return route.sceneConfig;
          }
      		return Navigator.SceneConfigs.PushFromRight;
      	}}
      />
    );
  }
}

AppRegistry.registerComponent('goldBox', () => goldBox);
