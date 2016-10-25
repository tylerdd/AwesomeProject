import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator
} from 'react-native';
import React, { Component } from 'react';
import Welcome from './Welcome'

const defaultRoute = {
  title: 'Welcome',
  component: Welcome
}

export default class Setup extends Component {
  renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this.renderScene}
      />
    )
  }
}
