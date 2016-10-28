import React, {Component} from 'react'
import {Text, View, Image, Alert, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './SwipeViewStyle'

let urlList = [
  'http://bcy.baicy1.com/crawler/aiyiqi/207CB797fD2J4XUjx8H51476346629504.jpg',
  'http://bcy.baicy1.com/crawler/aiyiqi/9JhG7y7N8c24EjkSpcY71476346626124.jpg',
  'http://bcy.baicy1.com/crawler/aiyiqi/1LI2KrR1n852pHys2BP21476346625511.jpg',
  'http://bcy.baicy1.com/crawler/aiyiqi/JlT133TvG27WNa3047RQ1476346624250.jpg'
]

export default class extends Component {
  state = {
    loading: true,
    swiperHeight: 0
  }

  onMomentumScrollEnd = (e, state, context) => Alert.alert(state.index.toString())

  componentWillMount() {
    Image.getSize(urlList[0], (width, height) => {
      let swiperHeight = (height * Dimensions.get('window').width) / width
      this.setState({
        swiperHeight,
        loading: false
      })
    })
  }

  renderLoading = () => {
    return (
      <View>
        <Text>加载中...</Text>
      </View>
    )
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading()
    }

    return (
      <View style={styles.wrapper}>
        <Swiper
          height={this.state.swiperHeight}
          // onMomentumScrollEnd={this.onMomentumScrollEnd}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.dotActive} />}
          paginationStyle={styles.pagination}
          loop
        >
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}
          >
            <Image
              ref="img"
              resizeMode="contain"
              style={styles.image}
              source={{uri: urlList[0]}}
            />
          </View>
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{uri: urlList[1]}}
            />
          </View>
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{uri: urlList[2]}}
            />
          </View>
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}
          >
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{uri: urlList[3]}}
            />
          </View>
        </Swiper>
      </View>
    )
  }
}
