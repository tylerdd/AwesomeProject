import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default class MyScene extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    title: 'MyScene'
  };

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
