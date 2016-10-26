import React, {Component, PropTypes} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import MyScene from './MyScene'

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
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default class Welcome extends Component {
  redirect = () => {
    this.props.navigator.push({
      title: 'MyScene',
      component: MyScene
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎来到React Native的世界！
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <TouchableOpacity onPress={this.redirect}>
          <Text style={styles.instructions}>
            点我跳转
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Welcome.propTypes = {
  navigator: PropTypes.object
}
