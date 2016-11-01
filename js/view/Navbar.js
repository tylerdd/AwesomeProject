import React, {Component} from 'react'
import {View} from 'react-native'
import NavigationBar from 'react-native-navbar'

export default class Navbar extends Component {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
  }

  render() {
    const rightButtonConfig = {
      title: 'Next',
      handler: () => alert('hello!'),
    }
    const leftButtonConfig = {
      title: 'back',
      handler: () => alert('back!'),
    }
    const titleConfig = {
      title: 'Hello, world',
    }
    return (
      <View style={{flex: 1}}>
        <NavigationBar
          title={titleConfig}
          tintColor={'red'}
          rightButton={rightButtonConfig}
          leftButton={leftButtonConfig}
        />
      </View>
    )
  }
}
