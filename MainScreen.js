/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  ToastAndroid,
  Alert
} from 'react-native';

import Header from './views/Header';
import RealTimePrice from './views/RealTimePrice';
import YestodayEarnings from './views/YestodayEarnings';
import SliderPage from './views/SliderPage';
import MenuButton from './views/MenuButton';
import BuyGold from './views/BuyGold';
import TabNavigator from 'react-native-tab-navigator';
import NavigationBar from 'react-native-navigationbar';

const HOME = '金生金';
const HOME_NORMAL = require('./images/tabs/extract_default.png');
const HOME_FOCUS = require('./images/tabs/extract_focus.png');
const FREE = '提黄金';
const FREE_NORMAL = require('./images/tabs/free_adorn_default.png');
const FREE_FOCUS = require('./images/tabs/free_adorn_focus.png');
const MONEY  = '免费戴';
const MONEY_NORMAL = require('./images/tabs/money_default.png');
const MONEY_FOCUS = require('./images/tabs/money_focus.png');
const BADGE_TEXT = 3;

export default class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: HOME
    };
  }

  _renderTabItem(img, selectedImg, tag, childView) {
    return (
      <TabNavigator.Item
        selected = {this.state.selectedTab === tag}
        title = {tag}
        titleStyle = {styles.tabItemTit}
        selectedTitleStyle = {styles.tabItemTitSelected}
        renderIcon = {() => <Image style={styles.tabIcon} source={img}/>}
        renderSelectedIcon = {() => <Image style={styles.tabIcon} source={selectedImg}/>}
        // badgeText= "1"
        onPress = {() => this.setState({ selectedTab: tag })}>
        {childView}
      </TabNavigator.Item>
    );
  }

  _createChildView(tag) {
    if (!tag) {
      return (
        <View style={styles.tabView}>
          <Text style={{fontSize: 22}}>default info</Text>
        </View>
        )
    } else {
      return (
        <View style={styles.tabView}>
          <Text style={{fontSize:22}}>{tag}</Text>
        </View>
      )
    }
  }

  _buyGold() {
    let {navigator} = this.props;
    // if (navigator) {
    navigator.push({component: BuyGold})
    // }
  }

  _onMenuClick(title, tag) {
    Alert.alert("你点击了：" + title + "tag:" + tag);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header />
        <RealTimePrice />
        <YestodayEarnings />
        <View style={styles.menuView}>
          <TouchableHighlight style={styles.buttonStyle}
            underlayColor={'#666'}
            onPress={() => {
              this._buyGold(),
              ToastAndroid.show('向左滑动一页', ToastAndroid.SHORT)
            }}>
            <Text style={styles.toHistory}>活期黄金</Text>
          </TouchableHighlight>
          <MenuButton renderIcon={require('./images/icon/love.png')} showText={'活期黄金'}
            tag={'love'} onClick={this._onMenuClick} />
          <MenuButton renderIcon={require('./images/icon/order.png')} showText={'定期黄金'}
            tag={'order'} onClick={this._onMenuClick} />
          <MenuButton renderIcon={require('./images/icon/cz.png')} showText={'存金回购'}
            tag={'cz'} onClick={this._onMenuClick} />
        </View>
        <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
          {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <SliderPage />)}
          {this._renderTabItem(FREE_NORMAL, FREE_FOCUS, FREE, this._createChildView())}
          {this._renderTabItem(MONEY_NORMAL, MONEY_FOCUS, MONEY, this._createChildView(MONEY))}
        </TabNavigator>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
    // backgroundColor: '#000'
  },
  menuView: {
    flex: 1,
    flexDirection: 'row',
    // height: 243,
    backgroundColor: '#000'
  },
  tab: {
    // flex: .3,
    backgroundColor: '#000',
    alignItems: 'center',
    height: 66
  },
  tabIcon: {
    width: 25,
    height: 25,
    // This atrribute will be to shake.
    // resizeMode: 'stretch',
    marginTop: 12.5
  },
  tabItemTit: {
    fontSize: 14,
  },
  tabItemTitSelected: {
    color: "#F9C35B"
  },
  tabView: {
    flex:1,
    // color: 'white',
    backgroundColor:'#999',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toHistory: {
    fontSize: 18,
    color: 'white'
  },
  buttonStyle: {
    // backgroundColor: '#434243',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 17,
    marginBottom: 17
  }

});