import React, { Component } from 'react'
import {
  View,
  Image,
  StatusBar,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

import sdgUm from '../assets/sdgUm.png'
import sdgSete from '../assets/sdgSete.png'
import sdgOito from '../assets/sdgOito.png'

class SwiperSDG extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View
          style={styles.background}
        />
        <Swiper style={styles.wrapper}
          loop={false}>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={sdgUm}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={sdgSete}
            />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={sdgOito} />
          </View>
        </Swiper>
      </View>
    )
  }
}

//const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    backgroundColor: 'pink'
  },
  container: {
    //flex: 1,
    width: '100%',
    height: '50%'
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    color: '#FFF'
  },

  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain'
  }
}

export default SwiperSDG;