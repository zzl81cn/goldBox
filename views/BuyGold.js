/**
 * Created by yuanguozheng on 16/5/18.
 */
'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  ScrollView,
  ToastAndroid,
  View
} from 'react-native';

import NavigationBar from 'react-native-navigationbar';

export default class BuyGold extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          backTintColor='white'
          title='购买黄金'
          barOpacity={0.8}
          barStyle={styles.navbar}
          backFunc={() => {
            this.props.navigator.pop(),
            ToastAndroid.show('回滚一页', ToastAndroid.SHORT)
          }}/>
        <ScrollView>
          <Text style={styles.normalText}>new page</Text>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252528'
  },
  normalText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 13
  },
  navbar: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  }
});