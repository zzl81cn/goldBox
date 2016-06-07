/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';

import React, {
    Component,
    Text,
    View,
    Platform,
    StyleSheet
} from 'react-native';

export default class YestodayEarnings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.earning}>0.00</Text>
                <Text style={styles.title}>昨日收益（元）</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 100,   // 处理iOS状态栏
        justifyContent: "center",
        backgroundColor: '#222',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    title: {
        color: '#cfcfcf',
        textAlign: 'center'
    },
    earning: {
        color: 'yellow',
        fontSize: 28,
        textAlign: 'center'
    }
});