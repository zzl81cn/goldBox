/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    Image,
    ListView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

// var MOCKED_MOVIES_DATA = [
//     {title: '标题', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}
// ];
// 声明一个常量，这个样例数据放在React Native的Github库中
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class goldBox extends Component {
    constructor(props) {
        super(props);
        // Touchable state
        // this.state = {
        //     status: 2
        // }

        // True data
        // Movies
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            btnStatus: 1
        };


        // fiction data
        // this.state = {
        //     movies: null, // 自定义的state变量及初始值
        // }
    }

    customPressHandler = () => {
        // alert('You press button, current state is:' + this.state.status);
        alert('You press button, current state is:' + this.state.btnStatus);
    };

    // Movies
    // componentDidMount是React组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不会再被调用。React中的各种生命周期方法请参阅此文档。
    // http://facebook.github.io/react/docs/component-specs.html
    // Moives start
    componentDidMount() {
        this._fetchData();
    }


    // Movies
    _fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                    // movies: responseData.movies,
                });
            })
            .done();
    }

    // 在电影数据加载完毕之前，先渲染一个“加载中”的视图；而如果电影数据已经加载完毕了，则渲染第一个电影数据。
    render() {
        // Movies
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        )


        // if (!this.state.movies) {
        //     return this.renderLoadingView();
        // }

        // var movie = this.state.movies[0];
        // return this.renderMovie(movie);


        // var movie = MOCKED_MOVIES_DATA[0];
        // return (
        //     <View style={styles.container}>
        //         <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
        //         <View style={styles.rightContainer}>
        //             <Text>{styles.title}{movie.title}</Text>
        //             <Text>{styles.year}{movie.year}</Text>
        //         </View>
        //     </View>
        // );

        // return (
        //   <View style={styles.container}>
        //     <Text style={styles.welcome}>
        //       Welcome to React Native!
        //     </Text>
        //     <Text style={styles.instructions}>
        //       To get started, edit index.android.js
        //     </Text>
        //     <Text style={styles.instructions}>
        //       Shake or press menu button for dev menu
        //     </Text>
        //   </View>
        // );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据……
                </Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.customPressHandler}>
                        <Text style={styles.textButton}>ok</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', // 垂直居中
        height: 20,
        width: 60,
        borderRadius: 10,
        backgroundColor: '#ccc',
        overflow: 'hidden',
    },
    buttonText: {
        textAlign: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderTopWidth : 1,
        borderTopColor: '#eee'
    },
    rightContainer: {
        flex: 1,
        // 实现类似绝对定位的效果，使元素上下顶头和尾，同样还有left和right。
        top: 0,
        bottom: 0,
        // backgroundColor: '#ff0',
    },
    listView: {
        paddingTop: 10,
        backgroundColor: '#f5fcff',
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },

    // container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#F5FCFF',
    // },
    // welcome: {
    //   fontSize: 20,
    //   textAlign: 'center',
    //   margin: 10,
    // },
    // instructions: {
    //   textAlign: 'center',
    //   color: '#333333',
    //   marginBottom: 5,
    // },
});

AppRegistry.registerComponent('goldBox', () => goldBox);
