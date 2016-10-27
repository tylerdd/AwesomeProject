import React, {Component, PropTypes} from 'react'
import Player from './Player'

export default class Video extends Component {
  redirect = () => {
    this.props.navigator.pop()
  }

  render() {
    return (
      <Player />
    )
  }
}

Video.propTypes = {
  navigator: PropTypes.object
}
