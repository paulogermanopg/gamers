import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from '../components/common/Header'
import Carousel from '../components/home/Carousel'


export default class Home extends Component { 

  render() {
      return (
        <View style={styles.container}>
          <Header />
          <Carousel />
          <Text>Home</Text>
        </View>
      )
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
