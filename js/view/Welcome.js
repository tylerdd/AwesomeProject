import React, {Component, PropTypes} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import Video from './Video'
import TabView from './TabView'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
    flex: 1,
    fontSize: 24
  },
  scrollView: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 20
  }
})

export default class Welcome extends Component {
  redirectVideo = () => {
    this.props.navigator.push({
      title: 'video',
      component: Video
    })
  }

  redirectTabView = () => {
    this.props.navigator.push({
      title: 'tabView',
      component: TabView
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎来到React Native
        </Text>
        <Text>
          摇一摇来感受体验神奇！
        </Text>

        <View style={styles.scrollView}>
          <ScrollView>
            <TouchableOpacity onPress={this.redirectVideo}>
              <Text style={styles.instructions}>
                播放视频
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.redirectTabView}>
              <Text style={styles.instructions}>
                Tab视图切换
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

      </View>
    )
  }
}

Welcome.propTypes = {
  navigator: PropTypes.object
}
