import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {TabViewAnimated, TabBarTop} from 'react-native-tab-view'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class TabView extends Component {
  state = {
    index: 0,
    routes: [
      {key: '1', title: '最新'},
      {key: '2', title: '美图'},
      {key: '3', title: '视频'},
      {key: '4', title: '小说'}
    ],
  }

  handleChangeTab = (index) => {
    this.setState({index})
  }

  renderHeader = props => <TabBarTop {...props} />

  renderScene = ({route}) => {
    switch (route.key) {
      case '1':
        return <View style={[styles.page, {backgroundColor: 'red'}]} />
      case '2':
        return <View style={[styles.page, {backgroundColor: 'green'}]} />
      case '3':
        return <View style={[styles.page, {backgroundColor: 'blue'}]} />
      case '4':
        return <View style={[styles.page, {backgroundColor: 'white'}]} />
      default:
        return null
    }
  }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onRequestChangeTab={this.handleChangeTab}
      />
    )
  }
}
