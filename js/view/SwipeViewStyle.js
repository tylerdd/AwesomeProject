import {
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333'
  },
  image: {
    flex: 1
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  dotActive: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  pagination: {
    bottom: -23,
    left: null,
    right: 10
  }
})
