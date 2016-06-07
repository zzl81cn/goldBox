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

export default class RealTimePrice extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>当前金价：</Text>
                <Text style={styles.price}>258.13元/克</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 30,   // 处理iOS状态栏
        justifyContent: "center",
        backgroundColor: '#3c3c3c',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    title: {
        color: '#cfcfcf',
        textAlign: 'center'
    },
    price: {
        color: '#fff',
        textAlign: 'center'
    }
});