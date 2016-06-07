/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';

import React, {
  Component,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  PropTypes,
  StyleSheet
} from 'react-native';

export default class MenuButton extends React.Component {

  static propTypes = {
    renderIcon: PropTypes.number.isRequired,
    showText: PropTypes.string,
    tag: PropTypes.string,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.showText, this.props.tag);
    }
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onClick}>
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center',borderRightColor: '#222',borderRightWidth: 1}}>
            <Image style={styles.iconImg} source={this.props.renderIcon} />
            <Text style={styles.showText}>{this.props.showText}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  iconImg: {
    width: 38,
    height: 38,
    marginBottom: 2
  },
  showText: {
    fontSize: 12,
    color: '#e3e3e3'
  }
});