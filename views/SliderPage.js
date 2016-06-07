/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import ViewPager from 'react-native-viewpager';

const SLIDER_IMGS = [
  require('../images/banner/banner_green.png'),
  require('../images/banner/banner_yellow.png')
];

export default class SliderPage extends Component {

  constructor(props) {
    super(props);
    // 用于构建DataSource对象
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    // 实际的DataSources存放在state中
    this.state = {
      dataSource: dataSource.cloneWithPages(SLIDER_IMGS),
    }
  }

  _renderPage(data, pageID) {
    return (
      <Image
        source={data}
        style={styles.page} />
    );
  }

  render() {
    return (
      <ViewPager
        // style={{height:100}}
        style={styles.sliderPage}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        isLoop={true}
        autoPlay={true} />
    );
  }
}

const styles = StyleSheet.create({
  sliderPage: {
    flex: 1
  },
  page: {
    flex: 1,
    // resizeMode: 'stretch'
  }
});