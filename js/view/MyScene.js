import React, {Component, PropTypes} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class MyScene extends Component {
  redirect = () => {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.redirect}>
          <Text>
            点我回退
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

MyScene.propTypes = {
  navigator: PropTypes.object
}
