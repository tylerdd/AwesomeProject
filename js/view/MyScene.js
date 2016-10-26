import React, {Component, PropTypes} from 'react'
import Player from './Player'

export default class MyScene extends Component {
  redirect = () => {
    this.props.navigator.pop()
  }

  render() {
    return (
      <Player />
    )
  }
}

MyScene.propTypes = {
  navigator: PropTypes.object
}
