import React, { Component } from 'react'
import {
  View,
  Image,
  StatusBar,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper';
import FooterSwipe from '../components/footerSwipe';

import ListOng from '../components/listOng';

class SwiperONG extends Component {

  constructor(props){
      super(props);
      this.state= {
        match: true,
      }
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Swiper style={styles.wrapper}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
           top: -500
          }}
          loop={false}>
          <View style={styles.slide}>
            <ListOng />
            <FooterSwipe match={this.state.match} />
          </View>
          <View style={styles.slide}>
            <ListOng />
            <FooterSwipe match={this.state.match} />
          </View>
          <View style={styles.slide}>
            <ListOng />
            <FooterSwipe match={this.state.match} />
          </View>
        </Swiper>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height,
  }
}

export default SwiperONG;